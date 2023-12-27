"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import formatDate from "@/utils/formatDate";
import { useTranslation } from "@/app/i18n/client";
import TransportImg from "../../../public/imagini/munca/transport.png";
import MedicalImg from "../../../public/imagini/munca/medical.png";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
interface ICardJob {
	data: string;
	titlu: string;
	descriere: string;

	src?: StaticImageData;
	category: { name: string };
	id: string;
	salary: string;
	params: { lang: string; country: string };
}

const CardJob = ({ params, data, titlu, descriere, id, src, salary, category }: ICardJob) => {
	const { t } = useTranslation(params.lang, "jobs");
	const loweredCategory = category.name.toLowerCase();

	return (
		<div
			key={id}
			className="relative flex  h-fit w-full  flex-col justify-end gap-5 overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C]  shadow hover:border  hover:shadow-xl    "
		>
			<div id="img-container" className=" relative z-40 flex h-1/3 w-full overflow-hidden ">
				<Image
					alt="background"
					className="aspect-video w-full object-cover"
					src={loweredCategory === "medical" ? MedicalImg : TransportImg}
					width={700}
					height={500}
				/>
			</div>
			<div
				key="container-text"
				className="z-20 flex  h-2/3 flex-col justify-center gap-5 px-4 py-2 text-start  "
				id="container-text-bloguri"
			>
				<Typography variant="paragraph" className="z-20 text-sm font-[350]  opacity-50 ">
					{formatDate(data, params)}
				</Typography>
				<Typography variant="h5" className="text-[16px] font-bold">
					{titlu}
				</Typography>
				<Typography variant="paragraph" className=" text-[14px] font-[350] leading-[22px]">
					{descriere}
				</Typography>
				<div className="flex items-center justify-between ">
					<Link href={CheckIfDefaulthLang(params, `/jobs/${titlu}?id=${id}&category=${category.name}`)}>
						<Button
							variant="text"
							ripple={true}
							className={`flex w-full items-center gap-2  px-0 capitalize  text-[#B21E23] hover:bg-transparent active:bg-transparent md:text-left `}
						>
							{t("buton")}
							<ArrowSmallRightIcon strokeWidth={1} className=" ml-1 h-5 w-5 " />
						</Button>
					</Link>
					<span className="text-sm font-bold tracking-[0.0625]">
						{salary} <span className="ml-2">$</span>{" "}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CardJob;
