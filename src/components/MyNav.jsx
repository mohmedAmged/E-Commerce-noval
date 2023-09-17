import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./myNav.css";
import { useDispatch, useSelector } from "react-redux";
import { calcTotal} from "../store/slices/cartSlice";

export default function MyNav() {
    const dispatche = useDispatch()
    const cartItems = useSelector(state => state.cartReducer.cart)
    const totalItems = useSelector(state => state.cartReducer.totalItems)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)
    useEffect(() => {
        dispatche(calcTotal())
    }, [dispatche, totalPrice, totalItems])
    return (
        <>
            <Navbar
                expand="lg"
                className="navBg d-flex justify-content-center align-items-center"
            >
                <Container>
                    <Navbar.Brand className="brandName" href="#home">
                        Növal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto py-4">
                            <NavLink className="pageName nav-link mx-3" to="/">
                                HOME
                            </NavLink>
                            <NavLink className="pageName nav-link mx-3" to="/portofolio">
                                PORTOFOLIO
                            </NavLink>
                            <NavLink className="pageName nav-link mx-3" to="/shop">
                                SHOP
                            </NavLink>
                            <div className="dropDown">
                                <NavLink className="pageName cartDropDown nav-link mx-3" to="/cart">
                                    CART/ {totalItems}

                                </NavLink>
                                <div className="cartContent container pt-4">
                                    <div className="cartItems row">
                                        {
                                            cartItems?.map((el) => {
                                                return <div className="col-lg-12 mb-2">
                                                    <div className="ItemsInfo row justify-content-between">
                                                        <div className="col-lg-6">
                                                            <img src={el.thumbnail} alt="" />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="cartText px-2">
                                                                <p>
                                                                    {el.title}

                                                                </p>
                                                                <p>
                                                                    {el.quantity} x  ${el.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                        {totalPrice !== 0 ?
                                            <div className="cartItemsActions">
                                                <p>
                                                    total: <span>
                                                        {totalPrice}
                                                    </span>
                                                </p>
                                                <div className="btnss row justify-content-around">
                                                    <div className="col-lg-6">
                                                        <NavLink to='/cart' className=" btns__Styles">cart</NavLink>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <NavLink to='' className=" btns__Styles">
                                                            checkout
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <p>
                                                no cart items
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <NavLink className="pageName nav-link mx-3" to="/contact">
                                CONTACT US
                            </NavLink>
                            <NavLink className="pageName nav-link mx-3" to="/wishList">
                                <i class="bi bi-heart"></i>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>
    );
}
