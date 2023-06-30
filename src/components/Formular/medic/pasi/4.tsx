import FormWrapper from "../../FormWrapper";




import Postliceala from "../../../../public/imagini/formular/medic/negru/postliceala.svg";
import PostlicealaAlb from "../../../../public/imagini/formular/medic/alb/postliceala.svg";
import Universitate from "../../../../public/imagini/formular/medic/negru/universitate.svg";
import UniversitateAlb from "../../../../public/imagini/formular/medic/alb/universitate.svg";
import InCurs from "../../../../public/imagini/formular/medic/negru/inCurs.svg";
import InCursAlb from "../../../../public/imagini/formular/medic/alb/inCurs.svg";

import Nu from "../../../../public/imagini/formular/medic/negru/nu.svg";
import NuAlb from "../../../../public/imagini/formular/medic/alb/nu.svg";
import { useState } from "react";
const Pas4Medical = ({ setValue, setDisabled }: any) => {
	const [selected, setSelected] = useState(0);
	const clasaCard =
		"flex w-full md:w-1/4 flex-col items-center max-h-[300px] justify-center gap-9 rounded-2xl py-9 px-3 lg:py-16  shadow-lg  drop-shadow-xl max-w-[272px]";
	const clasaIconita = "w-full";
	return (
		<FormWrapper intrebare="Unde ai absolvit specializarea de Asistent Medical Generalist?">
			<div className="grid grid-cols-2  justify-center gap-4 md:flex  md:gap-5 ">
				<button
					onClick={() => {
						setValue("educatie", "postliceala");
						setSelected(1);
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
