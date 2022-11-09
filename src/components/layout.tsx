/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Nav } from "./Nav";
import Footer from "./Footer";

export const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: `var(--size-content)`,
					padding: `var(--size-gutter)`,
				}}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};
