"use client";
import { ApolloWrapper } from "@/lib/apollo/provider";
import { ThemeProvider } from "@material-tailwind/react";
import { CookiesProvider } from "next-client-cookies";
import "../../globals.css";

interface IProviders {
	children: JSX.Element | JSX.Element[];
}
export const ClientCookiesProvider: typeof CookiesProvider = (props) => <CookiesProvider {...props} />;
const Providers = ({ children }: IProviders) => {
	return (
		<ApolloWrapper>
			<ThemeProvider>{children}</ThemeProvider>
		</ApolloWrapper>
	);
};
export default Providers;
