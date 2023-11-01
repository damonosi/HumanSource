import { gql } from "@apollo/client";
const query = gql`
	query Categories {
		categories {
			name
		}
	}
`;

export default query;
