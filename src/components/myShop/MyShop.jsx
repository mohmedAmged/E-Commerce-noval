import React, { useEffect, useState } from 'react'
import './myShop.css'
import PageTitle from '../PageTitle'
import SidebarShop from '../sideBarShop/SidebarShop'
import ProductShopList from '../productShopList/ProductShopList'

export default function MyShop() {
  const [loading, setLoading] =useState(false)
    const [currPage, setCurrPage] = useState(1)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3007/shopProducts`)
            .then(res => res.json())
            .then(data => setProducts(data))
            setLoading(true)
    }, [])
    return (
        <div>
            <PageTitle title="shop" />
            <div className="container">
                <div className="shopContainer">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="shopItems">
                                <ProductShopList setLoading={setLoading} loading={loading} currPage={currPage} setCurrPage={setCurrPage} products={products} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <SidebarShop setCurrPage={setCurrPage} products={products} setProducts={setProducts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
