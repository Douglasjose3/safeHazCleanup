import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";


function BioProcess() {
    return (
        <Container className="processItem">
                    <h1 className="title text-center mb-4">The <span className="safeHaz">SafeHaz Cleanup</span> remediation process</h1>
            <Row className="mt-4">
                
                
                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Assess</CardTitle>
                            <CardText>
                                We complete an initial walk-through and OSHA-mandated employee-safety hazard assessment of the scene.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Control and Setup</CardTitle>
                            <CardText>
                                We follow OSHA’s recommended cross-contamination protocols to control the area by securing and isolating it from other parts of the structur.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Remove</CardTitle>
                            <CardText>
                                We eliminate all visible signs of blood and biological matter from the affected area. This step is the most hazardous in the remediation process.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Clean, Disinfect, and Deodorize</CardTitle>
                            <CardText>
                                After removal, we clean, disinfect, and deodorize surfaces with EPA-approved disinfectants.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Verify</CardTitle>
                            <CardText>
                                Once completed, we utilize adenosine triphosphate (ATP) testing technology to ensure hospital-grade disinfection standards.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default BioProcess;