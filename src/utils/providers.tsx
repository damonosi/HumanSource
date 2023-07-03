"use client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@material-tailwind/react";
import { useApollo } from "@/app/apollo";
import "../globals.css";
import { Provider } from "react-redux";

import reduxStore from "@/utils/redux/store";
interface IProviders {
	children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
	const client = useApollo();
	return (
		<Provider store={reduxStore}>
			<ApolloProvider client={client}>
				<ThemeProvider>{children}</ThemeProvider>
			</ApolloProvider>
		</Provider>
	);
};
export default Providers;
