import React from "react";
import "./shopHome.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavItem } from "../../store/slices/favSlice";
import Swal from 'sweetalert2'

export default function ShopHome() {
    const { products } = useSelector(state => state.productReducer)
    const dispatche = useDispatch()

    return (
        <div className="container">
            <div className="shopHomeSec">
                <div className="text">
                    <h2>
                        REMARKABLE <br /> CUSTOM-MADE <br /> ACCESSORIES
                    </h2>
                    <p>Collection</p>
                </div>
                <div className="productContainer pt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="row justify-content-center">
                                {products.slice(0, 2).map((item) => (
                                    <div className="col-lg-12 cardSpace">
                                        <div className="productItem">
                                            <div className="itemImg">
                                                <img className="w-100" src={item.thumbnail} alt="" />
                                            </div>
                                            <div className="overlay"></div>
                                            <div className="overlayText">

                                                <div className="icons d-flex justify-content-around">
                                                    <i onClick={
                                                        ()=>{
                                                            Swal.fire({
                                                                imageUrl: `${item.thumbnail}`,
                                                                imageHeight: 300,
                                                                confirmButtonColor:'#b59175',
                                                                imageAlt: 'A tall image'
                                                            })
                                                        }
                                                    } className=" fs-5 bi bi-eye"></i>
                                                    <i onClick={
                                                        ()=>{dispatche(addFavItem(item))
                                                        Swal.fire({
                                                            position: 'center',
                                                            icon: 'success',
                                                            title: 'Item Added To Wishlist',
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                        })}
                                                    }
                                                    className="px-1 fs-5 bi bi-heart"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="itemText d-flex justify-content-between">
                                            <h5>
                                                <Link to={"/shop/" + item.id} className="nav-link">
                                                    {item.title}
                                                </Link>
                                            </h5>
                                            <span>{item.price} $</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 padTop">
                            <div className="row justify-content-center">
                                {products.slice(2, 4).map((item) => (
                                    <div className="col-lg-12 cardSpace">
                                        <div className="productItem">
                                            <div className="itemImg">
                                                <img className="w-100" src={item.thumbnail} alt="" />
                                            </div>
                                            <div className="overlay"></div>
                                            <div className="overlayText">
                                                <div className="icons d-flex justify-content-around">
                                                <i onClick={
                                                        ()=>{
                                                            Swal.fire({
                                                                imageUrl: `${item.thumbnail}`,
                                                                imageHeight: 300,
                                                                confirmButtonColor:'#b59175',
                                                                imageAlt: 'A tall image'
                                                            })
                                                        }
                                                    } className=" fs-5 bi bi-eye"></i>
                                                    <i onClick={
                                                        ()=>{dispatche(addFavItem(item))
                                                        Swal.fire({
                                                            position: 'center',
                                                            icon: 'success',
                                                            title: 'Item Added To Wishlist',
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                        })}
                                                    } className="px-1 fs-5 bi bi-heart"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="itemText d-flex justify-content-between">
                                            <h5>
                                                <Link to={"/shop/" + item.id} className="nav-link">
                                                    {item.title}
                                                </Link>
                                            </h5>
                                            <span>{item.price} $</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row justify-content-center ">
                                {
                                    products.slice(4, 6).map((item) => (
                                        <div className="col-lg-12 cardSpace">
                                            <div className="productItem">
                                                <div className="itemImg">
                                                    <img className="w-100" src={item.thumbnail} alt="" />
                                                </div>
                                                <div className="overlay"></div>
                                                <div className="overlayText">

                                                    <div className="icons d-flex justify-content-around">
                                                    <i onClick={
                                                        ()=>{
                                                            Swal.fire({
                                                                imageUrl: `${item.thumbnail}`,
                                                                imageHeight: 300,
                                                                confirmButtonColor:'#b59175',
                                                                imageAlt: 'A tall image'
                                                            })
                                                        }
                                                    } className=" fs-5 bi bi-eye"></i>
                                                        <i onClick={
                                                        ()=>{dispatche(addFavItem(item))
                                                        Swal.fire({
                                                            position: 'center',
                                                            icon: 'success',
                                                            title: 'Item Added To Wishlist',
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                        })}
                                                    } className="px-1 fs-5 bi bi-heart"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="itemText d-flex justify-content-between">
                                                <h5>
                                                    <Link to={"/shop/" + item.id} className="nav-link">
                                                        {item.title}
                                                    </Link>
                                                </h5>
                                                <span>{item.price} $</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productContainer__MeDuimScreen">
                    <div className="row justify-content-center">
                       {
                        products?.slice(0,6).map((item)=>(
                            <div className="col-md-6 cardSpace">
                            <div className="productItem">
                                <div className="itemImg">
                                    <img className="w-100" src={item.thumbnail} alt="" />
                                </div>
                                <div className="overlay"></div>
                                <div className="overlayText">
                                    <div className="icons d-flex justify-content-around">
                                    <i onClick={
                                                        ()=>{
                                                            Swal.fire({
                                                                imageUrl: `${item.thumbnail}`,
                                                                imageHeight: 300,
                                                                confirmButtonColor:'#b59175',
                                                                imageAlt: 'A tall image'
                                                            })
                                                        }
                                                    } className=" fs-5 bi bi-eye"></i>
                                        <i onClick={
                                                        ()=>{dispatche(addFavItem(item))
                                                        Swal.fire({
                                                            position: 'center',
                                                            icon: 'success',
                                                            title: 'Item Added To Wishlist',
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                        })}
                                                    }
                                    className="px-1 fs-5 bi bi-heart"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="itemText d-flex justify-content-between">
                                <h5>
                                    <Link to={"/shop/" + item.id} className="nav-link">
                                        {item.title}
                                    </Link>
                                </h5>
                                <span>{item.price} $</span>
                            </div>
                        </div>
                        ))
                       }
                    </div>
                </div>
            </div>
        </div>
    );
}
