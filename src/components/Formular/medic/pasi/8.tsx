import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
const Pas8Medical = ({ register, setDisabled, setSearchParams }: any) => {
	const cookies = useCookies();
	useEffect(() => {
		if (cookies.get("medic-ultimul-salariu") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Daca ai mai lucrat in sistemul medica, ne poti spune care a fost ultimul tau salariu?">
			<div className="flex w-full items-center justify-center gap-1 justify-self-start md:w-[300px]">
				<Input
					variant="outlined"
					type="text"
					{...register("ultimulSalariu", { required: true, valueAsNumber: true })}
					id="ultimulSalariu"
					onChange={(e) => {
						setDisabled(false);
						const value = e.target.value;
						cookies.set("medic-ultimul-salariu", e.target.value);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							ultimulSalariu: e.target.value,
						}));
						!isNaN(+value) ? setDisabled(false) : setDisabled(true);
					}}
					label="Raspunsul Dumneavoastra (EUR)"
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

export default Pas8Medical;
