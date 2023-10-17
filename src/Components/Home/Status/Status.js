import React from 'react'
import './Style.css'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {BiDetail,BiWallet} from 'react-icons/bi'
import {BsHandbag} from 'react-icons/bs'
const Status = () => {
  return (
    <div className="status-section flex">
    
       <div className="item flex">
        <div className="left pang">
          <AiOutlineDollarCircle />
        </div>
        <div className="right">
          <div className="title">Earning</div>
          <div className="bold-title">$198k</div>
          <div className="growth"> <span className="green"><i className='bx bx-down-arrow-alt' ></i>37.8%</span>&nbsp;this month</div>
        </div>
       </div>
       <div className="item flex">
        <div className="left lavender">
          <BiDetail />
        </div>
        <div className="right">
          <div className="title">Orders</div>
          <div className="bold-title">$2.4k</div>
          <div className="growth"> <span className="red"><i className='bx bx-down-arrow-alt' ></i>2%</span>&nbsp;this month</div>
        </div>
       </div>
       <div className="item flex">
        <div className="left alice">
        <BiWallet />
        </div>
        <div className="right">
          <div className="title">Balance</div>
          <div className="bold-title">$2.4k</div>
          <div className="growth"> <span className="red"><i className='bx bx-down-arrow-alt' ></i>2%</span>&nbsp;this month</div>
        </div>
       </div>
       <div className="item flex">
        <div className="left pink">
          <BsHandbag/>
        </div>
        <div className="right">
          <div className="title">Total Sales</div>
          <div className="bold-title">$11k</div>
          <div className="growth"> <span className="green"> <i className='bx bx-up-arrow-alt'></i>11%</span>&nbsp;this week</div>
        </div>
       </div>
    </div>
  )
}

export default Status
