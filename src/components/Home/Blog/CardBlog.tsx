"use client";
import { useState } from "react";

import { Button, Typography } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import formatDate from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";

interface ICardBlog {
	data: string;
	titlu: string;
	content: {
		document: {
			type: string;
			children: [
				{
					text: string;
				},
			];
		}[];
	};

	id: string;
	slug: string;
	imageUrl: StaticImageData;
	params: { lang: string };
}

const CardBlog = ({ data, titlu, slug, imageUrl, id, params, content }: ICardBlog) => {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};
	const filteredDoc = content.document.filter((doc) => doc.type === "paragraph");
	const paragraph = filteredDoc[0].children[0].text;
	const titleLength = titlu.length;
	const paragraphLength = paragraph.length;

	const router = useRouter();
	const formattedDate = formatDate(data, params);
	const { t } = useTranslation(params.lang, "home");

	return (
		<div
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			className="group   relative flex h-[430px]   w-full flex-col justify-between overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
		>
			<div
				key="mask"
				className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full origin-top -translate-y-72 overflow-hidden rounded-2xl bg-black bg-fixed opacity-0 transition-all duration-500  group-hover:translate-y-0 group-hover:opacity-50 "
			/>
			<div className=" flex h-1/2 w-full md:h-1/3  ">
				<Image
					alt="background"
					fill
					sizes=""
					className="z-10 w-full  -translate-y-[60%] object-cover transition-transform duration-500 hover:absolute group-hover:bottom-0 group-hover:top-0 group-hover:-translate-y-0"
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
					className={`relative z-20 flex h-[59%] flex-col justify-end gap-2 px-4 py-2 text-start  md:justify-between ${
						hovered ? "mt-auto h-[88%]  gap-5 text-alb-site" : "text-gri-brand"
					} `}
					id="container-text-bloguri"
				>
					<div className="flex h-full flex-col gap-3">
						<Typography variant="paragraph" className="z-20 h-[10%] text-sm font-[350]  opacity-50   md:text-base ">
							{formattedDate}
						</Typography>
						<Typography variant="h4" className="h-[40%]  text-base font-medium md:text-[1.1rem] md:leading-8">
							{!hovered ? ` ${titlu.substring(0, 45)}  ${titleLength >= 45 ? "..." : ""} ` : titlu}
						</Typography>
						<Typography
							variant="paragraph"
							className=" h-[40%] overflow-ellipsis    text-[14px] font-[350] leading-[22px]  md:text-[16px]"
						>
							{!hovered
								? ` ${paragraph.substring(0, 90)}  ${paragraphLength >= 90 ? "..." : ""}`
								: `${paragraph.substring(0, 160)} ${paragraphLength >= 160 ? "..." : ""} `}
						</Typography>
						<Button
							className={`z-50  flex h-fit w-fit overflow-visible   bg-transparent pl-0 text-sm font-light normal-case text-gri-bg shadow-none hover:scale-95 hover:shadow-none md:text-base ${
								hovered && "text-alb-site"
							}`}
							onClick={() => {
								router.push(CheckIfDefaulthLang(params, `/blog/${slug}`));
							}}
						>
							<span className={`${hovered && "text-alb-site"}`}>{t("blog.buton")}</span>
							{hovered && <ArrowForwardIcon className="ml-2 text-alb-site" />}
						</Button>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default CardBlog;
