import React, {useState, useEffect} from 'react';


export default function Timer({setStop, activeQuestNumber}) {
    const [timer, setTimer] = useState(30)
    
    useEffect(() => {
        if(timer == 0) setStop(true);
        const interval = setInterval(() => {
            setTimer((e) => e-1)
        }, 1000);
        return () => clearInterval(interval);
    }, [setStop, timer]);
  
    useEffect(()=> {
        setTimer(30)
    }, [activeQuestNumber])

    return timer;
}
