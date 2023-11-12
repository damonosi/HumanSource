import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";

const Pas9Trasport = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="Ne poti spune ce salariu iti doresti?">
			<div>
				<Input
					variant="outlined"
					type="text"
					{...register("salariuDorit", { required: true, valueAsNumber: true })}
					id="salariuDorit"
					onChange={() => setDisabled(false)}
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

export default Pas9Trasport;
