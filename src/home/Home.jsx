import MyNavBar from "../components/MyNavBar/MyNavBar";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import Sobre from "../components/Sobre/Sobre";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Services from "../components/Servies/Services";

function Home() {
    return (
        <>
            <MyNavBar />
            <MyCarousel />
            <Sobre />
            <Cards/>
            <div className="mb-5">
                <Services />
            </div>
            <Footer />
        </>
    )
}

export default Home;