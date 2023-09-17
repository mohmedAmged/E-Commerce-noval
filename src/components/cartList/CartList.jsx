import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../store/slices/cartSlice'
import Swal from 'sweetalert2'
export default function CartList(props) {
    const dispatche = useDispatch()
    const handleRemoveCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatche(removeItem(props.product.id))
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                )
            }
        })
    }
    const handleDecreaseItem = () => {
        dispatche(decreaseQuantity(props.product.id))
    }
    const handleIncreaseItem = () => {
        dispatche(increaseQuantity(props.product.id))
    }
    return (
        <tr>
            <td className='product__one' ><i onClick={handleRemoveCart} className="bi bi-x-lg"></i></td>
            <td className='product__thumb'>
                <img src={props.product.thumbnail} alt="" />
            </td>
            <td className='prod___tit'>{props.product.title}</td>
            <td className='prod___price'>{props.product.price}$</td>
            <td className='prod___qty'>
                <span onClick={handleDecreaseItem}>-</span>
                <span className='p-3 border mx-3'>{props.product.quantity}</span>
                <span onClick={handleIncreaseItem}>+</span>
            </td>
            <td className='prod___subTot'>200</td>
        </tr>
    )
}
