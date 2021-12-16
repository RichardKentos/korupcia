import { useEffect, useState } from "react";
import Card  from "../components/Card";

const Cards = ({ questions } : any ) => {
    
const [ currentQuestion, setCurrentQuestion ] = useState(0)    
const [ points, setPoints ] = useState(0)    

    return (
       <div className=" w-full my-8 p-4 rounded-md h-full">
        {currentQuestion < questions?.length ? (
        <Card points={points} handlePoints={setPoints} handleClick={setCurrentQuestion} question={questions[currentQuestion]}/>
        ) :
         (<div className="bg-gray-100 rounded-md md:w-2/3 mx-auto h-min shadow-md my-8 p-4 flex flex-wrap justify-evenly items-center ">
            <h1 className="text-center w-full font-semibold text-5xl my-4">Dosiahli ste <span className={` ${points>9 && "text-red-500"}  ${points<10 && "text-green-500"} font-bold text-7xl`} >{points}</span> / 15 bodov</h1>
            <a className="bg-yellow-400 py-2 px-2 text-xl font-semibold rounded-md hover:text-white cursor-pointer mt-20" href="./">Hrať znova</a>
         </div>)
         }
          
       </div>
    )
}


export default Cards