import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { MedicalSearchParamsType } from "@/app/[lang]/formular/muncitor/medical/page";

const Pas8Medical = ({ register, setDisabled, setSearchParams }: any) => {
	return (
		<FormWrapper intrebare="Daca ai mai lucrat in sistemul medica, ne poti spune care a fsot ultimul tau salariu?">
			<Input
				variant="outlined"
				type="text"
				{...register("ultimulSalariu", { required: true, valueAsNumber: true })}
				id="ultimulSalariu"
				onChange={(e) => {
					setDisabled(false);
					setSearchParams((searchParams: MedicalSearchParamsType) => ({
						...searchParams,
						ultimulSalariu: e.target.value,
					}));
				}}
				label="Raspunsul Dumneavoastra"
			/>
		</FormWrapper>
	);
};

export default Pas8Medical;
