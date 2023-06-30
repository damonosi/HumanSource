import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas5Medical = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="In ce an ai absolvit sau urmeaza sa absolvit specialitatea AMG?">
			<Input
				variant="outlined"
				type="text"
				{...register("absolvire", { required: true })}
				id="absolvire"
				onChange={() => setDisabled(false)}
				label="Raspunsul Dumneavoastra"
			/>
		</FormWrapper>
	);
};

export default Pas5Medical;
