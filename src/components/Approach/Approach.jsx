import { Col, Row } from "react-bootstrap";
import '../Approach/Approach.css'
import manoBot from '../../../futuristic-minds/img/mano-bott.webp'
import  niveles from '../../../futuristic-minds/img/niveles.webp'
export function Approach(){
    return(
        <>
            <div className="pt-5 container-edu">
                <Row className="container-programa m-0">
                    <Col lg={6} className="item-topics">
                            <div className="cont-list-programa">
                                <h2 className="title-edu">Forma parte del programa educativo de Industrial Transformation Mexico:</h2><br /><br />
                                <ul className="lista">
                                    <li className="item-programa">Conferencias</li>
                                    <li className="item-programa">Talleres</li>
                                    <li className="item-programa">Exhibición de prototipos</li>
                                    <li className="item-programa">Recorridos por salas interactivas de Explora</li>
                                </ul>
                            </div>
                    </Col>
                    <Col lg={6} className="img-niveles p-0">
                        <img className="img-niveles w-100" src={niveles} alt="niveles-educativos-futuristics-minds"/>
                    </Col>
                    <img className="img-mano px-0 py-1" src={manoBot} alt="futuristics-minds" />
                </Row>
               
            </div>
            <div className="container-enfoque p-5">
                <Row className="justify-content-md-center">
                    <Col className="text-center"><h2>EJES DE ENFOQUE</h2></Col>
                </Row>
                <Row className="justify-content-md-center mx-2">
                    <Col xs={12} md={6} lg={3} className="py-3 text-center item-enfoque">
                        <img className="w-100" src="/futuristic-minds/img/icono-03.png" alt="" />
                        <p className="enfoque-text p-3">ELECTROMOVILIDAD</p>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="py-3 text-center item-enfoque">
                        <img className="w-100" src="/futuristic-minds/img/sustentable.webp" alt="" />
                        <p className="enfoque-text p-3"> SUSTENTABILIDAD</p>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="py-3 text-center item-enfoque">
                        <img className="w-100" src="/futuristic-minds/img/industria.webp" alt="" />
                        <p className="enfoque-text p-3">INDUSTRIA 4.0</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mx-2">
                    <Col xs={12} md={6} lg={3} className="py-3 text-center item-enfoque">
                        <img className="w-100" src="/futuristic-minds/img/machine.webp" alt="" />
                        <p className="enfoque-text p-3"> AI & MACHINE LEARNING</p>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="py-3 text-center item-enfoque">
                        <img className="w-100" src="/futuristic-minds/img/economia.webp" alt="" />
                        <p className="enfoque-text p-3">ECONOMIA CIRCULAR</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}