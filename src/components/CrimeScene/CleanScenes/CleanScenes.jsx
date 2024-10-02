import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function CleanScenes() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">How do We Clean Crime Scenes?</h1>
                </Col>
                
                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Compliance and Precautions</CardTitle>
                            <CardText>
                                We adhere to OSHA regulations concerning bloodborne pathogens and practice universal precautions to protect our employees and customers.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Science-Based Containment</CardTitle>
                            <CardText>
                                Our science-based process ensures that we contain the affected areas to prevent cross-contamination and remove all traces of blood and biological materials.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Disinfection and Deodorization</CardTitle>
                            <CardText>
                                We disinfect and deodorize the affected areas to restore cleanliness and freshness.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Thorough Safety Assurance</CardTitle>
                            <CardText>
                                We test to confirm that the affected areas are free of pathogens, demonstrating our commitment to the health and safety of you and your family.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CleanScenes;