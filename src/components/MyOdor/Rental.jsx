import { Container, Row, Col } from "react-bootstrap";

function Rental() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Managing Odor Issues in Rental Properties</h1>
                </Col>
                <Col lg={7}>
                    <p className="paragraph">Landlords and property owners are more likely to encounter an unattended death at some point. Recognizing the smell of a decomposing body is crucial for maintaining both tenant safety and the physical condition of the property.
                        If you’re a tenant and notice an unusual odor, it’s important to notify your landlord or property manager immediately. This ensures that appropriate measures are taken to address the situation effectively.
                        We offer odor removal and remediation services 24 hours a day, 7 days a week. Contact us for more information about our services and how we can assist in resolving any biohazard issues.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Rental