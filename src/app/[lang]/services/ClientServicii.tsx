"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import SectiuniServicii from "@/components/Servicii/SectiuniServicii";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
const ClientServicii = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "services");
	return (
		<div className="container mx-auto flex flex-col ">
			<Breadcrumbs>
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
					{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              	// @ts-ignore */}
					{t("breadHome")}
				</Link>
				<Link className="text-rosu-brand" href={CheckIfDefaulthLang(params, "/services")}>
					{t("breadCurrent")}
				</Link>
			</Breadcrumbs>
			<SectiuniServicii params={params} />
		</div>
	);
};

export default ClientServicii;
