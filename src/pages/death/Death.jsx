import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Hire from "../../components/Hire/Hire";
import Process from "../../components/MyBiohazar/Process/Process";
import Unattended from "../../components/MyDeath/Unattended";
import Desinfect from "../../components/MyDeath/Desinfect";
import After from "../../components/MyDeath/After";
import Services from "../../components/Servies/Services";

import Footer from "../../components/Footer/Footer";

function Death() {
    return (
        <div id="death">
            <MyNavBar />
        
        <div className="secaoAbre">
            <img src="/death.png" alt="" className="secaoImg" />
            <h3 className="secaoTitle">Unattended Death Cleanup</h3>
        </div>

        <div className="mt-5">
            <Hire />
        </div>

        <div className="mt-5">
            <Process />
        </div>

        <div className="mt-5">
            <Unattended />
        </div>

        <div className="mt-5">
            <Desinfect />
        </div>

        <div className="mt-5">
            <After />
        </div>

        <div className="mt-5 mb-5">
            <Services />
        </div>


            <Footer />
        </div>
    )
}

export default Death;