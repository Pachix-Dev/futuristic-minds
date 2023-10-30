import { useState } from 'react'
import './Menu.css'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import logoIGECO from '../../../public/img/igeco_bn.webp'
import deutsche from '../../../public/img/deutsche_messe_bn.webp'
import { Link } from 'react-router-dom'
export function Menu () {

  const [show, setShow] = useState()
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Navbar expand='lg' className='menu py-2'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logoIGECO} alt="igeco" width="170" className='company-logo' />
            <img src={deutsche} alt="deutsche-messe" width="170" className='company-logo' />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement="end"
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body className='ms-auto'>
              <Nav className='align-items-center'>
                <Nav.Link className='options' as={Link} to='/programa'  onClick={handleClose}>PROGRAMA DE ACTIVIDADES</Nav.Link>
                <Nav.Link className='options' as={Link} to='/gallery'  onClick={handleClose}>GALERIA</Nav.Link>
                <Nav.Link className='options' href='#strategicAllies' onClick={handleClose}>ALIADOS ESTRATÉGICOS</Nav.Link>
                <Nav.Link className='options' href='https://hfmexico.mx' target='_blank'>NUESTROS EVENTOS</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

