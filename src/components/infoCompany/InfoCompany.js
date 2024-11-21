import car from './images/car.svg'
import procent from './images/procent.svg'
import king from './images/king.svg'
import './InfoCompany.css'

const InfoCompany = () => {
    return (
        <section className="info-company ">
            <div className="box">
                <img className="box__img" src={car} alt=""/>
                <p className="box__name">
                    Free Delivery
                </p>
                <p className="box__disc">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>
            <div className="box">
                <img className="box__img" src={procent} alt=""/>
                <p className="box__name">
                    Sales & discounts
                </p>
                <p className="box__disc">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>
            <div className="box">
                <img className="box__img" src={king} alt=""/>
                <p className="box__name">
                    Quality assurance
                </p>
                <p className="box__disc">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>

        </section>
    )
}

export default InfoCompany;

