import { SetStateAction, useEffect } from "react";
import FormWrapper from "../../FormWrapper";
import experienta from "./data";
import { useCookies } from "next-client-cookies";

const Checkbox = ({
	varianta,
	value,
	register,
	setDisabled,
	setSearchParams,
	setValue,
}: {
	varianta: string;
	value: string;
	register: any;
	setValue: any;
	setDisabled: (arg0: boolean) => void;

	setSearchParams: (arg0: SetStateAction<{ experienta: string }>) => void;
}) => {
	const cookies = useCookies();
	useEffect(() => {
		if (cookies.get("medic-experienta") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<div className="mb-4 flex items-center">
			<label className="flex items-center">
				<input
					id="experienta"
					type="radio"
					value={value}
					{...register("experienta", { required: true })}
					name="experienta"
					onChange={(e) => {
						cookies.set("medic-experienta", e.target.value);
						setValue("experienta", e.target.value);
						setDisabled(false);
					}}
					className=" mx-4  h-4 w-4 rounded-full checked:bg-rosu-brand  focus:bg-rosu-brand focus:ring-rosu-brand "
				/>

				<span className=" text-sm font-medium text-gray-900 dark:text-gray-300"> {varianta} </span>
			</label>
		</div>
	);
};

const Pas1Medic = ({ register, setDisabled, setSearchParams, setValue, searchParams }: any) => {
	return (
		<FormWrapper intrebare="Ai mai lucrat ca  Asistent Medical Generalist?">
			<div className="flex w-full flex-col items-start gap-5">
				{experienta.map((varianta, index) => (
					<Checkbox
						setValue={setValue}
						setSearchParams={setSearchParams}
						setDisabled={setDisabled}
						key={index}
						register={register}
						value={varianta}
						varianta={varianta}
					/>
				))}
			</div>
		</FormWrapper>
	);
};

export default Pas1Medic;
