import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function Company() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">What to Look For in a <br />Biohazard Company!</h1>
                </Col>
                
                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Credentials</CardTitle>
                            <CardText>
                                <span className="safeHaz">Safehaz Cleanup</span> is compliant with all local and federal safety standards. We adhere to a 28-point checklist that enforces both regulatory compliance and quality assurance.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Compassion</CardTitle>
                            <CardText>
                                We know that our customers call us during times of crisis. That’s why our staff is trained to comfort grieving families and complete their work with the utmost discretion.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Training</CardTitle>
                            <CardText>
                                Our technicians receive intensive training in OSHA and other regulatory standards, bloodborne pathogen, personal protective equipment (PPE), respiratory protection, hazardous communication, and heat-illness awareness compliance and training.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Proof</CardTitle>
                            <CardText>
                                Once cleanup is complete, each area affected by biohazards goes through rigorous ATP testing to ensure harmful pathogens are eradicated on a molecular level, guaranteeing hospital-level cleanliness.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Company;