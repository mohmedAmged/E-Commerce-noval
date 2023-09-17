import React from 'react'
import './contactHome.css'
import { Form } from 'react-bootstrap'
export default function ContactHome() {
    return (
        <div className='container-fluid'>
            <div className="contactHomeSec">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='contactLeft'>
                            <div className="text">
                                <p>
                                   contact us
                                </p>
                                <h2>
                                    chic and unique pieces <br />  for your workspace
                                </h2>
                            </div>
                            <div className="formContact">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control className='formStyle' type="name" placeholder="Full Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control className='formStyle' type="email" placeholder="E-mail" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className='formStyle' as="textarea" placeholder='Message' rows={3} />
                                    </Form.Group>
                                    <button className='btn btn-outline-info btnStyle'>send message</button>
                                </Form>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex mapSec">
                        <iframe
                            className='map'
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892884.667930842!2d7.5404307946330436!3d53.45770580468663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2seg!4v1693359161397!5m2!1sen!2seg"
                            frameborder="0"
                            width="90%"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
