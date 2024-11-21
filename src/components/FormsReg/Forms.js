import './Forms.css'
import { Link } from 'react-router-dom'

const Forms = () => {
    return (
        <section className="registration">
            <div className="left-side">
                <form action="" name="registration" id="registration" className="left-side__form">
                    <div className="personal_data">
                        <p className="text-data">Your Name</p>
                        <input type="text" id="fName" name="fName" className="input" placeholder="First Name" />
                        <input type="text" id="lName" name="lName" className="input" placeholder="Last Name" />
                    </div>
                    <div className="checkboxs">
                        <input type="radio" name="gender" value="Female" id="female" checked />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" value="Male" id="male" />
                        <label for="male">Male</label>
                    </div>
                    <div className="login_data">
                        <p className="text-data">Login details</p>
                        <input type="email" name="email" placeholder="Email" id="email" className="input" />
                        <input type="password" name="password" placeholder="Password" id="password" className="input" />
                        <p className="small-text">
                            Please use 8 or more characters, with at least 1 number and a mixture of uppercase and
                            lowercase letters
                        </p>
                    </div>
                    <Link to={"/"}>
                        <button className="join-button">
                            <p>JOIN NOW</p>
                            <img src="./assets/images/right.svg" alt="" />
                        </button>
                    </Link>

                </form>
            </div>
            <div className="right-side">
                <p className="p1">LOYALTY HAS ITS PERKS</p>
                <p className="p2">Get in on the loyalty program where you can earn points and unlock serious perks. Starting
                    with
                    these as soon as you join:</p>
                <div className="categ">
                    <div className="imgs">
                        <img src="./assets/images/mark.svg" alt="" />
                        <img src="./assets/images/mark.svg" alt="" />
                        <img src="./assets/images/mark.svg" alt="" />
                        <img src="./assets/images/mark.svg" alt="" />
                        <img src="./assets/images/mark.svg" alt="" />
                    </div>
                    <div className="text_to_img">
                        <p>15% off welcome offer</p>
                        <p className="big-t">Free shipping, returns and exchanges on all orders</p>
                        <p>$10 off a purchase on your birthday</p>
                        <p>Early access to products</p>
                        <p>Exclusive offers & rewards</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forms;