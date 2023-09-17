import React from 'react'
import './paginitionButton.css'
import Button from 'react-bootstrap/Button';
export default function PaginitionButton({text, setCurrPage, currPage}) {
  return (
    <div className='paginationBtn'>
      <Button onClick={()=>setCurrPage(+text)} variant="outline-secondary" className= {`paginition__style ${currPage==text?"gray":"normal"}`} >
        {text}
      </Button>
    </div>
  )
}
