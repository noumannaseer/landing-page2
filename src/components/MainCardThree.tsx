import React from "react";
import "./styleCSS.css";

type Props = {};

const MainCardThree = ({ setopenComponent }) => {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black  ">
						Get a free home equity report <br />
						(no strings)
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center heading2 mt-10">What is your home worth? (you can guess, it's OK)</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
				<div className="flex flex-row bg-white rounded-full  border-2 justify-center items-center ">
					<div className=" bg-purple ml rounded-full font-sans text-lg text-white px-8 py-2 sm:px-16  ">$ </div>
					<input className="outline-none rounded-full font-sans text-lg pl-4 sm:px-16 py-2 " type="text" placeholder="250,000" />
				</div>
				<div className="mt-5 mb-20">
					<button
					onClick={({ value = 4 }) => {
						setopenComponent(value)
					  }} 
					 className="bg-purple rounded-full font-sans text-lg	font-bold text-white pl-5 pr-5 pt-3 pb-3  sm:pl-10 sm:pr-10 sm:pt-4 sm:pb-4 mt-8">keep building my reports</button>
				</div>
			</div>
		</div>
	);
};

export default MainCardThree;
