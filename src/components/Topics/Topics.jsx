import { Container } from 'react-bootstrap'
import '../Topics/Topics.css'
export function Topics() {
    return (
        <>
        <Container className='mt-5 py-5'>
            <div className='container-topics'>
                    <div className="card">
                        <div className="card-inner card-1">
                            <div className="card-front text-center">
                                <p className='title-card'>EXPOSICIÓN DE PROTOTIPOS</p>
                            </div>
                            <div className="card-back text-center">
                                <p>INFORMACIÓN POR CONFIRMAR</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner card-2">
                            <div className="card-front text-center">
                                <p className='title-card'>21 KINETIC</p>
                            </div>
                            <div className="card-back text-center">
                                <p>INFORMACIÓN POR CONFIRMAR</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner card-3">
                            <div className="card-front text-center">
                                <p className='title-card'>REALIDAD AUMENTADA</p>
                            </div>
                            <div className="card-back text-center">
                                <p>INFORMACIÓN POR CONFIRMAR</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        </>

    )
}