import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Subscribe from "../components/subscribe/Subscribe";
import Reg from "../components/registraishion/reg";
import Forms from "../components/FormsReg/Forms";

const Registration = () => {
    return (
        <div className="Index">
            <Header />
            <Reg />
            <Forms />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Registration;