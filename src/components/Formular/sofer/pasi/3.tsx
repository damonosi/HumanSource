import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import Romania from "../../../../public/imagini/formular/sofer/negru/romania.svg";
import RomaniaAlb from "../../../../public/imagini/formular/sofer/alb/romania.svg";
import Italia from "../../../../public/imagini/formular/sofer/negru/italia.svg";
import ItaliaAlb from "../../../../public/imagini/formular/sofer/alb/italia.svg";
import International from "../../../../public/imagini/formular/sofer/negru/international.svg";
import InternationalAlb from "../../../../public/imagini/formular/sofer/alb/international.svg";

const Pas3Trasport = ({ setValue, setDisabled }: any) => {
	const [selected, setSelected] = useState(0);
	const clasaCard =
		"flex w-1/3 flex-col max-h-[300px] items-center  justify-center rounded-2xl bg-alb-site px-1 py-8 drop-shadow-xl active:bg-gri-brand   lg:gap-9 lg:py-16 lg:px-6 max-w-[272px]";
	const clasaIconita = "w-full";
	return (
		<FormWrapper intrebare="In ce regim va doriti sa lucrati?">
			<div className="flex justify-center gap-4  md:gap-5 ">
				<button
					onClick={() => {
						setValue("regim", "tur-retur");
						setSelected(1);
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <RomaniaAlb className={clasaIconita} /> : <Romania className={clasaIconita} />}

					<span className="font-[350]">Tur-retur</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("regim", "italia");
						setSelected(2);
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <ItaliaAlb className={clasaIconita} /> : <Italia className={clasaIconita} />}

					<span className="font-[350]">National Italia</span>
				</button>
				<button
					className={`${selected == 3 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("regim", "international");
						setSelected(3);
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 3 ? <InternationalAlb className={clasaIconita} /> : <International className={clasaIconita} />}

					<span className="mx-2 hidden break-words font-[350] md:flex">International</span>
					<span className="mx-2 break-words font-[350] md:hidden">
						Inter- <br /> national
					</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas3Trasport;
