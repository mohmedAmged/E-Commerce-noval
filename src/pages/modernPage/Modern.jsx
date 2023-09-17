import React from 'react'
import './modern.css'
import PageTitle from '../../components/PageTitle'
import img1 from '../../assets/images/Modern/img1.jpg'
import img2 from '../../assets/images/Modern/img2.jpg'
import img3 from '../../assets/images/Modern/img3.jpg'
const images = [
    img1,
    img2,
    img3
]
export default function Modern() {
    return (
        <div>
            <PageTitle title="Modern" />
            <div className="modernSec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        {
                            images.map((el) => {
                                return <div className="imgItem mb-5">
                                            <img className='w-100' src={el} alt="img" />
                                        </div>
                            })
                        }
                        </div>
                        <div className="col-lg-4">
                            <div className="modernInfo">
                                <h1>
                                    modern
                                </h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci ng elit, sedo eiusmod tempor. incididunt ut laboru et dolore mag nvaliqua. Ut enim ad minim veiatm, quis nostrud exercita tionul lamco laboris nisiutka liqui ex ea commodo conse quatduis aute iruredo lor in reprehenderit in voluptate velitm esse ciuld.
                                </p>
                                <div className="modern__Deti">
                                    <p>
                                        category:
                                        <span>design</span>
                                    </p>
                                    <p>
                                        date:
                                        <span>May 18, 2021</span>
                                    </p>
                                    <p>
                                        tags:
                                        <span>design, furniture</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
