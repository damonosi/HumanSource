"use client";
import { useState } from "react";

import { Typography } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import BackSmall from "../../../../public/imagini/blog/cover-blog-small.png";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/navigation";

interface ICardBlog {
	data: string;
	titlu: string;
	paragraph: string;
	id: string;
	slug: string;
	imageUrl: string;
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
			className="relative   flex h-[350px]  w-full flex-col justify-end overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
		>
			<AnimatePresence>
				{!hovered ? (
					<motion.div
						key="imagine"
						layout
						transition={{
							layout: {
								type: "spring",
								stiffness: 30,
								duration: 1,
							},
						}}
						id="img-container"
						className=" relative z-40 flex items-center  justify-center  "
					>
						<Image alt="background" className=" object-cover" width={500} height={500} src={imageUrl} />
						<motion.div
							key="mask"
							transition={{
								type: "spring",
								stiffness: 40,
								duration: 1,
								delay: 500,
							}}
							className="hidden"
						/>
					</motion.div>
				) : (
					<motion.div
						key="imagine"
						layout
						transition={{
							layout: { type: "spring", stiffness: 30, duration: 1 },
						}}
						id="img-container"
						className="absolute top-0 bottom-0 left-0 right-0 object-fill"
					>
						<Image
							alt="background"
							className="relative h-full w-full  transform object-fill"
							width={500}
							height={500}
							src={imageUrl}
						/>{" "}
						<motion.div
							key="mask"
							transition={{
								type: "spring",
								stiffness: 40,
								duration: 1,
								delay: 500,
							}}
							className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-2xl bg-black bg-fixed opacity-20"
						/>
					</motion.div>
				)}

				<motion.div
					key="container-text"
					layout
					transition={{
						layout: { type: "spring", stiffness: 30 },
					}}
					className={`z-20 flex  flex-col justify-end gap-2 py-2 px-4 text-start  md:justify-between ${
						hovered ? "gap-5 text-alb-site" : "text-gri-brand"
					} `}
					id="container-text-bloguri"
				>
					<Typography variant="paragraph" className="z-20 text-sm font-[350] opacity-50   md:text-base ">
						{formattedDate}
					</Typography>
					<Typography variant="h4" className="text-base font-medium md:text-2xl">
						{titlu}
					</Typography>
					<Typography variant="paragraph" className="max-w-prose text-[14px] font-[350] leading-[22px]  md:text-[16px]">
						{!hovered ? ` ${paragraph.substring(0, 120)} ....` : paragraph}
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
