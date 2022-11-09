// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { PageProps, graphql } from "gatsby";
import styled from "styled-components";
import { Layout, SEO, Image } from "@/components";
import DynamicContent from "../components/DynamicComponent/index"

import Footer from "@/components/Footer"

type DataProps = {
	site: {
		buildTime: string;
	};
};



const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
	<Layout>
		{/* <SEO title="Using TypeScript" /> */}
		<DynamicContent />
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
