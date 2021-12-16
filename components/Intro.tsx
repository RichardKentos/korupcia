const Intro = () => {
    
    return (
       <div className="w-full my-8 p-4 rounded-md h-full bg-gray-100 flex justify-evenly items-center flex-wrap">
           <div className="md:w-1/2 md:px-12">
                <p className="w-full text-lg">Ahoj! Tento Projekt vznikol s cieľom zvýšiť povedomie o korupcii v Slovenskej republike a takisto poskytnúť všetkým potrebné nástroje na kontrolu verejného obstarávania. Tento web bol vytvorený Alexandrou Fujeríkovou a Richardom Kentošom ako účastníkmi úvodného ročníka Protikorupčnej akadémie 2021, organizovanej <a className="font-bold underline" href="https://komunita.zastavmekorupciu.sk/">komunitou Zastavme Korupciu.</a> Nižšie sme si pre vás takisto pripravili interaktívnu hru, kde sa viete otestovať, ako by ste sa zachovali v konkrétncych situáciách týkajúcich sa korupcie.</p>
            </div>
            <div className="md:w-1/2 my-4">
                <img className="rounded-md" src="/images/korupcia.jpg" alt="Uvodný tréning" />
            </div>
       </div>
    )
}


export default Intro