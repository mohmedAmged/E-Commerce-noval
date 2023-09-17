import React, { useEffect } from 'react'
import './myWishList.css'
import PageTitle from '../PageTitle'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import WishListCard from '../wishListCard/WishListCard'
export default function MyWishList() {
    const wishListItems = useSelector(state => state.favReducer.wishlist)
    console.log(wishListItems);
    return (
        <div>
            <PageTitle title="wishList" />
            {wishListItems.length > 0?
                <div className="favItems pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Table responsive cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className='product__one'>&nbsp;</th>
                                            <th className='product__thumb'>&nbsp;</th>
                                            <th className='prod___tit'>Product Name</th>
                                            <th className='prod___price'>Price</th>
                                            <th className='prod___qty'>Stock Statue</th>
                                            <th className='select___option'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            wishListItems?.map((ele) => {
                                                return <WishListCard key={ele.id} product={ele} />
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='mt-5'>
                    <div className="container">
                        <h1 className='alert alert-warning'>WishList is Empty</h1>
                    </div>
                </div>
            }

        </div>
    )
}
