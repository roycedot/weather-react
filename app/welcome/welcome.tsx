import {Container} from "@mui/material";
import {ResponsiveAppBar} from "../components/ResponsiveAppBar";
import {Carousel} from "~/components/Carousel";

const cardsPerPage = 2
const cardsDetails: CardDetails[] = [
    {
        conditions: "Clear",
        temp: 54.5
    },
    {
        conditions: "Rainy",
        temp: 50.5
    },
    {
        conditions: "Snow",
        temp: 32.5
    },
    {
        conditions: "Windy",
        temp: 52.5
    },
    {
        conditions: "Partly Cloudy",
        temp: 56
    },
    // {
    //     conditions: "Partly Cloudy",
    //     temp: 60
    // },
]

export function Welcome() {
    return (<Container maxWidth={false}>
        <ResponsiveAppBar/>
        <Carousel
            cardsPerPage={cardsPerPage}
            cardsDetails={cardsDetails}
        />
    </Container>);
}
