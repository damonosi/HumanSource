"use client";
import { Typography } from "@material-tailwind/react";

import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ContactForm from "@/components/Contact/ContactForm";

import ContactWays from "@/components/Contact/ContactWays";

import { useTranslation } from "@/app/i18n/client";
import dynamic from "next/dynamic";

import Spinner from "@/components/Spinner/Spinner";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";

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
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
					{t("breadHome")}
				</Link>
				<Link className="text-rosu-brand" href={CheckIfDefaulthLang(params, "/contact")}>
					{t("breadCurrent")}
				</Link>
			</Breadcrumbs>
			<div className="flex flex-col-reverse gap-14 py-4 lg:flex-row ">
				<div className="flex w-full flex-col  justify-between gap-[60px] md:w-1/2">
					<div className="flex flex-col gap-8 md:pr-12">
						<Typography variant="h3" className="text-start font-bold">
							{t("titlu")}
						</Typography>
						<p>{t("subtitlu")}</p>
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
