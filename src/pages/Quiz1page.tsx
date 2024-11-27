import React from 'react';
import backgroundImage from '../assets/images/QuizViking.jpg';
import CircleTimer from '../CircleTimer/timer.tsx';

const Quiz1page = () => {
  return (
    
    <div 
     className="flex flex-col justify-center items-center h-screen bg-cover bg-center gap-[30px] border border-white"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Image background
      >

      <div className='text-[20px] text-right w-full pr-8 mb-32 mt-48'>X 
      </div>

        <CircleTimer duration={10}
        onTimeUp={() => false}/>
        
      <div className="border border-black w-[364px] h-[6px] -mb-4 bg-white"><br></br>
      </div>

      <button className="bg-gray-300 text-black p-2 rounded-lg w-[364px] font-[Montserrat] text-left pb-[12px] pl-[21px] text-[16px]">
        What did Odin sacrifice to gain unparalleled wisdom, and where did he make this sacrifice?
      </button>

      <button className="bg-gray-300 text-black p-2 rounded-lg -ml-10 font-[Montserrat] text-left pb-[12px] pl-[21px] pt-[12px] text-[16px] w-[364px]"
      style={{ marginBottom: "1px" }} // Space 5px between the buttons
      >
      A. His eye at Mimir’s well
      </button>

      <button className="bg-gray-300 text-black p-2 rounded-lg ml-8 font-[Montserrat] text-left pb-[12px] pl-[21px] pt-[12px] text-[16px] w-[364px]"
      style={{ marginBottom: "1px" }} // Space 5px between the buttons
      >
      B. His hand at Fenrir’s binding
      </button>

      <button className="bg-gray-300 text-black p-2 rounded-lg -ml-10 font-[Montserrat] text-left pb-[12px] pl-[21px] pt-[12px] text-[16px] w-[364px]"
      style={{ marginBottom: "1px" }} // Space 5px between the buttons
      >
      C. His spear at Yggdrasil
      </button>

      <button className="bg-gray-300 text-black p-2 rounded-lg font-[Montserrat] text-left pb-[12px] pt-[8px] text-[16px] text-center w-[141px] h-[36px] mb-[360px] mt-16">
      0 POINTS
      </button>
    </div>
  );
}

export default Quiz1page;

