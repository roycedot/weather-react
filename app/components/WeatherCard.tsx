import {Box, Card, CardContent, Typography} from "@mui/material";

export function WeatherCard({conditions, temp, keyStr}: { conditions: string, temp: number, keyStr: string}) {
    return (
        <Box key={keyStr} sx={{ width: "100%" }}>
            <Card sx={{ width: 400, height: 400 }} variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="div">
                        This Friday the 15th
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box>
                            <Typography variant="subtitle1">
                                {conditions} {temp}&deg;F
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">
                                {conditions} {temp}&deg;F
                            </Typography>
                            <Typography variant="body2">
                                Winds 8mph
                            </Typography>
                            <Typography variant="body2">
                                No rain
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
