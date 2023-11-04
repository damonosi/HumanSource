"use client";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import formatDate from "@/utils/formatDate";
import { useRouter } from "next/navigation";

interface ICardBlog {
	data: string;
	titlu: string;
	paragraph: string;
	id: string;
	slug: string;
	imageUrl: StaticImageData;
	lang: string;
}

const CardBlog = ({ data, titlu, paragraph, lang, slug, imageUrl }: ICardBlog) => {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};
	const router = useRouter();
	const formattedDate = formatDate(data);
	return (
		<div
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			className="group   relative flex h-[400px]   w-full flex-col justify-between overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
		>
			<div
				key="mask"
				className="absolute top-0 bottom-0 right-0 left-0 z-20 h-full origin-top -translate-y-72 overflow-hidden rounded-2xl bg-black bg-fixed opacity-0 transition-all duration-700  group-hover:translate-y-0 group-hover:opacity-30 "
			/>
			<div className="flex h-1/2 w-full"></div>
			<Image
				fill
				alt="background"
				className="relative z-10 w-full -translate-y-72 transition-transform duration-700 group-hover:absolute group-hover:top-0 group-hover:bottom-0 group-hover:-translate-y-0"
				src={imageUrl}
			/>

			<AnimatePresence>
				<motion.div
					key="container-text"
					layout
					transition={{
						layout: { type: "spring", stiffness: 30 },
					}}
					className={`relative z-20 flex h-1/2 flex-col justify-end gap-2 py-2 px-4 text-start  md:justify-between ${
						hovered ? "mt-auto h-full  gap-5 text-alb-site" : "text-gri-brand"
					} `}
					id="container-text-bloguri"
				>
					<Typography variant="paragraph" className="z-20 text-sm font-[350] opacity-50   md:text-base ">
						{formattedDate}
					</Typography>
					<Typography variant="h4" className="text-base font-medium md:text-[1.4rem]">
						{titlu}
					</Typography>
					<Typography variant="paragraph" className="max-w-prose text-[14px] font-[350] leading-[22px]  md:text-[16px]">
						{!hovered ? ` ${paragraph.substring(0, 120)} ....` : `${paragraph.substring(0, 240)} ....`}
					</Typography>
					<button
						className={`bg-transparent py-2 text-start text-sm text-gri-bg shadow-none hover:scale-105 hover:shadow-none md:mt-4 md:py-5 md:text-base ${
							hovered && "text-alb-site"
						}`}
						onClick={() => {
							router.push(`/${lang}/blog/${slug}`);
						}}
					>
						<span className={`${hovered && "text-alb-site"}`}>Citeste mai mult</span>
						{hovered && <ArrowForwardIcon className="ml-2 text-alb-site" />}
					</button>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default CardBlog;


		// {
		// 	!hovered ? (
		// 		<motion.div
		// 			key="imagine"
		// 			layout
		// 			transition={{
		// 				layout: {
		// 					type: "spring",
		// 					stiffness: 30,
		// 					duration: 1,
		// 				},
		// 			}}
		// 			id="img-container"
		// 			className=" relative z-40 flex h-1/2 items-center justify-center  "
		// 		>
		// 			<Image fill alt="background" className=" object-cover" src={imageUrl} />

		// 			<motion.div
		// 				key="mask"
		// 				transition={{
		// 					type: "spring",
		// 					stiffness: 40,
		// 					duration: 1,
		// 					delay: 500,
		// 				}}
		// 				className="hidden"
		// 			/>
		// 		</motion.div>
		// 	) : (
		// 		<motion.div
		// 			key="imagine"
		// 			layout
		// 			transition={{
		// 				layout: { type: "spring", stiffness: 30, duration: 1 },
		// 			}}
		// 			id="img-container"
		// 			className="absolute top-0 bottom-0 left-0 right-0 object-fill"
		// 		>
		// 			<Image alt="background" className="relative h-full w-full  transform object-fill" fill src={imageUrl} />{" "}
		// 			<motion.div
		// 				key="mask"
		// 				transition={{
		// 					type: "spring",
		// 					stiffness: 40,
		// 					duration: 1,
		// 					delay: 500,
		// 				}}
		// 				className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-2xl bg-black bg-fixed opacity-20"
		// 			/>
		// 		</motion.div>
		// 	);
		// }