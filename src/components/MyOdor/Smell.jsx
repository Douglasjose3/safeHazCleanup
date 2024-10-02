import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function Smell() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">How Long After Death Does A Body Smell?</h1>
                </Col>
                
                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Odor Begins Quickly</CardTitle>
                            <CardText>
                                In some conditions, a body can start emitting a noticeable odor just hours after death.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Weather and Environment Matter</CardTitle>
                            <CardText>
                                Temperature and humidity play a big role in how fast the smell develops, accelerating decomposition in warmer climates.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Impact on Property</CardTitle>
                            <CardText>
                                Within a few days, the odor can permanently damage items like furniture, carpets, and clothing.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Professional Cleanup is Essential</CardTitle>
                            <CardText>
                                Due to the rapid spread of odors and bacteria, professional intervention is necessary to restore the safety and livability of the space.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Smell