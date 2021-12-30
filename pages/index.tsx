import type { NextPage } from 'next'
import Head from 'next/head'
import Cards  from "../components/Cards";
import Sites from '../components/Sites';
import Intro from '../components/Intro';
import Team from '../components/Team';
import VerejneObstaravanie from '../components/VerejneObstaravanie';

const Home: NextPage = ( {questions}: any) => {  
  return (
    <div className="flex justify-center flex-wrap p-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
      <Head>
        <title>Test korupcie</title>
        <meta name="description" content="Zisti ako by si sa zachoval v rôznych situáciách." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a rel="noreferrer" target="_blank" href="./">
                <img src="https://komunita.zastavmekorupciu.sk/wp-content/themes/zastavmekorupciu/images/logo-zastavme-korupciu.png" alt="" />
    </a>
    <Intro />

     <h2 className="font-bold w-full md:text-5xl text-3xl mt-20 md:mb-8">Poraď ako sa zachovať v zlomových situáciách</h2>
     <Cards questions={questions}></Cards>
     <VerejneObstaravanie />
     <Sites />
     
     <footer className='w-full text-center mt-8'>
       <a rel="noreferrer" target="_blank" className="font-semibold text-2xl mt-8" href="https://komunita.zastavmekorupciu.sk/akademia/">Protikorupčná Akadémia 2021</a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonkeeper.com/b/CDXM");
  const questions = await response.json();
  return {
      props: {
        questions: questions
      }
    }
}

export default Home
