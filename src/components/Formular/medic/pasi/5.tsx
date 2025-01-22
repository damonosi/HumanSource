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
					{...register("absolvire", { required: true, max: 4 })}
					id="absolvire"
					onChange={(e) => {
						const value = e.target.value;
						cookies.set("medic-absolvire", e.target.value);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							absolvire: e.target.value,
						}));
						!isNaN(+value) ? setDisabled(false) : setDisabled(true);
						value.length !== 4 && setDisabled(true);
					}}
					label="Raspunsul Dumneavoastra"
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent md:w-[300px]"
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas5Medical;
