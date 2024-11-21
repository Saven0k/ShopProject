import pr1 from './images/pr1.svg'
import pr2 from './images/pr2.svg'
import pr3 from './images/pr3.svg'
import pr4 from './images/pr4.svg'
import pr5 from './images/pr5.svg'
import pr6 from './images/pr6.svg'
import { Link } from 'react-router-dom'
import './SectionProducts.css'

const SectionProducts = () => {
    return (
        <section className="section-products">
            <div className="products">
                <p className="title">
                    Fetured Items
                </p>
                <p className="disctiption">
                    Shop for items based on what we featured in this week
                </p>
                <div className="box-product">
                    <div className="product">
                        <img src={pr1} alt=""/>
                        <div className="content">
                            <p className="name">
                                ELLERY X M'O CAPSULE
                            </p>
                            <p className="disc">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                                Ellery teams up with Moda Operandi.
                            </p>
                            <p className="price color-text">
                                $52.00
                            </p>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={pr2} alt=""/>
                        <div className="content">
                            <p className="name">
                                ELLERY X M'O CAPSULE
                            </p>
                            <p className="disc">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                                Ellery teams up with Moda Operandi.
                            </p>
                            <p className="price color-text">
                                $52.00
                            </p>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={pr3} alt=""/>
                        <div className="content">
                            <p className="name">
                                ELLERY X M'O CAPSULE
                            </p>
                            <p className="disc">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                                Ellery teams up with Moda Operandi.
                            </p>
                            <p className="price color-text">
                                $52.00
                            </p>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={pr4} alt=""/>
                        <div className="content">
                            <p className="name">
                                ELLERY X M'O CAPSULE
                            </p>
                            <p className="disc">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                                Ellery teams up with Moda Operandi.
                            </p>
                            <p className="price color-text">
                                $52.00
                            </p>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={pr5} alt=""/>
                        <div className="content">
                            <p className="name">
                                ELLERY X M'O CAPSULE
                            </p>
                            <p className="disc">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                                Ellery teams up with Moda Operandi.
                            </p>
                            <p className="price color-text">
                                $52.00
                            </p>
                        </div>
                    </div>
    
                    <div className="product">
                        <img src={pr6} alt=""/>
                        <div className="content">
                            <p className="name">
                                ELLERY X M'O CAPSULE
                            </p>
                            <p className="disc">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym
                                Ellery teams up with Moda Operandi.
                            </p>
                            <p className="price color-text">
                                $52.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="b">
                        
                        <p className="text color-text">
                            <Link to={"/catalog"}>Browse All Product</Link></p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SectionProducts;