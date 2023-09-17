import React from 'react'

import GalleryCard from '../galleryCard/GalleryCard'

export default function GalleryCardList(props) {
    return (
        <div className='row'>
            {props.products.map(product => {
                return <GalleryCard key={product.id} product={product} />
            }
            ) }
        </div>
    )
}

