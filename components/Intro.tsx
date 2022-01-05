
const Intro = () => {
    
    return (
       <div className="w-full my-8 p-4 rounded-md h-full bg-gray-100 flex justify-evenly items-center flex-wrap">
           <div className="lg:w-1/2 md:px-12">
                <p className="md:text-xl">Tento web vznikol s cieľom zvýšiť povedomie o korupcii v Slovenskej republike a takisto poskytnúť všetkým potrebné nástroje na kontrolu verejného obstarávania. Autormi tohto projektu sú  <b>Alexandra Fujeríková</b> a <b>Richard Kentoš</b> , účastníci úvodného ročníka Protikorupčnej akadémie 2021, organizovanej <a className="font-bold underline" rel="noreferrer" target="_blank" href="https://komunita.zastavmekorupciu.sk/" >Komunitou Zastavme Korupciu.</a>. Nižšie sme si pre vás pripravili interaktívnu hru, kde zistíte, ako by ste sa zachovali v konkrétnych situáciách týkajúcich sa korupcie.</p>
            </div>
            <div className="lg:w-1/2 my-4">
                <img className="rounded-md" src="/images/korupcia.png" alt="Uvodný tréning" />
            </div>
       </div>
    )
}


export default Intro