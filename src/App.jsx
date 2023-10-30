import { Menu } from './components/Menu/Menu'
// import { Slider } from './components/Slider/Slider'
import './App.css'
// import { AboutUs } from './components/AboutUs/AboutUs'
// import { Approach } from './components/Approach/Approach'
// import { Gallery } from './components/Gallery/Gallery'
// import { StrategicAllies } from './components/StrategicAllies/StrategicAllies'
import { Footer } from './components/Footer/Footer'
import { Conferences } from './components/Conferences/Conferences'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { GalleryPage } from './components/Gallery/GalleryPage'

function App() { 
  
  return (
    <>
      <Menu />
      <Routes >
          <Route path='/' element={
              <>
                  <title>ECOMONDO</title>
                  <Home />
              </>
            }
          />
          <Route 
            path='home'
            element={<Home />}
          />
          <Route 
            path='programa'
            element={<Conferences />}
          />
          <Route 
            path='gallery'
            element={<GalleryPage />}
          />
      </Routes>
      {/* <div className='background2'>
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
      */}
      <div className='background2'>
        <Footer />
      </div> 
    </>
  )
}
export default App
