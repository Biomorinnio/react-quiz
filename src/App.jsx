import './app.css'
import { useState } from 'react';
import Trivia from './components/Trivia';
import { useEffect } from 'react';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [activeQuestNumber, setActiveQuestNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  const moneyPiramid = [
    {id: 1, amount: "$ 100"},
    {id: 2, amount: "$ 200"},
    {id: 3, amount: "$ 300"},
    {id: 4, amount: "$ 500"},
    {id: 5, amount: "$ 1000"},
    {id: 6, amount: "$ 2000"},
    {id: 7, amount: "$ 4000"},
    {id: 8, amount: "$ 8000"},
    {id: 9, amount: "$ 16000"},
    {id: 10, amount: "$ 32000"},
    {id: 11, amount: "$ 64000"},
    {id: 12, amount: "$ 125000"},
    {id: 13, amount: "$ 250000"},
    {id: 14, amount: "$ 50000"},
    {id: 15, amount: "$ 1000000"},
    
  ].reverse();

  
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  useEffect(() => {
    activeQuestNumber > 1 && setEarned(moneyPiramid.find((elem) => elem.id === activeQuestNumber-1).amount)
  }, [moneyPiramid, activeQuestNumber]);

  return (
    <div className="app">
      {username ? <>
        <div className="main">
        {stop ? <h1 className='endGame'>{username}, you earned {earned}</h1>: (
        <>
          <div className="top">
          <div className="timer"><Timer setStop={setStop} activeQuestNumber={activeQuestNumber}/></div>
        </div>
          <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                activeQuestNumber={activeQuestNumber}
                setActiveQuestNumber={setActiveQuestNumber}
              />
        </div></>)}
      </div>
      <div className="pyramid">
        <div className="moneyList">
          {moneyPiramid.map((elem) => (
              <li className={activeQuestNumber == elem.id ? 'moneyListItem active' : 'moneyListItem'}>
              <span className="moneyListItemNumber">{elem.id}</span>
              <span className="moneyListItemAmount">{elem.amount}</span>
            </li>
          ))}
          
          
        
        </div>
      </div>
      </> : <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
