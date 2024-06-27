"use client"
import React, { useRef, useState } from 'react';
import StickyBox from "react-sticky-box";
import GooglePropertyDetailsMapsComponent from './property-details-map';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Link from 'next/link';
const PropertySticky = () => {
   const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  
  const datePickerRef1 = useRef(null);
  const datePickerRef2 = useRef(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleIconClick1 = () => {
    if (datePickerRef1.current) {
      datePickerRef1.current.setOpen(true);
    }
  };

  const handleIconClick2 = () => {
    if (datePickerRef2.current) {
      datePickerRef2.current.setOpen(true);
    }
  };
   
    return (
        <div className="h-details_content py-5">
            <div className="container py-4">
                <div className="row g-4">
                    <div className="col-lg-8 pe-xxl-5">
                        <div className="cs-content">
                            <div className="mb-5 border-bottom pb-5">
                                <div className="fs-16 mb-1">
                                    <i className="fa-solid fa-location-dot me-1" />
                                    1123 Fictional St, San Francisco, CA 94103
                                </div>
                                <h2 className="mt-0">Best Service Provider in Town</h2>
                                {/* Start Card Property Facilities */}
                               
                                {/* /. End Card Property Facilities */}
                            </div>
                            <div className="mb-5 border-bottom pb-5">
                                {/* Start Title */}
                                <h4 className="fw-semibold mb-4 text-capitalize">About the Agent</h4>
                                {/* End Title */}
                                <p>
                                  Hello i am Alexander with a good experience of Real Estate and you shall check my details and work and let me know if want to connet, ill be happy to serve.
                                </p>
                            </div>
                            {/* Start Amenities Content */}
                            <div className="mb-5 border-bottom pb-5">
                                {/* Start Title */}
                                <h4 className="fw-semibold mb-4 text-capitalize">Perks</h4>
                                {/* End Title */}
                                <div className="row g-4">
                                    <div className="col-auto col-lg-3">
                                        {/* Start Amenities */}
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-video fs-18" />
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                Security
                                            </div>
                                        </div>
                                        {/* /. End Amenities */}
                                    </div>
                                   
                                
                                  
                              
                                    <div className="col-auto col-lg-3">
                                        {/* Start Amenities */}
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-square-parking fs-18" />
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                Potential
                                            </div>
                                        </div>
                                        {/* /. End Amenities */}
                                    </div>
                                    <div className="col-auto col-lg-3">
                                        {/* Start Amenities */}
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-utensils fs-18" />
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                Free Dinner
                                            </div>
                                        </div>
                                        {/* /. End Amenities */}
                                    </div>
                                </div>
                            </div>
                            {/* /.End Amenities Content */}
                            {/* Start Floor Plans */}
                           
                            {/* /.End Floor Plans */}
                            {/* Start Agent */}
                            <div className="mb-5 border-bottom pb-5">
                                {/* Start Title */}
                                <h4 className="fw-semibold mb-4 text-capitalize">Reach the Agent</h4>
                                {/* End Title */}
                                {/* Start Agent Card */}
                                <div className="agent-card d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <div className="avatar rounded-circle p-1 border border-primary">
                                            {/* Start Avatar Image */}
                                            <Link href="agent-details">
                                                <img
                                                    src="assets/img/avatar/01.jpg"
                                                    alt=""
                                                    className="avatar-img rounded-circle"
                                                />
                                            </Link>
                                            {/* /.End Avatar Image */}
                                            <div className="align-items-center avatar-badge bg-primary d-flex justify-content-center position-absolute rounded-circle text-white">
                                                <i className="fas fa-medal" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-1">
                                            <Link href="agent-details">Alexander Kaminski</Link>
                                        </h5>
                                        <div>Property Advisor</div>
                                        <div className="row g-2 mt-3">
                                            <div className="col-auto">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary btn-sm fw-semibold"
                                                >
                                                    Ask Question
                                                    <i className="fa-regular fa-circle-question ms-1" />
                                                </button>
                                            </div>
                                            <div className="col-auto">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary btn-sm fw-semibold"
                                                >
                                                    Connect Agent
                                                    <i className="fa-regular fa-address-book ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.End Agent Card */}
                            </div>
                            {/* /.End Agent */}
                            {/* Start Map */}
                            <div>
                                {/* Start Title */}
                                <h4 className="fw-semibold mb-4 text-capitalize">
                                    <span className="underline position-relative text-primary">
                                        Location
                                    </span>
                                </h4>
                                {/* End Title */}
                                {/* Start Map */}
                                <div className='rounded-4 overflow-hidden'>
                                    <GooglePropertyDetailsMapsComponent />
                                </div>
                                {/* /.End Map */}
                            </div>
                            {/* /. End Map */}
                        </div>
                    </div>
                    {/* Start Sidebar */}
                    <div className="col-lg-4">
                        <StickyBox>
                            <div className="appointment-form p-3 p-lg-4 p-xl-5 rounded-4 shadow">
                                <div>Connect with Service Provider</div>
                              
                                {/* Start Tabs Nav */}
                                <ul className="nav nav-tabs mb-5" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link ms-0 active"
                                            id="tab-one"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab-one-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab-one-pane"
                                            aria-selected="true"
                                        >
                                            Schedule a Meeting
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="tab-two"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab-two-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab-two-pane"
                                            aria-selected="false"
                                        >
                                            Request Quote
                                        </button>
                                    </li>
                                </ul>
                                {/* /.End Tabs Nav */}
                                {/* Start Tab Content */}
                                <div className="tab-content">
                                    {/* Start Tab Pane */}
                                    <div
                                        className="tab-pane fade show active"
                                        id="tab-one-pane"
                                        role="tabpanel"
                                        aria-labelledby="tab-one"
                                        tabIndex={0}
                                    >
                                        <form>
                                            <div className="row g-4">
                                                <div className="col-sm-12">
                                                    {/* Start Search Input With Icon */}
                                                    <div className="form-group has-icon">
                                                        <label className="required fw-semibold required text-dark">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Phone Number"
                                                            required=""
                                                        />
                                                        <i className="fa-solid fa-mobile-button form-icon fs-16 position-absolute top-50" />
                                                    </div>
                                                    {/* End Search Input With Icon */}
                                                </div>
                                                <div className="col-sm-12">
                                                    {/* Start Search Input With Icon */}
                                                    <div className="form-group has-icon">
                                                        <label className="required fw-semibold required text-dark">
                                                            Requirement Date
                                                        </label>
                                                        <DatePicker
                                                            selected={selectedDate1}
                                                            onChange={handleDateChange1}
                                                            placeholderText="Click to select a date"
                                                            dateFormat="MM-dd-yyyy"
                                                            className="form-control datepicker"
                                                            ref={datePickerRef1}
                                                        />
                                                        <i
                                                            className="fa-regular fa-calendar-days form-icon fs-16 position-absolute top-50"
                                                            onClick={handleIconClick1}
                                                        />

                                                    </div>
                                                    {/* End Search Input With Icon */}
                                                </div>

                                                <div className="col-sm-12">
                                                    {/* Start Search Input With Icon */}
                                                    <div className="form-group has-icon">
                                                        <label className="required fw-semibold required text-dark">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Enter Your Email"
                                                        />
                                                        <i className="fa-solid fa-envelope form-icon fs-16 position-absolute top-50" />
                                                    </div>
                                                    {/* End Search Input With Icon */}
                                                </div>
                                                <div className="col-sm-12">
                                                    {/* Start Button */}
                                                    <button
                                                        className="btn bg-blue-500 text-white btn-lg hover:text-black hover:bg-blue-400 w-100"
                                                        type="submit"
                                                    >
                                                        Send Request
                                                    </button>
                                                    {/* /.End Button */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.End Tab Pane */}
                                    {/* Start Tab Pane */}
                                    <div
                                        className="tab-pane fade"
                                        id="tab-two-pane"
                                        role="tabpanel"
                                        aria-labelledby="tab-two"
                                        tabIndex={0}
                                    >
                                        <form>
                                            <div className="row g-4">
                                                <div className="col-sm-12">
                                                    {/* Start Search Input With Icon */}
                                                    <div className="form-group has-icon">
                                                        <label className="required fw-semibold required text-dark">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Phone Number"
                                                            required=""
                                                        />
                                                        <i className="fa-solid fa-mobile-button form-icon fs-16 position-absolute top-50" />
                                                    </div>
                                                    {/* End Search Input With Icon */}
                                                </div>
                                                <div className="col-sm-12">
                                                    {/* Start Search Input With Icon */}
                                                    <div className="form-group has-icon">
                                                        <label className="required fw-semibold required text-dark">Appointment Date</label>
                                                        <DatePicker
                                                             selected={selectedDate2}
                                                             onChange={handleDateChange2}
                                                            placeholderText="Click to select a date"
                                                            dateFormat="MM-dd-yyyy"
                                                            className="form-control datepicker"
                                                            ref={datePickerRef2}
                                                        />
                                                        <i
                                                            className="fa-regular fa-calendar-days form-icon fs-16 position-absolute top-50"
                                                            onClick={handleIconClick2}
                                                        />
                                                    </div>
                                                    {/* End Search Input With Icon */}
                                                </div>
                                                <div className="col-sm-12">
                                                    {/* Start Search Input With Icon */}
                                                    <div className="form-group has-icon">
                                                        <label className="required fw-semibold required text-dark">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Enter Your Email"
                                                        />
                                                        <i className="fa-solid fa-envelope form-icon fs-16 position-absolute top-50" />
                                                    </div>
                                                    {/* End Search Input With Icon */}
                                                </div>
                                                <div className="col-sm-12">
                                                    {/* Start Button */}
                                                    <button
                                                        className="btn btn-primary btn-lg w-100"
                                                        type="submit"
                                                    >
                                                        Request info
                                                    </button>
                                                    {/* /.End Button */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.End Tab Pane */}
                                </div>
                                {/* /.End Tab Content */}
                            </div>
                        </StickyBox>
                    </div>
                    {/* /. End Sidebar */}
                </div>
            </div>
        </div>
    );
};

export default PropertySticky;