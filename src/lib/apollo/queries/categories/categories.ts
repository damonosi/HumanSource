import { gql } from "@apollo/client";
const query = gql`
	query Categories {
		categories {
			name
			nameIT
		}
	}
`;

export default query;
