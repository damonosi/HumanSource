import { gql } from "@apollo/client";
const query = gql`
	query Query($where: JobWhereUniqueInput!) {
		job(where: $where) {
			date
			title
			id
			company
			description
			requierments
			salary
			whyWork
			jobCategory {
				name
			}
		}
	}
`;

export default query;
