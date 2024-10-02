import { Container, Row, Col, } from "react-bootstrap";

function Damage() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Understanding <br />Smoke Damage</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">The aftermath of a fire involves more than just visible destruction; <span className="bold">smoke damage restoration</span> is a critical concern that must be addressed to ensure the safety and integrity of a property. Even areas not directly affected by the flames can suffer from the lingering effects of smoke. <span className="bold">Smoke and soot</span> can infiltrate every corner, causing ongoing damage if not properly remediated. <span className="safeHaz">SafeHaz Cleanup</span> addresses these concerns by providing expert services to mitigate further harm. If left untreated, smoke can discolor walls, corrode metals, tarnish finishes, and leave behind strong odors that carry potential health risks. Within hours, surfaces like kitchen appliances and walls may turn yellow, while smoke residue can tarnish metal and etch glass. The presence of lingering odors and stains indicates that harmful particles remain, which must be removed to prevent further health and environmental issues. <span className="safeHaz">SafeHaz Cleanup</span> specializes in <span className="bold">smoke odor removal</span>, <span className="bold">soot removal</span>, and <span className="bold">hazardous smoke cleanup</span>, identifying and addressing the five main types of smoke damage, each caused by different factors such as fire temperature, materials burned, and the location of the fire. Each type requires specific cleaning and <span className="bold">smoke damage repair</span> techniques to fully recover the space.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Damage;