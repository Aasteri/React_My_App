import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

function Footer() {
    return (
            <div class="">
                <footer class="text-white text-center text-lg-start footer-bg">
                    {/* <!-- Grid container --> */}
                    <div class="container p-4">
                        {/* <!--Grid row--> */}
                        <div class="row mt-4">
                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">About company</h5>

                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti.
                                </p>

                                <p>
                                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias.
                                </p>

                                <div class="mt-4">
                                    {/* <!-- Facebook --> */}
                                    <a type="button" class="btn btn-floating btn-warning btn-circle btn-xl"><Icon.Facebook/></a>
                                    {/* <!-- Dribbble --> */}
                                    <a type="button" class="btn btn-floating btn-warning btn-circle btn-xl"><Icon.Dribbble/></a>
                                    {/* <!-- Twitter --> */}
                                    <a type="button" class="btn btn-floating btn-warning btn-circle btn-xl"><Icon.Twitter/></a>
                                    {/* <!-- Google + --> */}
                                    <a type="button" class="btn btn-floating btn-warning btn-circle btn-xl"><Icon.Google/></a>
                                    {/* <!-- Linkedin --> */}
                                </div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" id="formControlLg" class="form-control form-control-lg" />
                                    <label class="form-label" for="formControlLg ml-0">Search</label>
                                    <div class="form-notch"><div class="form-notch-leading footer-search2"></div>
                                        <div class="form-notch-middle footer-search1"></div>
                                        <div class="form-notch-trailing"></div>
                                    </div>
                                </div>

                                <ul class="fa-ul ny">
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">New York, NY 10012, US</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">info@example.com</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 01 234 567 88</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">Opening hours</h5>

                                <table class="table text-center text-white">
                                    <tbody class="font-weight-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 10pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row end--> */}
                    </div>
                    {/* <!-- Grid container end --> */}

                    {/* <!-- Copyright --> */}
                    <div class="text-center p-3 copyright-bg">
                        ?? 2022 Copyright: 
                        <a class="text-white" href="https://aasteri.com/"> Aasteri.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
    )
}
export default Footer;


