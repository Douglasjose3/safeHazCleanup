import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap"

function Desinfect() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">What to Look For in a <br />Biohazard Company!</h1>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Understanding Bioremediation</CardTitle>
                            <CardText>
                                Bioremediation, also known as crime scene or death cleanup, goes beyond standard cleaning. It involves the comprehensive removal, cleaning, and disinfection of areas contaminated by blood, bodily fluids, and harmful pathogens.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Specialized Cleanup Services</CardTitle>
                            <CardText>
                                Unattended death cleanup requires specialized services due to the high risk of exposure to bloodborne pathogens. Our team is trained to handle these sensitive situations with the utmost care and precision.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Proper Training and Equipment</CardTitle>
                            <CardText>
                                Effective cleanup of biohazardous materials demands proper training and specialized equipment. Our technicians are certified and use advanced tools to ensure thorough disinfection and safety.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Certification and Licensing</CardTitle>
                            <CardText>
                                Unattended death cleanup is a regulated service that requires specific certification and licensing. We adhere to all industry standards to guarantee a safe and compliant remediation process.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Desinfect;