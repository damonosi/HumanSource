"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import ImgIntrebari from "../../../../public/imagini/intrebari/imgIntrebari.png";

import DropdownIntrebare from "./DropdownIntrebare";
import { useTranslation } from "@/app/i18n/client";

const IntrebariSection = ({ params }: { params: { lang: string } }) => {
	const { t } = useTranslation(params.lang, "home");
	return (
		<section className="container relative flex w-full flex-col gap-10 px-[14px]   text-start  md:text-center  lg:flex-row lg:px-0">
			<div className="flex  h-full items-center justify-center  lg:w-1/2" id="container-imagine-intrebari">
				<Image className=" w-full translate-y-[-8%]" alt="imagine-intrebari" placeholder="blur" src={ImgIntrebari} />
			</div>
			<div className="relative flex flex-col gap-6  pt-[30px] sm:w-full md:pt-[60px] lg:w-1/2   ">
				<Typography variant="h2" className=" text-start font-bold text-alb-site  md:text-2xl">
					{t("intrebari.titlu")} <br /> {t("intrebari.continuare")}
				</Typography>

				<DropdownIntrebare
					intrebare={t("intrebari.1.intrebare")}
					raspuns={t("intrebari.1.raspuns")}
					ultimaIntrebare={false}
				/>
				<DropdownIntrebare
					intrebare={t("intrebari.2.intrebare")}
					raspuns={t("intrebari.2.raspuns")}
					ultimaIntrebare={false}
				/>
				<DropdownIntrebare
					intrebare={t("intrebari.3.intrebare")}
					raspuns={t("intrebari.3.raspuns")}
					ultimaIntrebare={false}
				/>
				<DropdownIntrebare
					intrebare={t("intrebari.4.intrebare")}
					raspuns={t("intrebari.4.raspuns")}
					ultimaIntrebare={false}
				/>
				<DropdownIntrebare
					intrebare={t("intrebari.5.intrebare")}
					raspuns={t("intrebari.5.raspuns")}
					ultimaIntrebare={false}
				/>
				<DropdownIntrebare
					intrebare={t("intrebari.6.intrebare")}
					raspuns={t("intrebari.6.raspuns")}
					ultimaIntrebare={false}
				/>
				<DropdownIntrebare
					intrebare={t("intrebari.7.intrebare")}
					raspuns={t("intrebari.7.raspuns")}
					ultimaIntrebare={true}
				/>
			</div>
		</section>
	);
};

export default IntrebariSection;
