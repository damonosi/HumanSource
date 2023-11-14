import { gql } from "@apollo/client";
const locationQuery = gql`
	query Countries {
		countries {
			name
		}
	}
`;

export default locationQuery;
