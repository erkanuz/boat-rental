import { About, Contacts, Gallery, Hero, Services } from '../sections'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contacts />
    </div>
  )
}

export default Home