import { Col, Container, Row } from "react-bootstrap";
import '../AboutUs/AboutUs.css'
import icono01 from '../../../public/img/icono-01.png'
import icono02 from '../../../public/img/icono-02.png'
import icono03 from '../../../public/img/icono-03.png'
export function AboutUs(){
    return(
        <>
        <Container className="py-5 about-us" id='aboutUs'>
            <Row className="justify-content-md-center">
                <Col sm={6} md={4} lg={4} className="text-center px-5">
                    <img src={icono01} alt="idea-futuristic" className="py-4" />
                    <p>¿Eres estudiante y te interesan temas de ciencia y tecnológica?</p>
                </Col>
                <Col sm={6} md={4} lg={4} className="text-center px-5">
                    <img src={icono02} alt="idea-futuristic" className="py-4" />
                    <p>¿Te gustaría conocer las últimas innovaciones de Industria 4.0?</p>
                </Col>
                <Col sm={6} md={4} lg={4} className="text-center px-5">
                    <img src={icono03} alt="idea-futuristic" className="py-4" />
                    <p>¿La inteligencia artificial y la electromovilidad despiertan tu curiosidad?</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="text-center">
                    <h1 className="title-padre">¡FUTURISTIC MINDS ES PARA TI!</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={4} className="m-3"><a href="https://itm.ahmreg.com.mx/"  target='_blank' rel="noopener noreferrer"><button className="btn button-registro w-100">REGISTRATE AHORA</button></a></Col>
                <Col lg={4} className="m-3"><button className="btn button-programa w-100">VER PROGRAMA</button></Col>
            </Row>
        </Container>
        </>
        
    )
}