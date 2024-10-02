import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Removing from "../../components/MyOdor/Removing";
import Smell from "../../components/MyOdor/Smell";
import Restoration from "../../components/MyOdor/Restoration";
import Identifying from "../../components/MyOdor/Identifying";
import Rental from "../../components/MyOdor/Rental";
import Footer from "../../components/Footer/Footer";


function Odor() {
    return (
        <div id="odor">
            <MyNavBar />

            <div className="secaoAbre">
                <img className="secaoImg" src="decomp.png" alt="" />
                <h1 className="secaoTitle">Decomposition <br />Odor Removal</h1>
            </div>

            <div className="nt-5">
                <Removing />
            </div>

            <div className="mt-5">
                <Smell />
            </div>

            <div className="mt-5">
                <Restoration />
            </div>

            <div className="mt-5">
                <Identifying />
            </div>

            <div className="mt-5 mb-5">
                <Rental />
            </div>

            <Footer />
        </div>
    )
}

export default Odor;