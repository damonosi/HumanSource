import FormWrapper from "../../FormWrapper";
import { useState } from "react";
import Singur from "../../../../public/imagini/formular/sofer/negru/singur.svg";
import SingurAlb from "../../../../public/imagini/formular/sofer/alb/singur.svg";
import Echipaj from "../../../../public/imagini/formular/sofer/negru/echipaj.svg";
import EchipajAlb from "../../../../public/imagini/formular/sofer/alb/echipaj.svg";

const Pas5Trasport = ({ setValue, setDisabled }: any) => {
	const [selected, setSelected] = useState(0);
	const clasaCard =
		"flex w-1/2 flex-col items-center max-h-[300px]  justify-center gap-9 rounded-2xl py-9 px-3 lg:py-16  shadow-lg  drop-shadow-xl max-w-[272px]";
	return (
		<FormWrapper intrebare="Lucrati singur sau in echipaj?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("echipaj", "singur");
						setSelected(1);
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <SingurAlb className="w-full" /> : <Singur className="w-full" />}

					<span>Singur</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("echipaj", "echipaj");
						setSelected(2);
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <EchipajAlb className="w-full" /> : <Echipaj className="w-full" />}

					<span>Echipaj</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas5Trasport;
