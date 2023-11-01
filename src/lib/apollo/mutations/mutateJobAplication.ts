import { gql } from "@apollo/client";

const AddJobApplication = gql`
	mutation Mutation($data: JobApplicationUpdateInput!) {
		createJobApplication(data: $data) {
			email
		}
	}
`;

export default AddJobApplication;
