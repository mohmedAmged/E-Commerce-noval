import React from 'react'
import './sidebarShop.css'
import Searchfilter from '../searchFilter/Searchfilter'
import { Link } from 'react-router-dom'
export default function SidebarShop(props) {
    return (
        <>
            <div className="shopFilter">
                <Searchfilter setCurrPage={props.setCurrPage}
                    setProducts={props.setProducts} />
                {/* <div className="bestSeller">
                    <h4 className='sideBarTitle'>best Seller</h4>
                    <div className="row">

                        {
                            props.products?.slice(10, 13).map((product) => {
                                return <div className='col-lg-12'>
                                    <div className="bestItem row justify-content-between mb-2">
                                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                                            <img className='w-100' src={product.thumbnail} alt="" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center ">
                                            <div className="best__item__text">
                                                <h1>
                                                    <Link to={"/shop/" + product?.id} className="nav-link">
                                                        {product.title}
                                                    </Link>
                                                </h1>
                                                <p>
                                                    $ {product.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div> */}
            </div>
        </>
    )
}
