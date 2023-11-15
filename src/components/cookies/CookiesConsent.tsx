"use client";
import React, { useState } from "react";

import { useTranslation } from "@/app/i18n/client";
import { useCookies } from "next-client-cookies";

const CookieConsent = ({ params }: { params: { lang: string } }) => {
	const [showConsent, setShowConsent] = useState(true);
	const [showSettingsPage, setShowSettingsPage] = useState(false);
	const cookies = useCookies();
	React.useEffect(() => {
		cookies.get("localConsent") === undefined && setShowConsent(false);
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		cookies.set("localConsent", "true", { sameSite: "none" });
	};
	const refuseCookie = () => {
		setShowConsent(true);
		cookies.set("localConsent", "false", { sameSite: "none" });
	};

	const { t } = useTranslation(params.lang, "cookies");
	if (showConsent) {
		return null;
	}
	return (
		<div className="fixed z-50 -mt-8  flex h-full w-full items-center justify-center bg-opacity-70 px-2 backdrop-blur-sm  md:px-20">
			<div className="   flex max-w-3xl flex-col items-center justify-between gap-16 rounded-2xl bg-alb-site p-8 md:p-16">
				{" "}
				{showSettingsPage ? (
					<div>
						<button onClick={() => setShowSettingsPage(false)}>back</button>
						<span>settings</span>
					</div>
				) : (
					<div>
						<span className="text-dark  text-sm font-[350] md:text-base">
							{t("text")}
							<span className="text-rosu-brand"> {t("politica")}</span>. Cookies policy
						</span>
						<div className="flex w-full justify-between">
							<button
								className="text-sm font-[400] text-rosu-brand underline hover:text-gri-brand md:text-base"
								onClick={() => setShowSettingsPage(true)}
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
				)}{" "}
			</div>
		</div>
	);
};

export default CookieConsent;
