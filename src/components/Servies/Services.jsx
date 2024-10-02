import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap"

function Services() {
    return (
        <Container className="cardBg ps-5 pe-5">
            <h1 className="title text-center mb-4 pt-5">Our Biohazard Services Include!</h1>
            
            <Row className="className="dislplayBlockCard>
                <Col lg="4" className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Biohazard Removal
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4" className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Blood Cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="4" className="mb-3">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Crime Scene & Trauma Cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6" className="mb-3">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Hoarding Cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="6" className="mb-3">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Unattended Death Cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Services;