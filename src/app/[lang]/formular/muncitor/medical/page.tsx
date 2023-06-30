"use client";
import { useState } from "react";
import Pas1Medical from "@/components/Formular/medic/pasi/1";

import Pas2Medical from "@/components/Formular/medic/pasi/2";
import Pas3Medical from "@/components/Formular/medic/pasi/3";
import Pas4Medical from "@/components/Formular/medic/pasi/4";
import Pas5Medical from "@/components/Formular/medic/pasi/5";
import Pas6Medical from "@/components/Formular/medic/pasi/6";
import Pas7Medical from "@/components/Formular/medic/pasi/7";
import Pas8Medical from "@/components/Formular/medic/pasi/8";

import NavigatieFormular from "@/components/Formular/NavigatieFormular";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { getLocalePartsFrom, locales } from "i18n";
import { useForm } from "react-hook-form";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}

const FormularMedic = ({ params }: { params: { lang: string; country: string } }) => {
	const [disabled, setDisabled] = useState(true);
	const {
		register,
		handleSubmit,
		setValue,

		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			experienta: "",
			domeniu: "",
			bac: "",
			educatie: "",
			absolvire: "",
			lbItaliana: "",
			ultimulSalariu: "",
			curs: "",
		},
	});
	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm(
		[
			<Pas1Medical register={register} setDisabled={setDisabled} />,
			<Pas2Medical setValue={setValue} setDisabled={setDisabled} />,
			<Pas3Medical setValue={setValue} setDisabled={setDisabled} />,
			<Pas4Medical setValue={setValue} setDisabled={setDisabled} />,
			<Pas5Medical register={register} setDisabled={setDisabled} />,
			<Pas6Medical setValue={setValue} setDisabled={setDisabled} />,
			<Pas7Medical register={register} setDisabled={setDisabled} />,
			<Pas8Medical setValue={setValue} setDisabled={setDisabled} />,
		],
		setDisabled,
	);
	const submitHandler = (data: object) => {
		console.log(data);
		console.log("submited");
	};
	return (
		<div className="flex flex-col px-5 pb-9 md:px-[70px] ">
			<Breadcrumbs>
				<Link className="text-gri-brand" href={`${params.lang}/`}>
					Home
				</Link>
				<Link className="text-gri-brand" href={`${params.lang}/formular/muncitor`}>
					Formular
				</Link>
				<Link className="text-red-600" href={`${params.lang}/formular/muncitor`}>
					Medical
				</Link>
			</Breadcrumbs>
			<form onSubmit={handleSubmit(submitHandler)} className="relative  rounded-2xl bg-alb-site px-5 pt-8 ">
				{step}
				<NavigatieFormular
					disabled={disabled}
					back={back}
					next={next}
					isFirstStep={isFirstStep}
					isLastStep={isLastStep}
					currentStepIndex={currentStepIndex}
					steps={steps}
				/>
			</form>
		</div>
	);
};

export default FormularMedic;
