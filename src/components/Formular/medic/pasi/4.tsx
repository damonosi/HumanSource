import FormWrapper from "../../FormWrapper";

import Postliceala from "../../../../../public/imagini/formular/medic/negru/postliceala.svg";
import PostlicealaAlb from "../../../../../public/imagini/formular/medic/alb/postliceala.svg";
import Universitate from "../../../../../public/imagini/formular/medic/negru/universitate.svg";
import UniversitateAlb from "../../../../../public/imagini/formular/medic/alb/universitate.svg";
import InCurs from "../../../../../public/imagini/formular/medic/negru/inCurs.svg";
import InCursAlb from "../../../../../public/imagini/formular/medic/alb/inCurs.svg";

import Nu from "../../../../../public/imagini/formular/medic/negru/nu.svg";
import NuAlb from "../../../../../public/imagini/formular/medic/alb/nu.svg";
import { useEffect, useState } from "react";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";
import { useCookies } from "next-client-cookies";
const Pas4Medical = ({ setValue, setDisabled, setSearchParams }: any) => {
	const cookies = useCookies();
	const [selected, setSelected] = useState(Number(cookies.get("medic-amg")));
	const clasaCard =
		"flex w-full md:w-1/4 flex-col items-center max-h-[300px] justify-center gap-9 rounded-2xl py-9 px-3 lg:py-16  shadow-lg  drop-shadow-xl max-w-[272px]";
	const clasaIconita = "w-full";
	useEffect(() => {
		if (cookies.get("medic-amg") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Unde ai absolvit specializarea de Asistent Medical Generalist?">
			<div className="grid grid-cols-2  justify-center gap-4 md:flex  md:gap-5 ">
				<button
					onClick={() => {
						setValue("educatie", "postliceala");
						setSelected(1);
						cookies.set("medic-amg", "1");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							amg: "postliceala",
						}));
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <PostlicealaAlb className={clasaIconita} /> : <Postliceala className={clasaIconita} />}

					<span className="font-[350]">Scoala Postliceala</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("educatie", "universitate");
						setSelected(2);
						cookies.set("medic-amg", "2");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							amg: "universitate",
						}));
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <UniversitateAlb className={clasaIconita} /> : <Universitate className={clasaIconita} />}

					<span className="font-[350]">Universitate</span>
				</button>
				<button
					className={`${selected == 3 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("educatie", "inCurs");
						setSelected(3);
						cookies.set("medic-amg", "3");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							amg: "inCurs",
						}));
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 3 ? <InCursAlb className={clasaIconita} /> : <InCurs className={clasaIconita} />}

					<span className="mx-2  break-words font-[350] md:flex">In curs de absolvire</span>
				</button>
				<button
					className={`${selected == 4 && "bg-gri-brand text-alb-site"} ${clasaCard} `}
					onClick={() => {
						setValue("educatie", "nu");
						setSelected(4);
						cookies.set("medic-amg", "4");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							amg: "nu",
						}));
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 4 ? <NuAlb className="w-full " /> : <Nu className="w-full" />}

					<span>Nu am absolvit</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas4Medical;
