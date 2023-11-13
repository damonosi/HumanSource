import { SetStateAction, useEffect, useState } from "react";
import FormWrapper from "../../FormWrapper";

import Clinica from "../../../../../public/imagini/formular/medic/negru/clinica.svg";
import ClinicaAlb from "../../../../../public/imagini/formular/medic/alb/clinica.svg";
import Spital from "../../../../../public/imagini/formular/medic/negru/spital.svg";
import SpitalAlb from "../../../../../public/imagini/formular/medic/alb/spital.svg";

import Azil from "../../../../../public/imagini/formular/medic/negru/azil.svg";
import AzilAlb from "../../../../../public/imagini/formular/medic/alb/azil.svg";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";
import { useCookies } from "next-client-cookies";
const Pas2Medical = ({
	setValue,
	setDisabled,
	setSearchParams,
}: {
	setValue: any;
	setDisabled: (arg0: boolean) => void;
	setSearchParams: any;
}) => {
	const cookies = useCookies();
	const [selected, setSelected] = useState(Number(cookies.get("medic-subDomeniu")));
	const clasaCard =
		"flex w-1/3 flex-col max-h-[300px] items-center  justify-center rounded-2xl bg-alb-site px-1 py-8 drop-shadow-xl active:bg-gri-brand   lg:gap-9 lg:py-16 lg:px-6 max-w-[272px]";
	const clasaIconita = "w-full";
	useEffect(() => {
		if (cookies.get("medic-subDomeniu") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="In ce domeniu vrei sa lucrezi?">
			<div className="flex justify-center gap-4  md:gap-5 ">
				<button
					onClick={() => {
						setValue("domeniu", "clinica");
						setSelected(1);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({ ...searchParams, subDomeniu: "clinica" }));
						cookies.set("medic-subDomeniu", "1");
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <ClinicaAlb className={clasaIconita} /> : <Clinica className={clasaIconita} />}

					<span className="font-[350]">Clinica</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("domeniu", "spital");
						cookies.set("medic-subDomeniu", "2");
						setSelected(2);
						setSearchParams((searchParams: MedicalSearchParamsType) => ({ ...searchParams, subDomeniu: "spital" }));
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <SpitalAlb className={clasaIconita} /> : <Spital className={clasaIconita} />}

					<span className="font-[350]">Spital</span>
				</button>
				<button
					className={`${selected == 3 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("domeniu", "azil");
						setSelected(3);
						cookies.set("medic-subDomeniu", "3");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({ ...searchParams, subDomeniu: "azil" }));
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 3 ? <AzilAlb className={clasaIconita} /> : <Azil className={clasaIconita} />}

					<span className="mx-2  break-words font-[350] md:flex">Resedinta de seniori</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas2Medical;
