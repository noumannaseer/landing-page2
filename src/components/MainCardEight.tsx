import React from "react";
import "./styleCSS.css";

type Props = {};

const MainCardEight = ({setopenComponent}) => {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black  ">
						We hate SPAM too! <br />
					</p>
					<p className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center   ">
						(we will contact you only if we need to)
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center heading2 mt-10">What's the best number to text the link to your <br /> report to?</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
				<div className=" bg-white rounded-full border-2 ">
					<input className="outline-none rounded-full font-sans text-lg px-4 sm:px-20 py-2 " type="text" placeholder="Your Phone" />
				</div>
				
				<div className="mt-5 mb-20">
					<button
					onClick={({ value = 9 }) => {
						setopenComponent(value)
					  }} 
					className="bg-purple rounded-full font-sans text-lg	font-bold text-white px-12  py-3  sm:px-32 sm:py-4 mt-8">Next</button>
				</div>
			</div>
		</div>
	);
};

export default MainCardEight;
