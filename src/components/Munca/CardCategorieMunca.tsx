"use client";
import { Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICardCategorie {
	src: StaticImageData;
	domeniu: string;
}

const CardCategorieMunca = ({ src, domeniu }: ICardCategorie) => {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<Link
			href={`/locuri-de-munca/${domeniu}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="relative flex h-[30rem] w-full max-w-[28rem] cursor-pointer flex-col items-end justify-center overflow-hidden rounded-xl bg-white text-center"
		>
			<div className={` flex   w-full ${hovered ? "absolute h-full" : "relative h-4/5"}`}>
				<Image src={src} placeholder="blur" fill alt="img-transport" />
			</div>
			<div className="relative  flex h-1/5 w-full items-center justify-center  text-center ">
				<Typography variant="h2" className={`mb-4 ${hovered ? "text-white" : "text-gray-400"}`}>
					{domeniu}
				</Typography>
			</div>
		</Link>
	);
};

export default CardCategorieMunca;
