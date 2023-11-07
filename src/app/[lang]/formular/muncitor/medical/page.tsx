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
import Pas9Medical from "@/components/Formular/medic/pasi/9";

import { useMultistepForm } from "@/components/Formular/useMultistepForm";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import AddMedicalForm from "@/lib/apollo/mutations/mutateMedicForm";
import { useRouter } from "next/navigation";
import NavigatieFormularMedic from "@/components/Formular/medic/NavigatieFormularMedic";
type Inputs = {
	experienta: string;

	domeniu: string;
	bac: string;
	educatie: string;
	absolvire: string;
	lbItaliana: string;
	ultimulSalariu: number;
	locatia: string;
	curs: string;
};

const FormularMedic = ({ params }: { params: { lang: string; country: string } }) => {
	const [disabled, setDisabled] = useState(true);
	const [searchParams, setSearchParams] = useState({
		absolvire: "",
		amg: "",
		bac: "",
		cursItaliana: "",
		domeniu: "medical",
		experienta: "",
		experientaLimba: "",
		locatia: "",
		subDomeniu: "",
		ultimuSalar: 0,
	});

	const { register, handleSubmit, setValue, reset } = useForm({
		mode: "onChange",
		defaultValues: {
			experienta: "",
			domeniu: "",
			bac: "",
			educatie: "",
			absolvire: "",
			lbItaliana: "",
			ultimulSalariu: 0,
			locatia: "",
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
			<Pas7Medical setValue={setValue} setDisabled={setDisabled} />,
			<Pas8Medical register={register} setDisabled={setDisabled} />,
			<Pas9Medical setValue={setValue} setDisabled={setDisabled} />,
		],
		setDisabled,
	);
	const [addMedicalForm, { data, loading, error }] = useMutation(AddMedicalForm);
	const router = useRouter();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		try {
			addMedicalForm({
				variables: {
					data: {
						absolvire: data.absolvire,
						amg: data.educatie,
						bac: data.bac,
						cursItaliana: data.curs,
						domeniu: "medical",
						experienta: data.experienta,
						experientaLimba: data.lbItaliana,
						locatia: data.locatia,
						subDomeniu: data.domeniu,
						ultimuSalar: data.ultimulSalariu,
					},
				},
			});
			loading && <span>Loading....</span>;
			error && <span>error....</span>;
			setSearchParams({
				absolvire: data.absolvire,
				amg: data.educatie,
				bac: data.bac,
				cursItaliana: data.curs,
				domeniu: "medical",
				experienta: data.experienta,
				experientaLimba: data.lbItaliana,
				locatia: data.locatia,
				subDomeniu: data.domeniu,
				ultimuSalar: data.ultimulSalariu,
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="flex flex-col px-5 pb-9 md:px-[70px] ">
			<Breadcrumbs>
				<Link className="text-gri-brand" href={`/${params.lang}/`}>
					Home
				</Link>
				<Link className="text-gri-brand" href={`/${params.lang}/formular/muncitor`}>
					Formular
				</Link>
				<Link className="text-red-600" href={`/${params.lang}/formular/muncitor`}>
					Medical
				</Link>
			</Breadcrumbs>
			<form onSubmit={handleSubmit(onSubmit)} className="relative  rounded-2xl bg-alb-site px-5 pt-8 ">
				{step}
				<NavigatieFormularMedic
					data={searchParams}
					params={params}
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
