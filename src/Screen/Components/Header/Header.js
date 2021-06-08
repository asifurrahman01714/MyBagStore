import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    const products = useSelector((state) => {
        console.log(state.products.addToCart)
        return state.products.addToCart;

    })
    return (
        <Navbar bg="dark" variant="dark" >
            <Container className='d-flex justify-content-between'>
                <div>
                    <Navbar.Brand as={Link} to="/">Awesome Shop</Navbar.Brand>
                </div>

                <Nav className="ms-auto">
                    <Link to="/carts" className="navigation"><FontAwesomeIcon icon={faShoppingCart} /> {products.length}</Link>
                    <Link to="/login" className=" ms-3 navigation">Sign In</Link>
                </Nav>
            </Container>
        </Navbar>


    );
};

export default Header;