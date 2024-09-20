import { Container, Row, Col } from "react-bootstrap";


function Remediation() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">What is Remediation?</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Many people think biohazard cleanup, also known as crime scene cleanup, is like regular cleaning, but they are very different. Biohazard remediation focuses on removing, cleaning, and disinfecting blood, bodily fluids, and other dangerous pathogens after events like death, accidents, or disease outbreaks. This specialized service requires proper training, equipment, certification, and licensing due to the risk of exposure to harmful pathogens.
                        <span className="safeHaz"> SafeHaz Cleanup</span> uses a 5-step process and specialized cleaning agents to ensure the safety of clients and their properties. With over 20 years of experience, we uphold the highest standards in the industry and offer a 100% Customer Satisfaction Guarantee.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Remediation;