class TimeOfDay {
    name: string
    start_hour_primetime: number
    end_hour_primetime: number
    start_hour: number // start of x-axis on graph - 2 hours ahead of start_hour_primetime
    end_hour: number // start of x-axis on graph - 2 hours after end_hour_primetime
    // MUI X Charts doesn't support text x axis items :( or I need to dig deeper
    // x_axis_labels: string[]
    x_axis_labels: number[]

    constructor(name: string, start_hour_primetime: number, end_hour_primetime: number) {
        this.name = name

        // the following, where we add 2 hours on each side of the time of day's hours, only works safely because
        // we know the smallest start_hour is 8 and the biggest is 21;
        // we add 2 hours to each side of the x-axis to match the design
        this.start_hour_primetime = start_hour_primetime
        this.end_hour_primetime = end_hour_primetime
        this.start_hour = start_hour_primetime - 2
        this.end_hour = end_hour_primetime + 2

        this.x_axis_labels = []

        for (let i = this.start_hour; i <= this.end_hour; ++i) {
            // MUI X Charts doesn't support text x axis items :( or I need to dig deeper
            // this.x_axis_labels.push(`${i}:00`)
            this.x_axis_labels.push(i)
        }
    }

    // MUI X Charts doesn't support text x axis items :( or I need to dig deeper
    // get xAxisLabels(): string[] {
    //     return this.x_axis_labels
    // }
    get xAxisLabels(): number[] {
        return this.x_axis_labels
    }

    isHourObjPartOfPrimeTime(hourObj: ApiResponseHourEntry): boolean {
        const hourFirstPart = this.#getHourNumber(hourObj)
        if (hourFirstPart === undefined) {
            return false
        }
        return (hourFirstPart >= this.start_hour_primetime && hourFirstPart < this.end_hour_primetime)
    }

    isHourObjPartOfTimeOfDay(hourObj: ApiResponseHourEntry): boolean {
        const hourFirstPart = this.#getHourNumber(hourObj)
        if (hourFirstPart === undefined) {
            return false
        }
        return (hourFirstPart >= this.start_hour && hourFirstPart <= this.end_hour)
    }

    #getHourNumber(hourObj: ApiResponseHourEntry): number | undefined {
        const hourString = hourObj.datetime // something like "05:00"
        const hourParts = hourString.split(":")
        if (hourParts.length < 2) {
            // probably should log an error to Sentry or somewhere
            return undefined
        }
        return Number(hourParts[0])
    }
}

export default TimeOfDay
