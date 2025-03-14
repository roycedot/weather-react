import {Box, MenuItem, Select, type SelectChangeEvent, TextField} from "@mui/material";
import {LocationOn as MapRoundedIcon, Schedule as ScheduleIcon} from '@mui/icons-material'
import {TIMES_OF_DAYS} from "~/constants";

export function InputsHeader({location, setLocation, dayOfWeek, setDayOfWeek, timeOfDay, setTimeOfDay} : {location: string, setLocation: (s: string) => void, dayOfWeek: string, setDayOfWeek: (s: string) => void, timeOfDay: string, setTimeOfDay: (s: string) => void}) {
    // const [location, setLocation] = useState<string>("New York, NY")
    // const [dayOfWeek, setDayOfWeek] = useState<string>("0")
    // const [timeOfDay, setTimeOfDay] = useState<string>("0")

    const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value)
    }

    const handleDayOfWeekChange = (e: SelectChangeEvent) => {
        setDayOfWeek(e.target.value)
    }

    const handleTimeOfDayChange = (e: SelectChangeEvent) => {
        setTimeOfDay(e.target.value)
    }

    return (<Box
        sx={{
            width: "100%",
            marginTop: {sm: 5, md: 10},
            marginBottom: {sm: "10px", md: "8px"},
            height: {sm: "120px", md: "80px"},
        }}
    >
        <Box sx={{display: 'flex', flexDirection: 'row', width: "816px", margin: "auto"}}>
            <Box sx={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', lineHeight: "60px", height: "60px", alignItems: "center"}}>
                <MapRoundedIcon sx={{color: "black", marginRight: "2px"}}/>
                <TextField id="location" label={""} variant={"standard"} defaultValue={location} sx={{width: "240px"}} onChange={onLocationChange}/>
            </Box>
            <Box sx={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', lineHeight: "60px", height: "60px", alignItems: "center"}}>
                <ScheduleIcon sx={{color: "black", marginRight: "2px", height: "20px"}}/>
                <Select
                    value={dayOfWeek}
                    onChange={handleDayOfWeekChange}
                    sx={{
                        width: "180px"
                    }}
                >
                    <MenuItem value={0}>Every Sunday</MenuItem>
                    <MenuItem value={1}>Every Monday</MenuItem>
                    <MenuItem value={2}>Every Tuesday</MenuItem>
                    <MenuItem value={3}>Every Wednesday</MenuItem>
                    <MenuItem value={4}>Every Thursday</MenuItem>
                    <MenuItem value={5}>Every Friday</MenuItem>
                    <MenuItem value={6}>Every Saturday</MenuItem>
                </Select>
                <Select
                    value={timeOfDay}
                    onChange={handleTimeOfDayChange}
                    sx={{
                        width: "150px"
                    }}
                >
                    {
                        TIMES_OF_DAYS.map((x, idx) => <MenuItem value={idx}>{x.name}</MenuItem>)
                    }
                </Select>
            </Box>
        </Box>

    </Box>)
}
