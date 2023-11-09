"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import Link from "next/link";
import { FC } from "react";
import FormularAplica from "@/components/Munca/formularAplica";
import { Typography } from "@material-tailwind/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { TbTicket } from "react-icons/tb";
import { IJob } from "@/interfaces/job";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import query from "@/lib/apollo/queries/job/getJobById";
import { RandomUUIDOptions } from "crypto";

interface IpageProps {
	params: { lang: string; id: RandomUUIDOptions };
}

const AplicareJob: FC<IpageProps> = ({ params }) => {
	const { data }: IJob = useSuspenseQuery(query, {
		variables: {
			where: {
				id: params.id,
			},
		},
	});
	const { description, title, date, company, salary, requierments, jobCategory, whyWork } = data.job;

	return (
		<section className="min-h-screen bg-[#E5E5E5]  pb-24 text-start md:px-20">
			<div className="container mx-auto grid ">
				<div className="container mx-auto flex flex-col px-5 md:px-0">
					<Breadcrumbs>
						<Link className="text-gri-brand" href={`/${params.lang}`}>
							Home
						</Link>
						<Link className="text-gri-brand" href={`/${params.lang}/jobs`}>
							Locuri de munca
						</Link>
						<Link className="text-gri-brand" href={`/${params.lang}/jobs`}>
							{title}
						</Link>
					</Breadcrumbs>
					<div className="container flex w-full flex-col  md:flex-row">
						<div className="flex flex-col gap-[30px]  text-gri-brand md:w-1/2 md:px-0 ">
							<div className="flex flex-col gap-3" id="container info titlu">
								<Typography variant="h3" className="text-[28px] font-bold  ">
									{title}
								</Typography>
								<Typography variant="h5" className="text- font-bold  ">
									{company}
								</Typography>
								<div className="flex flex-col gap-2 text-[14px] md:flex-row" id="container butoane titlu">
									<div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-alb-site px-3 py-2 text-gri-brand">
										<FaRegCalendarAlt className="w-5" />
										<span className=""> Data inceperii : Imediata</span>
									</div>
									<div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-alb-site px-3 py-2 text-gri-brand ">
										<FiTruck className="w-5" />
										<span className=" "> Industrie : {jobCategory.name}</span>
									</div>
									<div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-alb-site px-3 py-2 text-gri-brand">
										<TbTicket className="w-5" />
										<span> Numar job : 203</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-2" id="container-descriere">
								{" "}
								<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
									Descriere
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
									Cerinte
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
									De ce sa lucrezi cu noi?
								</Typography>
								<ol className="ml-5 flex list-disc flex-col gap-2 md:ml-0">
									<li>
										{" "}
										<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
											{whyWork}
										</Typography>
									</li>
								</ol>
							</div>
							<Typography className="py-5 text-lg font-bold text-gri-brand md:text-[20px]" variant="h5">
								Aplica acum iar unul dintre agentii nostrii de recrutare te va contacta in cel mai scurt timp!
							</Typography>
						</div>
						<div className="flex rounded-2xl bg-alb-site p-5 md:w-1/2 md:p-10">
							<FormularAplica title={title} params={params} id={params.id} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AplicareJob;
