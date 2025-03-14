import {DAYS_OF_WEEK} from "~/constants";

/**
 * Get a formatted string for displaying a date label.
 * Examples:
 * "This Friday the 13th"
 * "Next Friday the 20th"
 * "Friday the 27th"
 *
 * @param date_str
 */
export function getDisplayStrForDate(date_str: string) : string {
    const date = getDateAdjustedToApiTimezone(date_str, -4)
    const dayOfWeek = DAYS_OF_WEEK[date.getDay()]

    const now = new Date()
    now.setHours(0, 0, 0, 0)

    const millisBetween = date.getTime() - now.getTime()
    const daysBetween = Math.ceil(millisBetween / (1000 * 60 * 60 * 24))

    const dayOfMonth = date.getDate()
    const dayOfMonthStr = addOrdinalSuffix(dayOfMonth)

    if (daysBetween < 7) {
        return `This ${dayOfWeek} the ${dayOfMonthStr}`
    } else if (daysBetween <= 14) {
        return `Next ${dayOfWeek} the ${dayOfMonthStr}`
    }

    return `${dayOfWeek} the ${dayOfMonthStr}`;
}

function getDateAdjustedToApiTimezone(date_str: string, offset: number) : Date {
    // trying to avoid importing a date library just so we can handle timezones
    const date = new Date(date_str)

    return new Date(date.getTime() + (offset * 60 * 60 * 1000))
}

function addOrdinalSuffix(number: number) : string {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return number + "th";
    }

    switch (lastDigit) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
        default:
            return number + "th";
    }
}
