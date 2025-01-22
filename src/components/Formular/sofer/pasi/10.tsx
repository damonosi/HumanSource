import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
import { FiPhone } from "react-icons/fi";

const Pas10Transport = ({ register, setDisabled }: any) => {
	const cookies = useCookies();

	useEffect(() => {
		if (cookies.get("sofer-salariu-dorit") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Spunetine numartul de telefon">
			<div className="flex w-full items-center justify-center gap-1 justify-self-start md:w-[300px]">
				<Input
					variant="outlined"
					type="text"
					{...register("nrTelefon", { required: true })}
					id="nrTelefon"
					icon={<FiPhone />}
					label="Numar de telefon"
					onChange={(e) => {
						const value = e.target.value;
						cookies.set("sofer-numar-telefon", value, { secure: true, sameSite: "none" });
						setDisabled(false);
					}}
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas10Transport;
