import { useState } from "react";
import FormWrapper from "../../FormWrapper";
import Deloc from "../../../../public/imagini/formular/medic/negru/deloc.svg";
import DelocAlb from "../../../../public/imagini/formular/medic/alb/deloc.svg";
import Mediu from "../../../../public/imagini/formular/medic/negru/mediu.svg";
import MediuAlb from "../../../../public/imagini/formular/medic/alb/mediu.svg";

import Avansat from "../../../../public/imagini/formular/medic/negru/avansat.svg";
import AvansatAlb from "../../../../public/imagini/formular/medic/alb/avansat.svg";
const Pas6Medical = ({ setValue, setDisabled }: any) => {
	const [selected, setSelected] = useState(0);
	const clasaCard =
		"flex  w-1/3 flex-col items-center  max-h-[300px] justify-center rounded-2xl bg-alb-site px-3 py-8 drop-shadow-xl active:bg-gri-brand   lg:gap-9 lg:py-16 lg:px-6 max-w-[272px]";
	const clasaIconita = "w-12 md:w-full";
	return (
		<FormWrapper intrebare="Vorbesti limba italiana?">
			{" "}
			<div className="flex justify-center gap-3  ">
				<button
					onClick={() => {
						setValue("lbItaliana", "deloc");
						setSelected(1);
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <DelocAlb className={clasaIconita} /> : <Deloc className={clasaIconita} />}

					<span>Nu, deloc</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("lbItaliana", "mediu");
						setSelected(2);
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <MediuAlb className={clasaIconita} /> : <Mediu className={clasaIconita} />}

					<span>Da, ma descurc</span>
				</button>
				<button
					className={`${selected == 3 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("lbItaliana", "avansat");
						setSelected(3);
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 3 ? <AvansatAlb className={clasaIconita} /> : <Avansat className={clasaIconita} />}

					<span>Vorbitor avansat</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas6Medical;
