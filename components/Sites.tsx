/* eslint-disable @next/next/no-img-element */
import Hand from "../public/hand.svg"

const Sites = () => {
    console.log(Hand);
    
    return(
        
    <div className="md:w-2/3 bg-white p-3 py-8 rounded-md flex justify-center flex-wrap">
      {/* <h2 className="font-bold w-full text-5xl my-4">Začni s kontrolou aj ty!</h2> */}
      <div className="md:w-4/5 bg-gray-100 p-8 rounded-md my-4">
        <h3 className="text-center font-bold text-5xl my-4">Užitočné stránky</h3>
      <p className="bg-white text-lg rounded-md p-4">Keďže naším poslaním je takisto ukázať ľuďom konkrétne kroky pre <b>boj proti korupcii</b>, pripravili sme si takisto zoznam stránok, ktoré vám pri kontrole určite pomôžu. Ak si myslíte, že nám nejaká chýba, neváhajte nás kontaktovať a my zoznam updatneme.</p>
        <div className="my-4">
          <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline" href="https://www.uvo.gov.sk/vestnik/oznamenia/zoznam ">Vestník</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"  href="https://www.crz.gov.sk/">Centrálny register zmlúv</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"  href="https://www.orsr.sk/">Obchodný register SR</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"  href="https://www.chcemvediet.sk/sk/">Podávanie infožiadostí</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"  href="https://www.registeruz.sk">Register účtovných závierok</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"  href="https://www.finstat.sk/">Finstat</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className="text-2xl inline font-bold underline"  href="https://rpvs.gov.sk/rpvs">Register partnerov verejného sektora</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
        <div className="my-4">
        <img className="inline" src="hand.svg" alt="Hand" />
          <a className=" text-2xl inline font-bold underline"  href="https://zbgis.skgeodesy.sk/mkzbgis/sk/kataster?pos=48.831098,19.530000,8">Kataster nehnuteľností</a>
          <p className="my-4 text-lg self-end">
          </p>
        </div>
      </div>
      {/* <div className="w-2/3 bg-yellow-300 p-4 rounded-md my-4">
        <h3 className="text-center font-bold text-5xl my-4">Ako googliť šikovne?</h3>
        <h4 className="text-2xl font-semibold">Používajte ""</h4>
        <p>Pomocou tohto triku </p>
      </div> */}
     </div>
        
    )
}

export default Sites