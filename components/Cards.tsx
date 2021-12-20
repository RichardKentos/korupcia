import { useEffect, useState } from "react";
import Card  from "../components/Card";

const Cards = ({ questions } : any ) => {
    
const [ currentQuestion, setCurrentQuestion ] = useState(0)    
const [ points, setPoints ] = useState(0)    

    return (
       <div className=" w-full my-8 p-4 rounded-md">
        {currentQuestion < questions?.length ? (
        <Card points={points} handlePoints={setPoints} handleClick={setCurrentQuestion} order={currentQuestion} question={questions[currentQuestion]}/>
        ) :
         (<div className="bg-gray-100 rounded-md md:w-2/3 mx-auto h-min shadow-md my-8 p-4 flex flex-wrap justify-evenly items-center ">
            <h1 className="text-center w-full font-semibold text-5xl my-4">Dosiahli ste <span className="block"><span className={` ${points>9 && "text-red-500"}  ${points<10 && "text-green-500"} font-bold text-7xl`} >{points}</span> / 15 bodov</span></h1>
            <div className="w-full">
            {points < 10 ? <img className="w-1/2 mx-auto mt-8"  src="/voting.svg"></img> : <img className="w-1/2 mx-auto mt-8" src="/bad.svg"></img> }
            </div>
            <a onClick={()=> {
               setPoints(0);
               setCurrentQuestion(0)
            }} className="bg-yellow-400 py-2 px-2 text-xl font-semibold rounded-md hover:text-white cursor-pointer mt-20">Hrať znova</a>
         </div>)
         }
          
       </div>
    )
}


export default Cards