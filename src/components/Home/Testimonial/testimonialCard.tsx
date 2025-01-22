import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
interface ICardParteneri {
	firma: string;
	descriere: string;
	src: StaticImageData;
}

function Star() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 text-yellow-600 "
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
		</svg>
	);
}

function TestimonialCard({ img, rating, feedback, client, title, setStoppedCarouselState }: any) {
	return (
		<Card
			color="transparent"
			shadow={false}
			onMouseEnter={() => {
				setStoppedCarouselState(true);
			}}
			onMouseLeave={() => {
				setStoppedCarouselState(false);
			}}
			className="group flex   max-w-3xl bg-gri-deschis-bg bg-opacity-25 p-8  "
		>
			<CardBody className="flex h-full flex-col justify-between gap-4 !p-0 text-center">
				<div className="flex flex-col gap-4">
					<motion.div className="mb-2 flex items-center  justify-center group-hover:scale-110">
						{[...Array(rating).keys()].map((_el, key) => (
							<Star key={key} />
						))}
					</motion.div>
					<Typography variant="paragraph" className="mb-2 text-sm font-bold text-gri-brand md:text-base">
						" {feedback} "
					</Typography>
				</div>
				<div className="flex  flex-col gap-2">
					<Typography variant="lead" className="text-base font-medium text-gri-brand md:text-xl">
						&#8212; {client}
					</Typography>
					<Typography variant="paragraph" className="text-sm font-normal text-gri-brand  md:text-base">
						{title}
					</Typography>
				</div>
			</CardBody>
		</Card>
	);
}

export default TestimonialCard;
