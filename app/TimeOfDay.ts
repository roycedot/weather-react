class TimeOfDay {
    name: string
    start_hour: number
    end_hour: number

    constructor(name: string, start_hour: number, end_hour: number) {
        this.name = name
        this.start_hour = start_hour
        this.end_hour = end_hour
    }
}

export default TimeOfDay
