import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import Da from "../../../../public/imagini/formular/sofer/negru/da.svg";
import DaAlb from "../../../../public/imagini/formular/sofer/alb/da.svg";
import Nu from "../../../../public/imagini/formular/sofer/negru/nu.svg";
import NuAlb from "../../../../public/imagini/formular/sofer/alb/nu.svg";
const Pas6Trasport = ({ setValue, setDisabled }: any) => {
	const [selected, setSelected] = useState(0);
	const clasaCard =
		"flex w-1/2 flex-col items-center max-h-[300px]  justify-center gap-9 rounded-2xl py-9 px-3 lg:py-16  shadow-lg  drop-shadow-xl max-w-[272px]";
	return (
		<FormWrapper intrebare="Sunteti dispus sa lucrati pe tura de noapte?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("turaNoapte", "da");
						setSelected(1);
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <DaAlb className="w-full " /> : <Da className="w-full" />}

					<span>Da</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("turaNoapte", "nu");
						setSelected(2);
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <NuAlb className="w-full " /> : <Nu className="w-full" />}

					<span>Nu</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas6Trasport;
