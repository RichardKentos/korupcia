import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cards  from "../components/Cards";
import Sites from '../components/Sites';
import VerejneObstaravanie from '../components/VerejneObstaravanie';

const Home: NextPage = ( {questions}: any) => {  
  return (
    <div className="flex justify-center flex-wrap p-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
      <Head>
        <title>Test korupcie</title>
        <meta name="description" content="Zisti ako by si sa zachoval v rôznych situáciách." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <a href="./">
      <img src="https://komunita.zastavmekorupciu.sk/wp-content/themes/zastavmekorupciu/images/logo-zastavme-korupciu.png" alt="" />
      </a>
   
     <Cards questions={questions}></Cards>
     <VerejneObstaravanie />
     <Sites />
     
     <footer className={styles.footer}>
     <p className="font-semibold text-3xl mt-8 w-full text-center">Protikorupčná Akadémia</p>
     <p className="font-semibold">2021</p>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonkeeper.com/b/QGBY");
  const questions = await response.json();
  return {
      props: {
        questions: questions
      }
    }
}

export default Home
