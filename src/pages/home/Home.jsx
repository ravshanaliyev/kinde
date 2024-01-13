import React from 'react'
import Banner from '../../assets/header.jpg'
import { Link } from 'react-router-dom'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className="home-header">
                <div className="header-container">
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
            <div className="home-offers">
                <div className="offers-container">
                    <div className="home-offers-info">
                        <h2 className="home-offers-title">
                            Our Offerings
                        </h2>
                        <p className="home-offers-parag">
                            Our multi-level kindergarten programs cater to the age group of 2-5 years
                            with a curriculum focussing children.
                        </p>
                    </div>
                    <div className="offers-card">
                        <div className="offer-card">
                            <div className="offer-icon"><MdOutlineSportsSoccer /></div>
                            <h4 className="offer-card-title">Sports Class</h4>
                            <p className="offer-card-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat illo ut. Lorem ipsum dolor sit amet.
                            </p>
                            <Link to="/about" className='offer-link'>View Details</Link>
                        </div>
                        <div className="offer-card">
                            <div className="offer-icon"><MdOutlineSportsSoccer /></div>
                            <h4 className="offer-card-title">Sports Class</h4>
                            <p className="offer-card-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat illo ut. Lorem ipsum dolor sit amet.
                            </p>
                            <Link to="/about" className='offer-link'>View Details</Link>
                        </div>
                        <div className="offer-card">
                            <div className="offer-icon"><MdOutlineSportsSoccer /></div>
                            <h4 className="offer-card-title">Sports Class</h4>
                            <p className="offer-card-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat illo ut. Lorem ipsum dolor sit amet.
                            </p>
                            <Link to="/about" className='offer-link'>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home