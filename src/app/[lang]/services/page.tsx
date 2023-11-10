import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import SectiuniServicii from "@/components/Servicii/SectiuniServicii";

import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Servicii - Human Source",
	description: "Human Source servicii",
};
const ServiciiPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className=" bg-[#E5E5E5] px-4 pb-28  md:px-[70px] ">
			<div className="container mx-auto flex flex-col ">
				<Breadcrumbs>
					<Link className="text-gri-brand" href={`/${params.lang}`}>
						Home
					</Link>
					<Link className="text-red-600" href={`/${params.lang}/services`}>
						Servicii
					</Link>
				</Breadcrumbs>
				<SectiuniServicii />
			</div>
		</section>
	);
};

export default ServiciiPage;
