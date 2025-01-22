import { gql } from "@apollo/client";

const AddMedicalForm = gql`
	mutation Mutation($data: MedicalFormCreateInput!) {
		createMedicalForm(data: $data) {
			id
		}
	}
`;

export default AddMedicalForm;
