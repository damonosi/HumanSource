"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
const BlogsBradcrumbs = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "blog");
	return (
		<Breadcrumbs>
			<Link className="text-gri-brand" href={`/${params.lang}`}>
				{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              	// @ts-ignore */}
				{t("breadHome")}
			</Link>
			<Link className="text-red-600" href={`/${params.lang}/blog`}>
				{t("breadCurrent")}
			</Link>
		</Breadcrumbs>
	);
};

export default BlogsBradcrumbs;
