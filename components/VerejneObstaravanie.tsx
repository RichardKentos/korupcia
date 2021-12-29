import { useState } from "react"

const VerejneObstaravanie = () => {

    const [show, setShow] = useState(false)

    const showContent = (e: any) => {
          let content = e.target.nextSibling;
          let parent = e.target.parentNode;          
          parent?.classList.add("rounded-b-none")
          content?.classList.add("scale-y-100");
          
        }

      const hideContent = (e: any) => {          
        let content = e.target.nextSibling;
        let parent = e.target.parentNode;   
        parent?.classList.remove("rounded-b-none")
        content?.classList.remove("scale-y-100");
        content?.classList.add("scale-y-0");
      };
    
    return(
        <div className="w-full flex justify-evenly my-8 flex-wrap">
            <h2 className="font-bold w-full md:text-5xl text-3xl mt-20 mb-8">Koho môžeš kontrolovať?</h2>

            <div className="md:w-1/6 bg-gray-100 relative rounded-md my-8">
                <div onMouseLeave={hideContent} onMouseEnter={showContent} className="w-full h-full flex justify-center items-center">
                    <img src="slovakia.svg" alt="Slovakia" />
                </div>
                <div className="w-full scale-y-0 transform origin-top transition duration-200 ease-out  bg-gray-100 text-center font-medium rounded-b-md">
                    <h3 onMouseLeave={hideContent}  className="text-2xl">Slovenská republika zastúpená svojimi orgánmi</h3>
                </div>
            </div>

            <div  className="md:w-1/6 bg-gray-100 relative rounded-md my-8">
                <div onMouseLeave={hideContent} onMouseEnter={showContent} className="w-full h-full flex justify-center items-center">
                    <img src="city.svg" alt="Obec" />
                </div>
                <div className="w-full scale-y-0 transform origin-top transition duration-200 ease-out  bg-gray-100 text-center font-medium rounded-b-md">
                    <h3 onMouseLeave={hideContent}  className="text-2xl ">Obec</h3>
                </div>
            </div>

            <div  className="md:w-1/6 bg-gray-100 relative rounded-md my-8">
                <div onMouseLeave={hideContent}  onMouseEnter={showContent} className="w-full h-full flex justify-center items-center">
                    <img src="kraj.svg" alt="VÚC" />
                </div>
                <div className="w-full scale-y-0 transform origin-top transition duration-200 ease-out  bg-gray-100 text-center font-medium rounded-b-md">
                    <h3 onMouseLeave={hideContent}   className="text-2xl ">Vyšší územný celok (Samosprávny kraj)</h3>
                </div>
            </div>

            <div  className="md:w-1/6 bg-gray-100 relative rounded-md my-8">
                <div onMouseLeave={hideContent}  onMouseEnter={showContent} className="w-full h-full flex justify-center items-center">
                    <img src="human.svg" alt="Právnická osoba" />
                </div>
                <div className="w-full scale-y-0 transform origin-top transition duration-200 ease-out  bg-gray-100 text-center font-medium rounded-b-md">
                    <h3 onMouseLeave={hideContent}   className="text-2xl ">Právnická osoba</h3>
                </div>
            </div>

            <div  className="md:w-1/6 bg-gray-100 relative rounded-md my-8">
                <div onMouseLeave={hideContent}  onMouseEnter={showContent} className="w-full h-full flex justify-center items-center">
                <img src="people.svg" alt="Právnická osoba" />
                </div>
                <div className="w-full scale-y-0 transform origin-top transition duration-200 ease-out bg-gray-100 text-center font-medium rounded-b-md">
                    <h3 onMouseLeave={hideContent}   className="text-2xl ">Združenie právnických osôb</h3>
                </div>
            </div>
        
            <h2 className="font-bold w-full md:text-5xl text-3xl mt-20 mb-8 ">Čo musia obstarávatelia dodržať?</h2>
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">1<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp rovnakého zaobchádzania</h3>
                <p className="mt-8 text-lg">znamená, že verejný obstarávateľ pristupuje rovnakým spôsobom voči všetkým uchádzačom a záujemcom. Pričom žiadneho z nich priamo, nepriamo, vedome, či nevedome nesmie zvýhodňovať alebo znevýhodňovať. Účelom je odstrániť akékoľvek subjektívne posudzovanie ponúk. </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-md p-8 m-2">
                <h3 className="text-6xl font-bold text-center">2<span className="text-yellow-400 font-8xl">.</span></h3>
                <h3 className="text-2xl text-center font-bold">Princíp nediskriminácie hospodárskych subjektov</h3>
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