import { Container, Row, Col } from "react-bootstrap"

function Professional() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Professional Crime Scene Cleanup</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Crime scene cleanup services are essential in traumatic situations, whether in homes or businesses, where the physical remnants of such events need to be safely removed. These environments, which may be contaminated with blood, bodily fluids, biohazards, or infectious diseases, present serious unseen dangers to those nearby. To restore safety and ensure the area is free from harmful pathogens, the cleanup must be handled by trained specialists with the expertise to decontaminate the space efficiently, discreetly, and with a compassionate approach.
                        <br /><span className="safeHaz"> SafeHaz Cleanup</span> is the most trusted company in the country in this field, as we not only follow all state and federal safety standards but also go above and beyond to ensure a comprehensive service. Understanding the emotional impact of such events, we use discreet vehicles to protect your privacy and ensure your peace of mind. Your safety and well-being are our top priority.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Professional;