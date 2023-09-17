import React from 'react'
import { useDispatch } from 'react-redux'
import { removefavItem } from '../../store/slices/favSlice'
// import img1 from '../../assets/images/art/art1.jpg'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function WishListCard(props) {
    const dispatche = useDispatch()
    const handleRemoveFav = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatche(removefavItem(props.product.id))
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                )
            }
        })
    }
    return (

        <tr>
            <td className='product__one' ><i onClick={handleRemoveFav} className="bi bi-x-lg"></i></td>
            <td className='product__thumb'>
                <img src={props.product.thumbnail} alt="" />
            </td>
            <td className='prod___tit'>{props.product.title}</td>
            <td className='prod___price'>{props.product.price}$</td>
            <td className='prod___subTot'>{props.product.stk}</td>
            <td className='select___option'>
                <Link to={"/shop/" + props.product?.id} className="nav-link">
                    select option
                </Link>
            </td>
        </tr>


    )
}
