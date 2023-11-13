import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
const Pas5Medical = ({ register, setDisabled, setSearchParams }: any) => {
	const cookies = useCookies();
	useEffect(() => {
		if (cookies.get("medic-absolvire") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="In ce an ai absolvit sau urmeaza sa absolvit specialitatea AMG?">
			<div>
				<Input
					variant="outlined"
					type="text"
					{...register("absolvire", { required: true })}
					id="absolvire"
					onChange={(e) => {
						setDisabled(false);
						cookies.set("medic-absolvire", e.target.value);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							absolvire: e.target.value,
						}));
					}}
					label="Raspunsul Dumneavoastra"
					className="max-w-xs focus:border-rosu-brand focus:!border-t-transparent"
					labelProps={{
						className:
							"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas5Medical;
