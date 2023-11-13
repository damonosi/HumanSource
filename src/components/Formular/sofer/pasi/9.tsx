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
						const value = e.target.value;
						cookies.set("sofer-salariu-dorit", value);
						setDisabled(false);
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

export default Pas9Trasport;
