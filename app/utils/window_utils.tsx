import { useState, useEffect } from 'react';

function getWindowDimensions() {
    try {
        const {innerWidth: windowWidth, innerHeight: windowHeight} = window;
        return {
            windowWidth,
            windowHeight
        };
    } catch (error) {
        return { windowWidth: 0, windowHeight: 0 }
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
