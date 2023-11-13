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
			<div className="flex w-full items-center justify-center gap-1 justify-self-start md:w-[300px]">
				<Input
					variant="outlined"
					type="text"
					{...register("absolvire", { required: true })}
					id="absolvire"
					onChange={(e) => {
						
						const value = e.target.value;
						cookies.set("medic-absolvire", e.target.value);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							absolvire: e.target.value,
						}));
						!isNaN(+value) ? setDisabled(false) : setDisabled(true);
					}}
					label="Raspunsul Dumneavoastra"
					className="w-full focus:border-rosu-brand focus:!border-t-transparent md:w-[300px]"
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
