import React from 'react'
import './galleryCard.css'
import { Link } from 'react-router-dom'
export default function GalleryCard(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="itemHandler px-lg-4">
                <div className="imgItem">
                    <img className='w-100 card__img' src={props.product.thumbnail} alt="" />
                </div>
                <div className="textItem">
                    <Link to={"/portofolio/" + props.product?.id} className='nav-link'>
                    <h4>{props.product.title}</h4>
                    </Link>
                    <p>{props.product.subtitle}</p>
                </div>
            </div>
        </div>

    )
}
