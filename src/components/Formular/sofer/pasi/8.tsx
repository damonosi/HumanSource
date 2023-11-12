import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
const Pas8Trasport = ({ register, setDisabled }: any) => {
	const cookies = useCookies();
	useEffect(() => {
		if (cookies.get("sofer-ultimul-salariu") !== "") {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Ne poti spune care a fost ultimul tau salariu?">
			<div className="flex items-center justify-center gap-1 justify-self-start">
				<Input
					variant="outlined"
					type="text"
					{...register("ultimulSalariu", { required: true, valueAsNumber: true })}
					id="ultimulSalariu"
					onChange={(e) => {
						const value = e.target.value;
						cookies.set("sofer-ultimul-salariu", e.target.value);
						!isNaN(+value) ? setDisabled(false) : setDisabled(true);
					}}
					label="Raspunsul Dumneavoastra $"
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

export default Pas8Trasport;
