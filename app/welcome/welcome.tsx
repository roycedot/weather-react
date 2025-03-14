import {Box, Container, Typography} from "@mui/material";
import {ResponsiveAppBar} from "~/components/ResponsiveAppBar";
import {Carousel} from "~/components/Carousel";
import {InputsHeader} from "~/components/InputsHeader";
import {useEffect, useState} from "react";
import {TEST_WEATHER_RESPONSE, TIMES_OF_DAYS} from "~/constants";
import {getDateAdjustedToApiTimezone} from "~/utils/date_utils";
import type TimeOfDay from "~/TimeOfDay";

const cardsPerPage = 2 // this may be dynamically shrunken to 1 based on the viewport size

export function Welcome() {
    const [cardsDetails, setCardsDetails] = useState<CardDetails[]>([])
    const [location, setLocation] = useState<string>("New York, NY")
    const [dayOfWeek, setDayOfWeek] = useState<string>("0")
    const [timeOfDayIdxStr, setTimeOfDayIdxStr] = useState<string>("0")
    const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(TIMES_OF_DAYS[0])

    function setTimeOfDayIdxStrHelper(s: string) {
        setTimeOfDayIdxStr(s)
        setTimeOfDayFromIdxStr(s)
    }

    function setTimeOfDayFromIdxStr(idx: string) {
        const timeOfDayIdx = Number(idx)
        setTimeOfDay(TIMES_OF_DAYS[timeOfDayIdx])
    }

    function processApiResponse(json: ApiResponse) {
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
            const filteredPrimeTimeHourObjects: ApiResponseHourEntry[] = hours.filter(hourObj => timeOfDay.isHourObjPartOfPrimeTime(hourObj))
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

            newCardsDetails.push({
                conditions: "Clear",
                temp: Math.round(avgTemp),
                windspeed: Math.round(avgWind),
                rain: avgChanceOfPrecip === 0 ? "No rain" : `${Math.round(avgChanceOfPrecip)}% rain`,
                icon: "cloudy",
                dateStr: datetime,
                tzoffset: tzoffset,
                hoursGraphDataPoints: filteredHourObjects
            })

            // console.log("hours=", hours)
            // console.log("filteredPrimeTimeHourObjects=", filteredPrimeTimeHourObjects)
            // console.log("filteredHourObjects=", filteredHourObjects)
            // console.log("timeOfDay=", timeOfDay.xAxisLabels)
            // console.log("cardDetails.hoursGraphDataPoints.map(x => x.temp)=", filteredHourObjects.map(x => x.temp))
        });
        setCardsDetails(newCardsDetails)
    }

    useEffect(() => {
        processApiResponse(TEST_WEATHER_RESPONSE)
    }, [dayOfWeek])

    useEffect(() => {
        processApiResponse(TEST_WEATHER_RESPONSE)
    }, [timeOfDay])

    return (<Container maxWidth={false} sx={{overflow: "scroll", minWidth: 500}}>
        <ResponsiveAppBar/>
        <InputsHeader
            location={location}
            setLocation={setLocation}
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
