import React from 'react'
import './statue.css'
export default function Statue(props) {
    return (
        <div>
            <span className='stat__tit'>
                {props.title}
            </span>
        </div>
    )
}
