import FormWrapper from "../../FormWrapper";
import Da from "../../../../../public/imagini/formular/medic/negru/da.svg";
import DaAlb from "../../../../../public/imagini/formular/medic/alb/da.svg";
import Nu from "../../../../../public/imagini/formular/medic/negru/nu.svg";
import NuAlb from "../../../../../public/imagini/formular/medic/alb/nu.svg";
import { useEffect, useState } from "react";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";
import { useCookies } from "next-client-cookies";
const Pas9Medical = ({ setValue, setDisabled, setSearchParams }: any) => {
	const cookies = useCookies();
	const [selected, setSelected] = useState(Number(cookies.get("medic-cursItaliana")));
	const clasaCard =
		"flex w-1/2 flex-col items-center max-h-[300px] justify-center gap-9 rounded-2xl py-9 px-3 lg:py-16  shadow-lg  drop-shadow-xl max-w-[272px]";
	useEffect(() => {
		if (cookies.get("medic-cursItaliana") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Doresti sa participi la cursul intensiv gratuit de italiana oferit de firma noastra? ">
			<div className="flex justify-center gap-5  ">
				<button
					onClick={() => {
						setValue("curs", "da");
						setSelected(1);
						cookies.set("medic-cursItaliana", "1");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							cursItaliana: "da",
						}));
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <DaAlb className="w-full" /> : <Da className="w-full" />}

					<span>Da</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard} `}
					onClick={() => {
						setValue("curs", "nu");
						setSelected(2);
						cookies.set("medic-cursItaliana", "2");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							cursItaliana: "nu",
						}));
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

export default Pas9Medical;
