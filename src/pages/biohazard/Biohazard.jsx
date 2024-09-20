import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Company from "../../components/MyBiohazar/Company/Company";
import Important from "../../components/MyBiohazar/Important/important";
import Process from "../../components/MyBiohazar/Process/Process";
import Remediation from "../../components/MyBiohazar/Remediation/Remediation";
import Services from "../../components/MyBiohazar/Servies/Services";
import MyNavBar from "../../components/MyNavBar/MyNavBar";


function Biohazard() {
    return (
        <div id="biohazard">
            <MyNavBar />
            <div className="secaoAbre">
                <img className="secaoImg" src="/biohazard.png" alt="" />
                <h3 className="secaoTitle">Biohazard Cleanup</h3>
            </div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col lg={4}>
                        <h1 className="title">Why hire <span className="safeHaz">SafeHaz Cleanup</span> for biohazard cleanup?</h1>
                    </Col>
                    <Col lg={6}>
                        <p className="paragraph">Unlike standard house or business cleaning, biohazard cleanup is a service that requires industry expertise, specialized equipment, and appropriate certifications. <span className="safeHaz">SafeHaz Cleanup</span> has developed a disinfection process backed by more than 20 years of research and experience to ensure your home or business is void of health and safety risks. Our discreet biohazard cleanup team handles all cases with compassion, professionalism, and efficiency. <span className="safeHaz">SafeHaz Cleanup</span> provides services following incidents involving biohazards, including crime scenes, trauma, or hazardous material spills, ensuring thorough decontamination and restoring the area to a safe state while adhering to all industry regulations.</p>
                    </Col>

                    <div className="mt-5">
                        <Company />
                    </div>
                    
                    <div className="mt-5">
                        <Remediation />
                    </div>

                    <div className="">
                        <Process />
                    </div>

                    <div className="mt-5">
                        <Important />
                    </div>

                    <div className="mt-5">
                        <Services />
                    </div>


                </Row>
            </Container>

            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Biohazard;