import React from 'react'
import './checkOut.css'
import { useSelector } from 'react-redux'
import PageTitle from '../../components/PageTitle';
import { Form } from 'react-bootstrap';
export default function CheckOut() {
    let cartItems = useSelector(state => state.cartReducer.cart)
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)
    const totalPriceAndShip = useSelector(state => state.cartReducer.totalPriceAndShip)
    return (
        <>
            <PageTitle title="checkout" />
            <div className="checkoutInfo">
                <div className="container">
                    <div className="billingDets">
                        <div className="row">
                            <div className="col-lg-10">
                                <h3>
                                    BILLING DETAILS
                                </h3>
                                <Form className='pt-5 '>
                                    <Form.Group className="mb-3">
                                        <Form.Label>first name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>last name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>company name (optional)</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Country / Region</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Street address</Form.Label>
                                        <Form.Control type="text" placeholder="House number and street name" />
                                        <Form.Control type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Town / City</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Town / City</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>State / County</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Postcode / ZIP</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>phone</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email address </Form.Label>
                                        <Form.Control type="email" placeholder="" />
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="col-lg-12 ">
                                <div className='pt-5'>
                                    <h3>
                                        Your order
                                    </h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>product</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems?.map((item) => {
                                                return <tr key={item.id}>
                                                    <td className='pr__name_style'>
                                                        {item.title} × <strong>
                                                            {item.quantity}
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        $ {item.price}
                                                    </td>
                                                </tr>
                                            })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>subTotal</th>
                                                <td>$ {totalPrice}</td>
                                            </tr>
                                            <tr>
                                                <th>total</th>
                                                <td>
                                                    <strong>$ {totalPriceAndShip}</strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <p>
                                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy
                                </p>
                                <button>
                                    place order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
