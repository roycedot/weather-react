import React, {useState, useEffect} from "react";
import {Box, IconButton, Slide, Stack} from '@mui/material'
import {NavigateBefore as NavigateBeforeIcon, NavigateNext as NavigateNextIcon} from '@mui/icons-material'
import {WeatherCard} from "~/components/WeatherCard";

export function Carousel({cardsPerPage, cardsDetails}: {cardsPerPage: number, cardsDetails: CardDetails[]}) {
    const [cards, setCards] = useState<React.ReactElement[]>([])
    const [index, setIndex] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
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
        const newCards = cardsDetails.map(x => <WeatherCard
            conditions={x.conditions}
            temp={x.temp}
        />)
        setCards(newCards);
        setTotalPages(Math.ceil((newCards?.length || 0) / cardsPerPage))
    }, [cardsDetails])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                width: "100%",
                height: "400px",
                overflow: "hidden",
            }}
        >
            <IconButton onClick={onPrevPageClick} sx={{padding: 5, width: "10%"}} disabled={index === 0}>
                <NavigateBeforeIcon/>
            </IconButton>
            <Box
                sx={{
                    width: "80%",
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
                {[...Array(totalPages)].map((el, i) => (
                    <Box key={i} sx={{height: "100%", display: index === i ? "block": "hidden", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                        <Slide direction={slideDirection} in={i === index} mountOnEnter unmountOnExit>
                            <Stack spacing={2} direction={"row"} alignContent={"center"} justifyContent={"center"}>
                                {cards.slice(
                                    i * cardsPerPage,
                                    i * cardsPerPage + cardsPerPage,
                                )}
                            </Stack>
                        </Slide>
                    </Box>
                ))}
            </Box>

            <IconButton onClick={onNextPageClick} sx={{padding: 5, width: "10%"}} disabled={index >= totalPages - 1}>
                <NavigateNextIcon/>
            </IconButton>
        </Box>
    )
}
