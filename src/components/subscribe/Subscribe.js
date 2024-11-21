import './subscribe.css'
import face from './images/face.svg'


const   Subscribe = () => {
    return (
    <section className="subscribe">
        <div className="subscribe-left">
            <img src={face} alt="" />
            <p className="text-sub">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span className="a">a pulvinar purus condimentum</span>“
            </p>
        </div>
        <div className="subscribe-right">
                <div className="text-right">
                    <p className="sub">
                        SUBSCRIBE
                    </p>
                    <p className="sub-disc">
                        FOR OUR NEWLETTER AND PROMOTION
                    </p>
                </div>
                <div className="input-sub">
                    <input type="text" name="sub" id="sub" className="sub-input" placeholder="Enter Your Email" />
                    <button className="b">
                        <p className="b-text">
                            Subscribe
                        </p>
                    </button>
                </div>
            </div>
    </section>
    )
}

export default Subscribe;