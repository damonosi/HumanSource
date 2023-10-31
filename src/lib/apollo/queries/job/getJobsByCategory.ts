import { gql } from "@apollo/client";
const query = gql`
	query Jobs($where: JobWhereInput!) {
		jobs(where: $where) {
			description
			id
			title
			date
			company
			requierments
			whyWork
		}
	}
`;

export default query;
