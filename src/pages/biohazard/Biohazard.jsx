import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Company from "../../components/MyBiohazar/Company/Company";
import Important from "../../components/MyBiohazar/Important/important";
import Process from "../../components/MyBiohazar/Process/Process";
import Remediation from "../../components/MyBiohazar/Remediation/Remediation";
import Services from "../../components/MyBiohazar/Servies/Services";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Hire from "../../components/MyBiohazar/Hire/Hire";



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
                    <div className="mt-5">
                        <Hire />
                    </div>

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