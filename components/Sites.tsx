/* eslint-disable @next/next/no-img-element */
import Hand from "../public/hand.svg"

const Sites = () => {    
    return(
      <>
      <h3 className="font-bold md:text-5xl text-3xl my-4 w-full text-center">Užitočné stránky</h3>
    <div className="md:w-2/3 bg-white p-3 py-8 rounded-md flex justify-center flex-wrap">
      {/* <h2 className="font-bold w-full text-5xl my-4">Začni s kontrolou aj ty!</h2> */}
      <div className="md:w-4/5 bg-gray-100 p-8 rounded-md my-4">
        
        <div className="w-full mx-auto mt-8 mb-12">
          <p className="bg-white text-lg rounded-md p-4">Keďže naším poslaním je ukázať ľuďom konkrétne kroky pre <b>boj proti korupcii</b>, pripravili sme si pre vás tento zoznam stránok, ktoré vám pri kontrole určite pomôžu. Ak si myslíte, že nám nejaká chýba, neváhajte nás kontaktovať a my zoznam updatneme.</p>
          {/* <img className="inline" src="hand.svg" alt="Hand" /> */}
        </div>
      

        <div className="my-4">
          <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"rel="noreferrer" target="_blank" href="https://www.uvo.gov.sk/vestnik/oznamenia/zoznam ">Vestník</a>
          <p className="my-4 text-lg self-end">
          V ňom môžeš nájsť všetky zákazky zadané verejným obstarávateľom, zároveň však všetky potrebné podklady a podmienky na prípadné podanie ponuky. 
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://www.crz.gov.sk/">Centrálny register zmlúv</a>
          <p className="my-4 text-lg self-end">
          Slúži na vyhľadanie povinne zverejňovaných zmlúv, určité subjekty majú povinnosť zverejňovať zmluvy, ktoré uzatvárajú s inými subjektami, napríklad sem patria aj verejný obstarávatelia. Výsledkom verejného obstarávania je často uzavretie zmluvy s najvhodnejším uchádzačom, a práve túto zmluvu môžeš nájsť v Centrálnom registri zmlúv. 
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://www.orsr.sk/">Obchodný register SR</a>
          <p className="my-4 text-lg self-end">
          Je registrom obchodným spoločností. V ňom môžeme vyhľadať akúkoľvek obchodnú spoločnosť existujúcu na Slovensku, nakoľko pre vznik obchodnej spoločnosti je potrebný jej zápis práve v tomto registri. V obchodnom registri sa zverejňuje napr. názov spoločnosti, sídlo, štatutárny orgán (konateľ), spoločníci, atď. 
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://www.chcemvediet.sk/sk/">Podávanie infožiadostí</a>
          <p className="my-4 text-lg self-end">
          Možnosť podať infožiadosť nám zabezpečuje zákon č. 211/2000 Z.z. o slobodnom prístupe k informáciám a o zmene a doplnení niektorých zákonov (tzv. infozákon), ktorý nám hovorí, že každý má právo na prístup k informáciám, ktoré majú povinné osoby k dispozícii. Povinnými osobami rozumieme najmä, ale nie len štátne orgány (ministerstvá), obce, vyššie územné celky (samosprávne kraje). Tieto informácie sa sprístupňujú bez preukázania právneho alebo iného dôvodu. Preto, ak ťa zaujíma niečo ohľadom tvojej obce, môžeš ju písomne ale aj ústne požiadať o túto informáciu a odvolať sa na infozákon.
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://www.registeruz.sk">Register účtovných závierok</a>
          <p className="my-4 text-lg self-end">
          V príslušnom registri si môžeš dohľadať účtovné závierky jednotlivých subjektov. 
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://www.finstat.sk/">Finstat</a>
          <p className="my-4 text-lg self-end">
          Ako už názov napovedá na Finstate si môžeš pozrieť finančné dáta k jednotlivým spoločnostiam, a to napríklad dlhy, nedoplatky, celkové výnosy, zisk, aktíva, vlastný kapitál apod. 
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://rpvs.gov.sk/rpvs">Register partnerov verejného sektora</a>
          <p className="my-4 text-lg self-end">
          Partnermi verejného sektora sú napríklad osoby, ktoré  prijímajú finančné prostriedky zo štátneho rozpočtu, z rozpočtu obce, z rozpočtu vyššieho územného celku. Počas celej doby trvania zmluvy, na základe ktorej prijímajú tieto prostriedky musia byť tieto osoby zverejnené v tomto registri. Preto si môžeš pozrieť, kto prijíma finančné prostriedky z rozpočtu tvojej obce. 
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className=" text-2xl inline font-bold underline" rel="noreferrer" target="_blank" href="https://zbgis.skgeodesy.sk/mkzbgis/sk/kataster?pos=48.831098,19.530000,8">Kataster nehnuteľností</a>
          <p className="my-4 text-lg self-end">
          Slúži najmä na vyhľadávanie vlastníkov nehnuteľností ale aj bytov a nebytových priestorov. Môžeš tu nájsť aj listy vlastníctva, z ktorého môžeš vyčítať či je daná nehnuteľnosť (pozemok, stavba) založená, alebo či je k nej zriadené vecné bremeno. 
          </p>
        </div>
      </div>
     </div>
     </>
    )
}

export default Sites