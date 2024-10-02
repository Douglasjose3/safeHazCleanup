/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";


function Process() {
    return (
        <Container className="dislplayBlockCard cardBg ps-5 pe-5">
            <h1 className="title text-center mb-4 pt-5">The <span className="safeHaz">SafeHaz Cleanup</span> Remediation Process</h1>
            <Row className="mt-4">

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Assess</CardTitle>
                            <CardText>
                                We conduct an initial walk-through of the scene and an OSHA-mandated employee-safety hazard assessment to identify potential safety risks.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Clean, Disinfect, and Deodorize</CardTitle>
                            <CardText>
                                After removal, we clean, disinfect, and deodorize all surfaces using EPA-approved disinfectants to ensure a safe environment.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Control and Setup</CardTitle>
                            <CardText>
                                We follow OSHA's recommended cross-contamination control protocols, isolating the affected area and ensuring that other parts of the structure remain protected.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Remove</CardTitle>
                            <CardText>
                                We eliminate all visible signs of blood and biological matter from the affected area. This is the most critical and hazardous step in the remediation process.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Restore</CardTitle>
                            <CardText>
                                After verification, we restore the area to its original condition, ensuring there are no health or safety risks remaining.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Verify</CardTitle>
                            <CardText>
                                We utilize adenosine triphosphate (ATP) testing technology to ensure hospital-grade disinfection standards are met, confirming effective cleaning.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Process;