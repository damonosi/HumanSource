"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import FormularAplica from "@/components/Munca/formularAplica";
import { IJob } from "@/interfaces/job";
import query from "@/lib/apollo/queries/job/getJobById";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

import { useTranslation } from "@/app/i18n/client";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
import { useSearchParams } from "next/navigation";

interface IpageProps {
	params: { lang: string; title: string };
}

const CardJob = ({
	jobCategory,
	params,
	translateName,
	isDateCard,
	children,
}: {
	jobCategory: { category: { name: string } };
	params: { lang: string };
	translateName: string;
	isDateCard: boolean;
	children: React.ReactNode;
}) => {
	const { t } = useTranslation(params.lang, "job");
	<div
		className={`flex  flex-col items-center justify-between gap-2 rounded-2xl bg-alb-site px-5 py-4 text-gri-brand ${
			isDateCard && ""
		}`}
	>
		<div className="rounded-full border-2 border-x-0 border-b-0  border-gri-brand p-2">{children}</div>
		<div className="flex flex-col items-center">
			<span className="font-bold ">{t(translateName)}</span>
		</div>
		<div className="flex flex-col items-center">
			<span> {jobCategory.category.name}</span>
		</div>
	</div>;
};

const ClientJobPage: FC<IpageProps> = ({ params }) => {
	const searchParams = useSearchParams();
	const idJob = searchParams.get("id") as string;
	const category = searchParams.get("category") as string;

	const { data }: IJob = useSuspenseQuery(query, {
		variables: {
			where: {
				id: idJob,
			},
		},
	});
	const { description, id, title, date, company, salary, requierments, jobCategory, whyWork, location } = data.job;
	function formatDate(date: string) {
		const segments = date.split("-");
		let zi = segments[2];
		let luna = segments[1];
		let an = segments[0];
		const newDate = `${zi} - ${luna} - ${an}`;
		return newDate;
	}
	const { t } = useTranslation(params.lang, "job");
	return (
		<div className="container mx-auto grid ">
			<div className="container mx-auto flex flex-col px-5 md:px-0">
				<Breadcrumbs>
					<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
						{t("breadHome")}
					</Link>
					<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/jobs")}>
						{t("breadCurrent")}
					</Link>
					<Link className="flex  text-rosu-brand " href={CheckIfDefaulthLang(params, "/jobs")}>
						{title}
					</Link>
				</Breadcrumbs>
				<div className="container flex w-full flex-col gap-5 md:flex-row">
					<div className="flex flex-col gap-[30px]  text-gri-brand md:w-1/2 md:px-0 ">
						<div className="flex flex-col gap-3" id="container info titlu">
							<Typography variant="h3" className="text-[28px] font-bold  ">
								{title}
							</Typography>
							<Typography variant="h5" className="text- font-bold  ">
								{company}
							</Typography>
							<section className="my-4 flex w-full items-center justify-center">
								<div
									className="grid  grid-cols-2 items-center gap-5 pr-6 text-[14px]  md:w-full md:grid-cols-3 "
									id="container butoane titlu"
								>
									<div className="flex h-40 flex-col items-center justify-between gap-2 rounded-2xl bg-alb-site px-5 py-4 text-gri-brand ">
										<div className="rounded-full border-2 border-x-0 border-b-0  border-gri-brand p-2">
											{" "}
											<FiTruck className="h-5 w-5" />
										</div>{" "}
										<div className="flex flex-col items-center">
											<span className="font-bold ">{t("cards.industrie")}</span>
										</div>
										<div className="flex flex-col items-center">
											{" "}
											<span> {params.lang === "ro" ? jobCategory.category.name : jobCategory.category.nameIT}</span>
										</div>
									</div>
									<div className="flex h-40 flex-col items-center justify-between gap-2 rounded-2xl bg-alb-site px-5 py-4 text-gri-brand">
										<div className="justify-self-start rounded-full border-2 border-x-0 border-b-0  border-gri-brand p-2">
											<CiLocationOn className="h-5 w-5" />
										</div>{" "}
										<div className="flex flex-col items-center">
											<span className="font-bold "> {t("cards.locatie")} </span>
										</div>
										<div className="flex flex-col items-center">
											{location.country.map(({ name, nameIT }, index) => (
												<span key={index}>{params.lang === "ro" ? name : nameIT}</span>
											))}
										</div>
									</div>
									<div className="col-span-2 flex h-40 flex-col items-center justify-between gap-2 rounded-2xl bg-alb-site px-5 py-4 text-gri-brand md:col-span-1">
										<div className="rounded-full border-2 border-x-0 border-b-0  border-gri-brand p-2">
											{" "}
											<FaRegCalendarAlt className="h-5 w-5" />
										</div>
										<div className="flex flex-col items-center">
											<span className="text-center font-bold">{t("cards.data")}</span>
										</div>
										<div className="flex flex-col items-center">
											<span> {formatDate(date)}</span>
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className="flex flex-col gap-2" id="container-descriere">
							{" "}
							<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
								{t("descriere")}
							</Typography>
							<ol className="ml-5 flex list-disc flex-col gap-2 md:ml-0 ">
								<li>
									{" "}
									<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
										{description}
									</Typography>
								</li>
							</ol>
						</div>
						<div className="flex flex-col gap-2" id="container-cerinte">
							<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
								{t("cerinte")}
							</Typography>
							<ol className="ml-5 flex list-disc flex-col gap-2 md:ml-0">
								<li>
									{" "}
									<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
										{requierments}
									</Typography>
								</li>
							</ol>
						</div>
						<div className="flex flex-col gap-2" id="container-lucrezi-cu-noi">
							<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
								{t("dece")}
							</Typography>
							<ol className="ml-5 flex list-disc flex-col gap-2 md:ml-0">
								<li>
									<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
										{whyWork}
									</Typography>
								</li>
							</ol>
						</div>
						<Typography className="py-5 text-lg font-bold text-gri-brand md:text-[20px]" variant="h5">
							{t("indemn")}
						</Typography>
					</div>

					<FormularAplica title={title} category={category} params={params} id={id} />
				</div>
			</div>
		</div>
	);
};

export default ClientJobPage;
