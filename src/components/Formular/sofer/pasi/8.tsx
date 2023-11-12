import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas8Trasport = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="Ne poti spune care a fost ultimul tau salariu?">
			<div className="flex items-center justify-center gap-1 justify-self-start">
				<Input
					variant="outlined"
					type="text"
					className="max-w-xs  !border-t-rosu-brand placeholder-shown:border-rosu-brand focus:border-rosu-brand focus:!border-t-transparent"
					{...register("ultimulSalariu", { required: true, valueAsNumber: true })}
					id="ultimulSalariu"
					onChange={(e) => {
						const value = e.target.value;

						!isNaN(+value) ? setDisabled(false) : setDisabled(true);
					}}
					label="Raspunsul Dumneavoastra $"
					labelProps={{
						className: "peer-focus:after:!border-rosu-brand !text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas8Trasport;
