import 'normalize.css/normalize.css';
import styles from './page.module.scss'
import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Skills from '@/sections/Skills/Skills';
import Projects from '@/sections/Projects/Projects';
import Contact from '@/sections/Contact/Contact';
import Footer from '@/components/Footer/Footer';


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
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </main>
  )
}
