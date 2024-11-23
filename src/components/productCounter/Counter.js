import {useSelector } from 'react-redux'


const Count = () => {
    const products = useSelector(state => state.products);

    const Okey = () => {
        return (
         <div className='product_count'>{count}</div>
        ) 
     }
    let count = 0
    products.forEach((pr) => {
        if (pr.quantity > 0) {
            count = count + pr.quantity;
        }
    })

    return (
        <>
            {count !== 0 ? <Okey/>: <></>}
       
        </>
    )
}
export default Count;