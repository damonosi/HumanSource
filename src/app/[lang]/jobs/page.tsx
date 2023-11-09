"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CardJob from "@/components/Munca/CardJob";



import { Typography } from "@material-tailwind/react";
import { IJobs } from "@/interfaces/job";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import query from "@/lib/apollo/queries/job/getJobsByCategory";



import SearchBar from "@/components/Munca/CategorySelector";

const CategorieJoburi = ({ params }: { params: { lang: string; country: string; category: string } }) => {
	const upperdParams = params.lang.toUpperCase();
	const searchParams = useSearchParams();
	const domeniu = searchParams.get("domeniu");
	const subDomeniu = searchParams.get("subDomeniu");
	const { data }: IJobs = useSuspenseQuery(query, {
		variables: {
			where: {
				jobCategory: {
					category: {
						name: {
							contains: domeniu ? domeniu : "",
						},
					},
					subcategories: {
						some: {
							name: {
								contains: subDomeniu ? subDomeniu : "",
							},
						},
					},
				},
				language: { languages: { equals: upperdParams } },
			},
		},
	});

	const jobs = data.jobs;

	const strDescending = [...jobs].sort((a, b) => (a.date > b.date ? -1 : 1));
	console.log(strDescending);

	return (
		<section className=" bg-[#E5E5E5] px-5 pb-16 md:px-[70px] ">
			<div className="container mx-auto grid grid-cols-1 gap-9">
				<Breadcrumbs>
					<Link className="" href={`/${params.lang}`}>
						Home
					</Link>
					<Link className="" href={`/${params.lang}/jobs`}>
						Locuri de munca
					</Link>
				</Breadcrumbs>
				<SearchBar params={params} />

				<section className="flex flex-col gap-9">
					<Typography variant="h4" className="text-bold text-left">
						Cele mai cautate locuri de munca
					</Typography>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" id="container joburi">
						{strDescending.map(({ title, id, date, description, salary }) => {
							return (
								<CardJob
									salary={salary}
									params={params}
									key={id}
									id={id}
									titlu={title}
									data={date}
									descriere={description}
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
