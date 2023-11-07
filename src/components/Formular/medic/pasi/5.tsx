import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { MedicalSearchParamsType } from "@/app/[lang]/formular/muncitor/medical/page";

const Pas5Medical = ({ register, setDisabled, setSearchParams }: any) => {
	return (
		<FormWrapper intrebare="In ce an ai absolvit sau urmeaza sa absolvit specialitatea AMG?">
			<Input
				variant="outlined"
				type="text"
				{...register("absolvire", { required: true })}
				id="absolvire"
				onChange={(e) => {
					setDisabled(false);
					setSearchParams((searchParams: MedicalSearchParamsType) => ({
						...searchParams,
						absolvire: e.target.value,
					}));
				}}
				label="Raspunsul Dumneavoastra"
			/>
		</FormWrapper>
	);
};

export default Pas5Medical;
