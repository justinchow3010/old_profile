import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Loader = () => {
    const [progressNum, setProgressNum] = useState(0);
    const [isVisible, setIsVisibile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [toBeDeleted, setToBeDeleted] = useState(false);
    const loadingSpeed = 700;

    useEffect(() => {
        const timeOut = setTimeout(() => setProgressNum(100), 5000);
        return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => setProgressNum(prev => prev + Math.floor(Math.random() * (30 - 40) + 40)), loadingSpeed);
        if (progressNum > 50) {
            console.log(progressNum)
            setIsVisibile(true);
        }

        return () => clearTimeout(timeOut);
    }, [progressNum >= 100 ? null : progressNum]);
    
    useEffect(() => {
        if (progressNum > 100) {
            const timeOut = setTimeout(() => setIsLoaded(true), loadingSpeed);
            const timeOut2 = setTimeout(() => setToBeDeleted(true), 900);
            return () => {clearTimeout(timeOut); clearTimeout(timeOut2);};
    }
    }, [progressNum]);

    return (
        <div className={!isLoaded? "loading-page shown" : "loading-page notshown"} style={{ display: toBeDeleted ? "none" : "flex"}}>
            <h1 className="title">JC</h1>
            <ProgressBar completed={progressNum} customLabel="Welcome" transitionDuration="0.7s" labelAlignment="center" labelClassName={isVisible ? "label-shown" : "label-notshown"} width="40vw" height="10px" bgColor="#201f3081"/>
        </div>
    );
}

export default Loader