import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Card from './components/card';
import Cart from './components/cart';
import Footer from './components/footer';
import {useState} from 'react';

function App() {
  const [carddetail,setcard]=useState([
    {
      id:1,
      phone:'Samsung',
      price:8000,
      isAvailable:true
    },
    {
      id:2,
      phone:'iphone',
      price:50000,
      isAvailable:false
    },
    {
      id:3,
      phone:'MI',
      price:10000,
      isAvailable:true
    },
    {
      id:4,
      phone:'OnePlus',
      price:20000,
      isAvailable:true
    },
    {
      id:5,
      phone:'Redmi',
      price:5000,
      isAvailable:true
    },
    {
      id:6,
      phone:'Nokia',
      price:2000,
      isAvailable:false
    }  
])

const [cartitems,setcartitems]=useState([]);
const [total,settotal]=useState([0]);

let addtocart=(id)=>{
    let cardid=carddetail.findIndex(obj=>obj.id===id);
    let clickedcard=carddetail[cardid];
    setcartitems([...cartitems,clickedcard]);
    settotal(parseInt(total)+parseInt(clickedcard.price))
}

let removecart=(id)=>{
  let removeprodid=cartitems.findIndex(obj=>obj.id===id);
  settotal(parseInt(total)-parseInt(cartitems[removeprodid].price));
  cartitems.splice(removeprodid,1);
  setcartitems([...cartitems])

}
  return (
    <>
    <div className="container-fluid ">

      {/* Navbar */}
      <div className="row">
        <div className="col-lg-12">
          <Navbar></Navbar> 
        </div>
      </div>

      {/* Header */}
      <div className="row">
        <div className="col-lg-12">
           <Header></Header>
        </div>
      </div>

      {/* Products and Cart */}
      <div className="row ">

        {/* Product */}
        <div className="col-lg-8 ">
          <div className="row mb-5">
            {
              carddetail.map(card=>{
                return <Card data={card} cartitem={cartitems} addtocart={addtocart}></Card>
              })
            }
          </div>
        </div>

        {/* Cart */}
        <div className="col-lg-4">
          <div className="row">
          <div className="mt-5 ml-5" style={{fontSize:'25px'}}>Cart:</div>
          <ul className="list-group ml-5 mt-2" style={{width:'20rem'}}>
            {
              cartitems.map(cart=>{
                return <Cart data={cart} removecart={removecart}></Cart>
              })
            }
          </ul>
          <div className="mt-4 ml-5" style={{fontSize:'25px'}}>Total: Rs {total}</div>

          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="row">
        <div className="col-lg-12">
           <Footer></Footer>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
