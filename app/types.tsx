type HourGraphDataPoint = {
    temp: number,
    precipprob: number,
    windspeed: number,
}

// this could be a class instead
type CardDetails = {
    conditions: string,
    temp: number,
    windspeed: number,
    rain: string,
    icon: string,
    dateStr: string,
    tzoffset: number,
    hoursGraphDataPoints: HourGraphDataPoint[]
}

type ApiResponseHourEntry = {
    datetime: string,
    temp: number,
    precipprob: number,
    windspeed: number,
    conditions: string,
    icon: string,
}

type ApiResponseDayEntry = {
    datetime: string,
    hours: ApiResponseHourEntry[]
}

type ApiResponse = {
    tzoffset: number,
    days: ApiResponseDayEntry[]
}
