"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useState } from "react";
function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		// only execute all the code below in client side
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}
const BreadComponent = ({ params, title }: { params: { lang: string; id: string }; title: string }) => {
	const size = useWindowSize();

	const { t } = useTranslation(params.lang, "blog");
	return (
		<Breadcrumbs>
			<Link className="text-gri-brand hover:text-rosu-brand" href={`/${params.lang}`}>
				{t("breadHome")}
			</Link>
			<Link className="text-gri-brand hover:text-rosu-brand" href={`/${params.lang}/blog`}>
				{t("breadCurrent")}
			</Link>
			<Link className="flex  text-rosu-brand " href={`/${params.lang}/blog/${params.id}`}>
				{size.width < 960 ? ` ${title.substring(0, 20)}  ...` : title}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadComponent;
