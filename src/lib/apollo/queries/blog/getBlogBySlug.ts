import { gql } from "@apollo/client";
const query = gql`
	query Blog($where: BlogWhereUniqueInput!) {
		blog(where: $where) {
			id
			slug
			dateCreated
			title
			categories {
				id
				name
			}
			author {
				name
			}
			tags {
				name
			}
			content {
				document(hydrateRelationships: true)
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
