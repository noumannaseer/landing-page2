import React from "react";
import "./styleCSS.css";
import RadioButton from "./RadioComponent/index"

type Props = {};

const MainCardTwo = ({setopenComponent}) => {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black">
						We've saved clients over <br />
						8,000,000 and counting.
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[32px] text-center heading2 mt-10">What is your goal?</p>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center mt-10">
				<RadioButton content={"Lower my monthly payments"} />
				<RadioButton content={"Use the equity in my home for cash on hand"} />
				<RadioButton content={"Use the equity in my home to pay off debt"} />
				<RadioButton content={"Just get an idea of how I can save"} />
				<div className="mt-5 mb-20 ">
					<button
					onClick={({ value = 3 }) => {
						setopenComponent(value)
					  }}
					 className="bg-purple rounded-full font-sans text-lg font-bold text-white pl-5 pr-5 pt-3 pb-3 sm:pl-10 sm:pr-10 sm:pt-4 sm:pb-4  mt-8">Next</button>
				</div>
			</div>
		</div>
	);
};

export default MainCardTwo;
