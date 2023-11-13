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
			<div>
				<Input
					variant="outlined"
					type="text"
					{...register("salariuDorit", { required: true, valueAsNumber: true })}
					id="salariuDorit"
					onChange={(e) => {
						cookies.set("sofer-salariu-dorit", e.target.value);
						setDisabled(false);
					}}
					label="Raspunsul Dumneavoastra $"
					className="max-w-sm focus:border-rosu-brand focus:!border-t-transparent"
					labelProps={{
						className:
							"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
			</div>
		</FormWrapper>
	);
};

export default Pas9Trasport;
