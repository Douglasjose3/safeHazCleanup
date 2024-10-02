/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap"

function Solutions() {
    return (
        <Container className="dislplayBlockCard cardBg ps-5 pe-5">
            <h1 className="title text-center mb-4 pt-5">Smoke Damage Types and Solutions</h1>
            <Row className="mt-4">

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Fuel/Oil Smoke Damage Overview</CardTitle>
                            <CardText>
                                Fuel or oil smoke damage, also known as petroleum residue, occurs when petroleum-based products burn or heating appliances like oil-fired furnaces malfunction. A small leak or explosion can spread smoke and soot throughout the property.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Challenges of Cleaning <br />Petroleum Residue</CardTitle>
                            <CardText>
                                Petroleum residue is dense, sticky, and difficult to remove. It has a strong, unpleasant odor and can quickly ruin furniture and fabrics if not addressed promptly.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Protein Smoke Damage <br />from Kitchen Fires</CardTitle>
                            <CardText>
                                Protein smoke damage results from cooking mishaps where organic matter evaporates during low-heat fires. This type of damage leaves behind burnt food odors that permeate the home, discoloring surfaces and leaving residue on walls and furniture.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Wet Smoke Damage Explained</CardTitle>
                            <CardText>
                                Wet smoke damage stems from smoldering, low-heat fires, often involving plastics or rubber. This creates thick, black smoke and leaves a dense, sticky residue that’s tough to clean without professional equipment.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">Lingering Odors and <br />Surface Discoloration</CardTitle>
                            <CardText>
                                Both protein and wet smoke damage leave strong, persistent odors and can discolor surfaces, making it crucial to remove all residues and eliminate the smell to restore the property's original condition.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle className="cardBold">The Goal of Smoke <br />Damage Restoration</CardTitle>
                            <CardText>
                                The goal of smoke damage restoration is to completely eliminate all evidence of smoke. Professional restorers work to bring a home or building back to its pre-damage condition, ensuring the space is safe and free of harmful residues.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Solutions;