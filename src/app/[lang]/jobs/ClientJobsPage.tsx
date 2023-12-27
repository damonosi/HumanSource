"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CardJob from "@/components/Munca/CardJob";

import { IJobs } from "@/interfaces/job";
import query from "@/lib/apollo/queries/job/getJobsByCategory";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useTranslation } from "@/app/i18n/client";
import SearchBar from "@/components/Munca/SearchBar";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
const ClientJobsPage = ({ params }: { params: { lang: string; country: string; category: string } }) => {
	const upperdParams = params.lang.toUpperCase();
	const searchParams = useSearchParams();
	const domeniu = searchParams.get("domeniu");
	const subDomeniu = searchParams.get("subDomeniu");
	const searchInput = searchParams.get("titlu");
	const locatie = searchParams.get("location");
	const { data }: IJobs = useSuspenseQuery(query, {
		variables: {
			where: {
				OR: [
					{ title: { contains: searchInput ? searchInput : "" } },
					{ description: { contains: searchInput ? searchInput : "" } },
				],
				location: { country: { some: { name: { contains: locatie ? locatie : "" } } } },
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
				language: { languages: { contains: upperdParams } },
			},
		},
	});

	const jobs = data.jobs;
	const { t } = useTranslation(params.lang, "jobs");

	return (
		<div className="container mx-auto grid  grid-cols-1 gap-9">
			<Breadcrumbs>
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
					{t("breadHome")}
				</Link>
				<Link className="text-rosu-brand" href={CheckIfDefaulthLang(params, "/jobs")}>
					{t("breadCurrent")}
				</Link>
			</Breadcrumbs>
			<SearchBar params={params} />

			<section className="flex min-h-[50vh] flex-col gap-9">
				<Typography variant="h4" className="text-bold text-left">
					{t("titlu")}
				</Typography>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" id="container joburi">
					{jobs.map(({ title, id, date, description, salary, jobCategory }) => {
						return (
							<CardJob
								salary={salary}
								params={params}
								key={id}
								id={id}
								titlu={title}
								data={date}
								category={jobCategory.category}
								descriere={description}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default ClientJobsPage;
