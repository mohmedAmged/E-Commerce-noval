import React from 'react'
import './footer.css'
import Form from 'react-bootstrap/Form';
export default function MyFooter() {
    return (
        <div>
            <div className=" footerSec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div className="footerBox firstBox">
                                <div className="title first">
                                    <a href='#tit'>
                                    NÖVAL
                                    </a>
                                </div>
                                <div className="info">
                                    <p>
                                        We make interiors infused with the spirit of contemporary design and minimalist philosophies.
                                    </p>
                                </div>
                                <div className="link">
                                    <span><a href="#facebook">FaceBook</a></span>
                                    <span><a href="#facebook">instgram</a></span>
                                    <span><a href="#facebook">linkedin</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 mb-2">
                            <div className="footerBox">
                                <div className="title">
                                    <a href='#tit'>
                                        Designers
                                    </a>
                                </div>
                                <div className="info">
                                    <span><a href="#designer">Kostadinova</a></span>
                                    <span><a href="#designer">Italymobile</a></span>
                                    <span><a href="#designer">Sweden Int</a></span>
                                    <span><a href="#designer">Arch. France</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="footerBox">
                                <div className="title">
                                    <a href='#tit'>
                                        faq
                                    </a>
                                </div>
                                <div className="info">
                                    <span><a href="#designer">Where can I find your catalog?</a></span>
                                    <span><a href="#designer">Can I make online purchases?</a></span>
                                    <span><a href="#designer">When can I visit your studio?</a></span>
                                    <span><a href="#designer">How long does shipping take?</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <div className="footerBox">
                                <div className="title">
                                    <a href='#tit'>
                                        SUBSCRIBE
                                    </a>
                                </div>
                                <div className="info">
                                    <Form>
                                        <Form.Group className="mb-3"   controlId="exampleForm.ControlInput1">
                                            <Form.Control className='inputStyle' type="email" placeholder="E-mail" />
                                            <span className='labelStyle'>* Get all the latest offers & info</span>
                                        </Form.Group>
                                    </Form>
                                    <button className='btn'>submitt</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
