import { Container, Row, Col } from "react-bootstrap"

function Risks() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Health Risks of Smoke Damage</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">After a fire, proper smoke restoration is crucial to eliminate chemical and structural hazards that can severely affect health. The chemicals left from damaged materials can linger, causing respiratory issues such as asthma, bronchitis, and other complications. Skin and eye irritation, including redness and itching, are also common effects. Without thorough restoration, long-term risks may include cancer, heart attacks, stroke, and serious health consequences for infants. Ensuring proper cleanup is vital for preventing these health threats.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Risks;