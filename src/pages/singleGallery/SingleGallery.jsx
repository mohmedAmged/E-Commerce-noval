import React, { useEffect, useState } from 'react'
import './singleGallery.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle';
import img1 from '../../assets/images/singleGalleryimgs/img1.jpg'
import img2 from '../../assets/images/singleGalleryimgs/img2.jpg'
import img3 from '../../assets/images/singleGalleryimgs/img3.jpg'
const singleImages = [
    img1,
    img2,
    img3
]
export default function SingleGallery() {
    const { prodId } = useParams();
    const { products } = useSelector((state) => state.productReducer);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct(products?.find((el) => el?.id == prodId))
        console.log(product);
    }, [prodId, product, products])
    return (
        <div>
            <PageTitle title={product?.title} />
            <div className="gallerySec">
                <div className="container">
                    <div className="row">
                        {singleImages?.map((single) => {
                            return <div className="col-lg-12">
                                <div className="imgItem mb-5">
                                    <img className='w-100' src={single} alt="" />
                                </div>
                            </div>
                        })
                        }
                    </div>
                    <div className="gallery__Info">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="gallery__tit">
                                    <h1>
                                        {product?.title}
                                    </h1>
                                </div>
                                <div className="gallery__desc">
                                    <p>
                                        {product?.desc}
                                    </p>
                                </div>
                                <div className="gallery__dets row justify-content-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <p className=''>
                                            category:
                                            <span>{product?.category}</span>
                                        </p>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <p className=''>
                                            date:
                                            <span>{product?.date}</span>
                                        </p>
                                    </div>

                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <p className=''>
                                            tags:
                                            <span>{product?.tags}</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
