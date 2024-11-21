import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewArrivals from '../components/newArrivals/newArrivals'
import InfoCompany from "../components/infoCompany/InfoCompany";
import Subscribe from "../components/subscribe/Subscribe";
import { FilterProvider } from "../context/FIlterContext";
import ProductList from "../componentsR/ProductList";
import ProductFilter from "../componentsR/ProductFilter";

const CatalogPage = () => {
    return (
        <div className="Index">
            <Header />
            <NewArrivals />
            <FilterProvider>
                <ProductFilter />
                <ProductList/>
            </FilterProvider>
            <InfoCompany />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default CatalogPage;