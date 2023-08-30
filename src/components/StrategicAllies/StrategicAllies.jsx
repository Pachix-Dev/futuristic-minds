import { Col, Container, Row } from "react-bootstrap";
import './StrategicAllies.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import leon from '../../assets/aliados/ayuntamiento-leon.webp'
import bachillerato from '../../assets/aliados/bachillerato-bivalente.webp'
import laSalle from '../../assets/aliados/la-salle-bajio.webp'
import oviedo from '../../assets/aliados/oviedo.webp'
import sapal from '../../assets/aliados/sapal.webp'
import yluca from '../../assets/aliados/yluca.webp'

export function StrategicAllies() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    }
    return (
        <>
            <div className="py-5">
                <Container className="container-aliados my-5" id='strategicAllies'>
                    <Row className="justify-content-md-center">
                        <Col className="text-center title-stra m-3" style={{ color: 'rgba(5,8,114,1)', fontSize: '40px', fontWeight: '900' }}><h2>ALIADOS ESTRATÉGICOS</h2></Col>
                    </Row>
                </Container>
                <Carousel
                    responsive={responsive}
                    showDots={false}
                    arrows
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    className="container-aliados"
                >
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={leon} width={400} alt='ayuntamiento-leon' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={bachillerato} width={400} alt='bachillerato-bivalente-talentos' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={laSalle} width={400} alt='universidad-la-salle-bajio' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={oviedo} width={400} alt='instituto-oviedo' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={yluca} width={400} alt='y-luca' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={sapal} width={400} alt='sapal' />
                    </div>
                </Carousel>
            </div>
        </>
    )
}