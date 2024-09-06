import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Info from '@/components/info';
import Mission from '@/components/mission';
import Footer from '@/components/footer';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Materials from '@/components/materials';
import Contacts from '@/components/contacts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Site - Home</title>
        <meta name="description" content="Description." key="desc"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <div className="w-full bg-white">
          <Info/>
          <Mission/>
          <Skills/>
          <Projects/>
          <Materials />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  )
}
