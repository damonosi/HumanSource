import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { useEffect } from "react";
import { useCookies } from "next-client-cookies";
const Pas9Trasport = ({ register, setDisabled }: any) => {
	const cookies = useCookies();
	useEffect(() => {
		if (cookies.get("sofer-salariu-dorit") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Ne poti spune ce salariu iti doresti?">
			<div className="flex w-full items-center justify-center gap-1 justify-self-start md:w-[300px]">
				<Input
					variant="outlined"
					type="text"
					{...register("salariuDorit", { required: true, valueAsNumber: true })}
					id="salariuDorit"
					onChange={(e) => {
						const value = e.target.value;
						cookies.set("sofer-salariu-dorit", value, { secure: true, sameSite: "none" });
						setDisabled(false);
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

export default Pas9Trasport;
