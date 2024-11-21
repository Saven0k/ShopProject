import './sectionMain.css'
import bigMen from './images/big-men.svg'

const SectionMain = () => {
    return (
        <section className="section-main">
            <div className="left-side">
                <img src={bigMen} alt=""/>
            </div>
            <div className="right-side">
                <p className="text">
                    <span className="bolt-text">THE BRAND</span> <br/>
                    <span className="color_l">OF LUXERIOUS</span> <span className="color-text">FASHION</span>
                </p>
            </div>
        </section>
    )
}
export default SectionMain