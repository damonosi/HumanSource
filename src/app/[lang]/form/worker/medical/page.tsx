"use client";
import { KeyboardEvent, useState } from "react";
import Pas1Medical from "@/components/Formular/medic/pasi/1";

import Pas2Medical from "@/components/Formular/medic/pasi/2";
import Pas3Medical from "@/components/Formular/medic/pasi/3";
import Pas4Medical from "@/components/Formular/medic/pasi/4";
import Pas5Medical from "@/components/Formular/medic/pasi/5";
import Pas6Medical from "@/components/Formular/medic/pasi/6";
import Pas7Medical from "@/components/Formular/medic/pasi/7";
import Pas8Medical from "@/components/Formular/medic/pasi/8";
import Pas9Medical from "@/components/Formular/medic/pasi/9";
import Pas10Medical from "@/components/Formular/medic/pasi/10";
import { useMultistepForm } from "@/components/Formular/useMultistepForm";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import AddMedicalForm from "@/lib/apollo/mutations/mutateMedicForm";
import { useRouter } from "next/navigation";
import NavigatieFormularMedic from "@/components/Formular/medic/NavigatieFormularMedic";
import { useCookies } from "next-client-cookies";
import { useTranslation } from "@/app/i18n/client";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";

export type MedicalSearchParamsType = {
	absolvire: string;
	amg: string;
	bac: string;
	cursItaliana: string;
	domeniu: string;
	experienta: string;
	experientaLimba: string;
	locatia: string;
	subDomeniu: string;
	ultimuSalar: string;
	nrTelefon: string;
};
type Inputs = {
	experienta: string;
	domeniu: string;
	bac: string;
	educatie: string;
	absolvire: string;
	lbItaliana: string;
	ultimulSalariu: string;
	locatia: string;
	curs: string;
	nrTelefon: string;
};

const FormularMedic = ({ params }: { params: { lang: string; country: string } }) => {
	const cookies = useCookies();
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
		ultimuSalar: "",
		nrTelefon: "",
	});

	const {
		register,
		handleSubmit,
		setValue,
		formState: { isSubmitSuccessful, isLoading },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			experienta: cookies.get("medic-experienta") || "",
			domeniu: cookies.get("medic-subDomeniu") || "",
			bac: cookies.get("medic-bac") || "",
			educatie: cookies.get("medic-amg") || "",
			absolvire: cookies.get("medic-absolvire") || "",
			lbItaliana: cookies.get("medic-experientaLimba") || "",
			ultimulSalariu: cookies.get("medic-ultimu-salariu") || "",
			locatia: cookies.get("medic-locatia") || "",
			curs: cookies.get("medic-cursItaliana") || "",
			nrTelefon: cookies.get("medic-numar-telefon") || "",
		},
	});
	const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } = useMultistepForm(
		[
			<Pas1Medical
				register={register}
				setValue={setValue}
				setSearchParams={setSearchParams}
				searchParams={searchParams}
				setDisabled={setDisabled}
			/>,
			<Pas2Medical setSearchParams={setSearchParams} setValue={setValue} setDisabled={setDisabled} />,
			<Pas3Medical setSearchParams={setSearchParams} setValue={setValue} setDisabled={setDisabled} />,
			<Pas4Medical setSearchParams={setSearchParams} setValue={setValue} setDisabled={setDisabled} />,
			<Pas5Medical setSearchParams={setSearchParams} register={register} setDisabled={setDisabled} />,
			<Pas6Medical setSearchParams={setSearchParams} setValue={setValue} setDisabled={setDisabled} />,
			<Pas7Medical setSearchParams={setSearchParams} setValue={setValue} setDisabled={setDisabled} />,
			<Pas8Medical setSearchParams={setSearchParams} register={register} setDisabled={setDisabled} />,
			<Pas9Medical setSearchParams={setSearchParams} setValue={setValue} setDisabled={setDisabled} />,
			<Pas10Medical register={register} setValue={setValue} setDisabled={setDisabled} />,
		],
		setDisabled,
	);
	const [addMedicalForm] = useMutation(AddMedicalForm, {
		onCompleted(data) {
			cookies.set("medicalFormId", data.createMedicalForm.id);
		},
	});
	const router = useRouter();
	const onSubmit: SubmitHandler<Inputs> = ({
		absolvire,
		educatie,
		bac,
		curs,
		experienta,
		lbItaliana,
		locatia,
		domeniu,
		ultimulSalariu,
		nrTelefon,
	}) => {
		try {
			addMedicalForm({
				variables: {
					data: {
						absolvire: absolvire,
						amg: educatie,
						bac: bac,
						cursItaliana: curs,
						domeniu: "medical",
						experienta: experienta,
						experientaLimba: lbItaliana,
						locatia: locatia,
						subDomeniu: domeniu,
						ultimuSalar: ultimulSalariu,
						phone: nrTelefon,
					},
				},
			});
			router.push(CheckIfDefaulthLang(params, `/jobs?domeniu=medical&subDomeniu=${domeniu}&locatia=${locatia}`));

			cookies.remove("medic-experienta");
			cookies.remove("medic-subDomeniu");
			cookies.remove("medic-bac");
			cookies.remove("medic-amg");
			cookies.remove("medic-absolvire");
			cookies.remove("medic-experientaLimba");
			cookies.remove("medic-ultimu-salariu");
			cookies.remove("medic-locatia");
			cookies.remove("medic-cursItaliana");
			cookies.remove("medic-numar-telefon");
		} catch (error) {
			console.log(error);
		}
	};
	const { t } = useTranslation(params.lang, "formularMuncitor");
	const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key === "Enter") e.preventDefault();
	};
	return (
		<div className="container mx-auto flex flex-col px-5 pb-9 lg:px-0">
			<Breadcrumbs>
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
					{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              	// @ts-ignore */}
					{t("breadHome")}
				</Link>
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/form/worker")}>
					{t("breadFormular")}
				</Link>
				<Link className="text-red-600" href={CheckIfDefaulthLang(params, "/form/worker")}>
					{t("breadMedical")}
				</Link>
			</Breadcrumbs>
			<form
				onKeyDown={(e) => checkKeyDown(e)}
				onSubmit={handleSubmit(onSubmit)}
				className="relative  rounded-2xl bg-alb-site px-5 pt-8 "
			>
				{step}
				<NavigatieFormularMedic
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
