import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './cards.css';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards() {
    useState (() => {
        Aos.init();
    }, []);

    return (
        <div className='cardsDiv'>
            <Container>
                <h1 className='cardsH1'>What We do Best!</h1>
                <Row>
                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/biohazard_icon.png" alt="Biohazar icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Biohazard Cleanup</Card.Title>
                                <Card.Text>
                                    Limpeza e descontaminação de locais que contêm materiais perigosos, como sangue, fluidos corporais, resíduos químicos ou biológicos. Serviço realizado por profissionais treinados, geralmente após acidentes, crimes ou exposições a patógenos.
                                </Card.Text>

                                {/* Colocar função no botão */}
                                <Button to={"#biohazard"} className='cardsButton' variant="primary">Go somewhere</Button>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/crime_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Crime Scene And Trauma Cleanup</Card.Title>
                                <Card.Text>
                                    É o processo de limpeza e descontaminação de locais onde ocorreram crimes, acidentes graves ou traumas. Profissionais removem sangue, fluidos corporais e outros resíduos perigosos, garantindo a segurança e saúde do ambiente após o incidente.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/decomp_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Decomposition Odor Removal</Card.Title>
                                <Card.Text>
                                    É o processo de eliminar odores fortes causados pela decomposição de corpos. Técnicos especializados utilizam técnicas e produtos para neutralizar o cheiro, desinfetar o ambiente e restaurar a qualidade do ar, garantindo um local seguro e habitável.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/blood_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Blood Cleanup</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/fire_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Fire Damage Restoration</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/hoarder_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Hoarding Cleanup</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/mold_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Mold Remediation</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/smoke_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Smoke Remediation</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/water_icon.png" alt="Crime icon" data-aos="flip-left"/>
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Water Damage Restoration</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='cardsButton' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards;