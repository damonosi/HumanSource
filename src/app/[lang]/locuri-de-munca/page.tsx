"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CardJob from "@/components/Munca/CardJob";

import { Select, Option } from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { IJobs } from "@/interfaces/job";
import Link from "next/link";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import query from "@/lib/apollo/queries/job/getJobsByCategory";

import { useState } from "react";

const CategorieJoburi = ({ params }: { params: { lang: string; country: string; category: string } }) => {
	const [category, setCategory] = useState("medical");
	const upperdParams = params.lang.toUpperCase();
	const { data }: IJobs = useSuspenseQuery(query, {
		variables: {
			where: {
				jobCategory: {
					category: {
						name: {
							equals: category,
						},
					},
				},
				language: { languages: { equals: upperdParams } },
			},
		},
	});

	const jobs = data.jobs;
	console.log("jobs", jobs);

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
					<Link className="capitalize text-red-600" href={`/${params.lang}/locuri-de-munca`}></Link>
				</Breadcrumbs>
				<Select
					size="lg"
					onChange={(e) => {
						if (!e) return;
						setCategory(e);
					}}
					variant="outlined"
					defaultValue={category}
					label="Categorie"
				>
					<Option value="medical">medical</Option>
					<Option value="sofer">transport</Option>
					<Option value="construct">constructii</Option>
				</Select>

				{/* joburi dupa categorie */}
				<section className="flex flex-col gap-9">
					<Typography variant="h4" className="text-bold text-left">
						Cele mai cautate locuri de munca
					</Typography>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" id="container joburi">
						{jobs.map(({ title, id, date, description }) => {
							console.log(id);
							return <CardJob params={params} key={id} id={id} titlu={title} data={date} descriere={description} />;
						})}
					</div>
				</section>
			</div>
		</section>
	);
};

export default CategorieJoburi;
