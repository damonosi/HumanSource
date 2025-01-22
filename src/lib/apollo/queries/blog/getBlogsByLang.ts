import { gql } from "@apollo/client";

const query = gql`
	query Blogs($where: BlogWhereInput!, $orderBy: [BlogOrderByInput!]!) {
		blogs(where: $where, orderBy: $orderBy) {
			id
			slug
			dateCreated
			title
			author {
				name
			}
			tags {
				name
			}
			categories {
				name
				id
			}

			content {
				document
			}
			photo {
				altText
				filename
				id
				image {
					publicUrlTransformed
				}
			}
		}
	}
`;
export default query;
