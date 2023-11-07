import { gql } from "@apollo/client";
const query = gql`
	query Blog($where: BlogWhereUniqueInput!) {
		blog(where: $where) {
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
			content {
				document
			}
			photo {
				altText

				image {
					publicUrl
				}
			}
		}
	}
`;

export default query;
