import React from 'react'

function Cart(props) {
  return (
    <>
    
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {props.data.phone} -   Rs {props.data.price}
          <button className="badge badge-dark badge-pill ml-auto"
                onClick={()=>props.removecart(props.data.id)}>x</button>
        </li>
        



    </>
  )
}

export default Cart