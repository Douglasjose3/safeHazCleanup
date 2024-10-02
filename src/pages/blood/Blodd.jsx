import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Hire from "../../components/Hire/Hire";
import Process from "../../components/MyBiohazar/Process/Process";
import HowDo from "../../components/MyBlood/HowDo";

import Footer from "../../components/Footer/Footer";
import Services from "../../components/Servies/Services";
import Remediation from "../../components/MyBiohazar/Remediation/Remediation";


function Blodd() {
    return (
        <div className="blood">
            <MyNavBar />

            <div className="secaooAbre">
                <img src="/blood.png" alt="Plastic bag with paper red" className="secaoImg" />
                <h3 className="secaoTitle">Blood Cleanup</h3>
            </div>

            <div className="mt-5">
                <Hire />
            </div>

            <div className="mt-5">
                <Process />
            </div>

            <div className="mt-5">
                <HowDo />
            </div>

            <div className="mt-5">
                <Services />
            </div>

            <div className="mt-5 mb-5">
                <Remediation />
            </div>


            <Footer />
        </div>
    )
}

export default Blodd