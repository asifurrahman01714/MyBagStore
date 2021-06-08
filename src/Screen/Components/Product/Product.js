import React, { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IdContext } from '../../../App';
import { addToCart } from '../redux/actions'
const Product = ({ product }) => {
    const { name, img, price, id } = product;
    const dispatch = useDispatch()
    const [shown, setIsShown,] = useState(false)
    const [productId, setProductId] = useContext(IdContext)
    const handleSetId = () => {
        setProductId(id)
    }
    const handleAddToCart = (products) => {
        dispatch(addToCart(products))

        setIsShown(true)
        setTimeout(() => {


            setIsShown(false)


        }, 2000)

    }


    return (

        < div className="col-md-4 " >
            <Card className='mt-5 ml-4'>
                <Card.Header>
                    <Link to='/product'>
                    <Card.Img src={img} className="img-fluid w-100" style={{ height: '350px', cursor: 'pointer' }} onClick={() => handleSetId(id)} />
                    </Link>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <div className='d-flex justify-content-evenly mt-3'>

                        <Card.Title className='mt-2'>${price}</Card.Title>
                        <Button className="w-50" onClick={() => handleAddToCart(product)}>Add to cart</Button>

                    </div>
                    {
                        shown && <p className="text-center text-success mt-2">Successfully added to cart</p>
                    }
                </Card.Body>

            </Card>
        </div >



    );
};

export default Product;