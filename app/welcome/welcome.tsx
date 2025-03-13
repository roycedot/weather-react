import {Container} from "@mui/material";
import {ResponsiveAppBar} from "../components/ResponsiveAppBar";

export function Welcome() {
    return (<Container className="flex">
        <ResponsiveAppBar/>
    </Container>);
}
