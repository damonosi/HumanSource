import { gql } from "@apollo/client";
const query = gql`
	query Blog($where: BlogWhereUniqueInput!) {
		blog(where: $where) {
			slug
			dateCreated
			id
			author {
				name
			}
			photo {
				altText
				filename
				id
				image {
					url
					height
					filesize
					extension
					id
					width
				}
			}
		}
	}
`;

export default query;
