import { gql } from "@apollo/client";

const AddTransportForm = gql`
	mutation CreateTransportForm($data: TransportFormCreateInput!) {
		createTransportForm(data: $data) {
			domeniu
			echipa
			experienta
			experientaLimba
			locatia
			salariuDorit
			subDomeniu
			tahograf
			turaNoapte
			ultimuSalar
		}
	}
`;

export default AddTransportForm;
