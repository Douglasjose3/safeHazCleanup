import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './cards.css';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useNavigate } from 'react-router-dom';

function Cards() {
    useState(() => {
        Aos.init();
    }, []);

    const navigate = useNavigate();

    const handleButtonClickBio = () => {
        navigate('biohazard');
    };
    const handleButtonClickBlood = () => {
        navigate('blood')
    };
    const handleButtonClickCrime = () => {
        navigate('crimeScene');
    };
    const handleButtonCLickOdor = () => {
        navigate('odor')
    };
    const handleButtonCLickFire = () => {
        navigate('fire')
    };
    const handleButtonClickHoarder = () => {
        navigate('hoarder')
    };
    const handleButtonClickMold = () => {
        navigate('mold')
    };
    const handleButtonClickSmoke = () => {
        navigate('smoke')
    };
    const handleButtonClickDeath = () => {
        navigate('death')
    };

    return (
        <div className='cardsDiv'>
            <Container>
                <h1 className='cardsH1'>What We do Best!</h1>
                <Row>
                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/biohazard_icon.png" alt="Biohazar icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Biohazard Cleanup</Card.Title>
                                <Card.Text>
                                    Cleaning and decontamination of locations that contain hazardous materials, such as blood, bodily fluids, chemical, or biological waste. This service is carried out by trained professionals, typically after accidents, crimes, or exposure to pathogens.
                                </Card.Text>
                                <Button onClick={handleButtonClickBio} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/blood_icon.png" alt="Blood icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Blood Cleanup</Card.Title>
                                <Card.Text>
                                    The process involves cleaning and disinfecting areas contaminated with blood after accidents, injuries, or crimes. Specialists use techniques and products to safely remove blood, stop the spread of pathogens, and restore the area to a safe condition.
                                </Card.Text>
                                <Button onClick={handleButtonClickBlood} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/crime_icon.png" alt="Crime icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Crime Scene And Trauma Cleanup</Card.Title>
                                <Card.Text>
                                    It is the process of cleaning and decontaminating locations where crimes, serious accidents, or trauma have occurred. Professionals remove blood, bodily fluids, and other hazardous waste, ensuring the safety and health of the environment after the incident.
                                </Card.Text>
                                <Button onClick={handleButtonClickCrime} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/decomp_icon.png" alt="Decomposition icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Decomposition Odor Removal</Card.Title>
                                <Card.Text>
                                    It is the process of eliminating strong odors caused by body decomposition. Specialized technicians use techniques and products to neutralize the smell, disinfect the area, and restore air quality, ensuring a safe and habitable environment.
                                </Card.Text>
                                <Button onClick={handleButtonCLickOdor} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/fire_icon.png" alt="Fire icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Fire Damage Restoration</Card.Title>
                                <Card.Text>
                                    Is the process of cleaning and restoring properties affected by fire, smoke, and soot. Specialists remove debris, clean damaged areas, and eliminate smoke odors. They also repair structural damage, ensuring the space is safe and habitable again.
                                </Card.Text>
                                <Button onClick={handleButtonCLickFire} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/hoarder_icon.png" alt="Hoarder icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Hoarder Cleanup Services</Card.Title>
                                <Card.Text>
                                    Involves the meticulous removal of clutter and items from a property due to hoarding behavior. Professionals handle the task with sensitivity, ensuring proper disposal of items, addressing health hazards, and restoring the space to a functional state.
                                </Card.Text>
                                <Button onClick={handleButtonClickHoarder} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/mold_icon.png" alt="Mold icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Mold Remediation</Card.Title>
                                <Card.Text>
                                    Identifying and removing mold from a property. Experts assess contamination, clean surfaces and air with specialized tools, and apply treatments to prevent future mold. This ensures a safe, healthy environment by addressing current and potential issues.
                                </Card.Text>
                                <Button onClick={handleButtonClickMold} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/smoke_icon.png" alt="Smoke icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Smoke Remediation</Card.Title>
                                <Card.Text>
                                    Removing smoke damage and odors from property. Professionals thoroughly clean and deodorize affected areas, treat surfaces and ventilation systems, and ensure all residues are addressed to restore a clean and healthy environment after a fire.
                                </Card.Text>
                                <Button onClick={handleButtonClickSmoke} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} className='mb-4'>
                        <Card className='cards'>
                            <img className='imgCards' src="/death_icon.png" alt="Death icon" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Unattended Death Cleanup</Card.Title>
                                <Card.Text>
                                    Involves cleaning and disinfecting areas where a person has passed away. Professionals remove biohazardous materials, clean and deodorize the space, and restore the property to a safe condition, preventing health risks associated with decomposition.
                                </Card.Text>
                                <Button onClick={handleButtonClickDeath} className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* <Col lg={4} className='mb-4' >
                        <Card className='cards'>
                            <img className='imgCards' src="/water_icon.png" alt="Crime icon" data-aos="flip-left" />
                            <Card.Body>
                                <Card.Title className='cardsTitle'>Water Damage Restoration</Card.Title>
                                <Card.Text>
                                    Involves assessing and repairing damage from water intrusion. Professionals remove standing water, dry and dehumidify areas, and repair or replace damaged materials to restore the property and prevent mold and structural issues.
                                </Card.Text>
                                <Button className='call' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default Cards;