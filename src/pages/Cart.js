import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Subscribe from "../components/subscribe/Subscribe";
import CartElement from "../components/Cart/CartElement";

const Cart = () => {
    return (
        <div className="Index">
            <Header />

            <CartElement />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Cart;