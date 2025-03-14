import {Box, Container, Typography} from "@mui/material";
import {ResponsiveAppBar} from "~/components/ResponsiveAppBar";
import {Carousel} from "~/components/Carousel";
import {InputsHeader} from "~/components/InputsHeader";
import {useEffect, useState} from "react";
import {DEFAULT_CITY, NUM_DAYS_WEATHER_LOOK_AHEAD, TIMES_OF_DAYS} from "~/constants";
import {getDateAdjustedToApiTimezone} from "~/utils/date_utils";
import type TimeOfDay from "~/TimeOfDay";

const cardsPerPage = 2 // this may be dynamically shrunken to 1 based on the viewport size

export function Welcome({initialApiResponse}: {initialApiResponse: object}) {
    const [cardsDetails, setCardsDetails] = useState<CardDetails[]>([])
    const [location, setLocation] = useState<string>(DEFAULT_CITY)
    const [dayOfWeek, setDayOfWeek] = useState<string>("0")
    const [timeOfDayIdxStr, setTimeOfDayIdxStr] = useState<string>("0")
    const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(TIMES_OF_DAYS[0])
    const [initialRequestIsDone, setInitialRequestIsDone] = useState<boolean>(false)

    function setLocationHelper(s: string) {
        // when user presses Enter on location text field
        setLocation(s)
        queryApi(s)
    }

    function setTimeOfDayIdxStrHelper(s: string) {
        setTimeOfDayIdxStr(s)
        setTimeOfDayFromIdxStr(s)
    }

    function setTimeOfDayFromIdxStr(idx: string) {
        const timeOfDayIdx = Number(idx)
        setTimeOfDay(TIMES_OF_DAYS[timeOfDayIdx])
    }

    function processApiResponse(json: ApiResponse) {
        console.log("json = ", json)
        const daysArr = json?.days
        if (!daysArr?.length) {
            setCardsDetails([])
            return
        }

        const tzoffset = json.tzoffset
        const newCardsDetails: CardDetails[] = []

        const dayOfWeekWeCareAbout = Number(dayOfWeek)

        if (!timeOfDay) {
            // shouldn't happen
            alert("Error: Time Of Day is not set")
            return
        }

        daysArr.forEach((day) => {
            const {datetime, hours} = day
            // datetime is a string like "2025-03-21"
            const date = getDateAdjustedToApiTimezone(datetime, tzoffset)

            if (date.getDay() !== dayOfWeekWeCareAbout) {
                return
            }

            if (!hours) {
                newCardsDetails.push({
                    conditions: day.conditions,
                    icon: day.icon,
                    temp: Math.round(day.temp),
                    windspeed: Math.round(day.windspeed),
                    rain: day.precipprob === 0 ? "No rain" : `${Math.round(day.precipprob)}% rain`,
                    dateStr: datetime,
                    tzoffset: tzoffset,
                    hoursGraphDataPoints: []
                })
                return
            }

            /**
             We need to calculate the "characteristic" traits of the time of the day the user has selected - these
             are the traits we display;

             first, we need to filter "hours" entries only to the time of day the user has selected

             then, we need to process those filtered entries to find the average of each:
             * temp
             * precipprob
             * windspeed

             and find the most frequent of
             * conditions e.g. "Overcast"
             * icon e.g. "cloudy"
            */
            const filteredPrimeTimeHourObjects: ApiResponseHourEntry[] = hours.filter(hourObj => timeOfDay.isHourObjPartOfPrimeTime(hourObj));
            // const filteredHourObjects: ApiResponseHourEntry[] = hours.filter(hourObj => timeOfDayWeCareAbout.isHourObjPartOfTimeOfDay(hourObj))
            const filteredHourObjects: HourGraphDataPoint[] = []
            for (const hourObj of hours) {
                if (timeOfDay.isHourObjPartOfTimeOfDay(hourObj)) {
                    filteredHourObjects.push({
                        temp: hourObj.temp,
                        precipprob: hourObj.precipprob,
                        windspeed: hourObj.windspeed,
                    })
                }
            }
            const avgTemp = filteredPrimeTimeHourObjects.reduce(
                    (x, hourObj) => x + hourObj.temp, 0
                ) / filteredPrimeTimeHourObjects.length
            const avgWind = filteredPrimeTimeHourObjects.reduce(
                    (x, hourObj) => x + hourObj.windspeed, 0
                ) / filteredPrimeTimeHourObjects.length
            const avgChanceOfPrecip = filteredPrimeTimeHourObjects.reduce(
                    (x, hourObj) => x + hourObj.precipprob, 0
                ) / filteredPrimeTimeHourObjects.length

            // console.log("hours=", hours)
            // console.log("filteredPrimeTimeHourObjects=", filteredPrimeTimeHourObjects)
            // console.log("filteredHourObjects=", filteredHourObjects)
            // console.log("timeOfDay=", timeOfDay.xAxisLabels)

            const conditionsCounts: object = {}
            const iconsCounts: object = {}
            for (const hourObj of filteredPrimeTimeHourObjects) {
                // @ts-ignore
                if (conditionsCounts[hourObj.conditions]) {
                    // @ts-ignore
                    conditionsCounts[hourObj.conditions] += 1
                } else {
                    // @ts-ignore
                    conditionsCounts[hourObj.conditions] = 1
                }
                // @ts-ignore
                if (iconsCounts[hourObj.icon]) {
                    // @ts-ignore
                    iconsCounts[hourObj.icon] += 1
                } else {
                    // @ts-ignore
                    iconsCounts[hourObj.icon] = 1
                }
            }

            let maxCountCondition = 0, maxCountIcon = 0, maxCondition = "", maxIcon = ""
            for (const condition in conditionsCounts) {
                // @ts-ignore
                if (conditionsCounts[condition] > maxCountCondition) {
                    maxCondition = condition
                    // @ts-ignore
                    maxCountCondition = conditionsCounts[condition]
                }
            }
            for (const icon in iconsCounts) {
                // @ts-ignore
                if (iconsCounts[icon] > maxCountIcon) {
                    maxIcon = icon
                    // @ts-ignore
                    maxCountIcon = iconsCounts[icon]
                }
            }

            newCardsDetails.push({
                conditions: maxCondition,
                icon: maxIcon,
                temp: Math.round(avgTemp),
                windspeed: Math.round(avgWind),
                rain: avgChanceOfPrecip === 0 ? "No rain" : `${Math.round(avgChanceOfPrecip)}% rain`,
                dateStr: datetime,
                tzoffset: tzoffset,
                hoursGraphDataPoints: filteredHourObjects
            })
        });
        setCardsDetails(newCardsDetails)
    }

    function queryApi(locationOverride: string | null = null) {
        (async () => {
            const now = new Date()
            const start_date_str = now.toISOString().split('T')[0]

            const end_date = new Date(now.getTime() + (NUM_DAYS_WEATHER_LOOK_AHEAD * 24 * 60 * 60 * 1000))
            const end_date_str = end_date.toISOString().split('T')[0]

            let locationQuery
            if (locationOverride) {
                locationQuery = locationOverride
            } else {
                locationQuery = location
            }

            const res = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/" +
                "timeline/" + encodeURIComponent(locationQuery) + "/" + start_date_str + "/" + end_date_str + "?unitGroup=us&elements=datetime%2Ctemp%2Cprecipprob%2Cwindspeed%2Cconditions%2Cicon&key=SU4XR55XXRG44QREHFJPVAWT8&contentType=json");
            processApiResponse(await res.json())
        })();
        // processApiResponse(TEST_WEATHER_RESPONSE)
    }

    useEffect(() => {
        queryApi()
        setInitialRequestIsDone(true)
    }, [])

    useEffect(() => {
        if (initialRequestIsDone)
            queryApi()
    }, [dayOfWeek])

    useEffect(() => {
        if (initialRequestIsDone)
            queryApi()
    }, [timeOfDay])

    return (<Container maxWidth={false} sx={{overflow: "scroll", minWidth: 500}}>
        <ResponsiveAppBar/>
        <InputsHeader
            location={location}
            setLocation={setLocationHelper}
            dayOfWeek={dayOfWeek}
            setDayOfWeek={setDayOfWeek}
            timeOfDayIdxStr={timeOfDayIdxStr}
            setTimeOfDayIdxStr={setTimeOfDayIdxStrHelper}
        />
        {cardsDetails?.length && <Carousel
            cardsPerPage={cardsPerPage}
            cardsDetails={cardsDetails}
            timeOfDay={timeOfDay}
        />}
        {cardsDetails.length === 0 && <Box
            sx={{
                width: "100%",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center"
            }}
        ><Typography>No results. Something is wrong.</Typography></Box>}
    </Container>);
}
