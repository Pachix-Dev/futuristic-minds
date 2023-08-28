import { Card, Col, Container, Row } from "react-bootstrap";
import '../Conferences/Conferences.css'
import contacto from '../../../public/img/contacto.webp'
export function Conferences() {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-md-center py-5">
                    <Col className="text-center"><h2>PROGRAMA DE CONFERENCIAS</h2></Col>
                </Row>
                <Row className="pb-5">
                    <Col lg={3}></Col>
                    <Col lg={3} className="text-center"><h3>MIERCOLES <br />04 <br /></h3></Col>
                    <Col lg={3} className="text-center"><h3>JUEVES <br />05 <br /></h3></Col>
                    <Col lg={3} className="text-center"><h3>VIERNES <br />06 <br /></h3></Col>
                </Row>
                <Row className="py-4">
                    <Col lg={3} className="text-center"><p>09:00 a.m. <br />- <br />10:00 a.m.</p></Col>
                    <Col lg={3} className="text-center p-0">
                        <Card className='card-ponet' style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={contacto} className="img-ponet p-3"/>
                            <Card.Body>
                                <Card.Title className="title-ponet">PERLA MORENO</Card.Title>
                                <Card.Text className="text-ponet">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="text-center p-0">
                        <Card className='card-ponet' style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={contacto} className="img-ponet p-3"/>
                            <Card.Body>
                                <Card.Title className="title-ponet">PERLA MORENO</Card.Title>
                                <Card.Text className="text-ponet">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="text-center p-0">
                        <Card className='card-ponet' style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={contacto} className="img-ponet p-3"/>
                            <Card.Body>
                                <Card.Title className="title-ponet">PERLA MORENO</Card.Title>
                                <Card.Text className="text-ponet">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={3} className="text-center"><p>09:00 a.m. <br />-<br />10:00 a.m.</p></Col>
                    <Col lg={3} className="text-center p-0">
                        <Card className='card-ponet' style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={contacto} className="img-ponet p-3"/>
                            <Card.Body>
                                <Card.Title className="title-ponet">PERLA MORENO</Card.Title>
                                <Card.Text className="text-ponet">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="text-center p-0">
                        <Card className='card-ponet' style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={contacto} className="img-ponet p-3"/>
                            <Card.Body>
                                <Card.Title className="title-ponet">PERLA MORENO</Card.Title>
                                <Card.Text className="text-ponet">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="text-center p-0">
                        <Card className='card-ponet' style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={contacto} className="img-ponet p-3"/>
                            <Card.Body>
                                <Card.Title className="title-ponet">PERLA MORENO</Card.Title>
                                <Card.Text className="text-ponet">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}