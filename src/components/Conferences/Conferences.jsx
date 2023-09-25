import { useState } from 'react'
import { Accordion, Container, Nav, Tab, Tabs } from 'react-bootstrap'
import { DetailSpeaker } from './DetailSpeaker'
import { speakers } from '../constans_speakers.js'
import { programITM } from '../constans_program'
import './Program.css' 

export function Conferences () {
    const [modalShow, setModalShow] = useState(false)
    const [programs, setPrograms] = useState(programITM.stage_1)
    const [detailSpeaker, setDetailSpeaker] = useState({})
  
    const handleModal = (id) => {
      const speaker = speakers.find(speaker => speaker.id === id)
      setDetailSpeaker(speaker)
      setModalShow(true)
    }
    const handleModal2 = (speaker) => {
      setDetailSpeaker(speaker)
      setModalShow(true)
    }
    return (
      <>
        <div className='program-wrapper' id='programa'>
          <Container className='pt-5'>
            <h1 className='text-light fw-font title-conferencias'><strong>PROGRAMA DE ACTIVIDADES</strong></h1>
            <p className='text-light'>Descubre conocimientos inspiradores y perspectivas únicas en nuestro emocionante programa de actividades. <br /><strong style={{ color: '#ff0505' }}>¡No te pierdas la oportunidad de ampliar tus horizontes!</strong></p>
            <h2 className='text-light fw-font mt-5 mb-5'>Lugar de encuentro</h2>
            <div className='program-dates mt-5'>
              <Nav variant='tabs' defaultActiveKey='#day1'>
                <Nav.Item>
                  <Nav.Link href='#day1' onClick={() => setPrograms(programITM.stage_1)}>
                    <h4 className='text-light'>
                      <strong>La Libélula</strong><br />
                        <span className='sub-title'>Conferencias</span>
                    </h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#day2' onClick={() => setPrograms(programITM.stage_2)}>
                    <h4 className='text-light'> 
                      <strong>Salón Galileo</strong><br />
                      <span className='sub-title'>Seminarios</span>
                    </h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#day3' onClick={() => setPrograms(programITM.stage_3)}>
                    <h4 className='text-light'>
                    <strong>Vigotsky</strong><br />
                      <span className='sub-title'>Talleres</span>
                    </h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tabs
                defaultActiveKey='day1'
                id='fill-tab-example'
                className='mb-3 mt-5'
              >
                <Tab
                  eventKey='day1'
                  title={
                    <>
                      <strong>Día 1</strong><br />
                      <span>miércoles 4 de octubre</span>
                    </>
                  }
                >
                  {programs?.oct_4.map((program, index) => {
                    return (
                      <div key={index} className='program-date-item'>
                        <div style={{ width: '100px' }}>
                          <p style={{ width: '100px' }}>
                            <strong>{program.hour}</strong><br />
                            <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg> {program.duration}
                          </p>
                        </div>
                        <div className='w-100'>
                          {program?.resume
                            ? <Accordion>
                              <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                  <h2  className='title-speaker'>{program.name}</h2>
                                  <p>{program.rol}</p>
                                  <p>{program.institution}</p>
                                  <h4  style={{ color: '#ff0505' }}>{program.conference}</h4>
                                </Accordion.Header>
                                <Accordion.Body>
                                  {program.resume}
                                </Accordion.Body>
                              </Accordion.Item>
                              </Accordion>
                            : <><h2>{program.name}</h2><p>{program.rol}</p><h6>{program.conference}</h6></>}
                        </div>
                        <div className='d-inline-flex'>
                          {
                            program.avatar === ''
                              ? ''
                              : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle program-date-avatar' alt='speaker' />
                            }
                          {
                            program?.avatar2
                              ? <img onClick={() => handleModal(program?.id_s2)} src={program.avatar2} width={100} height={100} className='rounded-circle ms-2 program-date-avatar' alt='speaker' />
                              : ''
                            }
                            {
                            program?.logo
                              ? <img src={program.logo} width={100} height={100} className='h-100 program-date-avatar img-logo' alt='speaker' />
                              : ''
                            }
                        </div>
                      </div>
                    )
                  })}
                </Tab>
                <Tab
                  eventKey='day2'
                  title={
                    <>
                      <strong>Día 2</strong><br />
                      <span>jueves 5 de octubre</span>
                    </>
                  }
                >
                  {programs?.oct_5.map((program, index) => {
                    return (
                      <div key={index} className='program-date-item  align-items-center'>
                        <div style={{ width: '100px' }}>
                          <p style={{ width: '100px' }}>
                            <strong>{program.hour}</strong><br />
                            <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg> {program.duration}
                          </p>
                        </div>
                        <div className=' align-items-center justify-content-between w-100'>
                          <div className='w-100'>
                            {program?.resume
                              ? <Accordion>
                                <Accordion.Item eventKey={index}>
                                  <Accordion.Header>
                                  <h2  className='title-speaker'>{program.name}</h2>
                                  <p>{program.rol}</p>
                                  <p>{program.institution}</p>
                                  <h4  style={{ color: '#ff0505' }}>{program.conference}</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    {program.resume}
                                  </Accordion.Body>
                                  {
                                    program.form === '' ? '' : <a href={program.form} target='blank'><button>REGISTRATE</button></a> 
                                  }
                                </Accordion.Item>
                                </Accordion>
                              : <><h2>{program.name}</h2><p>{program.rol}</p><h6>{program.conference}</h6></>}
                          </div>
                        </div>
                        <div className='d-inline-flex'>
                            {
                            program.avatar === ''
                              ? ''
                              : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            }
                            {
                            program?.avatar2
                              ? <img onClick={() => handleModal(program?.id_s2)} src={program.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                              : ''
                            }
                            {
                            program?.logo
                              ? <img src={program.logo} width={100} height={100} className='h-100 ms-2 program-date-avatar img-logo' alt='speaker' />
                              : ''
                            }
                          </div>
                      </div>
                    )
                  })}
                </Tab>
                <Tab
                  eventKey='day3'
                  title={
                    <>
                      <strong>Día 3</strong><br />
                      <span>viernes 6 de octubre</span>
                    </>
                  }
                >
                  {programs?.oct_6.map((program, index) => {
                    return (
                      <div key={index} className='program-date-item  align-items-center'>
                      <div style={{ width: '100px' }}>
                          <p style={{ width: '100px' }}>
                            <strong>{program.hour}</strong><br />
                            <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg> {program.duration}
                          </p>
                        </div>
                        <div className=' align-items-center justify-content-between w-100'>
                          <div>
                            {program?.resume
                              ? <Accordion>
                                <Accordion.Item eventKey={index}>
                                  <Accordion.Header>
                                    <h2  className='title-speaker'>{program.name}</h2>
                                    <p>{program.rol}</p>
                                    <p>{program.institution}</p>
                                    <h4  style={{ color: '#ff0505' }}>{program.conference}</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    {program.resume}
                                  </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                              : <><h2>{program.name}</h2><p>{program.rol}</p><h6>{program.conference}</h6></>}
                          </div>
                        </div>
                        <div className='d-inline-flex'>
                            {
                            program.avatar === ''
                              ? ''
                              : <img onClick={() => handleModal(program?.id)} src={program.avatar} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                            }
                            {
                            program?.avatar2
                              ? <img onClick={() => handleModal(program?.id_s2)} src={program.avatar2} width={100} height={100} className='rounded-circle ms-4 program-date-avatar' alt='speaker' />
                              : ''
                            }
                            {
                            program?.logo
                              ? <img src={program.logo} width={100} height={100} className='h-100 program-date-avatar img-logo' alt='speaker' />
                              : ''
                            }
                          </div>
                      </div>
                    )
                  })}
                </Tab>
              </Tabs>
            </div>
            <h1 className='mt-5 text-light'>Ponentes</h1>
            <p className='text-light'>Déjate inspirar por nuestros increíbles ponentes.</p>
            <div className='mt-5 pb-5 program-wrapper-speakers'>
              {speakers.map((speaker, index) => (
                <button key={index} onClick={() => handleModal2(speaker)}>
                  <div className='speaker-item h-100'>
                    <img src={speaker.avatar} width={300} height={300} alt={speaker.name} />
                    <div className='info_speakers'>
                      <h3>{speaker.name}</h3>
                      <p className='m-0'>{speaker.rol}</p>
                      <small>{speaker.company}</small>
                    </div>
                  </div>
                </button>
              ))}
              <div />
            </div>
          </Container>
          <DetailSpeaker
            show={modalShow}
            onHide={() => setModalShow(false)}
            speaker={detailSpeaker}
          />
        </div>
      </>
    )
  }
  