import {Box, Card, CardContent, Typography} from "@mui/material";
import {CARD_HEIGHT, CARD_WIDTH} from "~/constants";
import {LineChart} from "@mui/x-charts";
import {getDisplayStrForDate} from "~/utils/date_utils";

export function WeatherCard({keyStr, cardDetails}: { keyStr: string, cardDetails: CardDetails}) {
    return (
        <Box key={keyStr} sx={{ width: "100%" }}>
            <Card sx={{ width: CARD_WIDTH, height: CARD_HEIGHT, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{textAlign: 'center'}}>
                        {getDisplayStrForDate(cardDetails.dateStr)}
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: "20px"}}>
                        <Box>
                            <Typography variant="subtitle1">
                                <img src={`${cardDetails.icon}.png`} style={{marginRight: "4px"}}/>
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

                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        yAxis={[
                            {id: "tempOrRainChance", label: "°F / Rain %"},
                            {id: "windMph", label: "Wind MPH"},
                        ]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                yAxisId: "tempOrRainChance",
                                label: "Temp"
                            },
                            {
                                data: [12, 15.5, 21, 18.5, 11.5, 15],
                                yAxisId: "tempOrRainChance",
                                label: "Rain %"
                            },
                            {
                                data: [2, 3, 2, 5, 3, 2],
                                yAxisId: "windMph",
                                label: "Wind"
                            },
                        ]}
                        leftAxis={"tempOrRainChance"}
                        rightAxis={"windMph"}
                        width={CARD_WIDTH - 20}
                        height={500}
                    />
                </CardContent>
            </Card>
        </Box>
    )
}
