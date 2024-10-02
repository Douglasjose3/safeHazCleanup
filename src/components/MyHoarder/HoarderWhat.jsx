import { Container, Row, Col } from "react-bootstrap"


function HoarderWhat() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">What Is Hoarding?</h1>
                </Col>
                <Col lg={7}>
                    <p className="paragraph">Hoarding is a psychological disorder characterized by an overwhelming urge to accumulate items and an inability to part with them, regardless of their value. This condition can lead to severe clutter, where spaces become filled with items to the point of being unusable. The health and safety risks associated with hoarding are often underestimated. Hoarding can create environments ripe for the growth of harmful bacteria and the accumulation of biohazardous materials. Extreme filth, including human and animal waste, is common in severe cases, posing significant health hazards. These materials must be managed as biohazardous waste to prevent contamination and ensure a safe living environment.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HoarderWhat