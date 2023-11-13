"use client";
import FormWrapper from "../../FormWrapper";
import experienta from "./data";
import { useEffect } from "react";
import { useCookies } from "next-client-cookies";
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
}) => {
	const cookies = useCookies();
	useEffect(() => {
		if (cookies.get("sofer-experienta") !== undefined) {
			setDisabled(false);
		}
	}, []);

	return (
		<div className="mb-4 flex items-center">
			<label className="">
				<input
					id="vechime"
					type="radio"
					value={value}
					{...register("vechime", { required: true })}
					name="vechime"
					onChange={(e) => {
						cookies.set("sofer-experienta", e.target.value);

						setDisabled(false);
					}}
					className="h-4 w-4  rounded-full border-gray-300 bg-gray-100 text-blue-600   focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
				/>

				<span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {varianta} </span>
			</label>
		</div>
	);
};

const Pas2Trasport = ({ register, setDisabled }: any) => {
	useEffect(() => {
		const isBrowser = () => typeof window !== "undefined";

		function scrollToTop() {
			if (!isBrowser()) return;

			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		scrollToTop();
	}, []);
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
