import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Company from "../../components/MyBiohazar/Company/Company";
import Hire from "../../components/Hire/Hire";
import Importante from "../../components/MyBiohazar/Importante/Importante";
import Process from "../../components/MyBiohazar/Process/Process";
import Remediation from "../../components/MyBiohazar/Remediation/Remediation";
import Services from "../../components/Servies/Services";
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
                        <Importante />
                    </div>

                    <div className="mt-5">
                        <Services />
                    </div>


            </Container>

            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Biohazard;