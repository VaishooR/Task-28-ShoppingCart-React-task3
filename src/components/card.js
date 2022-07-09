import React from 'react'

function Card(props) {
  return (
    <>
    <div class="card h-60  mt-5 ml-5 " style={{width:'14rem'}}>
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">{props.data.phone}</h5>
                Rs {props.data.price}
            </div>
        </div>
        
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
                <button 
                  class="btn btn-outline-dark mt-auto" 
                  onClick={()=>props.addtocart(props.data.id)}
                  disabled={props.cartitem.some(obj=>obj.id===props.data.id)}
                  >Add to Cart
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card