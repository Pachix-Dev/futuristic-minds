import { Col, Container, Row } from "react-bootstrap";
import '../StrategicAllies/StrategicAllies.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import igecoLogo from '../../../public/img/igeco_color.webp'

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
                >
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='Beckhoff' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='CKD' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='DYCE' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='EH' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='Finder' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='Fives' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img src={igecoLogo} width={400} alt='cleveland' />
                    </div>
                </Carousel>
            </div>
        </>
    )
}