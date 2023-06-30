"use client";
import muncaFiller from "@/components/Munca/muncaFiller";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import Link from "next/link";
import { FC } from "react";
import FormularAplica from "./../../../../components/Munca/formularAplica";
import { Typography } from "@material-tailwind/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { TbTicket } from "react-icons/tb";

interface IpageProps {
	params: { lang: string; id: number };
}

const AplicareJob: FC<IpageProps> = ({ params }) => {
	return (
		<section className="min-h-screen bg-[#E5E5E5]  pb-24 text-start md:px-20">
			<div className="container mx-auto grid ">
				{muncaFiller
					.filter((job) => job.id == params.id)
					.map(({ salariu, titlu, id }) => (
						<div key={id} className="container mx-auto flex flex-col ">
							<Breadcrumbs>
								<Link className="text-gri-brand" href={`/${params.lang}`}>
									Home
								</Link>
								<Link className="text-gri-brand" href={`/${params.lang}/locuri-de-munca`}>
									Locuri de munca
								</Link>
								<Link className="text-red-600" href={`${params.lang}/locuri-de-munca/${params.id}`}>
									{params.id}
								</Link>
							</Breadcrumbs>
							<div className="container flex w-full ">
								<div className="flex w-1/2 flex-col gap-[30px] text-gri-brand ">
									{" "}
									<div className="flex flex-col gap-3" id="container info titlu">
										<Typography variant="h3" className="text-[28px] font-bold  ">
											{" "}
											Sofer de tir - Transport animale
										</Typography>
										<Typography variant="h5" className="text- font-bold  ">
											Tur-cento Trans S.R.L
										</Typography>
										<div className="flex gap-2 text-[14px]" id="container butoane titlu">
											<div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-alb-site px-3 py-2 text-gri-brand">
												<FaRegCalendarAlt />
												<span> Data inceperii : Imediata</span>
											</div>
											<div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-alb-site px-3 py-2 text-gri-brand ">
												<FiTruck />
												<span className=" "> Industrie : Transport</span>
											</div>
											<div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-alb-site px-3 py-2 text-gri-brand">
												<TbTicket />
												<span> Numar job : 203</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-2" id="container-descriere">
										{" "}
										<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
											Descriere
										</Typography>
										<ol className="flex list-disc flex-col gap-2 ">
											<li>
												{" "}
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
											<li>
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
											<li>
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
										</ol>
									</div>
									<div className="flex flex-col gap-2" id="container-cerinte">
										<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
											Cerinte
										</Typography>
										<ol className="flex list-disc flex-col gap-2">
											<li>
												{" "}
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
											<li>
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
											<li>
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
										</ol>
									</div>
									<div className="flex flex-col gap-2" id="container-lucrezi-cu-noi">
										<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
											De ce sa lucrezi cu noi?
										</Typography>
										<ol className="flex list-disc flex-col gap-2">
											<li>
												{" "}
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
											<li>
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													{" "}
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
											<li>
												<Typography className="text-[16px] font-[350] text-gri-brand " variant="paragraph">
													Lorem ipsum dolor sit amet consectetur. Rhoncus sed senectus mi feugiat nec hac aenean in.
													Elit sit dolor viverra amet turpis.{" "}
												</Typography>
											</li>
										</ol>
									</div>
									<Typography className="text-[20px] font-bold text-gri-brand " variant="h5">
										Aplica acum iar unul dintre agentii nostrii de recrutare te va contacta in cel mai scurt timp!
									</Typography>
								</div>
								<div className="flex w-1/2 rounded-2xl bg-alb-site p-10">
									<FormularAplica />
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default AplicareJob;
