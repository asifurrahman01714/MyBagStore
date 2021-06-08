import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Components/redux/actions';

const Banner = () => {
    const products = useSelector((state) => {
        return state.products.productsList;

    })
    const dispatch = useDispatch()
    return (
        <div className='row  container mx-auto' style={{ background: 'whiteSmoke' }}>

                    <div className="col-md-6">
                        <img src={products[0].img} />
                    </div>
                    <div className="col-md-6 m-auto">
                        <h1>{products[0].name}</h1>
                        <h3>${products[0].price}</h3>
                        <button className="btn  btn-success w-50" onClick={() => dispatch(addToCart(products[0]))}>Add to Cart</button>

                    </div>


               

        </div>
    );
};

export default Banner;