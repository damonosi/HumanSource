import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas7Medical = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="Daca ai mai lucrat in sistemul medica, ne poti spune care a fsot ultimul tau salariu?">
			<Input
				variant="outlined"
				type="text"
				{...register("ultimulSalariu", { required: true })}
				id="ultimulSalariu"
				onChange={() => setDisabled(false)}
				label="Raspunsul Dumneavoastra"
			/>
		</FormWrapper>
	);
};

export default Pas7Medical;
