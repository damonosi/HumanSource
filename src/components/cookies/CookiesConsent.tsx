"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { useTranslation } from "@/app/i18n/client";
const CookieConsent = ({ params }: { params: { lang: string } }) => {
	const [showConsent, setShowConsent] = React.useState(true);

	React.useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};
	const refuseCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "false", {});
	};

	if (showConsent) {
		return null;
	}
	const { t } = useTranslation(params.lang, "cookies");
	return (
		<div className="fixed z-50 -mt-8  flex h-full w-full items-center justify-center bg-opacity-70 px-2 backdrop-blur-sm  md:px-20">
			<div className="   flex max-w-3xl flex-col items-center justify-between gap-16 rounded-2xl bg-alb-site p-8 md:p-16">
				<span className="text-dark  text-sm font-[350] md:text-base">
					{t("text")}
					<span className="text-rosu-brand"> {t("politica")}</span>.
				</span>
				<div className="flex w-full justify-between">
					<button
						className="text-sm font-[400] text-rosu-brand underline hover:text-gri-brand md:text-base"
						onClick={() => acceptCookie()}
					>
						{t("settings")}
					</button>
					<div className="flex gap-1 md:gap-4">
						<button
							className="rounded-xl border border-gri-brand py-2 px-4 text-xs font-medium text-gri-brand hover:bg-gri-brand hover:text-alb-site md:text-sm"
							onClick={() => acceptCookie()}
						>
							{t("strict")}
						</button>
						<button
							className="rounded-xl border border-gri-brand py-2 px-4 text-xs font-medium text-gri-brand hover:bg-gri-brand hover:text-alb-site md:text-sm"
							onClick={() => acceptCookie()}
						>
							{t("accepta")}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
