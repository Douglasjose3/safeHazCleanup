import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

function Residues() {
    return (
        <Container className="cardBg">
            <Row>
                <Col lg={3}>
                    <h1 className="title">Classification of Fire Residues</h1>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Protein Residues</CardTitle>
                            <CardText>
                                The result of overcooked or burned meat, fish, or beans. The residue ranges in color from yellow to brown. It has a greasy texture that sticks to most surfaces, making it difficult to remove.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Natural Substance Odor and Residue</CardTitle>
                            <CardText>
                                Caused by burned paper or wood. Natural substance odors come from campfires, forest fires, or wood fireplaces. The residue is grey to black and has a dry, powder-like texture.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Synthetic Residues</CardTitle>
                            <CardText>
                                Produced when oil-based materials burn, such as carpets, upholstery, and furniture. These residues are thick, heavy, black, and smear easily, making them challenging to clean.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={2} className="mt-5">
                    <Card lg={1}>
                        <CardBody>
                            <CardTitle className="cardBold">Hazardous Residues</CardTitle>
                            <CardText>
                                Synthetic materials, like window shades, draperies, and toys, release harmful chemicals and leave behind toxic black residues after a fire, requiring specialized cleaning methods.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Residues;