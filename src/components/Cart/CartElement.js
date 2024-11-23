import { useDispatch, useSelector } from 'react-redux'
import esc from './images/esc.svg'
import './cart.css'
import { deleteCartProduct } from '../../actions/productAction';
import axios from 'axios';

const CartElement = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

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
                <div class="esc">
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

    const writeToJson = () => {


        document.getElementById('form').addEventListener('submit', function (e) {
            e.preventDefault();

            let message = `<b>Заявка с сайта</b>\n`;
            message += `<b>Email: </b> ${this.email.value}\n`
            message += `<b>Улица и дом: </b> ${this.street.value}\n`
            message += `<b>Номер квартиры: </b> ${this.numberApartment.value}\n`

            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message,
            }).then((res) => {

            })

        })
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
                        <input type="email" name="email" id="email" className="input" placeholder="Email" />
                        <input type="text" name="street" id="street" className="input" placeholder="Улица и номер дома" />
                        <input type="text" name="numberApartment" id="postcode" className="input" placeholder="номер квартиры" />
                        <div className="sum-buy">
                            <div className="sum">
                                <p className="sub-total">SUB TOTAL ${summ}</p>
                                <p className="grade-total">GRAND TOTAL <span className="color-text">${summ}</span></p>
                            </div>
                            <div className="line">
                                <div className="line-draw"></div>
                            </div>
                            <div className="buy">
                                <button type='submit' className="button__to__buy" onClick={writeToJson}>
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