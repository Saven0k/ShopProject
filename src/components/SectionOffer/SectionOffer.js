import './SectionOffer.css'
import women from './images/women.svg'
import men from './images/men.svg'
import kids from './images/kids.svg'
import accerories from './images/accerories.svg'


const SectionOffer = () => {
    return (
        <section className="section-offer">
            <div className="offer">
                <div className="card">
                    <img className="card__image" src={women} alt="" />
                    <div className="img-bg"></div>
                    <div className="card_text"> 30% OFF<br />
                        <span className="color-text">FOR WOMEN</span>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={men} alt="" />
                    <div className="img-bg"></div>
                    <div className="card_text"> NOT DEAL<br />
                        <span className="color-text">FOR MEN</span>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={kids} alt="" />
                    <div className="img-bg"></div>
                    <div className="card_text"> NEW ARRIVALS<br />
                        <span className="color-text">FOR KIDS</span>
                    </div>
                </div>
                <div className="card card-big">
                    <img className="card__image " src={accerories} alt="" />
                    <div className="img-bg"></div>
                    <div className="card_text">LUXIROUS & TRENDY<br />
                        <span className="color-text">ACCESORIES</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionOffer;