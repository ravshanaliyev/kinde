import React from 'react'
import Banner from '../../assets/header.jpg'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className="home-header">
                <div className="container">
                    <div className="header-info">
                        <h3 className="header-info-title">
                            Kindergarten Program
                        </h3>
                        <h1 className="header-title">
                            Best Children’s Education
                        </h1>
                        <Link to="/shop" className='header-btn'>Admission Open 22-23</Link>
                    </div>
                    <div className="header-img">
                        <img src={Banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home