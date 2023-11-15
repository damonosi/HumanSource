"use client";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import formatDate from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface ICardBlog {
	data: string;
	titlu: string;
	paragraph: string;
	id: string;
	slug: string;
	imageUrl: StaticImageData;
	params: { lang: string };
}

const CardBlog = ({ data, titlu, paragraph, slug, imageUrl, id, params }: ICardBlog) => {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};
	const titleLength = titlu.length;
	const paragraphLength = paragraph.length;

	const router = useRouter();
	const formattedDate = formatDate(data, params);
	const { t } = useTranslation(params.lang, "home");

	return (
		<div
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			className="group   relative flex h-[400px]   w-full flex-col justify-between overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
		>
			<div
				key="mask"
				className="absolute top-0 bottom-0 right-0 left-0 z-20 h-full origin-top -translate-y-72 overflow-hidden rounded-2xl bg-black bg-fixed opacity-0 transition-all duration-500  group-hover:translate-y-0 group-hover:opacity-50 "
			/>
			<div className=" flex h-1/2 w-full md:h-1/3  ">
				<Image
					alt="background"
					fill
					sizes=""
					className="z-10 w-full  -translate-y-[60%] object-cover transition-transform duration-500 hover:absolute group-hover:top-0 group-hover:bottom-0 group-hover:-translate-y-0"
					src={imageUrl}
				/>
			</div>
			<AnimatePresence>
				<motion.div
					key="container-text"
					layout
					transition={{
						layout: { type: "spring", stiffness: 30 },
					}}
					className={`relative z-20 flex h-[55%] flex-col justify-end gap-2 py-2 px-4 text-start  md:justify-between ${
						hovered ? "mt-auto h-[75%]  gap-5 text-alb-site" : "text-gri-brand"
					} `}
					id="container-text-bloguri"
				>
					<Typography variant="paragraph" className="z-20 text-sm font-[350] opacity-50   md:text-base ">
						{formattedDate}
					</Typography>
					<Typography variant="h4" className="text-base font-medium leading-8 md:text-[1.4rem]">
						{!hovered ? ` ${titlu.substring(0, 60)}  ${titleLength >= 60 ? "..." : ""} ` : titlu}
					</Typography>
					<Typography variant="paragraph" className="max-w-prose text-[14px] font-[350] leading-[22px]  md:text-[16px]">
						{!hovered
							? ` ${paragraph.substring(0, 120)}  ${paragraphLength >= 120 ? "..." : ""}`
							: `${paragraph.substring(0, 200)} ${paragraphLength >= 200 ? "..." : ""} `}
					</Typography>
					<button
						className={`bg-transparent py-2 text-start text-sm text-gri-bg shadow-none hover:scale-95 hover:shadow-none md:mt-4 md:py-5 md:text-base ${
							hovered && "text-alb-site"
						}`}
						onClick={() => {
							router.push(`/${params.lang}/blog/${slug}`);
						}}
					>
						<span className={`${hovered && "text-alb-site"}`}>{t("blog.buton")}</span>
						{hovered && <ArrowForwardIcon className="ml-2 text-alb-site" />}
					</button>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default CardBlog;

