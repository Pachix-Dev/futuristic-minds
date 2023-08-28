import { Carousel, Col } from "react-bootstrap";
// import slider01 from '../../../public/img/slider/slider-01.webp'
import logoFuturistics  from '../../../public/img/futuristic-minds-logo.webp'
import '../Slider/Slider.css'
export function Slider(){
    return(
      <>
        <div className='padre-slider'>
          <Carousel fade interval={2000} controls={false}>
            <Carousel.Item>
              <div className="witem-slider100 item-slider">
                <div className="text-center img-futuristic"><img className="w-100" src={logoFuturistics} alt="futuristic-minds" /></div>
                <div className="text-center">
                  <Col><h1 className="title-slider">PROGRAMA PARA ESTUDIANTES <span className="" style={{ color: '#e8001e' }}>INDUSTRIAL TRANSFORMATION MEXICO</span></h1> </Col>
                  <Col className="text-sede">
                    <p className="text-sede">CENTRO DE CIENCIAS EXPLORA</p>
                    <p className="text-sede">4 - 6 DE OCTUBRE, 2023</p>
                  </Col>
                </div>
              </div>
            </Carousel.Item>
            {/* <Carousel.Item>
              <div className="witem-slider100 item-slider">
                <div className="text-center img-futuristic"><img className="w-50" src={logoFuturistics} alt="futuristic-minds" /></div>
                <div className="text-center">
                  <Col><h1 className="title-slider">PROGRAMA PARA ESTUDIANTES <span className="" style={{ color: '#e8001e' }}>INDUSTRIAL TRANSFORMATION MEXICO</span></h1> </Col>
                  <Col className="text-sede">
                    <p className="text-sede">CENTRO DE CIENCIAS EXPLORA</p>
                    <p className="text-sede">4 - 6 DE OCTUBRE, 2023</p>
                  </Col>
                </div> 
              </div>
            </Carousel.Item> */}
          </Carousel>
        </div>
      </>
    )
}