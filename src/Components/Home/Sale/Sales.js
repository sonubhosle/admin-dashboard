import React from 'react'
import './Style.css'
import { data } from './Data'
const Sales = () => {
  return (
    <div className="product-sale">
      <div className="product-heading flex">
        <p className="title"> Product Sell</p>
        <div className='right-item flex'>
          <div className="search-box">
            <input type="text" placeholder="Serach" />
            <i class='bx bx-search'></i>
          </div>
          <div className="select-box">
            Last 30 day <i class='bx bx-chevron-down'></i>
          </div>
        </div>
      </div>
     <div className="product-list flex">
        <div className="prod-title">Product Name</div>
        <div className="prod-assets flex">
          <li>Stock</li>
          <li>Price</li>
          <li>Total Sales</li>
        </div>
       </div>
       <div className="product-items ">
        {
          data.map((e)=>{
            return(
              <div className='prod-info flex'>
              <div className="products flex">
                 <div className="product-img">
                  <img src={e.img} alt={e.title} />
                 </div>
                <div className="prod-name ">
                 <div className="title">{e.title}</div>
                 <div className="subtitle">{e.subtitle}</div>
                </div>
              </div>
              <div className="assets-info flex">
               <li> <p className="assets-title">Stock : </p>{e.stock}</li>
               <li className='bold'> <p className="assets-title">Price : </p> {e.price}</li>
               <li> <p className="assets-title">Total Sale : </p> {e.total}</li>
              </div>
              </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default Sales