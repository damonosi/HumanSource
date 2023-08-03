"use client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@material-tailwind/react";
import { useApollo } from "@/app/apollo";
import "../globals.css";

interface IProviders {
	children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
	const client = useApollo();
	return (
		<ApolloProvider client={client}>
			<ThemeProvider>{children}</ThemeProvider>
		</ApolloProvider>
	);
};
export default Providers;
