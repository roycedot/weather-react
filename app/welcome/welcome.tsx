import {Container} from "@mui/material";
import {ResponsiveAppBar} from "../components/ResponsiveAppBar";
import {Carousel} from "~/components/Carousel";
import {InputsHeader} from "~/components/InputsHeader";

const cardsPerPage = 2
const cardsDetails: CardDetails[] = [
    {
        conditions: "Clear",
        temp: 54.5,
        winds: "10mph",
        rain: "No rain"
    },
    {
        conditions: "Rainy",
        temp: 50.5,
        winds: "8mph",
        rain: "No rain"
    },
    {
        conditions: "Snow",
        temp: 32.5,
        winds: "8mph",
        rain: "No rain"
    },
    {
        conditions: "Windy",
        temp: 52.5,
        winds: "8mph",
        rain: "No rain"
    },
    {
        conditions: "Partly Cloudy",
        temp: 56,
        winds: "8mph",
        rain: "No rain"
    },
    // {
    //     conditions: "Partly Cloudy",
    //     temp: 60
    // },
]

export function Welcome() {
    return (<Container maxWidth={false} sx={{overflow: "scroll", minWidth: 500}}>
        <ResponsiveAppBar/>
        <InputsHeader/>
        <Carousel
            cardsPerPage={cardsPerPage}
            cardsDetails={cardsDetails}
        />
    </Container>);
}
