/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import MyNavBar from "../../components/MyNavBar/MyNavBar";

function Crime() {
    return (
        <div id="crimeScene">
            <MyNavBar />
            <div className="secaoAbre">
                <img src="/crime.png" alt="" className="secaoImg" />
                <h3 className="secaoTitle">Crime Scene & Trauma Cleanup</h3>
                {/* <p>If you've been affected by tragic loss in the home or business, SafeHaz Cleanup's compassionate and discreet crime scene cleanup experts are available 24/7 and can arrive within a few hours of your call. We will help you move past emotional trauma and onto the road to recovery.</p> */}
            </div>
            <Container>
                <Row>
                <Col>
                    </Col>
                    <Col lg={4}>
                        <h1 className="title">Why hire <span className="safeHaz">SafeHaz Cleanup</span> for biohazard cleanup?</h1>
                    </Col>
                    <Col lg={6}>
                        <p className="paragraph">Unlike standard house or business cleaning, biohazard cleanup is a service that requires industry expertise, specialized equipment, and appropriate certifications. <span className="safeHaz">SafeHaz Cleanup</span> has developed a disinfection process backed by more than 20 years of research and experience to ensure your home or business is void of health and safety risks. Our discreet biohazard cleanup team handles all cases with compassion, professionalism, and efficiency. <span className="safeHaz">SafeHaz Cleanup</span> provides services following incidents involving biohazards, including crime scenes, trauma, or hazardous material spills, ensuring thorough decontamination and restoring the area to a safe state while adhering to all industry regulations.</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Crime;