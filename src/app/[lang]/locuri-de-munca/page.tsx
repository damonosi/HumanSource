"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CardJob from "@/components/Munca/CardJob";
import muncaFiller from "@/components/Munca/muncaFiller";
import Search from "@/components/Munca/Search";
import { Typography } from "@material-tailwind/react";
import { getLocalePartsFrom, locales } from "i18n";
import Link from "next/link";
import { useState } from "react";
import { GiHospital } from "react-icons/gi";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}

const CategorieJoburi = ({ params }: { params: { lang: string; country: string } }) => {
	const [selectedCategory, setSelectedCategory] = useState("transport");
	const handleSetCategory = (category: string) => {
		setSelectedCategory(category);
	};
	return (
		<section className=" bg-[#E5E5E5] px-5 pb-16 md:px-[70px] ">
			<div className="container mx-auto grid grid-cols-1 gap-9">
				<Breadcrumbs>
					<Link className="" href={`/${params.lang}`}>
						Home
					</Link>
					<Link className="" href={`/${params.lang}/locuri-de-munca`}>
						Locuri de munca
					</Link>
					<Link className="capitalize text-red-600" href={`/${params.lang}/locuri-de-munca`}>
						{selectedCategory}
					</Link>
				</Breadcrumbs>
				<Search setSelectedCategory={setSelectedCategory} />

				{/* joburi dupa categorie */}
				<section className="flex flex-col gap-9">
					<Typography variant="h4" className="text-bold text-left">
						Cele mai cautate locuri de munca
					</Typography>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" id="container joburi">
						{muncaFiller
							.filter((job) => job.categorie === selectedCategory)
							.map(({ src, titlu, id, data, descriere, salariu }) => {
								return (
									<CardJob
										params={params}
										key={id}
										id={id}
										src={src}
										titlu={titlu}
										data={data}
										descriere={descriere}
										salariu={salariu}
									/>
								);
							})}
					</div>
				</section>
			</div>
		</section>
	);
};

export default CategorieJoburi;
