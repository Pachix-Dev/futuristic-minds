import { Carousel, Col } from "react-bootstrap";
import logoFuturistics  from '../../../public/img/futuristic-minds-logo.webp'
import '../Slider/Slider.css'
export function Slider (){
    return(
      <>
        <div className='padre-slider background1'>
          <Carousel fade interval={2000} controls={false}>
            <Carousel.Item>
              <div className="witem-slider100 item-slider">
                <div className="text-center img-futuristic"><img className="w-100" src={logoFuturistics} alt="futuristic-minds" /></div>
                <div className="text-center">
                  <Col><h1 className="title-slider px-2">PROGRAMA PARA ESTUDIANTES <span style={{ color: '#e8001e' }}>INDUSTRIAL TRANSFORMATION MEXICO</span></h1> </Col>
                  {/* <Col className="text-sede">
                    <p className="text-sede">CENTRO DE CIENCIAS EXPLORA</p>
                    <p className="text-sede" style={{ color: '#e8001e', fontWeight: '700' }}>4 - 6 DE OCTUBRE, 2023</p>
                  </Col> */}
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    )
}