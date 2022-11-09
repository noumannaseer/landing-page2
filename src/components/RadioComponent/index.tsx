import React from "react";

function index({ content }) {
	return (
		<>
			<div className="flex flex-row bg-white rounded-full my-2 py-4 px-6 w-1/4 border-2 justify-center items-center ">
				<input
					id="bordered-radio-1"
					type="radio"
					name="bordered-radio"
					// className="peer/draft w-4 h-4 accent-[#715BA8] border-gray-300 focus:ring-[#715BA8]"
					className="bg-purple outline-none rounded-full font-sans text-xl pl-4 sm:px-16 py-2"
				/>
				<label htmlFor="bordered-radio-1" className="px-12 ml-2 w-full text-sm text-gray-400">
					{content}
				</label>
			</div>
		</>
	);
}

export default index;
