import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas8Trasport = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="Ne poti spune care a fost ultimul tau salariu?">
			<div className="flex items-center justify-center gap-1 justify-self-start">
				<Input
					className="max-w-xs"
					variant="outlined"
					type="text"
					{...register("ultimulSalariu", { required: true })}
					id="ultimulSalariu"
					onChange={(e) => {
						const value = e.target.value;

						!isNaN(+value) ? setDisabled(false) : setDisabled(true);
					}}
					label="Raspunsul Dumneavoastra"
				/>
				$
			</div>
		</FormWrapper>
	);
};

export default Pas8Trasport;
