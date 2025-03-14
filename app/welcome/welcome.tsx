import {Box, Container, Typography} from "@mui/material";
import {ResponsiveAppBar} from "~/components/ResponsiveAppBar";
import {Carousel} from "~/components/Carousel";
import {InputsHeader} from "~/components/InputsHeader";
import {useEffect, useState} from "react";
import {TEST_WEATHER_RESPONSE, TIMES_OF_DAYS} from "~/constants";
import {getDateAdjustedToApiTimezone} from "~/utils/date_utils";

const cardsPerPage = 2 // this may be dynamically shrunken to 1 based on the viewport size
// const cardsDetailsConst: CardDetails[] = [
//     {
//         conditions: "Clear",
//         temp: 54.5,
//         winds: "10mph",
//         rain: "No rain",
//         icon: "cloudy",
//         dateStr: "2025-03-14 04:00",
//         tzoffset: -4,
//     },
//     {
//         conditions: "Rainy",
//         temp: 50.5,
//         winds: "8mph",
//         rain: "No rain",
//         icon: "cloudy",
//         dateStr: "2025-03-21 04:00",
//         tzoffset: -4,
//     },
// ]

export function Welcome() {
    const [cardsDetails, setCardsDetails] = useState<CardDetails[]>([])
    const [location, setLocation] = useState<string>("New York, NY")
    const [dayOfWeek, setDayOfWeek] = useState<string>("0")
    const [timeOfDay, setTimeOfDay] = useState<string>("0")

    function processApiResponse(json: ApiResponse) {
        // setCardsDetails(cardsDetailsConst)
        const daysArr = json?.days
        if (!daysArr?.length) {
            setCardsDetails([])
            return
        }

        const tzoffset = json.tzoffset
        const newCardsDetails: CardDetails[] = []

        const dayOfWeekWeCareAbout = Number(dayOfWeek)

        daysArr.forEach((day) => {
            const {datetime, hours} = day
            // datetime is a string like "2025-03-21"
            const date = getDateAdjustedToApiTimezone(datetime, tzoffset)

            if (date.getDay() !== dayOfWeekWeCareAbout) {
                return
            }

            const timeOfDayIdx = Number(timeOfDay)
            const timeOfDayWeCareAbout = TIMES_OF_DAYS[timeOfDayIdx]

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
            const filteredPrimeTimeHourObjects: ApiResponseHourEntry[] = hours.filter(hourObj => timeOfDayWeCareAbout.isHourObjPartOfPrimeTime(hourObj))
            // const filteredHourObjects: ApiResponseHourEntry[] = hours.filter(hourObj => timeOfDayWeCareAbout.isHourObjPartOfTimeOfDay(hourObj))
            const filteredHourObjects: HourGraphDataPoint[] = []
            for (const hourObj of hours) {
                if (timeOfDayWeCareAbout.isHourObjPartOfTimeOfDay(hourObj)) {
                    filteredHourObjects.push({
                        temp: hourObj.temp,
                        precipprob: hourObj.precipprob,
                        windspeed: hourObj.windspeed,
                    })
                }
            }
            // console.log("hours=", hours)
            // console.log("filteredPrimeTimeHourObjects=", filteredPrimeTimeHourObjects)
            // console.log("filteredHourObjects=", filteredHourObjects)
        })
        setCardsDetails(newCardsDetails)
    }

    useEffect(() => {
        processApiResponse(TEST_WEATHER_RESPONSE)
    }, [])

    return (<Container maxWidth={false} sx={{overflow: "scroll", minWidth: 500}}>
        <ResponsiveAppBar/>
        <InputsHeader
            location={location}
            setLocation={setLocation}
            dayOfWeek={dayOfWeek}
            setDayOfWeek={setDayOfWeek}
            timeOfDay={timeOfDay}
            setTimeOfDay={setTimeOfDay}
        />
        {cardsDetails?.length && <Carousel
            cardsPerPage={cardsPerPage}
            cardsDetails={cardsDetails}
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
