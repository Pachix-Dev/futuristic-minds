import { Container } from 'react-bootstrap'
import '../Topics/Topics.css'
export function Topics() {
    return (
        <>
        <Container className='my-5 py-5'>
            <div className='container-topics'>
                    <div className="card">
                        <div className="card-inner card-1">
                            <div className="card-front text-center">
                                <p className='title-card'>EXPOSICIÓN DE PROTOTIPOS</p>
                            </div>
                            <div className="card-back text-center">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, eius.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner card-2">
                            <div className="card-front text-center">
                                <p className='title-card'>21 KINETIC</p>
                            </div>
                            <div className="card-back text-center">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, porro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner card-3">
                            <div className="card-front text-center">
                                <p className='title-card'>REALIDAD AUMENTADA</p>
                            </div>
                            <div className="card-back text-center">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quisquam quia nostrum earum necessitatibus dolorum quod neque vel autem laudantium!</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        </>

    )
}