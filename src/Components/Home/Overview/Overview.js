import React from 'react'
import './Style.css'
const Overview = () => {


  return (
    <>

      <div className="overview-section flex">
        <div className="overview">
          <div className="overview-heading flex">
            <p className="title">
              Overview
              <div className='sub-title'>Monthly Earning</div>
            </p>
            <div className="select-box">
              Select <i class='bx bx-chevron-down'></i>
            </div>
          </div>
         
         <div className="bars flex">
          <div className="bar">
            <div className="bar-line bar-1"></div>
            <div className="bar-text">Jan</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-2"></div>
            <div className="bar-text">Feb</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-3"></div>
            <div className="bar-text">Mar</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-4"></div>
            <div className="bar-text">Apr</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-5"></div>
            <div className="bar-text">May</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-6"></div>
            <div className="bar-text">Jun</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-7"></div>
            <div className="bar-text">Jul</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-8"></div>
            <div className="bar-text">Aug</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-9"></div>
            <div className="bar-text">Sep</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-10"></div>
            <div className="bar-text">Oct</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-11"></div>
            <div className="bar-text">Nov</div>
          </div>
          <div className="bar">
            <div className="bar-line bar-12"></div>
            <div className="bar-text">Dec</div>
          </div>
         </div>

        </div>
        <div className="customer">
        <div className="overview-heading flex">
            <p className="title"> Customers
              <div className='sub-title'>Customers that buy products</div>
            </p>
          </div>
          <div className="customer-box flex">
            {/* <div className="circle flex">
              <div className="mini-circle flex">
                <div className="percent">65%</div>
                <div className="total">Total New Customers</div>
              </div>
            </div> */}
            <div className="circle flex">
              <div className="circle-mini">
              <div className="progress">
              <h3>65%</h3>
              <div className="total">Total New Customers</div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview