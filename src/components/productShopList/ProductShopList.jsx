import React, { Fragment} from 'react'
import './productShopList.css'
import ShopCard from '../shopCard/ShopCard'
import PaginitionButton from '../paginitionButton/PaginitionButton'

const PRODUCTS_PER_PAGE = 9

export default function ProductShopList(props) {
  const pagesNum = Math.ceil(props.products.length / PRODUCTS_PER_PAGE)
  let paginitionElements = []
  for (let i = 0; i < pagesNum; i++) {
    paginitionElements.push(<PaginitionButton setCurrPage={props.setCurrPage} currPage={props.currPage} key={i} text={i + 1} />)

  }
const start = (props.currPage -1) * PRODUCTS_PER_PAGE 
const end = (props.currPage * PRODUCTS_PER_PAGE) - 1 
  return (
    <div>
      {
        props.products?.length > 0?
          <Fragment>
            <div className='minHightAdjust'>
              <div className="row">
                { 
                  props.products?.slice(start, end + 1).map((product)  => {
                      return <ShopCard key={product.id} product={product} />
                  })
                }
              </div>
            </div>
            <div className='d-flex justify-content-center gap-2'>
              {
                paginitionElements
              }
            </div>
          </Fragment>
          :
          <h2 className='alert alert-danger'>No Products Available</h2>
          
      }
    </div>
  )
}
