import { gql } from "@apollo/client";

const addContactForm = gql`
	mutation Mutation($data: ContactFormCreateInput!) {
		createContactForm(data: $data) {
			email
		}
	}
`;

export default addContactForm;
