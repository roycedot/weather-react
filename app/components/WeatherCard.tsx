import {Box, Card, CardContent, Typography} from "@mui/material";
import {CARD_HEIGHT, CARD_WIDTH} from "~/constants";
import {Air as AirIcon, WaterDropOutlined as WaterDropIcon} from "@mui/icons-material"
import {ChartsReferenceLine, LineChart} from "@mui/x-charts";
import {getDisplayStrForDate} from "~/utils/date_utils";
import type TimeOfDay from "~/TimeOfDay";

export function WeatherCard({keyStr, cardDetails, timeOfDay}: { keyStr: string, cardDetails: CardDetails, timeOfDay: TimeOfDay}) {
    return (
        <Box key={keyStr} sx={{ width: "100%" }}>
            <Card sx={{ width: CARD_WIDTH, height: CARD_HEIGHT, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{textAlign: 'center'}}>
                        {getDisplayStrForDate(cardDetails.dateStr)}
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: "20px"}}>
                        <Box sx={{paddingRight: "4px"}}>
                            <Typography variant="subtitle1">
                                <img src={`${cardDetails.icon}.png`}/>
                            </Typography>
                        </Box>
                        <Box sx={{paddingLeft: "4px"}}>
                            <Typography variant="subtitle1">
                                {cardDetails.conditions} {cardDetails.temp}&deg;F
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'row', height: "20px", lineHeight: "20px"}}>
                                <AirIcon sx={{height: "18px"}}/>
                                <Typography variant="body2">
                                    Winds {`${Math.round(cardDetails.windspeed)} mph`}
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'row', height: "20px", lineHeight: "20px"}}>
                                <WaterDropIcon sx={{height: "18px"}}/>
                                <Typography variant="body2">
                                    {cardDetails.rain}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>


                    <LineChart
                        xAxis={[{ data: timeOfDay.xAxisLabels, label: "Hour (24h format)" }]}
                        yAxis={[
                            {id: "tempOrRainChance", label: "°F / Rain %"},
                            {id: "windMph", label: "Wind MPH"},
                        ]}
                        series={[
                            {
                                data: cardDetails.hoursGraphDataPoints.map(x => x.temp),
                                yAxisId: "tempOrRainChance",
                                label: "Temp"
                            },
                            {
                                data: cardDetails.hoursGraphDataPoints.map(x => x.precipprob),
                                yAxisId: "tempOrRainChance",
                                label: "Rain %"
                            },
                            {
                                data: cardDetails.hoursGraphDataPoints.map(x => x.windspeed),
                                yAxisId: "windMph",
                                label: "Wind"
                            },
                        ]}
                        leftAxis={"tempOrRainChance"}
                        rightAxis={"windMph"}
                        width={CARD_WIDTH - 20}
                        height={500}
                    >
                        <ChartsReferenceLine
                            x={timeOfDay.start_hour_primetime}
                            lineStyle={{ strokeDasharray: '10 5' }}
                        />
                        <ChartsReferenceLine
                            x={timeOfDay.end_hour_primetime}
                            lineStyle={{ strokeDasharray: '10 5' }}
                        />
                    </LineChart>
                </CardContent>
            </Card>
        </Box>
    )
}
