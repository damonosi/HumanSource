"use client";
import Hi5 from "../../../../public/imagini/about/hi5.png";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import First from "../../../../public/imagini/about/1.png";
import Second from "../../../../public/imagini/about/2.png";
import Third from "../../../../public/imagini/about/3.png";
import Forth from "../../../../public/imagini/about/4.png";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { CardEchipa, CardValori } from "./CarduriAbout";
import { dateEchipa, dateValori } from "./dateCarduriAbout";
import { useTranslation } from "@/app/i18n/client";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";

const AboutClientPage = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "about");
	return (
		<div className="container mx-auto flex flex-col">
			<Breadcrumbs>
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
					{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              	// @ts-ignore */}
					{t("breadHome")}
				</Link>
				<Link className="text-rosu-brand" href={CheckIfDefaulthLang(params, "/about")}>
					{t("breadCurrent")}
				</Link>
			</Breadcrumbs>
			<div className="container mt-[30px] flex w-full flex-col-reverse gap-6 pb-[100px] md:mt-14  lg:flex-row ">
				<div className="grid w-full  items-start gap-6 text-left lg:w-1/2" id="text-about">
					<Typography variant="h1" className=" text-bold text-left text-gri-brand ">
						{t("hero.titlu")}
					</Typography>

					<Typography variant="h2" className="max-w-[33rem] text-left font-bold leading-[30px] text-gri-brand ">
						{t("hero.subtitlu")}
					</Typography>
					<Typography variant="paragraph" className="text-left font-normal text-gri-brand  opacity-80 ">
						{t("hero.descriere")}
					</Typography>
				</div>{" "}
				<div className="flex w-full items-center justify-center md:w-1/2" id="imagine-about">
					{" "}
					<Image alt="imagine-about" placeholder="blur" className="z-20 w-full" src={Hi5} />
				</div>
			</div>
			<section className="flex flex-col pb-[100px]  text-center md:px-0">
				<Typography variant="h3" className="bold pb-[60px]">
					{t("cardSection.titlu")}
				</Typography>
				<div
					className="container mx-auto grid grid-cols-1 flex-col   gap-5 sm:grid-cols-2 lg:grid-cols-4 "
					id="container-carduri-about"
				>
					<CardValori
						titlu={t("cardSection.carduri.1.titlu")}
						descriere={t("cardSection.carduri.1.descriere")}
						src={First}
					/>
					<CardValori
						titlu={t("cardSection.carduri.2.titlu")}
						descriere={t("cardSection.carduri.2.descriere")}
						src={Second}
					/>
					<CardValori
						titlu={t("cardSection.carduri.3.titlu")}
						descriere={t("cardSection.carduri.3.descriere")}
						src={Third}
					/>
					<CardValori
						titlu={t("cardSection.carduri.4.titlu")}
						descriere={t("cardSection.carduri.4.descriere")}
						src={Forth}
					/>
				</div>
			</section>

			<section className="flex w-full flex-col items-center" id="container echipa">
				<div className=" text-center">
					<Typography variant="h3" className="pb-[60px] font-bold  text-gri-brand">
						{t("echipa")}
					</Typography>
				</div>

				<div className="grid w-full gap-8 md:grid-cols-2 md:px-8 lg:grid-cols-3 ">
					{dateEchipa.map(({ nume, pozitie, src, id }) => (
						<CardEchipa key={id} nume={nume} pozitie={pozitie} src={src} />
					))}
				</div>
			</section>
		</div>
	);
};

export default AboutClientPage;
