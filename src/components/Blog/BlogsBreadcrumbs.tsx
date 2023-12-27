"use client";

import { useTranslation } from "@/app/i18n/client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
import Link from "next/link";
const BlogsBradcrumbs = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "blog");
	return (
		<Breadcrumbs>
			<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
				{t("breadHome")}
			</Link>
			<Link className="text-rosu-brand" href={CheckIfDefaulthLang(params, "/blog")}>
				{t("breadCurrent")}
			</Link>
		</Breadcrumbs>
	);
};

export default BlogsBradcrumbs;
