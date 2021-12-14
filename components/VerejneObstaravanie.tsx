import { useState } from "react"

const VerejneObstaravanie = () => {

    const [show, setShow] = useState(false)

    const showContent = (e: any) => {
          let content = e.target.children[0];
          content?.classList.add("scale-y-100");
          content?.classList.remove("invisible");
        }

      const hideContent = (e: any) => {
        let content = e.target.children[0];
        content?.classList.remove("scale-y-100");
        content?.classList.add("scale-y-0");
      };
    
    return(
        <div className="w-full flex justify-evenly my-8 flex-wrap">
            <h2 className="font-bold w-full text-5xl mt-20 mb-8">Koho môžeš kontrolovať?</h2>

            <div onMouseEnter={showContent} onMouseLeave={hideContent} className="md:w-1/6 bg-gray-100 relative rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="text-2xl scale-y-0 transform invisible origin-top transition duration-200 ease-out absolute text-center bg-white font-medium">Slovenská republika zastúpená svojimi orgánmi</h3>
                <img src="slovakia.svg" alt="Slovakia" />
            </div>
            
            <div onMouseEnter={showContent} onMouseLeave={hideContent} className="md:w-1/6 bg-gray-100 relative rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="text-2xl scale-y-0 transform invisible origin-top transition duration-200 ease-out absolute text-center bg-white font-medium w-full">Obec</h3>
                <img src="city.svg" alt="Obec" />
            </div>

            <div onMouseEnter={showContent} onMouseLeave={hideContent} className="md:w-1/6 bg-gray-100 relative rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="text-2xl scale-y-0 transform invisible origin-top transition duration-200 ease-out absolute text-center bg-white font-medium">Vyšší územný celok (Samosprávny kraj)</h3>
                <img src="kraj.svg" alt="VÚC" />
            </div>

            <div onMouseEnter={showContent} onMouseLeave={hideContent} className="md:w-1/6 bg-gray-100 relative rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="text-2xl scale-y-0 transform invisible origin-top transition duration-200 ease-out absolute text-center bg-white font-medium">Právnická osoba (len za určitých podmienok)</h3>
                <img src="human.svg" alt="Právnická osoba" />
            </div>
            <div onMouseEnter={showContent} onMouseLeave={hideContent} className="md:w-1/6 bg-gray-100 relative rounded-md p-8 m-2 flex flex-wrap justify-center items-center">
                <h3 className="text-2xl scale-y-0 transform invisible origin-top transition duration-200 ease-out absolute text-center bg-white font-medium">Združenie právnických osôb</h3>
                <img src="people.svg" alt="Právnická osoba" />
            </div>

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
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">1<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp nediskriminácia hospodárskych subjektov</h3>
                <p className="mt-8 text-lg">znamená, že verejný obstarávateľ pristupuje rovnakým spôsobom voči všetkým uchádzačom a záujemcom. Pričom žiadneho z nich priamo, nepriamo, vedome, či nevedome nesmie zvýhodňovať alebo znevýhodňovať. Účelom je odstrániť akékoľvek subjektívne posudzovanie ponúk. </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">2<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp nediskriminácia hospodárskych subjektov</h3>
                <p className="mt-8 text-lg">tento princíp sa nám prekrýva s princípom rovnakého zaobchádzania, a znamená, že sa zakazuje akékoľvek zvýhodňovanie určitého uchádzača či záujemcu</p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">3<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp transparentnosti</h3>
                <p className="mt-8 text-lg">predstavuje princíp, ktorý nám zabezpečuje to, že proces verejného obstarávania má byť prehľadný, predvídateľný a preskúmateľný. V rozpore s týmto princípom je konanie verejného obstarávateľa, ktoré spôsobuje nečitateľnosť, nekontrolovateľnosť alebo horšiu kontrolovateľnosť verejného obstarávania. Tento princíp sa nám prejavuje napríklad v tom, že každý úkon verejného obstarávateľa vo verejnom obstarávaní musí byť zachytený v dokumentácii z procesu verejného obstarávania. Zároveň tento princíp nám hovorí, že každé rozhodnutie verejného obstarávateľa musí byť náležite odôvodnené</p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">4<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp proporcionality (primeranosti)</h3>
                <p className="mt-8 text-lg">nám hovorí o tom, že verejný obstarávateľ by vždy mal pri dosahovaní svojho cieľa vyberať také postupy, ktoré sú vhodné a potrebné na dosiahnutie jeho cieľa. To znamená, že v prípade, ak na dosiahnutie svojho cieľa má viacero možností, je potrebné aby sa priklonil k tej, ktorá je najmenej obmedzujúca, tak aby nespôsobila neúmerné ťažkosti. </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">5<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp hospodárnosti a efektívnosti </h3>
                <p className="mt-8 text-lg">nám predstavuje princíp, ktorého účelom je výber uchádzača, ktorý za vynaložené verejné prostriedky poskytne čo najlepšie plnenie. Má sa za to, že hospodárne a efektívne je také verejné obstarávania, ktoré zabezpečí najvyšší počet ponúk, a teda čo najširšiu hospodársku súťaž subjektov</p>
            </div>
        </div>
    )
}

export default VerejneObstaravanie