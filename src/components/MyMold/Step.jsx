/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap"

function Step() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">Mold Remediation: Step-by-Step Process</h1>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Identifying Mold Growth</CardTitle>
                            <CardText>
                                Mold remediation starts with identifying mold and assessing the damage. Our expert technicians determine the source of the mold and evaluate its spread to ensure all affected areas are treated properly.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Preventing Mold Spread</CardTitle>
                            <CardText>
                                Mold spreads quickly and often isn't visible. Inexperienced technicians may leave areas untreated, leading to regrowth. Our team ensures that both visible and hidden mold are fully addressed to prevent future issues.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Advanced Mold Removal Techniques</CardTitle>
                            <CardText>
                                We use state-of-the-art equipment, including HEPA filters, to remove mold particles from infected areas and prevent spores from spreading to other parts of your property.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Long-Term Mold Prevention</CardTitle>
                            <CardText>
                                In addition to removing mold, we provide recommendations to prevent it from returning, safeguarding your property from future mold growth and potential damage.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Step;