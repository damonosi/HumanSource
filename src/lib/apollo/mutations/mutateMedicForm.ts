import { gql } from "@apollo/client";

const AddMedicalForm = gql`
	mutation Mutation($data: MedicalFormCreateInput!) {
		createMedicalForm(data: $data) {
			domeniu
			experienta
			amg
			bac
			cursItaliana
			experientaLimba
			locatia
			subDomeniu
			ultimuSalar
		}
	}
`;

export default AddMedicalForm;
