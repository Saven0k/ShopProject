import { useDispatch, useSelector } from 'react-redux'
import esc from './images/esc.svg'
import './cart.css'
import { deleteCartProduct } from '../../actions/productAction';
import writeToTg from '../../services/workWithTg';
import { useState } from 'react';

const CartElement = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [nApr, setNaPr] = useState("");

    const handleClickClearCart = () => {
        products.map((pr) => {
            handleClickDelete(pr.id)
        })
    }


    const handleClickDelete = (id) => {
        dispatch(deleteCartProduct(id))
    }

    let summ = 0;
    const result = products.forEach((pr) => (
        summ += pr.price * pr.quantity
    ));



    const productList = (product) => {
        return (
            <div className="product" key={product.id}>
                <div className="product__left__side">
                    <img src={product.img} alt="" />
                </div>
                <div className="product__right__side">
                    <div className="big-text">
                        <p className="product__name">{product.name}</p>
                    </div>
                    <div className="discription">
                        <p className="price">Price: <span className="color-text">${product.price}</span></p>
                        <p className="color">Color: <p className="color">{product.color}</p></p>
                        <p className="size">Size: <p className="size">{product.size}</p></p>
                        <div className="quantity">
                            <p className="quantity">Quantity: {product.quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="esc">
                    <img onClick={() => handleClickDelete(product.id)} src={esc} alt="" />
                </div>
            </div>
        )
    }
    const emptyList = () => {
        return (
            <h3> Корзина Пуста</h3>
        )
    }

    const valueProductCart = () => {
        let productList = []
        products.map((pr) => {
            if (pr.quantity > 0 && pr.inCart) {
                let productMessage = {}
                productMessage.id = pr.id
                productMessage.name = pr.name
                productMessage.color = pr.color
                productMessage.size = pr.size
                productMessage.price = pr.price
                productMessage.quantity = pr.quantity
                productList.push(productMessage)
            }
        })        
        return productList;
    }

    const writeToJson = () => {
        document.getElementById('form').addEventListener('submit', function (e) {
            e.preventDefault();
            let arrayData = { email: email, street: street, nApa: nApr, summ: summ, product: valueProductCart()}
            writeToTg(arrayData)
        })
        setEmail("");
        setStreet("");
        setNaPr("");
        handleClickClearCart()
    }


    return (
        <div className="buy-part">
            <div className="left-side">
                <div className="produucts">
                    {products.map(product =>
                        product.inCart ? productList(product) : emptyList
                    )}
                </div>
                <div className="buttons">
                    <div className="left-button button">
                        CLEAR SHOPPING CART
                    </div>
                    <div className="right-button button">
                        CONTINUE SHOPPING
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="form-buy">
                    <form className="form-adress" id='form'>
                        <p className="title">
                            SHIPPING ADRESS
                        </p>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} name="email" id="email" className="input" placeholder="Email" />
                        <input type="text" onChange={(e) => { setStreet(e.target.value) }} value={street} name="street" id="street" className="input" placeholder="Улица и номер дома" />
                        <input type="text" onChange={(e) => { setNaPr(e.target.value) }} value={nApr} name="numberApartment" id="postcode" className="input" placeholder="номер квартиры" />
                        <div className="sum-buy">
                            <div className="sum">
                                <p className="sub-total">SUB TOTAL ${summ}</p>
                                <p className="grade-total">GRAND TOTAL <span className="color-text">${summ}</span></p>
                            </div>
                            <div className="line">
                                <div className="line-draw"></div>
                            </div>
                            <div className="buy">
                                <button type='submit' className="button__to__buy" onClick={
                                    writeToJson
                                }>
                                    <p className="text">
                                        Заказать
                                    </p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CartElement;