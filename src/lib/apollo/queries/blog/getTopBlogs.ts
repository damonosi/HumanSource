import { gql } from "@apollo/client";

const query = gql`
	query Blogs($where: BlogWhereInput!) {
		blogs(where: $where) {
			id
			slug
			dateCreated
			title

			content {
				document
			}
			photo {
				altText
				image {
					publicUrlTransformed
				}
			}
		}
	}
`;
export default query;
