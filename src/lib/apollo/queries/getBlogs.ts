import { gql } from "@apollo/client";
const query = gql`
	query Query {
		blogs {
			id
			content {
				document
			}
			dateCreated
			slug
			title
			photo {
				altText
				id
				image {
					height
					url
					width
				}
			}
		}
	}
`;

export default query;
