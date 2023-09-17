import React, { useEffect, useState } from 'react'
import './myCart.css'
import PageTitle from '../PageTitle'
import { Table } from 'react-bootstrap'
import CartList from '../cartList/CartList'
import { useDispatch, useSelector } from 'react-redux'
import { calcTotal } from '../../store/slices/cartSlice'
export default function MyCart() {
    let cartItems = useSelector(state => state.cartReducer.cart)
    // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItemsData')))
    const totalItems = useSelector(state => state.cartReducer.totalItems)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)
    const totalPriceAndShip = useSelector(state => state.cartReducer.totalPriceAndShip)
    const dispatche = useDispatch()
    useEffect(() => {
        dispatche(calcTotal())
        console.log(cartItems);
    }, [dispatche, totalPrice, totalItems])
    return (
        <div>
            <PageTitle title="cart" />
            {cartItems.length > 0 ?
                <div className="cartItems pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Table responsive cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className='product__one'>&nbsp;</th>
                                            <th className='product__thumb'>&nbsp;</th>
                                            <th className='prod___tit'>Product</th>
                                            <th className='prod___price'>Price</th>
                                            <th className='prod___qty'>Quantity</th>
                                            <th className='prod___subTot'>suBTotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { cartItems.map((el) => {
                                                return <CartList key={el.id} product={el} />
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-lg-12">
                                <div className="cartFullInfo">
                                    <h2>cart details</h2>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    subTotal
                                                </th>
                                                <td className='sub__tot__td'>
                                                    <span>
                                                        $ {totalPrice}
                                                    </span>

                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    shipping
                                                </th>
                                                <td className='sub__tot__td'>
                                                    <p>
                                                        total items: <span>{totalItems}</span>
                                                    </p>
                                                    <p>
                                                        shipping per item: <span>$ 50</span>
                                                    </p>
                                                    <p>
                                                        shipping to <span>NY</span>
                                                    </p>
                                                    <button>
                                                        change Address
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Total
                                                </th>
                                                <td className='sub__tot__td'>
                                                    <span>
                                                        $ {totalPriceAndShip}
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <button className='mt-4'>
                                        proceed to check out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='mt-5'>
                    <div className="container">
                        <h1 className='alert alert-info'>cart is Empty</h1>
                    </div>
                </div>
            }

        </div>
    )
}
