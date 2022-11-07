import React from "react";
import "./styleCSS.css";

type Props = {};

const MainCard = (props: Props) => {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black	">
						We've saved clients over <br />
						8,000,000 and counting.
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[32px] text-center heading2 mt-10">What is your goal?</p>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center mt-10">
				<div className="flex flex-col flex-wrap w-4/6 justify-center items-center ">
					<div className="flex flex-col md:basis-1/2 lg:basis-1/3  justify-center items-center md:justify-between">
						<button className="bg-purple rounded-xl font-sans text-xs md:text-lg 	font-semibold text-white pl-10 pr-10 pt-2 pb-2  mt-8">Home Credit Line</button>
					</div>
					<div className="flex flex-col md:basis-1/2 lg:basis-1/3  justify-center items-center mt-10 md:mt-0">
						<button className="bg-purple rounded-xl font-sans text-xs md:text-lg 	font-semibold text-white pl-10 pr-10 pt-2 pb-2  mt-8">Home Credit Line</button>
					</div>
					<div className="flex flex-col  md:basis-1/2 lg:basis-1/3 justify-center items-center mt-10  lg:mt-0">
						<button className="bg-purple rounded-xl font-sans text-xs md:text-lg 	font-semibold text-white pl-10 pr-10 pt-2 pb-2  mt-8">Home Credit Line</button>
					</div>
				</div>
				<div className="mt-5 mb-20 ">
					<button className="bg-purple rounded-full font-sans text-lg	font-bold text-white pl-5 pr-5 pt-3 pb-3  sm:pl-10 sm:pr-10 sm:pt-4 sm:pb-4  mt-8">Next</button>
				</div>
			</div>
		</div>
	);
};

export default MainCard;
