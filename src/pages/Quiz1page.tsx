import React, { useState } from 'react';
import backgroundImage from '../assets/images/QuizViking.jpg';
import CircleTimer from '../CircleTimer/timer.tsx';
import { QUIZ_QUESTIONS } from '@/assets/quizQuestions.ts';


const Quiz1page = () => {
    const [currQuestion,setCurrQuestion] = useState(0)
    const [points,setPoints] = useState(0)

    // Quiz is finished. Start over
  if(currQuestion > QUIZ_QUESTIONS.length-1) return (<><div>{`YOU NEED TO TRY AGAIN ${points} points`} </div><button onClick={()=>{setPoints(0);setCurrQuestion(0)}}>Reset</button></>)

  
    // update place in the quiz and the score
  const handleOnClick = (isAnswer:boolean) => {
      if(isAnswer) setPoints((prev)=>prev+10)
      setCurrQuestion((prev)=>prev+1)
    }
    

    // Create an Option component to house the possible answers and know if they are true
  const Option = ({optionString,isAnswer,abc}:{optionString:string,isAnswer:boolean,abc:"A"|"B"|"C"}) => {

    return (
    <div className="w-full max-w-[90%] sm:max-w-[70%] bg-gray-300 text-black p-2 rounded-lg font-[Montserrat] text-left pb-[12px] pl-[21px] text-[clamp(14px, 2vw, 16px)]" onClick={()=>handleOnClick(isAnswer)}>
  {`${abc}. ${optionString}`}
  </div>)
  }

  // Randomise the options
  const {options} = QUIZ_QUESTIONS[currQuestion]

  const newOptions = new Array(options.length)
  for (let i=0;i<options.length;i++) {
    while(true) {
      const num = Math.floor(Math.random() * options.length) 
      if(i===0) {newOptions[num] = {string:options[i],isAnswer:true};break;}
      if(!newOptions[num]) {newOptions[num] = {string:options[i],isAnswer:false};break;}
    }
  }

  console.log(newOptions)

  return (
        <div 
     className="flex flex-col justify-center items-center h-screen bg-cover bg-center gap-4 sm:gap-2 md:gap-6 border border-white"
        style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }} // Image background
      >
      <div className="text-[clamp(16px, 4vw, 24px)] text-right w-full pr-4">
        X
      </div>
      <div className='text-[20px] text-right w-full pr-8 mb-32 mt-48'>X 
      </div>

      <div className="border border-black w-[364px] h-[6px] -mb-4 bg-white"><br></br>
      </div>
    
      <div className="bg-gray-300 text-black p-2 rounded-lg w-[364px] font-[Montserrat] text-left pb-[12px] pl-[21px] text-[16px]" >
        {QUIZ_QUESTIONS[currQuestion].question}
      </div>

  {newOptions.map((option,index)=>{ // Map over the newOptions array and generate the JSX
  const {string,isAnswer} = option
  const abc:"A"|"B"|"C" = index === 0 ? "A" : index === 1 ? "B" : "C"

  return(<Option optionString={string} isAnswer={isAnswer} abc={abc} key={index}/>)
  })}

      <div className="w-full max-w-[90%] sm:max-w-[70%] bg-gray-300 text-black p-2 rounded-lg font-[Montserrat] pb-[12px] pt-[8px] text-[clamp(14px, 2vw, 16px) text-center mb-[360px] mt-16">
      {`${points} points`}
      </div>
    </div>
  );
}

export default Quiz1page;