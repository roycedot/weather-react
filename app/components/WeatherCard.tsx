import {Box, Card, CardContent, Typography} from "@mui/material";
import {CARD_HEIGHT} from "~/constants";

export function WeatherCard({keyStr, cardDetails}: { keyStr: string, cardDetails: CardDetails}) {
    return (
        <Box key={keyStr} sx={{ width: "100%" }}>
            <Card sx={{ width: 400, height: CARD_HEIGHT, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{textAlign: 'center'}}>
                        This Friday the 15th
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box>
                            <Typography variant="subtitle1">
                                {cardDetails.conditions} {cardDetails.temp}&deg;F
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">
                                {cardDetails.conditions} {cardDetails.temp}&deg;F
                            </Typography>
                            <Typography variant="body2">
                                Winds {cardDetails.winds}
                            </Typography>
                            <Typography variant="body2">
                                {cardDetails.rain}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
