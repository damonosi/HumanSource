import { gql } from "@apollo/client";
const locationQuery = gql`
	query Locations {
		locations {
			name
		}
	}
`;

export default locationQuery;
