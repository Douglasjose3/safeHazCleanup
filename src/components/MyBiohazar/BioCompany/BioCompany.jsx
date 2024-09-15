import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function BioCompany() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">What to look for in a <br />biohazard company!</h1>
                </Col>
                
                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Credentials</CardTitle>
                            <CardText>
                                <p><span className="safeHaz">Safehaz Cleanup</span> is compliant with all local and federal safety standards. We adhere to a 28-point checklist that enforces both regulatory compliance and quality assurance.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Compassion</CardTitle>
                            <CardText>
                                <p>We know that our customers call us during times of crisis. That’s why our staff is trained to comfort grieving families and complete their work with the utmost discretion.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Training</CardTitle>
                            <CardText>
                                <p>Our technicians receive intensive training in OSHA and other regulatory standards, bloodborne pathogen, personal protective equipment (PPE), respiratory protection, hazardous communication, and heat-illness awareness compliance and training.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Proof</CardTitle>
                            <CardText>
                                <p>Once cleanup is complete, each area affected by biohazards goes through rigorous ATP testing to ensure harmful pathogens are eradicated on a molecular level, guaranteeing hospital-level cleanliness.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default BioCompany;