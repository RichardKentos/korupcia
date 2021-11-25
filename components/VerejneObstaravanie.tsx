import { useState } from "react"
import { CSSTransition } from 'react-transition-group';

const VerejneObstaravanie = () => {

    const [show, setShow] = useState(false)
    return(
        <div className="w-full flex justify-evenly my-8 flex-wrap">
            <h2 className="font-bold w-full text-5xl mt-20 mb-8">Koho môžeš kontrolovať?</h2>
            <div className="md:w-1/6 bg-gray-100 rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="w-full text-5xl font-bold">1</h3>
                {/* <h3 className="text-2xl">Slovenská republika zastúpená svojimi orgánmi</h3> */}
                <img src="slovakia.svg" alt="Slovakia" />
            </div>
            
            <div className="md:w-1/6 w-full bg-gray-100 rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="w-full text-5xl font-bold">2</h3>
                <img src="city.svg" alt="Obec" />

                {/* <h3 className="text-2xl">Obec</h3> */}
            </div>
            <div className="md:w-1/6 bg-gray-100 rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="w-full text-5xl font-bold">3</h3>
                <img src="kraj.svg" alt="VÚC" />

                {/* <h3 className="text-2xl">Vyšší územný celok (Samosprávny kraj)</h3> */}
            </div>
            <div className="md:w-1/6 bg-gray-100 rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="w-full text-5xl font-bold">4</h3>
                {/* <h3 className="text-2xl">Právnická osoba (len za určitých podmienok)</h3> */}
                <img src="human.svg" alt="Právnická osoba" />

            </div>
            <div className="md:w-1/6 bg-gray-100 rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="w-full text-5xl font-bold">5</h3>
                <img src="people.svg" alt="Právnická osoba" />

                 {/* <h3 className="text-2xl">Združenie právnických osôb</h3> */}
                {/* <h3 className="text-2xl">Združenie právnických osôb, ktorého členmi sú výlučne verejní obstarávatelia uvedení v bodoch 1 a 2</h3> */}
            </div>

{/* Princípy */}

            <h2 className="font-bold w-full text-5xl mt-20 mb-8 ">Čo musia obstaravátelia dodržať?</h2>
            {/* <div className="w-full bg-gray-100 rounded-md p-8 m-2 flex">
                <div className={show ? "w-1/2 bg-gray-200 rounded-md p-8 m-2" : "w-full bg-gray-200 rounded-md p-8 m-2" }>
                    <h3 className="text-5xl font-bold">1</h3>
                    <h3 className="text-2xl inline">Princíp rovnakého zaobchádzania</h3>
                    <img onClick={() => {
                        if (show) {
                            setShow(false)
                        }
                        else {
                            setShow(true)
                        }
                    }} className="w-12 inline" src="https://img.icons8.com/ios-filled/100/000000/right-squared--v2.png"/>
                </div>  
                <CSSTransition
        in={show}
        appear={true}
        timeout={300}
        classNames="fade"
        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
      >
                {show && (
                <div className="w-1/2 bg-gray-200 rounded-md p-8 m-2">
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet iste, quo reprehenderit exercitationem enim, dolor laboriosam delectus provident architecto illo porro beatae, hic distinctio impedit illum maxime cupiditate debitis.</p>
                </div>
                )}
                 </CSSTransition>
            </div> */}

            <div className="w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-5xl font-bold">2</h3>
                <h3 className="text-2xl">Princíp nediskriminácia hospodárskych subjektov</h3>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet iste, quo reprehenderit exercitationem enim, dolor laboriosam delectus provident architecto illo porro beatae, hic distinctio impedit illum maxime cupiditate debitis.</p>
            </div>
            <div className="w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-5xl font-bold">3</h3>
                <h3 className="text-2xl">Princíp transparentnosti</h3>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet iste, quo reprehenderit exercitationem enim, dolor laboriosam delectus provident architecto illo porro beatae, hic distinctio impedit illum maxime cupiditate debitis.</p>
            </div>
            <div className="w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-5xl font-bold">4</h3>
                <h3 className="text-2xl">Princíp proporcionality (primeranosti)</h3>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet iste, quo reprehenderit exercitationem enim, dolor laboriosam delectus provident architecto illo porro beatae, hic distinctio impedit illum maxime cupiditate debitis.</p>
            </div>
            <div className="w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-5xl font-bold">5</h3>
                <h3 className="text-2xl">Princíp hospodárnosti a efektívnosti </h3>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eveniet iste, quo reprehenderit exercitationem enim, dolor laboriosam delectus provident architecto illo porro beatae, hic distinctio impedit illum maxime cupiditate debitis.</p>
            </div>
        </div>
    )
}

export default VerejneObstaravanie