import { useState, useEffect } from "react";
import { useSound } from 'use-sound';
import correct from '../sounds/correct.mp3';
import play from '../sounds/play.mp3';
import wrong from '../sounds/wrong.mp3';

export default function Trivia({data, setStop, activeQuestNumber, setActiveQuestNumber}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');
    const [playSound] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        setQuestion(data[activeQuestNumber-1]);
    }, [data, activeQuestNumber]);

    useEffect(() => {
        playSound();
    }, [playSound])

    function delay(duration, callback){
        setTimeout(() => {
            callback()
        }, duration);
    }

    function handleClick(elem){
        setSelectedAnswer(elem);
        setClassName('answer active');
        delay(3000, () => setClassName(elem.correct ? 'answer correct' : 'answer wrong'));
        delay(5000, () =>{
            if(elem.correct){
                    correctAnswer();
                    delay(1000, () => {
                        setActiveQuestNumber((prev) => prev+1)
                        setSelectedAnswer(null);
                    })
                }
            else{
                wrongAnswer();
                delay(1000, ()=> {
                    setStop(true);
                })
                
            } 
            
        })
    }

  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((elem) => (
                <div className={selectedAnswer == elem ? className : 'answer'} onClick={() => handleClick(elem)}>{elem.text}</div>
            ))}
        </div>
    </div>
  )
}
