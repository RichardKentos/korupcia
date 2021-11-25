/* eslint-disable react/jsx-key */
import Button from "./Button"
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const Card = (props:any ) => {      

let questions = [props.question.questions[0], props.question.questions[1],props.question.questions[2]]
const shuffledArray = questions.sort((a, b) => 0.5 - Math.random()); 
console.log(shuffledArray);

    return (
                <div className="bg-gray-100 rounded-md md:w-2/3 mx-auto h-min shadow-md my-8 p-4 flex flex-wrap justify-evenly items-center ">
                    <h1 className="text-center w-full font-bold text-3xl my-4">Toto je {props.question.name}.</h1>
                    <img className="md:h-60 w-1/2 md:w-max" src={props.question?.avatar} alt="Winner" />
                    <p className="my-4 md:w-3/5 text-lg">{props.question?.description}</p>
                    <p className="w-full text-xl font-bold text-center">Viete mu poradiť?</p>
                    <div className="flex flex-wrap w-full justify-evenly my-4">
                        {shuffledArray.map( question => { 
                            console.log(props.question.id);                                                        
                            return (
                                <Button 
                                points={question.points}  
                                id={props.question.id} 
                                handleClick={props.handleClick} 
                                handlePoints={props.handlePoints}
                                currentPoints={props.points}
                                text={question.text} />
                            )
                        } ) }
                    </div>
                </div>
    )
}


export default Card