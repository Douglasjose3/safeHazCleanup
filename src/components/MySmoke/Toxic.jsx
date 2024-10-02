import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function Toxic() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">Toxic Chemicals After a Fire</h1>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Credentials</CardTitle>
                            <CardText>
                                After a fire, lingering odors and discoloration often indicate the release of hazardous chemicals from common building materials and household items. These toxins pose significant health risks if not properly removed.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">PVC (Polyvinyl Chloride) Risks</CardTitle>
                            <CardText>
                                PVC is found in many household products, such as flooring and plumbing. When burned, it releases harmful chemicals like hydrogen chloride and dioxin, which can cause respiratory issues and long-term health problems.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Dangers of Carbon Materials</CardTitle>
                            <CardText>
                                Burning carbon-based building materials releases hazardous substances like ammonia, nitrogen oxide, and tar. These can cause severe health problems if not properly cleaned and restored.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Carbon Monoxide Threat</CardTitle>
                            <CardText>
                                Carbon monoxide, an invisible and odorless gas, is released during fires and can be deadly if inhaled. Proper restoration and ventilation are critical to ensure safety after a fire.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Toxic;