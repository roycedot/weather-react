import TimeOfDay from "~/TimeOfDay";

export const CARD_WIDTH = 425
export const CARD_HEIGHT = 700

export const DEFAULT_CITY = "New York, NY"
// API only returns hourly forecasts up to 14 days in advance, it looks like, but we can
// get a forecast for the day 21 days in advance - this is mostly so we can populate the
// slider for the Next/Prev buttons to be available
export const NUM_DAYS_WEATHER_LOOK_AHEAD = 21

export const DAYS_OF_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

export const TIMES_OF_DAYS = [
    new TimeOfDay("Morning", 8, 12),
    new TimeOfDay("Afternoon", 12, 17),
    new TimeOfDay("Evening", 17, 21),
]

export const TEST_WEATHER_RESPONSE = {
    "queryCost": 1,
    "latitude": 40.7883,
    "longitude": -74.0153,
    "resolvedAddress": "West New York, NJ, United States",
    "address": "West New York, nj",
    "timezone": "America/New_York",
    "tzoffset": -4,
    "days": [
        {
            "datetime": "2025-03-14",
            "datetimeEpoch": 1741924800,
            "temp": 47.2,
            "precipprob": 0,
            "windspeed": 8.1,
            "windspeedmean": 6.6,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1741924800,
                    "temp": 40.6,
                    "precipprob": 0,
                    "windspeed": 5.4,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1741928400,
                    "temp": 40.9,
                    "precipprob": 0,
                    "windspeed": 8.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1741932000,
                    "temp": 40.9,
                    "precipprob": 0,
                    "windspeed": 8.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1741935600,
                    "temp": 40.9,
                    "precipprob": 0,
                    "windspeed": 8.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1741939200,
                    "temp": 40.9,
                    "precipprob": 0,
                    "windspeed": 8.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1741942800,
                    "temp": 38.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1741946400,
                    "temp": 38.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1741950000,
                    "temp": 38.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1741953600,
                    "temp": 38.9,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1741957200,
                    "temp": 43.1,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1741960800,
                    "temp": 45,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1741964400,
                    "temp": 47.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1741968000,
                    "temp": 49.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1741971600,
                    "temp": 54.1,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1741975200,
                    "temp": 56,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1741978800,
                    "temp": 56.9,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1741982400,
                    "temp": 56.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1741986000,
                    "temp": 56,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1741989600,
                    "temp": 54.9,
                    "precipprob": 0,
                    "windspeed": 6.9,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1741993200,
                    "temp": 53,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1741996800,
                    "temp": 52.1,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742000400,
                    "temp": 51,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742004000,
                    "temp": 49,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742007600,
                    "temp": 47.9,
                    "precipprob": 0,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                }
            ]
        },
        {
            "datetime": "2025-03-15",
            "datetimeEpoch": 1742011200,
            "temp": 48.3,
            "precipprob": 29,
            "windspeed": 9.2,
            "windspeedmean": 6.9,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742011200,
                    "temp": 45.9,
                    "precipprob": 0,
                    "windspeed": 4.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742014800,
                    "temp": 45,
                    "precipprob": 0,
                    "windspeed": 4.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742018400,
                    "temp": 44,
                    "precipprob": 0,
                    "windspeed": 3.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742022000,
                    "temp": 43.1,
                    "precipprob": 0,
                    "windspeed": 3.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742025600,
                    "temp": 43.1,
                    "precipprob": 0,
                    "windspeed": 3.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742029200,
                    "temp": 43.1,
                    "precipprob": 0,
                    "windspeed": 3.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742032800,
                    "temp": 42,
                    "precipprob": 9,
                    "windspeed": 4.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742036400,
                    "temp": 42,
                    "precipprob": 9,
                    "windspeed": 4.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742040000,
                    "temp": 45,
                    "precipprob": 15,
                    "windspeed": 5.8,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742043600,
                    "temp": 45.9,
                    "precipprob": 15,
                    "windspeed": 5.8,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742047200,
                    "temp": 47,
                    "precipprob": 15,
                    "windspeed": 6.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742050800,
                    "temp": 47.9,
                    "precipprob": 15,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742054400,
                    "temp": 49.4,
                    "precipprob": 29,
                    "windspeed": 7.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742058000,
                    "temp": 50.6,
                    "precipprob": 29,
                    "windspeed": 8.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742061600,
                    "temp": 52.1,
                    "precipprob": 29,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742065200,
                    "temp": 52.4,
                    "precipprob": 29,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742068800,
                    "temp": 52.6,
                    "precipprob": 29,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742072400,
                    "temp": 53,
                    "precipprob": 29,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742076000,
                    "temp": 52.6,
                    "precipprob": 28,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742079600,
                    "temp": 52.4,
                    "precipprob": 28,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742083200,
                    "temp": 52.1,
                    "precipprob": 28,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742086800,
                    "temp": 52.4,
                    "precipprob": 28,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742090400,
                    "temp": 52.6,
                    "precipprob": 28,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742094000,
                    "temp": 53,
                    "precipprob": 28,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                }
            ]
        },
        {
            "datetime": "2025-03-16",
            "datetimeEpoch": 1742097600,
            "temp": 58,
            "precipprob": 94,
            "windspeed": 25.3,
            "windspeedmean": 18,
            "conditions": "Rain, Partially cloudy",
            "icon": "rain",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742097600,
                    "temp": 53.3,
                    "precipprob": 24,
                    "windspeed": 9.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742101200,
                    "temp": 53.7,
                    "precipprob": 24,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742104800,
                    "temp": 54.1,
                    "precipprob": 24,
                    "windspeed": 10.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742108400,
                    "temp": 54.4,
                    "precipprob": 24,
                    "windspeed": 11.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742112000,
                    "temp": 54.6,
                    "precipprob": 24,
                    "windspeed": 12.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742115600,
                    "temp": 54.9,
                    "precipprob": 24,
                    "windspeed": 13.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742119200,
                    "temp": 55.3,
                    "precipprob": 19,
                    "windspeed": 15,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742122800,
                    "temp": 55.7,
                    "precipprob": 19,
                    "windspeed": 16.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742126400,
                    "temp": 56,
                    "precipprob": 19,
                    "windspeed": 17.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742130000,
                    "temp": 56.9,
                    "precipprob": 19,
                    "windspeed": 18.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742133600,
                    "temp": 58,
                    "precipprob": 19,
                    "windspeed": 19.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742137200,
                    "temp": 58.9,
                    "precipprob": 19,
                    "windspeed": 20.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742140800,
                    "temp": 60,
                    "precipprob": 42,
                    "windspeed": 22.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742144400,
                    "temp": 60.9,
                    "precipprob": 42,
                    "windspeed": 23.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742148000,
                    "temp": 62,
                    "precipprob": 42,
                    "windspeed": 25.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742151600,
                    "temp": 61.2,
                    "precipprob": 42,
                    "windspeed": 25.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742155200,
                    "temp": 60.7,
                    "precipprob": 42,
                    "windspeed": 25.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742158800,
                    "temp": 60,
                    "precipprob": 42,
                    "windspeed": 25.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742162400,
                    "temp": 60,
                    "precipprob": 93,
                    "windspeed": 24.6,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742166000,
                    "temp": 60,
                    "precipprob": 93,
                    "windspeed": 23.7,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742169600,
                    "temp": 60,
                    "precipprob": 93,
                    "windspeed": 23,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742173200,
                    "temp": 60.3,
                    "precipprob": 94,
                    "windspeed": 13.4,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742176800,
                    "temp": 60.3,
                    "precipprob": 94,
                    "windspeed": 12.5,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742180400,
                    "temp": 60.2,
                    "precipprob": 94,
                    "windspeed": 11.9,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                }
            ]
        },
        {
            "datetime": "2025-03-17",
            "datetimeEpoch": 1742184000,
            "temp": 54.8,
            "precipprob": 95,
            "windspeed": 11,
            "windspeedmean": 8.5,
            "conditions": "Rain, Partially cloudy",
            "icon": "rain",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742184000,
                    "temp": 59.8,
                    "precipprob": 94,
                    "windspeed": 11,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742187600,
                    "temp": 59.3,
                    "precipprob": 94,
                    "windspeed": 9.8,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742191200,
                    "temp": 58.9,
                    "precipprob": 94,
                    "windspeed": 8.9,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742194800,
                    "temp": 57.8,
                    "precipprob": 95,
                    "windspeed": 8.7,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742198400,
                    "temp": 56.9,
                    "precipprob": 95,
                    "windspeed": 8.3,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742202000,
                    "temp": 55.8,
                    "precipprob": 95,
                    "windspeed": 8.1,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742205600,
                    "temp": 54.9,
                    "precipprob": 95,
                    "windspeed": 8.1,
                    "conditions": "Rain, Overcast",
                    "icon": "rain"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742209200,
                    "temp": 54.2,
                    "precipprob": 95,
                    "windspeed": 8.1,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742212800,
                    "temp": 53.3,
                    "precipprob": 95,
                    "windspeed": 8.1,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742216400,
                    "temp": 53.7,
                    "precipprob": 68,
                    "windspeed": 8.3,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742220000,
                    "temp": 54.1,
                    "precipprob": 68,
                    "windspeed": 8.7,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742223600,
                    "temp": 54.4,
                    "precipprob": 68,
                    "windspeed": 8.9,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742227200,
                    "temp": 55.1,
                    "precipprob": 68,
                    "windspeed": 9.2,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742230800,
                    "temp": 55.8,
                    "precipprob": 68,
                    "windspeed": 9.2,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742234400,
                    "temp": 56.6,
                    "precipprob": 68,
                    "windspeed": 9.4,
                    "conditions": "Rain, Partially cloudy",
                    "icon": "rain"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742238000,
                    "temp": 56.2,
                    "precipprob": 45,
                    "windspeed": 8.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742241600,
                    "temp": 55.7,
                    "precipprob": 45,
                    "windspeed": 8.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742245200,
                    "temp": 55.3,
                    "precipprob": 45,
                    "windspeed": 8.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742248800,
                    "temp": 54.1,
                    "precipprob": 45,
                    "windspeed": 8.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742252400,
                    "temp": 53,
                    "precipprob": 45,
                    "windspeed": 7.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742256000,
                    "temp": 51.7,
                    "precipprob": 45,
                    "windspeed": 7.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742259600,
                    "temp": 50.6,
                    "precipprob": 25,
                    "windspeed": 7.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742263200,
                    "temp": 49.5,
                    "precipprob": 25,
                    "windspeed": 7.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742266800,
                    "temp": 48.5,
                    "precipprob": 25,
                    "windspeed": 7.4,
                    "conditions": "Clear",
                    "icon": "clear-night"
                }
            ]
        },
        {
            "datetime": "2025-03-18",
            "datetimeEpoch": 1742270400,
            "temp": 50.4,
            "precipprob": 25,
            "windspeed": 7.4,
            "windspeedmean": 6.2,
            "conditions": "Clear",
            "icon": "clear-day",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742270400,
                    "temp": 47.4,
                    "precipprob": 25,
                    "windspeed": 7.4,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742274000,
                    "temp": 46.5,
                    "precipprob": 25,
                    "windspeed": 7.2,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742277600,
                    "temp": 45.4,
                    "precipprob": 25,
                    "windspeed": 7.2,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742281200,
                    "temp": 44.7,
                    "precipprob": 12,
                    "windspeed": 6.9,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742284800,
                    "temp": 44.1,
                    "precipprob": 12,
                    "windspeed": 6.5,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742288400,
                    "temp": 43.4,
                    "precipprob": 12,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742292000,
                    "temp": 43.2,
                    "precipprob": 12,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742295600,
                    "temp": 43.2,
                    "precipprob": 12,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742299200,
                    "temp": 43.1,
                    "precipprob": 12,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742302800,
                    "temp": 45.4,
                    "precipprob": 7,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742306400,
                    "temp": 47.9,
                    "precipprob": 7,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742310000,
                    "temp": 50.3,
                    "precipprob": 7,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742313600,
                    "temp": 52.6,
                    "precipprob": 7,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742317200,
                    "temp": 55.1,
                    "precipprob": 7,
                    "windspeed": 6.5,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742320800,
                    "temp": 57.5,
                    "precipprob": 7,
                    "windspeed": 6.5,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742324400,
                    "temp": 57.6,
                    "precipprob": 5,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742328000,
                    "temp": 57.8,
                    "precipprob": 5,
                    "windspeed": 6.3,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742331600,
                    "temp": 58,
                    "precipprob": 5,
                    "windspeed": 6,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742335200,
                    "temp": 56.7,
                    "precipprob": 5,
                    "windspeed": 5.8,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742338800,
                    "temp": 55.5,
                    "precipprob": 5,
                    "windspeed": 5.6,
                    "conditions": "Clear",
                    "icon": "clear-day"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742342400,
                    "temp": 54.2,
                    "precipprob": 5,
                    "windspeed": 5.4,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742346000,
                    "temp": 53.7,
                    "precipprob": 5,
                    "windspeed": 5.1,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742349600,
                    "temp": 53,
                    "precipprob": 5,
                    "windspeed": 4.7,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742353200,
                    "temp": 52.4,
                    "precipprob": 5,
                    "windspeed": 4.5,
                    "conditions": "Clear",
                    "icon": "clear-night"
                }
            ]
        },
        {
            "datetime": "2025-03-19",
            "datetimeEpoch": 1742356800,
            "temp": 54.7,
            "precipprob": 6,
            "windspeed": 7.6,
            "windspeedmean": 5.6,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742356800,
                    "temp": 51.5,
                    "precipprob": 5,
                    "windspeed": 4.5,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742360400,
                    "temp": 50.6,
                    "precipprob": 5,
                    "windspeed": 4.5,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742364000,
                    "temp": 49.7,
                    "precipprob": 5,
                    "windspeed": 4.5,
                    "conditions": "Clear",
                    "icon": "clear-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742367600,
                    "temp": 49.2,
                    "precipprob": 5,
                    "windspeed": 4.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742371200,
                    "temp": 48.5,
                    "precipprob": 5,
                    "windspeed": 3.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742374800,
                    "temp": 47.9,
                    "precipprob": 5,
                    "windspeed": 3.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742378400,
                    "temp": 47.7,
                    "precipprob": 5,
                    "windspeed": 3.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742382000,
                    "temp": 47.4,
                    "precipprob": 5,
                    "windspeed": 4.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742385600,
                    "temp": 47.2,
                    "precipprob": 5,
                    "windspeed": 4.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742389200,
                    "temp": 49.7,
                    "precipprob": 4,
                    "windspeed": 4.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742392800,
                    "temp": 52.4,
                    "precipprob": 4,
                    "windspeed": 5.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742396400,
                    "temp": 54.9,
                    "precipprob": 4,
                    "windspeed": 5.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742400000,
                    "temp": 57.5,
                    "precipprob": 4,
                    "windspeed": 6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742403600,
                    "temp": 59.8,
                    "precipprob": 4,
                    "windspeed": 6.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742407200,
                    "temp": 62.3,
                    "precipprob": 4,
                    "windspeed": 7.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742410800,
                    "temp": 62.3,
                    "precipprob": 5,
                    "windspeed": 7.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742414400,
                    "temp": 62.1,
                    "precipprob": 5,
                    "windspeed": 7.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742418000,
                    "temp": 62.1,
                    "precipprob": 5,
                    "windspeed": 7.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742421600,
                    "temp": 60.9,
                    "precipprob": 5,
                    "windspeed": 7.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742425200,
                    "temp": 59.8,
                    "precipprob": 5,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742428800,
                    "temp": 58.6,
                    "precipprob": 5,
                    "windspeed": 6.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742432400,
                    "temp": 57.6,
                    "precipprob": 6,
                    "windspeed": 6.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742436000,
                    "temp": 56.7,
                    "precipprob": 6,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742439600,
                    "temp": 55.8,
                    "precipprob": 6,
                    "windspeed": 5.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                }
            ]
        },
        {
            "datetime": "2025-03-20",
            "datetimeEpoch": 1742443200,
            "temp": 54.9,
            "precipprob": 41,
            "windspeed": 11.2,
            "windspeedmean": 8.6,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742443200,
                    "temp": 55.3,
                    "precipprob": 6,
                    "windspeed": 5.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742446800,
                    "temp": 54.8,
                    "precipprob": 6,
                    "windspeed": 5.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742450400,
                    "temp": 54.2,
                    "precipprob": 6,
                    "windspeed": 5.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742454000,
                    "temp": 53.7,
                    "precipprob": 10,
                    "windspeed": 5.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742457600,
                    "temp": 53.1,
                    "precipprob": 10,
                    "windspeed": 6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742461200,
                    "temp": 52.6,
                    "precipprob": 10,
                    "windspeed": 6.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742464800,
                    "temp": 52.2,
                    "precipprob": 10,
                    "windspeed": 6.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742468400,
                    "temp": 52.1,
                    "precipprob": 10,
                    "windspeed": 6.9,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742472000,
                    "temp": 51.7,
                    "precipprob": 10,
                    "windspeed": 7.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742475600,
                    "temp": 53,
                    "precipprob": 17,
                    "windspeed": 7.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742479200,
                    "temp": 54.4,
                    "precipprob": 17,
                    "windspeed": 8.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742482800,
                    "temp": 55.7,
                    "precipprob": 17,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742486400,
                    "temp": 56.7,
                    "precipprob": 17,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742490000,
                    "temp": 57.8,
                    "precipprob": 17,
                    "windspeed": 10.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742493600,
                    "temp": 58.9,
                    "precipprob": 17,
                    "windspeed": 11.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742497200,
                    "temp": 58.7,
                    "precipprob": 26,
                    "windspeed": 11,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742500800,
                    "temp": 58.6,
                    "precipprob": 26,
                    "windspeed": 10.7,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742504400,
                    "temp": 58.4,
                    "precipprob": 26,
                    "windspeed": 10.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742508000,
                    "temp": 57.3,
                    "precipprob": 26,
                    "windspeed": 10.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742511600,
                    "temp": 56,
                    "precipprob": 26,
                    "windspeed": 10.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742515200,
                    "temp": 54.9,
                    "precipprob": 26,
                    "windspeed": 10.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742518800,
                    "temp": 53.9,
                    "precipprob": 41,
                    "windspeed": 10.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742522400,
                    "temp": 52.6,
                    "precipprob": 41,
                    "windspeed": 10.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742526000,
                    "temp": 51.5,
                    "precipprob": 41,
                    "windspeed": 10.1,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                }
            ]
        },
        {
            "datetime": "2025-03-21",
            "datetimeEpoch": 1742529600,
            "temp": 43.3,
            "precipprob": 41,
            "windspeed": 14.1,
            "windspeedmean": 11,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "hours": [
                {
                    "datetime": "00:00:00",
                    "datetimeEpoch": 1742529600,
                    "temp": 50.3,
                    "precipprob": 41,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "01:00:00",
                    "datetimeEpoch": 1742533200,
                    "temp": 49.2,
                    "precipprob": 41,
                    "windspeed": 9.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "02:00:00",
                    "datetimeEpoch": 1742536800,
                    "temp": 47.9,
                    "precipprob": 41,
                    "windspeed": 9.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "03:00:00",
                    "datetimeEpoch": 1742540400,
                    "temp": 47.2,
                    "precipprob": 41,
                    "windspeed": 9.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "04:00:00",
                    "datetimeEpoch": 1742544000,
                    "temp": 46.5,
                    "precipprob": 41,
                    "windspeed": 9.6,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "05:00:00",
                    "datetimeEpoch": 1742547600,
                    "temp": 45.8,
                    "precipprob": 41,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "06:00:00",
                    "datetimeEpoch": 1742551200,
                    "temp": 44.9,
                    "precipprob": 41,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-night"
                },
                {
                    "datetime": "07:00:00",
                    "datetimeEpoch": 1742554800,
                    "temp": 44.1,
                    "precipprob": 41,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "08:00:00",
                    "datetimeEpoch": 1742558400,
                    "temp": 43.2,
                    "precipprob": 41,
                    "windspeed": 9.8,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "09:00:00",
                    "datetimeEpoch": 1742562000,
                    "temp": 44.7,
                    "precipprob": 26,
                    "windspeed": 10.3,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "10:00:00",
                    "datetimeEpoch": 1742565600,
                    "temp": 46.1,
                    "precipprob": 26,
                    "windspeed": 10.5,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "11:00:00",
                    "datetimeEpoch": 1742569200,
                    "temp": 47.6,
                    "precipprob": 0,
                    "windspeed": 11,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1742572800,
                    "temp": 47.9,
                    "precipprob": 0,
                    "windspeed": 11.2,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1742576400,
                    "temp": 48.5,
                    "precipprob": 0,
                    "windspeed": 11.4,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day"
                },
                {
                    "datetime": "14:00:00",
                    "datetimeEpoch": 1742580000,
                    "temp": 41.4,
                    "precipprob": 0,
                    "windspeed": 14.1,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "15:00:00",
                    "datetimeEpoch": 1742583600,
                    "temp": 41.3,
                    "precipprob": 3.2,
                    "windspeed": 14.1,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "16:00:00",
                    "datetimeEpoch": 1742587200,
                    "temp": 40.9,
                    "precipprob": 3.2,
                    "windspeed": 14.1,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "17:00:00",
                    "datetimeEpoch": 1742590800,
                    "temp": 40.7,
                    "precipprob": 3.2,
                    "windspeed": 14.1,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "18:00:00",
                    "datetimeEpoch": 1742594400,
                    "temp": 39.6,
                    "precipprob": 3.2,
                    "windspeed": 13,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "19:00:00",
                    "datetimeEpoch": 1742598000,
                    "temp": 38.4,
                    "precipprob": 3.2,
                    "windspeed": 11.6,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "20:00:00",
                    "datetimeEpoch": 1742601600,
                    "temp": 37.3,
                    "precipprob": 3.2,
                    "windspeed": 10.5,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "21:00:00",
                    "datetimeEpoch": 1742605200,
                    "temp": 36.4,
                    "precipprob": 0,
                    "windspeed": 10.5,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "22:00:00",
                    "datetimeEpoch": 1742608800,
                    "temp": 35.3,
                    "precipprob": 0,
                    "windspeed": 10.5,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                },
                {
                    "datetime": "23:00:00",
                    "datetimeEpoch": 1742612400,
                    "temp": 34.4,
                    "precipprob": 0,
                    "windspeed": 10.5,
                    "conditions": "Overcast",
                    "icon": "cloudy"
                }
            ]
        }
    ],
    "alerts": [],
    "currentConditions": {
        "datetime": "00:30:00",
        "datetimeEpoch": 1741926600,
        "temp": 41.1,
        "precipprob": 0,
        "windspeed": 3.8,
        "conditions": "Overcast",
        "icon": "cloudy"
    }
}
