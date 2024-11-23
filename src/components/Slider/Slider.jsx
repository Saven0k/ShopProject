import { useSelector } from 'react-redux';
import leftVector from './img/leftVector.svg'
import rightVector from './img/rightVector.svg'
import './slider.css'
import { useState } from 'react';
const Slider = () => {
    const products = useSelector(state => state.products);
    const [count, setCount] = useState(0)


    const handlePrev = () => {
        if (count > 0 || count === 1) {
            setCount(count-1)
        } if(count === 0) {
            setCount(products.length - 1)
        }
      };
    
      const handleNext = () => {
        if (count === 8) {
            setCount(0)
        } else {
            setCount(count+1)
        }
      };


    return (
        <section className="slider">
            <div className="left-vector">
                <img src={leftVector} alt="leftVector" onClick={handlePrev} className="left__vector"/>
            </div>
            <div className="img-women">
            {products.map((image, index) => {
                if (index === count) {
                    return <img key={index} src={image.img} alt="" className='img__women'/>
                }
            })}
            </div>
            <div className="right-vector">
                <img src={rightVector} alt="RightVector" onClick={handleNext} className="right__vector"/>
            </div>
        </section>
    )
}

export default Slider;