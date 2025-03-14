import React, {useState, useEffect} from "react";
import {Box, IconButton, Slide, Stack} from '@mui/material'
import {NavigateBefore as NavigateBeforeIcon, NavigateNext as NavigateNextIcon} from '@mui/icons-material'
import {WeatherCard} from "~/components/WeatherCard";
import useWindowDimensions from "~/utils/window_utils";

export function Carousel({cardsPerPage, cardsDetails}: {cardsPerPage: number, cardsDetails: CardDetails[]}) {
    const [cards, setCards] = useState<React.ReactElement[]>([])
    const [cardsWasInitialized, setCardsWasInitialized] = useState<boolean>(false)
    const [index, setIndex] = useState(0)
    // we may need to override cardsPerPage depending on the size of the viewport
    const [cardsPerPageCalc, setCardsPerPageCalc] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left")

    const { windowHeight, windowWidth } = useWindowDimensions();

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

    const checkNumPagesVsWindowSize = (numCards: number) => {
        let newCardsPerPageCalc: number = 1
        if (windowWidth && windowWidth > 840)
            newCardsPerPageCalc = cardsPerPage

        setCardsPerPageCalc(newCardsPerPageCalc)

        if (newCardsPerPageCalc > 0) {
            setTotalPages(Math.ceil(numCards / newCardsPerPageCalc));
        } else {
            setTotalPages(0)
        }
    }

    useEffect(() => {
        const newCards = cardsDetails.map((x, idx) => <WeatherCard
            keyStr={`card-${idx}`}
            conditions={x.conditions}
            temp={x.temp}
        />)
        setCards(newCards);

        checkNumPagesVsWindowSize(newCards?.length || 0)
        setCardsWasInitialized(true)
    }, [cardsDetails])

    useEffect(() => {
        // handle situation(s) where user resizes window
        if (cardsWasInitialized) {
            checkNumPagesVsWindowSize(cards?.length || 0);
        }
    }, [windowWidth])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                width: "100%",
                height: 400,
                overflow: "visible",
                minWidth: 500
            }}
        >
            <IconButton onClick={onPrevPageClick} sx={{padding: 5, width: "10%", minWidth: 20}} disabled={index === 0}>
                <NavigateBeforeIcon/>
            </IconButton>
            <Box
                sx={{
                    width: "80%",
                    minWidth: 400,
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
                    <Box key={`card-${i}`} sx={{height: "100%", display: index === i ? "block": "hidden", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                        <Slide direction={slideDirection} in={i === index} mountOnEnter unmountOnExit>
                            <Stack spacing={2} direction={"row"} alignContent={"center"} justifyContent={"center"}>
                                {cards.slice(
                                    i * cardsPerPageCalc,
                                    i * cardsPerPageCalc + cardsPerPageCalc,
                                )}
                            </Stack>
                        </Slide>
                    </Box>
                ))}
            </Box>

            <IconButton onClick={onNextPageClick} sx={{padding: 5, width: "10%", minWidth: 20}} disabled={index >= totalPages - 1}>
                <NavigateNextIcon/>
            </IconButton>
        </Box>
    )
}
