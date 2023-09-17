import React from "react";
import "./shopCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import Statue from "../statue/Statue";
import { addFavItem } from "../../store/slices/favSlice";
import Swal from 'sweetalert2'
export default function ShopCard(props) {
    const dispatche = useDispatch()
    const handleAddToCart = () => {
        dispatche(addItem(props.product))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Added To Cart',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const handleAddToWishList = () => {
        dispatche(addFavItem(props.product))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Added To Wishlist',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 px-lg-3">
            <div className="shopCard">
                <div className="product__Item">
                    <Statue title={props.product?.statue} />
                    <div className="img__item">
                        <img
                            className="w-100 img__item__card"
                            src={props.product?.thumbnail}
                            alt=""
                        />
                    </div>
                    <div class="overlay"></div>
                    <div class="overlayText">
                        <div class="linkText">
                            <h5 onClick={handleAddToCart}>Add To Cart</h5>
                        </div>
                        <div class="icons d-flex justify-content-center">
                            <Link to={"/shop/" + props.product?.id} className="nav-link">
                                <i class="px-2 fs-5 bi bi-eye"></i>
                            </Link>
                            <i onClick={handleAddToWishList} class="px-2 fs-5 bi bi-heart"></i>
                        </div>
                    </div>
                </div>
                <div className="text__Card">
                    <div className="textTit d-flex justify-content-between align-items-start">
                        <h5 className="text__Title">
                            <Link to={"/shop/" + props.product?.id} className="nav-link">
                                {props.product.title}
                            </Link>
                        </h5>
                        <span className="text__price">{props.product?.price} $</span>
                    </div>
                    <div className="textCateg">

                        <span >{props.product?.category}</span>

                    </div>
                </div>
            </div>
        </div>
    );
}
