"use client";
import Hi5 from "@/public/imagini/about/hi5.png";
import PageTransitionWrapper from "@/utils/PageTransitionWrapper";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { CardEchipa, CardValori } from "./CarduriAbout";
import { dateEchipa, dateValori } from "./dateCarduriAbout";
import { getLocalePartsFrom, locales } from "i18n";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}
const DespreNoiPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="bg-[#E5E5E5] px-5 pb-[100px] md:px-[70px] ">
			<div className="container mx-auto flex flex-col">
				<Breadcrumbs>
					<Link className="text-gri-brand" href={`${params.lang}/`}>
						Home
					</Link>
					<Link className="text-red-600" href={`${params.lang}/despre-noi`}>
						Despre Noi
					</Link>
				</Breadcrumbs>
				<div className="container mt-[30px] flex w-full flex-col-reverse gap-6 pb-[100px] md:mt-14  lg:flex-row ">
					<div className="grid w-full  items-start gap-6 text-left lg:w-1/2" id="text-about">
						<Typography variant="h3" className=" text-bold text-left text-gri-brand ">
							Despre noi
						</Typography>
						<Typography variant="h5" className="max-w-[33rem] text-left font-bold leading-[30px] text-gri-brand ">
							Companie de resurse umane ce oferă servicii de atât pe partea de leasign de personal, recrutare, selecție
							cât și pe partea de payroll si administrare de personal.
						</Typography>
						<Typography variant="paragraph" className="text-left font-normal text-gri-brand  opacity-80 ">
							Lorem ipsum dolor sit amet consectetur. Cras felis tristique pharetra magna. Orci quis dui viverra mi
							lacus amet pulvinar quis. Eu auctor ullamcorper imperdiet ultricies amet elementum quam. Tellus libero
							massa laoreet consequat porta id orci tempus. Dapibus quis curabitur vitae egestas sit feugiat tristique
							enim id. Enim lacus enim donec eget elementum. Mi imperdiet viverra tellus adipiscing amet vel risus.
							Nulla libero pulvinar nullam posuere blandit dignissim viverra eu magna. Blandit euismod risus vel leo.
						</Typography>
					</div>{" "}
					<div className="flex w-full items-center justify-center md:w-1/2" id="imagine-about">
						{" "}
						<Image alt="imagine-about" placeholder="blur" className="z-20 w-full" src={Hi5} />
					</div>
				</div>
				<section className="flex flex-col pb-[100px]  text-center md:px-0">
					<Typography variant="h3" className="bold pb-[60px]">
						Valorile Companiei
					</Typography>
					<div
						className="container mx-auto grid grid-cols-1 flex-col   gap-5 sm:grid-cols-2 lg:grid-cols-4 "
						id="container-carduri-about"
					>
						{dateValori.map(({ titlu, descriere, src, id }) => (
							<CardValori key={id} titlu={titlu} descriere={descriere} src={src} />
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center   " id="container echipa">
					<div className=" text-center">
						<Typography variant="h3" className="pb-[60px] font-bold  text-gri-brand">
							Echipa noastra
						</Typography>
					</div>

					<div className="grid w-full gap-8 md:grid-cols-2 md:px-8 lg:grid-cols-3 ">
						{dateEchipa.map(({ nume, pozitie, src, id }) => (
							<CardEchipa key={id} nume={nume} pozitie={pozitie} src={src} />
						))}
					</div>
				</section>
			</div>
		</section>
	);
};

export default DespreNoiPage;
