import React from 'react'
import Banner from '../../assets/header.jpg'
import { Link } from 'react-router-dom'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import Statistic from '../../assets/info.png'
import { FaChevronCircleRight } from "react-icons/fa";

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
            {/* <div className="home-statistic">
                <div className="statistic-container">
                    <div className="statistic-img">
                        <img src={Statistic} alt="" />
                    </div>
                    <div className="statistic-info">
                        <h2 className="statistic-title">
                            Best for Your Kids
                        </h2>
                        <p className="statistic-parag">
                            Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.
                        </p>
                        <div className="stats">
                            <div className="stat">
                                <h3 className="stat-title">14+</h3>
                                <p className="stat-desc">Years of Experience</p>
                            </div>
                            <div className="stat">
                                <h3 className="stat-title">7K+</h3>
                                <p className="stat-desc">Students each year</p>
                            </div>
                            <div className="stat">
                                <h3 className="stat-title">15+</h3>
                                <p className="stat-desc">Award Wining</p>
                            </div>
                        </div>
                        <div className="extra-stat">
                            <FaChevronCircleRight />
                            <p>We believe every child is intelligent so we care.</p>
                        </div>
                        <div style={{ marginBottom: '20px' }} className="extra-stat">
                            <FaChevronCircleRight />
                            <p>Teachers make a difference of your child.</p>
                        </div>
                        <Link to="/about" className='statistic-link'>View More</Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home