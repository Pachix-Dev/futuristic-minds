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
import endress from '../../assets/aliados/EH.webp'
import ikusi from '../../assets/aliados/ikusi-logo.webp'
import mitsubishi from '../../assets/aliados/mitsubishi.webp'
import siemens from '../../assets/aliados/siemens.webp'
import nokia from '../../assets/aliados/nokia.webp'
import logoSchneider from '../../assets/aliados/logoSchneider.webp'
import ciscopartner from '../../assets/aliados/ciscopartner.webp'
import ibero from '../../assets/aliados/ibero.webp'
import roue from '../../assets/aliados/roue.webp'
import upg from '../../assets/aliados/upg.webp'
import unam from '../../assets/aliados/unam.webp'
import TecMonterrey from '../../assets/aliados/TecMonterrey.webp'
import juventudes from '../../assets/aliados/juventudes.webp'
import conalep from '../../assets/aliados/conalep-gto.webp'
import ideaGto from '../../assets/aliados/idea_gto.webp'
import seg from '../../assets/aliados/seg_logo.webp'
import ieca from '../../assets/aliados/ieca.webp'
import innovacion from '../../assets/aliados/innovacion.webp'
import amm from '../../assets/aliados/amm.webp'
import percepto from '../../assets/aliados/percepto.webp'
import educareInnovacion from '../../assets/aliados/educare_innovacion.webp'
import osmotronik from '../../assets/aliados/osmotronik.webp'
import metaphorce from '../../assets/aliados/metaphorce.webp'
import utl from '../../assets/aliados/utl.webp'
import contpaqi from '../../assets/aliados/contpaqi.webp'
import iteSoluciones from '../../assets/aliados/ite-soluciones.webp'
import eGto from '../../assets/aliados/e-gto.webp'


export function StrategicAllies () {

    const responsive = {
        desktop: {
            breakpoint: { max: 2800, min: 1024 },
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
            <div className="py-2">
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
                    autoPlaySpeed={2800}
                    className="container-aliados pb-5"
                >
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={leon} width={280} alt='ayuntamiento-leon' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={bachillerato} width={280} alt='bachillerato-bivalente-talentos' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={laSalle} width={280} alt='universidad-la-salle-bajio' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={oviedo} width={280} alt='instituto-oviedo' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={yluca} width={280} alt='y-luca' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={sapal} width={280} alt='sapal' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={endress} width={280} alt='endress' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={ikusi} width={280} alt='ikusi' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={mitsubishi} width={280} alt='mitsubishi' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={siemens} width={280} alt='siemens' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={nokia} width={280} alt='nokia' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={logoSchneider} width={280} alt='logoSchneider' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={ciscopartner} width={280} alt='ciscopartner' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={ibero} width={280} alt='ibero' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={roue} width={280} alt='roue' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={upg} width={280} alt='universidad-poli-guanajuato' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={unam} width={280} alt='unam' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={TecMonterrey} width={280} alt='tecnologico-monterrey' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={juventudes} width={280} alt='juventudes-gto' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={conalep} width={280} alt='conalep' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={ideaGto} width={280} alt='idea-guanajuato' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={seg} width={280} alt='seg' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={ieca} width={280} alt='seg' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={innovacion} width={280} alt='seg' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={amm} width={280} alt='seg' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={percepto} width={280} alt='seg' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={educareInnovacion} width={280} alt='seg' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={osmotronik} width={280} alt='osmotronik' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={metaphorce} width={280} alt='metaphorce' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={utl} width={280} alt='utl' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={contpaqi} width={280} alt='contpaqi' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={iteSoluciones} width={280} alt='ite-soluciones' />
                    </div>
                    <div className='exibitorSlider text-center h-100'>
                        <img className="img-aliado" src={eGto} width={280} alt='ite-soluciones' />
                    </div>
                </Carousel>
            </div>
        </>
    )
}