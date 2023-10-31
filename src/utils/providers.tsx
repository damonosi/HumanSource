"use client";
import { ApolloWrapper } from "@/lib/apollo/provider";
import { ThemeProvider } from "@material-tailwind/react";

import "../../globals.css";


interface IProviders {
	children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
	return (
		<ApolloWrapper>
			<ThemeProvider>{children}</ThemeProvider>
		</ApolloWrapper>
	);
};
export default Providers;
