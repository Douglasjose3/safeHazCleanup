import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap"

function HoarderDesinfection() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">Professional Hoarding Cleanup and Disinfection</h1>
                </Col>
                
                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Decades of Experience in Hoarding Cleanup</CardTitle>
                            <CardText>
                                <span className="safeHaz">SafeHaz Cleanup</span> has helped families and friends with hoarding cleanup for over two decades. Despite recent media attention spotlighting hoarding as a serious issue, the social stigma still exists. When facing extreme hoarding situations, professional remediation is crucial.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Protection Against Biohazards</CardTitle>
                            <CardText>
                                Our expert technicians wear personal protective equipment (PPE) and respiratory protection during cleanups to avoid exposure to biohazards such as Hanta virus, Histoplasmosis, MRSA, E. coli, and other harmful pathogens.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Strict Safety Protocols</CardTitle>
                            <CardText>
                                <span className="safeHaz">SafeHaz Cleanup</span> follows a strict protocol for removing and disinfecting biohazardous materials, adhering to local, state, and federal regulations to ensure a thorough and safe cleanup process.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Compassionate and Discreet Service</CardTitle>
                            <CardText>
                                We understand the sensitivity of these situations. Our team provides immediate assistance with care and discretion, ensuring your privacy and peace of mind throughout the process.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HoarderDesinfection