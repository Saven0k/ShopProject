import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { addToCartProduct } from '../actions/productAction';
import withFilter from '../hoc/withFilter';
import { FilterContext } from '../context/FIlterContext';

import image from './lists.svg'

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { filter } = useContext(FilterContext)

    const filterProducts = withFilter(products, filter);

    const handleClickProduct = (id) => {
        dispatch(addToCartProduct(id))
    }

    return (
        <div className='centr'>
            <div className="products center ">
                {filterProducts.map(product => (
                    <div className={product.quantity > 0 ? "product in_cart": "product"} key={product.id} onClick={() => handleClickProduct(product.id)}
                        style={{ filter: product.inCart ? 'brightness(60%)' : 'brightness(100%)' }}>
                        <img src={product.img} alt="" />
                        <p className="product__name">{product.name}</p>
                        <p className="product__disc">{product.discription}</p>
                        <p className="product__price">${product.price}</p>
                        <div className='box'>
                            <div>Уже в корзине </div>
                            <div>Колличество: {product.quantity}</div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="lists center">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default ProductList;