import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas9Trasport = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="Ne poti spune ce salariu iti doresti?">
			{" "}
			<Input
				variant="outlined"
				type="text"
				{...register("salariuDorit", { required: true })}
				id="salariuDorit"
				onChange={() => setDisabled(false)}
				label="Raspunsul Dumneavoastra"
			/>
		</FormWrapper>
	);
};

export default Pas9Trasport;
