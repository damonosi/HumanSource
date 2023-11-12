import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";

const Pas5Medical = ({ register, setDisabled, setSearchParams }: any) => {
	return (
		<FormWrapper intrebare="In ce an ai absolvit sau urmeaza sa absolvit specialitatea AMG?">
			<div>
				<Input
					variant="outlined"
					type="text"
					{...register("absolvire", { required: true })}
					id="absolvire"
					className="max-w-xs  !border-t-rosu-brand placeholder-shown:border-rosu-brand focus:border-rosu-brand focus:!border-t-transparent"
					onChange={(e) => {
						setDisabled(false);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							absolvire: e.target.value,
						}));
					}}
					label="Raspunsul Dumneavoastra"
					labelProps={{
						className: "peer-focus:after:!border-rosu-brand !text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas5Medical;
