import {useEffect, useState} from 'react';

const useMobile = () => {
    const [isOnMobile, setIsOnMobile] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        windowSize.width < 600 ? setIsOnMobile(true) : setIsOnMobile(false);

        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize.width]);
    return isOnMobile;
};

export default useMobile;