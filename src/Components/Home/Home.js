import React from 'react'
import Status from './Status/Status'
import Overview from './Overview/Overview'
import Sales from './Sale/Sales'
import './Style.css'

const Home = () => {


    return (
        <section className='home-section'>
         
            <div class="heading flex"> 
            <p> Hello Shahrukh 👋,</p>
                <div class="right-search flex">
                    <input type="text" placeholder="Serach" />
                   <i class='bx bx-search'></i>
                </div>
            </div>
            <div className="home-items">
            <Status />
            <Overview />
            <Sales />
            </div>
        </section>
        
    )
}

export default Home