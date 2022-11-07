import React from 'react';
import logo from '../images/png/logo.png';
import phone from '../images/png/telephone.png';
import cicon from '../images/png/cicon.png';
import envalup from '../images/png/envalup.png';
import location from '../images/png/location.png';
import "./styleCSS.css";


type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <section className="body-font w-full mt-[50px] bg-mainCard">
      <div className="w-[90%] flex flex-wrap px-5 py-24 mx-auto items-center justify-between " >
        <div className="md:w-[60%] lg:pl-14 md:pr-12 md:py-8 md:mb-0 mb-10 pb-10" >
          <img src={logo} alt="logo" className="h-20" />
          <h1 className="sm:text-xl text-xl mt-4 font-bold font-railway title-font mb-4 text-[#000000]">
            Download the Nuborrow App
          </h1>

          <div className="flex flex-wrap">
            <div className="sm:mx-1">
              {/* ************************** */}
              <a href='https://play.google.com/store/apps/details?id=com.fantechlabs.nuborrow' target="_blank">
              <div className="flex mt-3 w-48 h-14 bg-black hover:opacity-50 text-white rounded-lg items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width={30}>
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
              </a>

              {/* ************************** */}
            </div>
            <div className="sm:mx-1">
              {/* **************** */}
              <a href='https://apps.apple.com/app/nuborrow/id1551821197' target="blank">
              <div className="flex mt-3 w-48 h-14 bg-black hover:opacity-50 text-white rounded-xl items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width={30}>
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </div>
              </a>

              {/* **************** */}
            </div>
          </div>

          <div>
          <p className='font-sans font-bold text-xl mt-5'>
          Legal Information 
          </p>

          <p className="leading-relaxed text-base mt-7 text-[#000000] ">
          Copyright © 2022 Nuborrow GP. <br />
          All rights reserved. 
            {/* Copyright © 2022 NuBorrow Inc. License Number: 13115. Designed by <a href="https://www.fantechlabs.io/" target="_blank">Fantech Labs</a> */}
          </p>
          </div>
          {/* <p className="mt-6 font-normal text-sm">
            All approvals are subject to the underwriting requirements
            Nuborrow will provide the lowest rate possible within access to
            our lenders and client’s strength to qualify for the mortgage.
          </p> */}
        </div>

        <div className="flex flex-col  md:pr-12 md:py-8 md:mb-0 mb-10 pb-10 pr-14 pt ">
          <h2 className="sm:text-3xl -mt-4 text-2xl font-medium title-font mb-2 text-black font-raleway">
            Contact Us
          </h2>
          <nav className="flex flex-col list-none mb-1">
            {/* ***************** */}
            <div className="inline-flex items-center my-2">
              <img
                alt="testimonial"
                src={phone}
                className="w-8 h-8 flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="text-black font-semibold text-base">
                  <a href="tel:+1 888 372 5588">+1 888 372 5588</a>
                </span>
                {/* <input></input> */}
              </span>
            </div>
            {/* ***************** */}
            {/* ***************** */}
            <div className="inline-flex items-center my-2">
              <img
                alt="testimonial"
                src={envalup}
                className="w-8 h-8 flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="text-black font-semibold text-base">
                  <a href="mailto:hello@nuborrow.com">hello@nuborrow.com</a>
                </span>
              </span>
            </div>
            {/* ***************** */}
            {/* ***************** */}
            <div className="inline-flex items-center my-2">
              <img
                alt="testimonial"
                src={location}
                className="w-8 h-8 flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="text-black font-semibold text-base">
                  Nuborrow Head Office <br /> 9135 Keele St. Unit B1 Vaughan, On L4K
                  1J0
                </span>
              </span>
            </div>
            {/* ***************** */}
            {/* ***************** */}
            <div className="inline-flex items-center my-2">
              <img
                alt="testimonial"
                src={cicon}
                className="w-8 h-8 flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="text-black font-semibold text-base">
                FSRA Licensed mortgage brokerage #13115 | <br />
                "Nuborrow" is a trademark of Nuborrow GP.
                </span>
              </span>
            </div>
            {/* ***************** */}
          </nav>
        </div>
      </div>
    </section>
    {/* ****************** */}
  </>
  )
}

export default Footer