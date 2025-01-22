import { gql } from "@apollo/client";
const query = gql`
	query Blogs($blogsWhere2: BlogWhereInput!) {
		blogs(where: $blogsWhere2) {
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
