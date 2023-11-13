"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
const BreadComponent = ({ params, title }: { params: { lang: string; id: string }; title: string }) => {
	const { t } = useTranslation(params.lang, "blog");
	return (
		<Breadcrumbs>
			<Link className="text-gri-brand hover:text-rosu-brand" href={`/${params.lang}`}>
				{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              	// @ts-ignore */}
				{t("breadHome")}
			</Link>
			<Link className="text-gri-brand hover:text-rosu-brand" href={`/${params.lang}/blog`}>
				{t("breadCurrent")}
			</Link>
			<Link className="text-rosu-brand" href={`/${params.lang}/blog/${params.id}`}>
				{title}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadComponent;
