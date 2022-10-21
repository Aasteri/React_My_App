import React from 'react';
import Slider from "../inc/Slider";
import { Link } from 'react-router-dom';
import VMC from "./inc/Vmc";
import Service4 from '../images/services4.jpg';
import Service2 from '../images/services2.jpg';
import Service5 from '../images/services5.jpg';
import Footer from '../inc/Footer';

function Home() {
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p className='p1'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow"> Read More </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our vision, mission and values */}
            <VMC />

            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='card shadow'>
                                <img src={Service4} className="w-100 border-bottom" alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p className='p1'>
                                        remaining essentially unchanged. It was popularised in the 1960s with the release.
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Read More</Link>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className='card shadow services-card'>
                                <img src={Service2} className="w-100 border-bottom" alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 2</h6>
                                    <div className="underline"></div>
                                    <p className='p1'>
                                        remaining essentially unchanged. It was popularised in the 1960s with the release.
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Read More</Link>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div className='card shadow'>
                                <img src={Service5} className="w-100 border-bottom" alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 3</h6>
                                    <div className="underline"></div>
                                    <p className='p1'>
                                        remaining essentially unchanged. It was popularised in the 1960s with the release.
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Read More</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;