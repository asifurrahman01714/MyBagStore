import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { finishedCart } from '../redux/actions';
import ProductInCart from './ProductInCart';

const Cart = () => {
    const [payTotal, setPayTotal] = useState(0)
    const dispatch = useDispatch()
    const products = useSelector((state) => {

        return state.products.addToCart;

    })

    return (
        <div>
            {
                products.length > 0 ? <div className="d-flex align-items-center justify-content-center mt-5">
                    <button className="btn btn-secondary w-25" onClick={() => dispatch(finishedCart(products[0]))}>Remove ALL</button>
                </div> : <div className="d-flex flex-column justify-content-center align-items-center mt-5">

                    <h4>Please Select Any Item</h4>
                    <Link to="/">Browse</Link>


                </div>
            }
            <div className='row container mx-auto mt-5 mb-3'>
                {
                    products.map(pr => <ProductInCart product={pr} setPayTotal={setPayTotal}></ProductInCart>)
                }

            </div>

            {
                products.length > 0 && <div className="text-center mt-5 mb-3"><button className="btn btn-primary w-25" onClick={() => dispatch(finishedCart(products[0]))}>Order Now</button></div>
            }
        </div>

    );
};

export default Cart;