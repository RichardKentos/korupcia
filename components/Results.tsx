import { useEffect, useState } from "react";


const Results = ({ points, setCurrentQuestion, setPoints,explanation,wrong, setWrong } : any ) => {
    
console.log(explanation[2].explanation);

    return (
        <div className="bg-gray-100 rounded-md md:w-2/3 mx-auto h-min shadow-md my-8 p-4 flex flex-wrap justify-evenly items-center ">
            <h1 className="text-center w-full font-semibold text-5xl my-4">Dosiahli ste <span className="block"><span className={` ${points>10 && "text-green-500"}  ${points<11 && "text-yellow-500"}  ${points<6 && "text-red-500"} font-bold text-7xl`} >{points}</span> / 15 bodov</span></h1>
            <div className="w-full">
            {points > 10 ? (<div className="w-full flex flex-wrap justify-evenly">
                <img className="md:w-1/4 md:block hidden w-2/3 mt-8 opacity-20"  src="/bad.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 mt-8 opacity-20"  src="/medium.svg"></img>
                <img className="md:w-1/4 md:block w-2/3 mt-8"  src="/good.svg"></img>
            </div>) : (points < 6 ? (<div className="w-full flex flex-wrap justify-evenly">
                <img className="md:w-1/4 md:block w-2/3 mt-8"  src="/bad.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 mt-8 opacity-20"  src="/medium.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 mt-8 opacity-20"  src="/good.svg"></img>
            </div>) : (<div className="w-full flex flex-wrap justify-evenly">
                <img className="md:w-1/4 md:block hidden w-2/3 mt-8 opacity-20"  src="/bad.svg"></img>
                <img className="md:w-1/4 md:block w-2/3 mt-8"  src="/medium.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 mt-8 opacity-20"  src="/good.svg"></img>
            </div>)
            ) }
            </div>
            {wrong && (<>
                <h3 className="font-bold w-full md:text-2xl text-3xl mt-20 md:mb-8">Čo som mal zle?</h3>
                {wrong.map((oneWrong : string) => {
                    return (
                        <>
                            <h3 className="text-lg text-red-500 w-full mt-8 font-bold">Otázka číslo {oneWrong}</h3>
                            <p className="text-lg w-full">{explanation[parseInt(oneWrong)-1]?.explanation}</p>
                        </>
                    )
                })}
                </>)}
            <a onClick={()=> {
            setPoints(0);
            setCurrentQuestion(0)
            setWrong([])
            }} className="bg-yellow-400 py-2 px-2 text-xl font-semibold rounded-md hover:text-white cursor-pointer mt-20">Hrať znova</a>
     </div>
    )
}


export default Results