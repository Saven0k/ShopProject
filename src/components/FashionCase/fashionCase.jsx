import sort from './img/sort.svg'
import stick from './img/stick.svg'
import button from './img/button.svg'
import './fashionCase.css'

const FashionCase = () => {
    return (
        <div className="fashion-case">
        <section className="fashion">

            <p className="color-text">
                WOMEN COLLECTION
            </p>
            <img src={stick} alt="stick" className="stick"/>
            <p className="big-text">
                MOSCHINO CHEAP AND CHIC
            </p>
            <p className="dicription">
                Compellingly actualize fully researched processes before proactive outsourcing. Progressively
                syndicate collaborative architectures before cutting-edge services. Completely visualize parallel
                core competencies rather than exceptional portals.
            </p>
            <p className="price">$561</p>
            <div className="line-box">
                <div className="line"></div>
            </div>
            <div className="filter-img">
                <img src={sort} alt="filters" className="filters"/>
            </div>
            <div className="button-to-buy">
                <a href="#">
                    <img src={button} alt="button-to-buy" className="button-to-buy"/>
                </a>
            </div>
        </section>
    </div>
    )
}

export default FashionCase;