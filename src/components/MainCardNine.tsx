import React from "react";
import "./styleCSS.css";

type Props = {};

const MainCardNine = (props: Props) => {
	return (
		<div className="bg-mainCard">
			<div className="pt-20">
				<div>
					<p className="font-raleway text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-black  ">
						We can’t wait to get started <br />
						on your reports!
					</p>
				</div>
				<div>
					<p className="font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center heading2 mt-10">What email should we send the reports too?</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-10">
				<div className=" bg-white rounded-full border-2 ">
					<input className="outline-none rounded-full font-sans text-lg px-4 sm:px-20 py-2 " type="text" placeholder="example@email.com" />
				</div>
				<div className="py-8">
					<input type="checkbox" id="id1" name="id1" value="" className="w-5 h-5 accent-pink-500" />
					<label htmlFor="id1" className="font-sans font-bold text-sm sm:text-base md:text-xl  text-center mt-10 ml-4">
						By clicking this button, you agree to and acknowledge <br />
						Nuborrow's Terms of Use and Privacy Policy
					</label>
				</div>

				<div className="mt-5 mb-20">
					<button className="bg-purple rounded-full font-sans text-lg	font-bold text-white px-8  py-3  sm:px-16 sm:py-4 mt-8">Get your reports</button>
				</div>
			</div>
		</div>
	);
};

export default MainCardNine;
