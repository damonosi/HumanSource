"use client";
import { Typography } from "@material-tailwind/react";

import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ContactForm from "@/components/Contact/ContactForm";

import ContactWays from "@/components/Contact/ContactWays";

import { useTranslation } from "@/app/i18n/client";
import dynamic from "next/dynamic";

import Spinner from "@/components/Spinner/Spinner";

const LazyLoadedGoogleIframe = dynamic(() => import("@/components/Contact/GoogleMap"), {
	loading: () => (
		<div className="relative flex w-full items-center justify-center rounded-full md:w-1/2">
			<Spinner />
		</div>
	),
	ssr: false,
});

const ClientContactPage = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "contact");

	return (
		<div className="container mx-auto flex flex-col ">
			<Breadcrumbs>
				<Link className="text-gri-brand hover:text-rosu-brand" href={`/${params.lang}/`}>
					{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              	// @ts-ignore */}
					{t("breadHome")}
				</Link>
				<Link className="text-rosu-brand" href={`/${params.lang}/contact`}>
					{t("breadCurrent")}
				</Link>
			</Breadcrumbs>
			<div className="flex flex-col-reverse gap-14 py-4 lg:flex-row ">
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
				<LazyLoadedGoogleIframe />
			</div>
		</div>
	);
};

export default ClientContactPage;
