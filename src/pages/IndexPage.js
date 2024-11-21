import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SectionMain from "../components/SectionMain/sectionMain";
import SectionProducts from '../components/SectionProducts/SectionProducts'
import SectionOffer from "../components/SectionOffer/SectionOffer";
import InfoCompany from "../components/infoCompany/InfoCompany";
import Subscribe from "../components/subscribe/Subscribe";

const IndexPage = () => {
    return (
        <div className="Index">
            <Header />
            <SectionMain />
            <SectionOffer />
            <SectionProducts />
            <InfoCompany />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default IndexPage;