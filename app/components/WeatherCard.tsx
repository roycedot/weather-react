import {Box, Card, CardContent, Typography} from "@mui/material";

export function WeatherCard({conditions, temp}: { conditions: string | undefined, temp: number | undefined}) {
    return (
        <Box sx={{ width: "100%" }}>
            <Card sx={{ width: 400 }} variant="outlined">
                <CardContent>
                    {/*<Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>*/}
                    {/*    Word of the Day*/}
                    {/*</Typography>*/}
                    <Typography variant="h6" component="div">
                        This Friday the 15th
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box>
                            <Typography variant="subtitle1">
                                {conditions} {temp}&deg;F33333
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
