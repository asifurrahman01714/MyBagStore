import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../../../Data/FakeData'
import Banner from '../../Banner';
import Product from '../Product/Product';
const Home = () => {
    const products = useSelector((state) => {
        return state.products.productsList;

    })
    return (
        <div>
            <Banner />

            <h1 className="text-center mt-4 mb-4">Our Collections</h1>
            <div className="row container mx-auto mt-3 mb-4">

                {
                    products.map(d => <Product product={d}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;