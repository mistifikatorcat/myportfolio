import 'normalize.css/normalize.css';
import styles from './page.module.scss'
import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Skills from '@/sections/Skills/Skills';
import Projects from '@/sections/Projects/Projects';
import MobileList from '@/components/Mobile/List/MobileList';
import Contact from '@/sections/Contact/Contact';
import Footer from '@/components/Footer/Footer';
// import CurrentProject from '@/sections/CurrentProject/CurrentProject';
// import Plans from '@/sections/Plans/Plans';
import Journey from '@/sections/Journey/Journey';

export const metadata = {
  title: "Daniel Evgrafov",
  description: "Full-Stack developer",
};



export default function Home() {
  return (
    <main className={`${styles.main}`}>
     <Header />
     <Hero />
     <About />
     <Journey />
     <Skills />
     {/* <Plans /> */}
     {/* <CurrentProject /> */}
     <Projects />
     <MobileList />
     <Contact />
     <Footer />
    </main>
  )
}
