import { useContext } from "react";
import { FilterContext } from "../context/FIlterContext";


const ProductFilter = () => {
    const { filter, setFilter } = useContext(FilterContext);

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <div className="filter-sort">
            <details className="filter">
                <summary className="filter__summary"><span className="filter__heading">FILTER</span><img className="fimg" src="./assets/images/vec2.svg" alt=""/></summary>
                <div className="filter__content">
                    <details open className="filter__items">
                        <summary className="filter__head">CATEGORY</summary>
                        <div className="filter__link-box">
                            <a href="" class="filter__link">Socks</a>
                            <a href="" class="filter__link">Shoes</a>
                            <a href="" class="filter__link">Jeans</a>
                            <a href="" class="filter__link">Baskets</a>
                            <a href="" class="filter__link">Boots</a>
                        </div>
                    </details>

                    <details className="filter__items">
                        <summary class="filter__head">BRAND</summary>
                        <div class="filter__link-box">
                            <a href="" className="filter__link">Socks</a>
                            <a href="" className="filter__link">Shoes</a>
                            <a href="" className="filter__link">Jeans</a>
                            <a href="" className="filter__link">Baskets</a>
                            <a href="" className="filter__link">Boots</a>
                        </div>
                    </details>

                    <details className="filter__items">
                        <summary className="filter__head">DESIGNER</summary>
                        <div class="filter__link-box">
                            <a href="" className="filter__link">Socks</a>
                            <a href="" className="filter__link">Shoes</a>
                            <a href="" className="filter__link">Jeans</a>
                            <a href="" className="filter__link">Baskets</a>
                            <a href="" className="filter__link">Boots</a>
                        </div>
                    </details>
                </div>
            </details>
            <div className="sort">
                <select className="sort__details" value="price">
                    <option className="sort__heading" value="TRENDING NOW">TRENDING NOW</option>
                    <option className="sort__heading" value="Xs">Xs</option>
                    <option className="sort__heading" value="S">S</option>
                    <option className="sort__heading" value="L">L</option>
                </select>
                <select className="sort__details" value={filter} onChange={handleChange}>
                    <option className="sort__heading" value="Size">SIZE</option>
                    <option className="sort__heading" value="Xs">Xs</option>
                    <option className="sort__heading" value="S">S</option>
                    <option className="sort__heading" value="L">L</option>
                </select>
                <select className="sort__details" value="Price">
                    <option className="sort__heading" value="Price">PRICE</option>
                    <option className="sort__heading" value="Xs">Xs</option>
                    <option className="sort__heading" value="S">S</option>
                    <option className="sort__heading" value="L">L</option>
                </select>
            </div>
        </div>
    )
}

export default ProductFilter;