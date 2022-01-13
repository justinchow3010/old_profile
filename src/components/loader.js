import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Loader = () => {
    const [progressNum, setProgressNum] = useState(0);
    const [isVisible, setIsVisibile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [toBeDeleted, setToBeDeleted] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => setProgressNum(100), 5000);
        return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => setProgressNum(prev => prev + Math.floor(Math.random() * (30 - 40) + 40)), 1000);
        if (progressNum > 50) {
            console.log(progressNum)
            setIsVisibile(true);
        }

        return () => clearTimeout(timeOut);
    }, [progressNum >= 100 ? null : progressNum]);
    
    useEffect(() => {
        if (progressNum > 100) {
            const timeOut = setTimeout(() => setIsLoaded(true), 1000);
            const timeOut2 = setTimeout(() => setToBeDeleted(true), 2000);
        }
    }, [progressNum]);

    return (
        <div className={!isLoaded? "loading-page shown" : "loading-page notshown"} style={{ display: toBeDeleted ? "none" : "flex"}}>
            <h1 className="title">JC</h1>
            <ProgressBar completed={progressNum} customLabel="Justin Chow" transitionDuration="1s" labelAlignment="center" labelClassName={isVisible ? "label-shown" : "label-notshown"} width="700px"/>
        </div>
    );
}

export default Loader