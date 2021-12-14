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
         (<>
            <h1 className="text-center w-full font-semibold text-5xl my-4">Dosiahli ste <span className="text-red-500 font-bold text-9xl">{points} bodov</span></h1>
         </>)
         }
          
       </div>
    )
}


export default Cards