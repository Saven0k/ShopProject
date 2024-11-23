import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Subscribe from "../components/subscribe/Subscribe";
import NewArrivals from "../components/newArrivals/newArrivals";
import Slider from "../components/Slider/Slider";
import FashionCase from "../components/FashionCase/fashionCase";

const ProductPage = () => {
    return (
        <div className="Index">
            <Header />
            <NewArrivals />
            <Slider />
            <FashionCase />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ProductPage;