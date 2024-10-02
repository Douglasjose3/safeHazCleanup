import { Container, Row, Col } from "react-bootstrap";

function Unattended() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title"><span className="safeHaz">SafeHaz Cleanup’s</span> Unattended Death Remediation Process</h1>
                </Col>
                <Col lg={7}>
                    <p className="paragraph">At <span className="safeHaz">SafeHaz Cleanup</span>, we’ve developed a thorough multi-step remediation process using proprietary, EPA-approved cleaning agents to safeguard the health and safety of our clients and their properties. With over 20 years of experience, we adhere to the strictest standards in biohazard remediation, ensuring full protection for both our clients and team members. We guarantee 100% customer satisfaction. Our expert technicians are highly trained in cleaning, disinfecting, and deodorizing homes and businesses affected by unattended deaths.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Unattended;