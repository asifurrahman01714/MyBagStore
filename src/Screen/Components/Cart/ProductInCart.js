import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const ProductInCart = ({ product,setPayTotal }) => {
    const { name, img, price,id } = product
    let [value, setValue] = useState(1)
    const [total,setTotal]=useState(price)
    const dispatch =useDispatch()
    const handleQuantityIncrease = () => {
        value++;
        const pay= total+price
        setValue(value)
        setTotal(pay)
    }
    const handleQuantityDecrease = () => {
        if (value > 0) {
            value--
            const pay= total-price
            setValue(value)
            setTotal(pay)

        }
    }
    return (
        <div className="col-md-4 row" >


            <div className="col-md-6 ml-4">
                <img src={img} className="w-100 img-fluid" />
            </div>
            <div className="col-md-6 mt-5">
                <h5>{name}</h5>
                <h4>${total}</h4>
                <div className="d-flex ">
                    <button className="" onClick={handleQuantityIncrease} style={{ border: 'none', background: 'white' }}>+</button> <h6 className="mt-2">{value}</h6> <button className="" onClick={handleQuantityDecrease} style={{ border: 'none', background: 'white' }}>-</button>
                </div>
                <button className="btn btn-danger" onClick={()=>dispatch(removeFromCart(id))}>Remove</button>
            </div>



        </div>
    );
};

export default ProductInCart;