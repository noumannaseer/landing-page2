import React from "react";
import RadioButton from "./RadioComponent/index"

function MainCardFive({ setopenComponent }) {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black  ">
						We've added over 500,00 points <br /> to clients credit scores
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center heading2 mt-10">
						Do you know current credit score? (it's OK if you don't, we'll give you <br /> your free score in your report){" "}
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
                <RadioButton content={"Very Good (720 +)"} />
                <RadioButton content={"Good (650 - 719)"} />
                <RadioButton content={"Average  (600 - 649)"} />
                <RadioButton content={"I need help (< 599)"} />
				<div className="mt-5 mb-20">
					<button
						onClick={({ value = 6 }) => {
							setopenComponent(value);
						}}
						className="bg-purple rounded-full font-sans text-lg	font-bold text-white px-12  py-3  sm:px-32 sm:py-4 mt-8">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default MainCardFive;
