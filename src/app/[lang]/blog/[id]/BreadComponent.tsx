"use client";
import { useTranslation } from "@/app/i18n/client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
import Link from "next/link";
import { useEffect, useState } from "react";
function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}
const BreadComponent = ({ params, title }: { params: { lang: string; id: string }; title: string }) => {
	const size = useWindowSize();

	const { t } = useTranslation(params.lang, "blog");
	return (
		<Breadcrumbs>
			<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
				{t("breadHome")}
			</Link>
			<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/blog")}>
				{t("breadCurrent")}
			</Link>

			<Link className="flex  text-rosu-brand " href={CheckIfDefaulthLang(params, `/blog/${params.id}`)}>
				{size.width < 960 ? ` ${title.substring(0, 20)}  ...` : title}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadComponent;
