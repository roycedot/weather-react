import React, {useState, useEffect} from "react";
import {Box, IconButton, Slide, Stack} from '@mui/material'
import {NavigateBefore as NavigateBeforeIcon, NavigateNext as NavigateNextIcon} from '@mui/icons-material'
import {WeatherCard} from "~/components/WeatherCard";

export function Carousel({cardsPerPage, cardsDetails}: {cardsPerPage: number, cardsDetails: CardDetails[]}) {
    const [cards, setCards] = useState<React.ReactElement[]>([])
    const [index, setIndex] = useState(0)
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left")

    const onNextPageClick = () => {
        if (!cards || index === cards.length - 1)
            return
        setSlideDirection("left")
        setIndex((prevPage) => prevPage + 1)
    }

    const onPrevPageClick = () => {
        if (index === 0)
            return
        setSlideDirection("right")
        setIndex((prevPage) => prevPage - 1)
    }

    useEffect(() => {
        setCards(cardsDetails.map(x => <WeatherCard
            conditions={x.conditions}
            temp={x.temp}
        />));
    }, [cardsDetails])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                height: "400px"
            }}
        >
            <IconButton onClick={onPrevPageClick} sx={{margin: 5}} disabled={index === 0}>
                <NavigateBeforeIcon/>
            </IconButton>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexWrap: "nowrap",
                }}
            >
            </Box>
            <Slide direction={slideDirection} in={true} mountOnEnter unmountOnExit>
                <Stack spacing={2} sx={{width: "100%"}}>
                    {cards.map((card, i) => (
                        <Box key={i} sx={{width: "100%"}}>
                            {card}
                        </Box>
                    ))}
                </Stack>
            </Slide>
            <IconButton onClick={onNextPageClick} sx={{margin: 5}} disabled={index >= Math.ceil((cards?.length || 0) / cardsPerPage) - 1}>
                <NavigateNextIcon/>
            </IconButton>
        </Box>
    )
}
