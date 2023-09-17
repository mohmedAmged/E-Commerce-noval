import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import "./singleShop.css";
import { useDispatch, useSelector } from "react-redux";
import ShopCard from "../../components/shopCard/ShopCard";
import { getData } from "../../store/slices/singlePageData";
import { CCol, CCollapse, CRow } from '@coreui/react'
import { CButton } from '@coreui/react'
import { CCard } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { addItem } from "../../store/slices/cartSlice";
import Swal from 'sweetalert2'
export default function SingleShop() {
    const { prodId } = useParams();
    const [quantity, setQuatity] = useState(1);
    const dispatche = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    const [product, setProduct] = useState([]);
    const [relate, setRelate] = useState([]);
    const addi = product?.additional
    console.log(addi);
    useEffect(() => {
        if (product?.length === 0) {
            dispatche(getData());
            setProduct(products?.find((el) => el?.id == prodId));
            setRelate(products?.filter((el) => el?.category === product?.category));
        }
        setProduct(products?.find((el) => el?.id == prodId));
        setRelate(products?.filter((el) => el?.category === product?.category));
    }, [dispatche, product, products]);
    const [visibleA, setVisibleA] = useState(true)
    const [visibleB, setVisibleB] = useState(false)
    const handleAddToCart = () => {
        dispatche(addItem(product))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Added To Cart',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div>
            <PageTitle title="products" />
            <div className="productDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div className="imgItem">
                                <img
                                    className="w-100 single__product__img"
                                    src={product?.thumbnail}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <div className="productTitle">
                                    <h1>{product?.title}</h1>
                                </div>
                                <div className="productPrice">
                                    <p>${product?.price}</p>
                                </div>
                                <div className="productInfo">
                                    <p>{product?.desc}</p>
                                </div>
                                <div className="AddCartSec d-flex">
                                    <div className="cartSubmit">
                                        <button onClick={handleAddToCart}>Add To Cart</button>
                                    </div>
                                </div>
                                <div className="extraInfo">
                                    <span className="d-block">
                                        <span>category: </span>
                                        <span className="resStyle">{product?.category}</span>
                                    </span>
                                    <span className="d-block">
                                        <span>tags: </span>
                                        <span className="resStyle">{product?.tags}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="toggleSec">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="toggle">
                                    <>
                                        <div className="toggleActions d-flex">
                                            <CButton onClick={() => {
                                                setVisibleA(!visibleA);
                                                if (visibleB == true) {
                                                    setVisibleB(false)
                                                }
                                            }
                                            }>Description</CButton>
                                            <CButton onClick={() => {
                                                setVisibleB(!visibleB);
                                                if (visibleA == true) {
                                                    setVisibleA(false)
                                                }
                                            }
                                            }>Additional information</CButton>
                                        </div>
                                        <CRow>
                                            <CCol xs={12}>
                                                <CCollapse visible={visibleA}>
                                                    <CCard className="mt-3">
                                                        <CCardBody>
                                                            {
                                                                product.desc
                                                            }
                                                        </CCardBody>
                                                    </CCard>
                                                </CCollapse>
                                            </CCol>
                                            <CCol xs={12}>
                                                <CCollapse visible={visibleB}>
                                                    <CCard className="mt-3">
                                                        <CCardBody>
                                                            <p>weight:
                                                                {addi?.map((el) => (
                                                                    <span>{el.weight}</span>
                                                                ))}
                                                            </p>
                                                            <p>dimension:
                                                                {addi?.map((el) => (
                                                                    <span>{el.dimension}</span>
                                                                ))}
                                                            </p>
                                                            <p>color:
                                                                {addi?.map((el) => (
                                                                    <span>{el.color}</span>
                                                                ))}
                                                            </p>
                                                        </CCardBody>
                                                    </CCard>
                                                </CCollapse>
                                            </CCol>
                                        </CRow>
                                    </>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relatedProducts mt-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>related Products</h2>
                                <div className="related">
                                    <div className="">
                                        <div>
                                            <div className="row">
                                                {relate?.map((el) => (
                                                    <ShopCard key={el?.id} product={el} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
