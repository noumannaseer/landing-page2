import { Link } from "gatsby";
import React from "react";
import navitem from "../images/png/google.png";
import logo from "../images/png/logo.png";

export const Header = ({ siteTitle }) => (
	<>
		<header className="text-gray-400 w-full bg-[#ffffff] body-font">
			<div className="mx-auto flex justify-between p-5 md:flex-row items-center">
				<div className="flex title-font font-medium items-center  mb-4 md:mb-0">
					<img src={logo} alt="logo" className="sm:h-20 h-10" />
				</div>
				<div className="title-font font-medium items-center  mb-4 md:mb-0">
					<img src={navitem} alt="" className="sm:h-20 h-10" />
				</div>
			</div>
		</header>
	</>
);
