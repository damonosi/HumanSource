"use client";
import { Typography } from "@material-tailwind/react";

import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ContactForm from "@/components/Contact/ContactForm";

import ContactWays from "@/components/Contact/ContactWays";
import GoogleMap from "@/components/Contact/GoogleMap";

const ClientContactPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<div className="container mx-auto flex flex-col ">
			<Breadcrumbs>
				<Link className="text-gri-brand" href={`/${params.lang}/`}>
					Home
				</Link>
				<Link className="text-red-600" href={`/${params.lang}/contact`}>
					Contact
				</Link>
			</Breadcrumbs>
			<div className="flex flex-col-reverse gap-14 py-4 md:flex-row ">
				<div className="flex w-full flex-col  justify-between gap-[60px] md:w-1/2">
					<div className="flex flex-col gap-8 md:pr-12">
						<Typography variant="h3" className="text-start font-bold">
							Contacteaza-ne!
						</Typography>
						<p>
							Lorem ipsum dolor sit amet consectetur. Cras felis tristique pharetra magna. Orci quis dui viverra mi
							lacus amet pulvinar quis. Eu auctor ullamcorper imperdiet ultricies amet elementum quam. T
						</p>
					</div>
					<ContactWays />
					<ContactForm params={params} />
				</div>

				<GoogleMap />
			</div>
		</div>
	);
};

export default ClientContactPage;
