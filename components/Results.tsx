import { HashLink } from 'react-router-hash-link';

const Results = ({ points, setCurrentQuestion, setPoints,explanation,wrong, setWrong } : any ) => {
    
    return (
        <div className="bg-gray-100 rounded-md md:w-2/3 mx-auto h-min shadow-md my-8 p-4 flex flex-wrap justify-evenly items-center ">
            <h1 className="text-center w-full font-semibold text-5xl my-4">Dosiahli ste <span className="block"><span className={` ${points > 7 && "text-green-500"} ${points < 4 && "text-red-500"}  ${points < 8 && points > 3 && "text-yellow-500"} font-bold text-7xl`} >{points}</span> / 10 bodov</span></h1>
            <div className="w-full">
            {points > 7 ? (<div className="w-full flex flex-wrap justify-evenly">
                <img className="md:w-1/4 md:block hidden w-2/3 my-8 opacity-20"  src="/bad.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 my-8 opacity-20"  src="/medium.svg"></img>
                <img className="md:w-1/4 md:block w-2/3 my-8"  src="/good.svg"></img>
                <h3 className="w-full block text-center text-3xl font-bold">Protikorupčný bojovník</h3>
                <p>Chválime ťa, zvládol si náš test s veľmi dobrými výsledkami.</p>
            </div>) : (points < 4 ? (<div className="w-full flex flex-wrap justify-evenly">
                <img className="md:w-1/4 md:block w-2/3 my-8"  src="/bad.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 my-8 opacity-20"  src="/medium.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 my-8 opacity-20"  src="/good.svg"></img>
                <h3 className="w-full block text-center text-3xl font-bold">Korupčník</h3>
                <p>Nuž, výsledky nedopadli najlepšie. No nezúfaj, o korupcii sa môžeš učiť aj na <a className="font-bold underline" rel="noreferrer" target="_blank" href="https://komunita.zastavmekorupciu.sk/2016/10/17/co-robit-pri-strete-s-korupciou/">tomto odkaze</a>. Pozri si nesprávne odpovede a skús to ešte raz.</p>
            </div>) : (<div className="w-full flex flex-wrap justify-evenly">
                <img className="md:w-1/4 md:block hidden w-2/3 my-8 opacity-20"  src="/bad.svg"></img>
                <img className="md:w-1/4 md:block w-2/3 my-8"  src="/medium.svg"></img>
                <img className="md:w-1/4 md:block hidden w-2/3 my-8 opacity-20"  src="/good.svg"></img>
                <h3 className="w-full block text-center text-3xl font-bold">Pilný študent</h3>
                <p>Si na správnej ceste, no máš pred sebou ešte mnoho učenia. Napríklad na <a className="font-bold underline" rel="noreferrer" target="_blank" href="https://komunita.zastavmekorupciu.sk/2016/10/17/co-robit-pri-strete-s-korupciou/">tomto odkaze</a>.Pozri si nesprávne odpovede a skús to ešte raz.</p>
            </div>)
            ) }
            </div>
            {wrong.length > 0 && (<>
                <h3 className="font-bold w-full md:text-2xl text-3xl mt-20 md:mb-8">Komu som poradil zle?</h3>
                {wrong.map((oneWrong : string) => {
                    console.log(wrong.length);
                    
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className='w-full bg-white rounded-md my-8 p-4'>
                            <h3 className="text-lg text-red-500 w-full font-bold">{explanation[parseInt(oneWrong)-1]?.name}</h3>
                            <p className="text-lg w-full">{explanation[parseInt(oneWrong)-1]?.explanation}</p>
                        </div>
                    )
                })}
                </>)}
            <HashLink smooth to={"/#game"}>
                <a onClick={()=> {
                setPoints(0);
                setCurrentQuestion(0)
                setWrong([])
                }} className="bg-yellow-400 py-2 px-2 text-xl font-semibold rounded-md hover:text-white cursor-pointer mt-20">Hrať znova</a>
            </HashLink>
     </div>
    )
}


export default Results