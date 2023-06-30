"use client";
import Harta from "@/public/imagini/hero/Harta.svg";
import HartaMobil from "@/public/imagini/hero/HartaMobil.png";
import PinuriMobil from "@/public/imagini/hero/PinuriMobil.svg";
import IPin1 from "@/public/imagini/hero/pinguri/iPing1.png";
import IPin2 from "@/public/imagini/hero/pinguri/iPing2.png";
import IPin3 from "@/public/imagini/hero/pinguri/iPing3.png";
import IPin4 from "@/public/imagini/hero/pinguri/iPing4.png";
import IPin5 from "@/public/imagini/hero/pinguri/iPing5.png";
import IPin6 from "@/public/imagini/hero/pinguri/iPing6.png";
import IPin7 from "@/public/imagini/hero/pinguri/iPing7.png";
import IPin8 from "@/public/imagini/hero/pinguri/iPing8.png";
import IPin9 from "@/public/imagini/hero/pinguri/iPing9.png";

import Pin1 from "@/public/imagini/hero/pinguri/ping1.svg";
import InViewWrapper from "@/utils/InViewWrapper";
import { AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

interface IPinComponent {
	src: StaticImageData;
	className: string;
	dimensions: number;

	translateX: number;
	translateY: number;
	delay?: number;
	fill?: string;
}
const delayBase = 400;
const PinComponent = ({ src, className, dimensions, translateX, translateY, delay, fill }: IPinComponent) => {
	return (
		<InViewWrapper
			inView={{
				translateY: translateY,
				translateX: translateX,
				opacity: 1,
			}}
			notInView={{
				translateY: translateY - 10,
				translateX: translateX - 10,
				opacity: 0,
			}}
			transition={{
				type: "spring",
				ease: "linear",
				damping: 10,
				stiffness: 80,
			}}
			delay={delay}
			className={`absolute  ${className} z-40 h-[${dimensions}px] w-[${dimensions}px] transform`}
		>
			<div className={`  relative h-[${dimensions}px ] w-[${dimensions}rem]`}>
				<Pin1 width={dimensions} height={dimensions} fill={`${fill ? fill : "#fff"}`} />
				<Image
					alt="img-ping-1"
					className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-2/3 transform "
					src={src}
				/>
			</div>
		</InViewWrapper>
	);
};
export const HartaHeroDesktop = () => {
	return (
		<div className="relative block     ">
			<AnimatePresence>
				<PinComponent
					key="pin1"
					src={IPin1}
					translateX={10}
					translateY={-87}
					className=" bottom-0  hidden xl:block"
					dimensions={95}
					delay={delayBase}
				/>
				<PinComponent
					key="pin2"
					src={IPin2}
					translateX={80}
					translateY={77}
					className=" top-0 hidden 2xl:block "
					dimensions={60}
					delay={delayBase * 2}
				/>
				<PinComponent
					key="pin3"
					src={IPin3}
					translateX={20}
					translateY={-10}
					className=" top-0  "
					dimensions={43}
					delay={delayBase * 3}
				/>
				<PinComponent
					key="pin4"
					src={IPin4}
					translateX={-50}
					translateY={-50}
					className=" top-1/2 right-1/2 hidden xl:block"
					dimensions={70}
					delay={delayBase * 4}
				/>
				<PinComponent
					key="pin5"
					src={IPin5}
					translateX={-20}
					translateY={20}
					className=" top-0 right-1/2 "
					dimensions={44}
					delay={delayBase * 5}
				/>
				<PinComponent
					key="pin6"
					src={IPin6}
					translateX={40}
					translateY={-20}
					className=" top-1/2 right-1/2 hidden 2xl:block"
					dimensions={104}
					delay={delayBase * 6}
				/>
				<PinComponent
					key="pin7"
					src={IPin7}
					translateX={-220}
					translateY={-40}
					className=" top-1/2 right-0 "
					dimensions={73}
					delay={delayBase * 7}
				/>
				<PinComponent
					key="pin8"
					src={IPin8}
					translateX={-150}
					translateY={-70}
					className=" top-1/2 right-0 "
					dimensions={52}
					delay={delayBase * 8}
				/>
				<PinComponent
					key="pin9"
					src={IPin9}
					translateX={-50}
					translateY={-100}
					className=" bottom-0 right-0 hidden xl:block"
					dimensions={106}
					delay={delayBase * 9}
				/>
			</AnimatePresence>
			<Harta className="relative z-10 w-full " priority="true" alt="imagine-harta" />
		</div>
	);
};
export const HartaHeroMobil = () => {
	return (
		<Fragment>
			<div className="relative mb-9 flex w-full">
				<AnimatePresence>
					<Image src={HartaMobil} className="relative z-10 w-full " priority alt="imagine-harta" />
					<PinuriMobil
						key="pinuriMobil"
						className="absolute z-10 w-4/5  translate-x-2 translate-y-2 "
						priority="true"
						alt="imagine-harta"
					/>
					;
				</AnimatePresence>
			</div>
		</Fragment>
	);
};
