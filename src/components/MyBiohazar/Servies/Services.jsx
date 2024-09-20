import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap"

function Services() {
    return (
        <Container className="cardBg ps-5 pe-5">
            <h1 className="title text-center mb-4 pt-5">Our biohazard services include</h1>
            <Row>
                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Homicide and suicide cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Blood cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Vehicle blood and bioremediation
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Biohazard removal
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Coronavirus and infectious disease cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                Hoarding cleanup
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default Services;