"use client";


import { useMultistepForm } from "@/components/Formular/useMultistepForm";
import { useState } from "react";
import Pas1Trasport from "@/components/Formular/sofer/pasi/1";
import Pas2Trasport from "@/components/Formular/sofer/pasi/2";
import Pas3Trasport from "@/components/Formular/sofer/pasi/3";
import Pas4Trasport from "@/components/Formular/sofer/pasi/4";
import Pas5Trasport from "@/components/Formular/sofer/pasi/5";
import Pas6Trasport from "@/components/Formular/sofer/pasi/6";
import Pas7Trasport from "@/components/Formular/sofer/pasi/7";
import Pas8Trasport from "@/components/Formular/sofer/pasi/8";
import Pas9Trasport from "@/components/Formular/sofer/pasi/9";
import query from "@/lib/apollo/queries/job/getJobsByCategory";
import { SubmitHandler, useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { IJobs } from "@/interfaces/job";
import { useMutation, useSuspenseQuery } from "@apollo/client";
import NavigatieFormularSofer from "@/components/Formular/NavigatieFormularSofer";
import AddTransportForm from "@/lib/apollo/mutations/mutateTransportForm";
import { useRouter } from "next/navigation";

export type TransportSearchParamsType = {
	absolvire: string;
	amg: string;
	bac: string;
	cursItaliana: string;
	domeniu: string;
	experienta: string;
	experientaLimba: string;
	locatia: string;
	subDomeniu: string;
	ultimuSalar: number;
};
type Inputs = {
	tipRemorca: string;
	vechime: string;
	regim: string;
	tahograf: string;
	echipaj: string;
	turaNoapte: string;
	lbItaliana: string;
	ultimulSalariu: number;
	salariuDorit: string;
	category: string;
};

const FormularSofer = ({ params }: { params: { lang: string; country: string } }) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitted },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			tipRemorca: "",
			vechime: "",
			regim: "",
			tahograf: "",
			echipaj: "",
			turaNoapte: "",
			lbItaliana: "",
			ultimulSalariu: 0,
			salariuDorit: "",
			category: "transport",
		},
	});
	const [disabled, setDisabled] = useState(true);

	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm(
		[
			<Pas1Trasport setValue={setValue} setDisabled={setDisabled} />,
			<Pas2Trasport register={register} setDisabled={setDisabled} />,
			<Pas3Trasport setValue={setValue} setDisabled={setDisabled} />,
			<Pas4Trasport setValue={setValue} setDisabled={setDisabled} />,
			<Pas5Trasport setValue={setValue} setDisabled={setDisabled} />,
			<Pas6Trasport setValue={setValue} setDisabled={setDisabled} />,
			<Pas7Trasport setValue={setValue} setDisabled={setDisabled} />,
			<Pas8Trasport register={register} setDisabled={setDisabled} />,
			<Pas9Trasport register={register} setDisabled={setDisabled} />,
		],
		setDisabled,
	);
	const router = useRouter();
	const [addTransportForm] = useMutation(AddTransportForm);
	const onSubmit: SubmitHandler<Inputs> = ({
		tipRemorca,
		vechime,
		regim,
		tahograf,
		echipaj,
		turaNoapte,
		lbItaliana,
		salariuDorit,
		ultimulSalariu,
		category,
	}) => {
		try {
			addTransportForm({
				variables: {
					data: {
						domeniu: category,
						echipa: echipaj,
						experienta: vechime,
						experientaLimba: lbItaliana,
						locatia: regim,
						salariuDorit: salariuDorit,
						subDomeniu: tipRemorca,
						tahograf: tahograf,
						turaNoapte: turaNoapte,
						ultimuSalar: ultimulSalariu,
					},
				},
			});
			isSubmitted && router.push(`/${params.lang}/locuri-de-munca?domeniu=transport&subDomeniu=${tipRemorca}`);
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
					Transport
				</Link>
			</Breadcrumbs>
			<form className="relative  rounded-2xl bg-alb-site px-5 pt-8 " onSubmit={handleSubmit(onSubmit)}>
				{step}

				<NavigatieFormularSofer
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

export default FormularSofer;
