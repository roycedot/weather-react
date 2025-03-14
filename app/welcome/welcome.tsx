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
        rain: "No rain",
        icon: "cloudy",
        dateStr: "2025-03-14 04:00",
        tzoffset: -4,
    },
    {
        conditions: "Rainy",
        temp: 50.5,
        winds: "8mph",
        rain: "No rain",
        icon: "cloudy",
        dateStr: "2025-03-21 04:00",
        tzoffset: -4,
    },
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
