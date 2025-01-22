import dynamic from "next/dynamic";

import HeroSection from "@/components/Home/Hero/HeroSection";

import Spinner from "@/components/Spinner/Spinner";

const AvantajeSection = dynamic(() => import("@/components/Home/Avantaje/AvantajeSection"));
const BlogSection = dynamic(() => import("@/components/Home/Blog/BlogSection"));
const IntrebariSection = dynamic(() => import("@/components/Home/Intrebari/IntrebariSection"));
const NevoiSection = dynamic(() => import("@/components/Home/Nevoi/NevoiSection"));
const TestimonialSection = dynamic(() => import("@/components/Home/Testimonial/TestimonialSection"));
const ServiciiSection = dynamic(() => import("@/components/Home/Servicii/ServiciiSection"));
import type { Metadata } from "next";

import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Agentie de plasare forta de munca - HumanSource ",
	description:
		"Human Source ofera servicii complete: leasing personal, recrutare si selectie, administrare dosare de personal si payroll ✔ Flexibilitate",
};

export default function Home({ params }: { params: { lang: string; country: string } }) {
	return (
		<div className="mb-[-10rem] grid grid-cols-1 items-center justify-center " id="container-home">
			<HeroSection params={params} />

			<div className=" h-full  translate-y-[-10rem]  ">
				<div
					className="mx-1 flex  flex-col items-center justify-center rounded-t-[10px] bg-alb-site px-4   py-[50px]   md:mx-2 md:py-[100px] "
					id="background"
				>
					<AvantajeSection params={params} />
				</div>
				<div
					className="mx-1 flex flex-col items-center justify-center bg-gri-bg  px-4  md:mx-2 md:px-16  "
					id="background"
				>
					<NevoiSection params={params} />
				</div>
				<div
					className="mx-1 flex flex-col items-center  justify-center bg-alb-site pb-[80px] pt-[50px] md:mx-2 md:px-16 md:pb-36 md:pt-[100px]  "
					id="background"
				>
					<ServiciiSection params={params} />
				</div>{" "}
				<div
					className="mx-1 flex flex-col items-center justify-center  bg-gri-bg pb-10 md:mx-2 md:px-16  md:pb-[0px] "
					id="background"
				>
					<IntrebariSection params={params} />
				</div>
				<div
					className="mx-1 flex flex-col items-center justify-center  rounded-b-[10px]  bg-white pb-12  md:mx-2 md:px-16 "
					id="background"
				>
					<Suspense fallback={<Spinner />}>
						<BlogSection params={params} />
					</Suspense>
				</div>
				<div
					className="mx-1 flex flex-col items-center justify-center  bg-white pb-10 md:mx-2 md:px-16  md:pb-[0px] "
					id="background"
				>
					<TestimonialSection />
				</div>
			</div>
		</div>
	);
}
