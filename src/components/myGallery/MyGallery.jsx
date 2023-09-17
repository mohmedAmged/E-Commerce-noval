import React, { useEffect, useState } from 'react'
import './myGallery.css'
import PageTitle from '../PageTitle'
import GalleryCardList from '../galleryCardList/GalleryCardList'
import { useSelector } from 'react-redux'
export default function MyGallery() {
    const { products } = useSelector(state => state.productReducer)
    // const [products, setProducts] = useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:3007/shopProducts")
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data));
    // },[])
    return (
        <div>
            <PageTitle title="portfolio standard" />
            <div className="galleryHandler pt-5">
                <div className="container">
                    <div className="">
                        <GalleryCardList products={products.slice(0,6)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
