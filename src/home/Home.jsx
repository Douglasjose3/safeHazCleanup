import MyNavBar from "../components/MyNavBar/MyNavBar";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import Sobre from "../components/Sobre/Sobre";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <>
            <MyNavBar />
            <MyCarousel />
            <Sobre />
            <Cards/>
            <Footer />
        </>
    )
}

export default Home;