import FormWrapper from "../../FormWrapper";
import { useEffect, useState } from "react";
import Da from "../../../../../public/imagini/formular/sofer/negru/da.svg";
import DaAlb from "../../../../../public/imagini/formular/sofer/alb/da.svg";
import Nu from "../../../../../public/imagini/formular/sofer/negru/nu.svg";
import NuAlb from "../../../../../public/imagini/formular/sofer/alb/nu.svg";
import { useCookies } from "next-client-cookies";
const Pas6Trasport = ({ setValue, setDisabled }: any) => {
	const cookies = useCookies();
	const [selected, setSelected] = useState(Number(cookies.get("sofer-noapte")));
	useEffect(() => {
		if (cookies.get("sofer-noapte") !== undefined) {
			setDisabled(false);
		}
	}, [selected]);
	const clasaCard =
		"flex w-1/2 flex-col items-center max-h-[300px]  justify-center gap-9 rounded-2xl py-9 px-3 lg:py-16  shadow-lg  drop-shadow-xl max-w-[272px]";
	return (
		<FormWrapper intrebare="Sunteti dispus sa lucrati pe tura de noapte?">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("turaNoapte", "da");
						setSelected(1);
						cookies.set("sofer-noapte", "1", { secure: true, sameSite: "none" });
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
						cookies.set("sofer-noapte", "2", { secure: true, sameSite: "none" });
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
