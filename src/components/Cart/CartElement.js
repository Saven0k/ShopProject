import { useDispatch, useSelector } from 'react-redux'
import esc from './images/esc.svg'
import './cart.css'
import { deleteCartProduct } from '../../actions/productAction';
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
    console.log(summ);
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
                    <form className="form-adress">
                        <p className="title">
                            SHIPPING ADRESS
                        </p>
                        <input type="text" name="street" id="street" className="input" placeholder="Bangladesh" />
                        <input type="text" name="state" id="state" className="input" placeholder="State" />
                        <input type="text" name="postcode" id="postcode" className="input" placeholder="PostCode / Zip" />
                        <button className="button-form">
                            <p className="text">GET A QUOTE</p>
                        </button>
                    </form>
                </div>
                <div className="sum-buy">
                    <div className="sum">
                        <p className="sub-total">SUB TOTAL ${summ}</p>
                        <p className="grade-total">GRAND TOTAL <span className="color-text">${summ}</span></p>
                    </div>
                    <div className="line">
                        <div className="line-draw"></div>
                    </div>
                    <div className="buy">
                        <button className="button__to__buy">
                            <p className="text">
                                PROCEED TO CHECKOUT
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartElement;