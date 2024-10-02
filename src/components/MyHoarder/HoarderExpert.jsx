import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap"

function HoarderExpert() {
    return (
        <Container className="cardBg ps-5 pe-5">
            <h1 className="title text-center mb-4 pt-5">Expert Hoarding Cleanup</h1>
            <Row>
                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="text-center">
                                <span className="bold">Prevalence of Hoarding</span><br /> An estimated 4-5% of the U.S. population struggles with hoarding.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="text-center">
                                <span className="bold">Discreet Assistance</span> <br /><span className="safeHaz">SafeHaz Cleanup</span> works with families and loved ones of individuals who are unable to maintain their property due to physical or mental limitations.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-4">
                    <Card>
                        <CardBody>
                            <CardText className="text-center">
                                <span className="bold">Health and Safety Risks</span><br />Many people are unaware of the dangers posed by hoarding, particularly when biohazards such as bacteria or waste are involved.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="mb-3">
                    <Card>
                        <CardBody>
                            <CardText className="text-center">
                                <span className="bold">Complications of Hoarding</span><br />Hoarding situations often include filth, bacterial growth, and human or animal waste, increasing the complexity of the cleanup.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-3">
                    <Card>
                        <CardBody>
                            <CardText className="text-center">
                                <span className="bold">Importance of Professional Help</span><br />For cases involving severe hoarding and biohazards, professional cleanup services are essential.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="mb-3">
                    <Card>
                        <CardBody>
                            <CardText className="cardBold text-center">
                                <span className="bold">Safe and Livable Conditions</span><br />Our expert team ensures thorough removal of debris and contaminants, restoring the space to a safe and livable condition.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default HoarderExpert;