import { HttpLink, from } from "@apollo/client";
import { NextSSRInMemoryCache, NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { onError } from "@apollo/client/link/error";
const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		console.log(graphQLErrors);
	}

	if (networkError) {
		// handle network error
		console.log(networkError);
	}
});

const httpLink = new HttpLink({ uri: "https://backend.humansource.ro/api/graphql" });

const appLink = from([errorLink, httpLink]);
export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache({}),
		link: appLink,
	});
});
