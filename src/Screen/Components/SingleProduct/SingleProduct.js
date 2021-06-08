import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IdContext } from '../../../App';
import { addToCart } from '../redux/actions';


const SingleProduct = () => {
    const [productId, setProductId] = useContext(IdContext)
    const products = useSelector((state) => {
        return state.products.productsList;

    })
    const dispatch = useDispatch()
    const product = products.find(pr => pr.id === productId)
    console.log(product)
    return (
        < div className="row container mx-auto mt-5" >
            <div className='col-md-5'>
                <img src={product.img} className="img-fluid" />
            </div>
            <div className='col-md-7'>
                <h3 className='text-center text-primary'>{product.name}</h3>
                <hr />
                <p className='text-justify'>{product.descriptions}</p>

                <div className='d-flex justify-content-evenly mt-3'>
                    <h2 className='text-danger'>${product.price}</h2>
                    <Link to='/carts'>
                        <button className="btn  btn-success w-100" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </Link>
                </div>
            </div>

        </div >
    );
};

export default SingleProduct;