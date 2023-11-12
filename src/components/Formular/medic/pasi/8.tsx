import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";

const Pas8Medical = ({ register, setDisabled, setSearchParams }: any) => {
	return (
		<FormWrapper intrebare="Daca ai mai lucrat in sistemul medica, ne poti spune care a fost ultimul tau salariu?">
			<div>
				<Input
					variant="outlined"
					type="text"
					{...register("ultimulSalariu", { required: true, valueAsNumber: true })}
					id="ultimulSalariu"
					className="max-w-xs  !border-t-rosu-brand placeholder-shown:border-rosu-brand focus:border-rosu-brand focus:!border-t-transparent"
					onChange={(e) => {
						setDisabled(false);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							ultimulSalariu: e.target.value,
						}));
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

export default Pas8Medical;
