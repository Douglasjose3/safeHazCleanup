import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function Identifying() {
    return (
        <Container className="processItem cardBg ps-5 pe-5">
            <h1 className="title text-center mb-4 pt-5">Identifying Odors Requiring Biohazard Removal</h1>
            <Row className="mt-4">

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Cadaverine and Putrescine</CardTitle>
                            <CardText>
                                These compounds produce a strong odor similar to rotting flesh, which is a clear indicator of decomposition.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Skatole</CardTitle>
                            <CardText>
                                Known for its pungent feces-like smell, skatole is a compound that indicates the presence of biological decay.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Indole</CardTitle>
                            <CardText>
                                This compound emits a mustier, mothball-like smell, often associated with decomposition and decay.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Hydrogen Sulfide</CardTitle>
                            <CardText>
                                Hydrogen sulfide has a distinct rotten egg odor and is a common gas released during decomposition.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Methanethiol</CardTitle>
                            <CardText>
                                Methanethiol produces a smell akin to rotting cabbage, which can signal serious biohazard issues.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Dimethyl Disulfide and Trisulfide</CardTitle>
                            <CardText>
                                These compounds emit a foul, garlic-like odor, often indicating significant biological decay and contamination.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Identifying;