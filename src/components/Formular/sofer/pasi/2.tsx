"use client";
import FormWrapper from "../../FormWrapper";
import experienta from "./data";

const Checkbox = ({
	varianta,
	value,
	register,
	setDisabled,
}: {
	varianta: string;
	value: string;
	register: any;
	setDisabled: any;
}) => (
	<div className="mb-4 flex items-center">
		<input
			id="vechime"
			type="radio"
			value={value}
			{...register("vechime", { required: true })}
			name="vechime"
			onChange={() => setDisabled(false)}
			className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
		/>

		<label htmlFor="vechime" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
			{varianta}
		</label>
	</div>
);

const Pas2Trasport = ({ register, setDisabled }: any) => {
	return (
		<FormWrapper intrebare="Ai mai lucrat ca sofer profesionist C+E?">
			<div className="flex w-full flex-col items-start gap-5">
				{experienta.map((varianta, index) => (
					<Checkbox setDisabled={setDisabled} key={index} register={register} value={varianta} varianta={varianta} />
				))}
			</div>
		</FormWrapper>
	);
};

export default Pas2Trasport;
