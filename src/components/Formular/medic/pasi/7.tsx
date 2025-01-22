import { Input } from "@material-tailwind/react";
import FormWrapper from "../../FormWrapper";
import { useEffect, useState } from "react";
import Italia from "../../../../../public/imagini/formular/medic/negru/italia.svg";
import ItaliaAlb from "../../../../../public/imagini/formular/medic/alb/italia.svg";
import Oriunde from "../../../../../public/imagini/formular/medic/negru/oriunde.svg";
import OriundeAlb from "../../../../../public/imagini/formular/medic/alb/oriunde.svg";
import { MedicalSearchParamsType } from "@/app/[lang]/form/worker/medical/page";
import { useCookies } from "next-client-cookies";
const Pas7Medical = ({ setValue, setDisabled, setSearchParams }: any) => {
	const cookies = useCookies();
	const [selected, setSelected] = useState(Number(cookies.get("medic-locatia")));
	const clasaCard =
		"flex w-1/3 flex-col max-h-[300px] items-center  justify-center rounded-2xl bg-alb-site px-1 py-8 drop-shadow-xl active:bg-gri-brand   lg:gap-9 lg:py-16 lg:px-6 max-w-[272px]";
	const clasaIconita = "w-full";
	useEffect(() => {
		if (cookies.get("medic-locatia") !== undefined) {
			setDisabled(false);
		}
	}, []);
	return (
		<FormWrapper intrebare="Unde doresti sa lucrezi in Italia?">
			<div className="flex justify-center gap-4  md:gap-5 ">
				<button
					onClick={() => {
						setValue("locatia", "zona anume");
						setSelected(1);
						cookies.set("medic-locatia", "1");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							locatia: "zona anume",
						}));
						setDisabled(false);
					}}
					type="button"
					className={`${selected == 1 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
				>
					{selected == 1 ? <ItaliaAlb className={clasaIconita} /> : <Italia className={clasaIconita} />}

					<span className="font-[350]">Oriunde</span>
				</button>
				<button
					className={`${selected == 2 && "bg-gri-brand text-alb-site"} ${clasaCard}`}
					onClick={() => {
						setValue("locatia", "oriunde");
						setSelected(2);
						cookies.set("medic-locatia", "2");
						setSearchParams((searchParams: MedicalSearchParamsType) => ({
							...searchParams,
							locatia: "oriunde",
						}));
						setDisabled(false);
					}}
					type="button"
				>
					{selected == 2 ? <OriundeAlb className={clasaIconita} /> : <Oriunde className={clasaIconita} />}

					<span className="font-[350]">Intr-o zona anume</span>
				</button>
			</div>
		</FormWrapper>
	);
};

export default Pas7Medical;
