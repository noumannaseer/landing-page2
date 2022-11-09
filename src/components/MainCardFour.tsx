import React from "react";
import "./styleCSS.css";

type Props = {};

const MainCardFour = ({ setopenComponent }) => {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black  ">
						See real mortgage solutions <br />
						before you commit
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center heading2 mt-10">What is your mortgage balance</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
				<div className="flex flex-row bg-white rounded-full  border-2 justify-center items-center ">
					<div className=" bg-purple ml rounded-full font-sans text-lg text-white px-8 py-2 sm:px-16  ">$ </div>
					<input className="outline-none rounded-full font-sans text-lg pl-4 sm:px-16 py-2 " type="text" placeholder="250,000" />
				</div>
				<div className="mt-5 mb-20">
					<button
					onClick={({ value = 5 }) => {
						setopenComponent(value)
					  }}
					 className="bg-purple rounded-full font-sans text-lg	font-bold text-white px-12  py-3  sm:px-32 sm:py-4 mt-8">Next</button>
				</div>
			</div>
		</div>
	);
};

export default MainCardFour;
