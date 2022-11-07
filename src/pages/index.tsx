// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { PageProps, graphql } from "gatsby";
import styled from "styled-components";
import { Layout, SEO, Image } from "@/components";
import MainCard from "@/components/MainCard";
import MainCard2 from "@/components/MainCard2";
import MainCard3 from "@/components/MainCard3";
import MainCard4 from "@/components/MainCard4";
import MainCard6 from "@/components/MainCard6";
import MainCard7 from "@/components/MainCard7";
import MainCard8 from "@/components/MainCard8";
import MainCard9 from "@/components/MainCard9";

type DataProps = {
	site: {
		buildTime: string;
	};
};



const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
	<Layout>
		{/* <SEO title="Using TypeScript" /> */}
		<MainCard/>
		<MainCard2/>
		<MainCard3/>
		<MainCard4/>
		<MainCard6/>
		<MainCard7/>
		<MainCard8/>
		<MainCard9/>
		
	</Layout>
);

export default Index;

export const query = graphql`
	{
		site {
			buildTime(formatString: "YYYY-MM-DD hh:mm a z")
		}
	}
`;
