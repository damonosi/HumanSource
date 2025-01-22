import { gql } from "@apollo/client";

const AddJobApplication = gql`
	mutation Mutation($data: JobApplicationCreateInput!) {
		createJobApplication(data: $data) {
			name
		}
	}
`;

export default AddJobApplication;
