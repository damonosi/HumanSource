import { gql } from "@apollo/client";

const AddTransportForm = gql`
	mutation CreateTransportForm($data: TransportFormCreateInput!) {
		createTransportForm(data: $data) {
			id
		}
	}
`;

export default AddTransportForm;
