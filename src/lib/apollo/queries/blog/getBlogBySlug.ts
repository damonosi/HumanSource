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
