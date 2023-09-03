import { Menu } from './components/Menu/Menu'
import { Slider } from './components/Slider/Slider'
import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Approach } from './components/Approach/Approach'
import { Footer } from './components/Footer/Footer'
import { StrategicAllies } from './components/StrategicAllies/StrategicAllies'
import { Gallery } from './components/Gallery/Gallery'
import { Conferences } from './components/Conferences/Conferences'

function App() { 
  return (
    <>
      <div className='background1'>
        <Menu />
        <Slider />
      </div>
      <div className='background2'>
        <AboutUs />
      </div>
      <div className='background-img'>
        <Approach />
      </div>
      <div className='background2'>
      <Conferences />
      </div>
      <Gallery />
      <StrategicAllies />
      <div className='background2'>
        <Footer />
      </div>
    </>
  )
}
export default App
