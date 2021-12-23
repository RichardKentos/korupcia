import { useEffect, useState } from "react";
import Card  from "../components/Card";
import Results from "./Results";

const Cards = ({ questions } : any ) => {
       
const [ currentQuestion, setCurrentQuestion ] = useState(0)    
const [ points, setPoints ] = useState(0)   
const [wrong, setWrong] =useState([]) 
    return (
       <div className=" w-full my-8 p-4 rounded-md">
        {currentQuestion < questions?.length ? (
        <Card wrong={wrong} setWrong={setWrong} points={points} handlePoints={setPoints} handleClick={setCurrentQuestion} order={currentQuestion} question={questions[currentQuestion]}/>
        ) :
         <Results wrong={wrong} setWrong={setWrong} explanation={questions} points={points} setPoints={setPoints} setCurrentQuestion={setCurrentQuestion}></Results>
         }
          
       </div>
    )
}


export default Cards