import { gql } from "@apollo/client";

const AddAngajatorForm = gql`
	mutation Mutation($data: EmployerFormCreateInput!) {
		createEmployerForm(data: $data) {
			email
		}
	}
`;

export default AddAngajatorForm;
