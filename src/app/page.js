import Hero from './components/Hero'
import Nav from './components/Nav'
import Donation from './components/Donation'
import Mission from './components/Mission'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main >
      <Nav />
      <section className="">
        <Hero />
        <Donation />
        <Mission />
        <About />
        <Contact />
      </section>
    </main>
  )
}
