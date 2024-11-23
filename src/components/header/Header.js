import './header.css'
import ico from './images/Logo.svg'
import scope from './images/FindScope.svg'
import list from './images/list.svg'
import human from './images/Human.svg'
import buyer from './images/buyer.svg'
import { Link } from 'react-router-dom'
import Count from '../productCounter/Counter'

    
const Header = () => {
    return (
        <header className='header'>
            <div className="left-head">
                <Link to={"/"}>
                    <img src={ico} className="ico" alt="" />
                </Link>
                <img src={scope} className="find__scope" alt="" />
            </div>
            <div className="right-head">
                <Link to={"/catalog"}>
                    <img src={list} className="list__ico" alt="" />
                </Link>
                <Link to={"/registration"}>
                    <img src={human} className="human__ico" alt="" />
                </Link>
                <Link to={"/cart"} className='linkA'>
                    <img src={buyer} className="buyer__ico" alt="" />
                    <Count />
                </Link>
            </div>
        </header>
    );
}

export default Header;