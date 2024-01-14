import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import Statistic from '../../assets/info.png'
import { FaChevronCircleRight } from "react-icons/fa";
import Program1 from '../../assets/program1.jpg'
import Program2 from '../../assets/program2.jpg'
import Program3 from '../../assets/program3.jpg'
import AccordionImg from '../../assets/2.jpg'
import Logo from '../../assets/logo.svg'
import Banner from '../../assets/header.jpg'
import Teacher1 from '../../assets/t1.jpg'
import Teacher2 from '../../assets/t2.jpg'
import Teacher3 from '../../assets/t3.jpg'
import Teacher4 from '../../assets/t4.jpg'
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
            <div className="home-statistic">
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
                            <div style={{ paddingTop: '5px' }} className="stat">
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
            </div>
            <div className="home-programs">
                <div className="programs-container">
                    <div className="programs-info">
                        <h2 className="programs-title">
                            Our Programs
                        </h2>
                        <p className="programs-parag">
                            Kindedo opened its doors in 1984 with a unique vision to provide its students
                            with a globally focused study of arts.
                        </p>
                    </div>
                    <div className="programs-cards">
                        <div className="programs-card">
                            <img src={Program1} alt="" />
                            <h3 className="program-card-title">Settling</h3>
                            <p className="program-card-desc">
                                To round out our weekend of celebra tions, we are holding our reunion.
                            </p>
                            <div className="program-stats">
                                <div style={{ paddingTop: '5px' }} className="program-stat">
                                    <h3 className="program-stat-title">4-5 Yrs</h3>
                                    <p className="program-stat-desc">age</p>
                                </div>
                                <div className="program-stat">
                                    <h3 className="program-stat-title">5 Days</h3>
                                    <p className="program-stat-desc">Weekly</p>
                                </div>
                                <div className="program-stat">
                                    <h3 className="program-stat-title">3.30 Hrs</h3>
                                    <p className="program-stat-desc">period</p>
                                </div>
                            </div>
                        </div>
                        <div className="programs-card">
                            <img src={Program2} alt="" />
                            <h3 className="program-card-title">Settling</h3>
                            <p className="program-card-desc">
                                To round out our weekend of celebra tions, we are holding our reunion.
                            </p>
                            <div className="program-stats">
                                <div style={{ paddingTop: '5px' }} className="program-stat">
                                    <h3 className="program-stat-title">4-5 Yrs</h3>
                                    <p className="program-stat-desc">age</p>
                                </div>
                                <div className="program-stat">
                                    <h3 className="program-stat-title">5 Days</h3>
                                    <p className="program-stat-desc">Weekly</p>
                                </div>
                                <div className="program-stat">
                                    <h3 className="program-stat-title">3.30 Hrs</h3>
                                    <p className="program-stat-desc">period</p>
                                </div>
                            </div>
                        </div>
                        <div className="programs-card">
                            <img src={Program3} alt="" />
                            <h3 className="program-card-title">Settling</h3>
                            <p className="program-card-desc">
                                To round out our weekend of celebra tions, we are holding our reunion.
                            </p>
                            <div className="program-stats">
                                <div style={{ paddingTop: '5px' }} className="program-stat">
                                    <h3 className="program-stat-title">4-5 Yrs</h3>
                                    <p className="program-stat-desc">age</p>
                                </div>
                                <div className="program-stat">
                                    <h3 className="program-stat-title">5 Days</h3>
                                    <p className="program-stat-desc">Weekly</p>
                                </div>
                                <div className="program-stat">
                                    <h3 className="program-stat-title">3.30 Hrs</h3>
                                    <p className="program-stat-desc">period</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-accordion">
                <div className="accordion-container">
                    <div className="accordion-info">
                        <h2 className="accordion-title">
                            Know More
                            About Kindedo
                        </h2>
                        <div className="accordion">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    What is the best age to start Kindergarten?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Some states and countries implement mandatory early childhood education. With such rules, many preschool and kindergarten learning centers are built.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Which is the best preschool for your child ?
                                </AccordionSummary>
                                <AccordionDetails>
                                    Right after you book your party, you’ll receive an email confirming the date, time, and details about what’s included in the package you’ve selected result.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    What is the toution fee on first year?
                                </AccordionSummary>
                                <AccordionDetails>
                                    There will also be some fantastic outdoor entertainment, desserts and drinks, plus tours of the School for those who want to continue the celebrations.
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="accordion-img">
                        <img src={AccordionImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="home-form">
                <div className="form-container">
                    <h2 className="form-title">Join Our New Session</h2>
                    <p className="form-desc">Kindedo believes that good questions drive good answers. Whether it's a query
                        about the world around us or a challenge.</p>
                    <Link to="/shop" className="form-btn">Apply Now</Link>
                </div>
            </div>
            <div className="home-teachers">
                <div className="teachers-container">
                    <div className="teachers-info">
                        <h2 className="teachers-title">Our Best Teachers
                        </h2>
                        <p className="teachers-desc">With the help of teachers and the environment as the third teacher, students
                            have opportunities to confidently take risks.</p>
                    </div>
                    <div className="teacher-cards">
                        <div className="teacher-card">
                            <img src={Teacher1} alt="" className='teacher-img' />
                            <div className="teacher-card-info">
                                <h3 className="teacher-card-title">John Doe</h3>
                                <p className="teacher-card-desc">Teacher</p>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <img src={Teacher2} alt="" className='teacher-img' />
                            <div className="teacher-card-info">
                                <h3 className="teacher-card-title">Jane Doe</h3>
                                <p className="teacher-card-desc">Teacher</p>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <img src={Teacher3} alt="" className='teacher-img' />
                            <div className="teacher-card-info">
                                <h3 className="teacher-card-title">Steve Smith</h3>
                                <p className="teacher-card-desc">Teacher</p>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <img src={Teacher4} alt="" className='teacher-img' />
                            <div className="teacher-card-info">
                                <h3 className="teacher-card-title">Steve Smith</h3>
                                <p className="teacher-card-desc">Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={Logo} alt="" />
                <p>© 2024 Kindedo. All rights reserved</p>
            </div>
        </div>
    )
}

export default Home