"use client";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

interface IEchipaInfo {
	src: StaticImageData;
	nume: string;
	pozitie: string;
}
interface IValoriInfo {
	src: StaticImageData;
	titlu: string;
	descriere: string;
}
export const CardEchipa = ({ src, nume, pozitie }: IEchipaInfo) => {
	return (
		<Card color="transparent" shadow={false}>
			<CardHeader floated={false} shadow={false} className="!m-0 !mb-6 ">
				<Image src={src} alt={nume} placeholder="blur" className=" w-full object-cover object-top" />
			</CardHeader>

			<Typography variant="h4" className="mb-1 text-left text-gri-brand ">
				{nume}
			</Typography>

			<Typography variant="paragraph" className=" mb-3 font-bold text-gri-bg">
				{pozitie}
			</Typography>
		</Card>
	);
};

export const CardValori = ({ titlu, descriere, src }: IValoriInfo) => {
	return (
		<div className="flex flex-col items-center gap-7 rounded-2xl bg-white px-8 py-16  md:px-8 lg:px-6 ">
			<div className="flex w-full items-center justify-center p-1" id="imgsection">
				<Image alt="icon-card-about" className="h-auto w-10" src={src} />
			</div>
			<div className="flex flex-col  items-center gap-6 text-center text-gri-brand" id="text-section">
				<Typography variant="h6" className=" font-[500] ">
					{titlu}
				</Typography>
				<Typography variant="paragraph" className="">
					{descriere}
				</Typography>
			</div>
		</div>
	);
};
