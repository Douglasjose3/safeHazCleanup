import { Container, Row, Col } from "react-bootstrap"

function MyTeam() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Expert Team with Advanced Equipment</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">At <span className="safeHaz">SafeHaz Cleanup</span>, we pride ourselves on delivering exceptional service. Your health and safety are our top priorities, and our strong reputation is built on trust and customer satisfaction. Mold remediation can be overwhelming, but we’re here to help make the process as smooth as possible. Our highly trained team, equipped with cutting-edge technology, is available 24/7 to address any concerns or questions you may have, ensuring your peace of mind throughout the entire remediation process.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default MyTeam