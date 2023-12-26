"use client";
import React, { useRef, useState } from "react";

import { useTranslation } from "@/app/i18n/client";
import { useCookies } from "next-client-cookies";
import { Switch } from "@material-tailwind/react";
import { IoMdArrowRoundBack } from "react-icons/io";
const CookieConsent = ({ params }: { params: { lang: string } }) => {
	const [showConsent, setShowConsent] = useState(true);
	const [checked, setChecked] = useState(true);
	const [analyticsConsent, setAnalyticsConsent] = useState(false);
	const [showSettingsPage, setShowSettingsPage] = useState(false);
	const cookies = useCookies();

	React.useEffect(() => {
		cookies.get("localConsent") === undefined && setShowConsent(false);
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		cookies.set("localConsent", "true", { sameSite: "none" });
	};
	const acceptSelectedCookies = () => {
		analyticsConsent === true
			? cookies.set("analytics", "true", { sameSite: "none" })
			: cookies.set("analytics", "false", { sameSite: "none" });
		cookies.set("localConsent", "true", { sameSite: "none" });
		setShowConsent(true);
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
			<div className=" relative  flex max-w-3xl flex-col items-center justify-between gap-16 rounded-2xl bg-alb-site p-8 md:p-16">
				{" "}
				{showSettingsPage ? (
					<div className=" flex flex-col gap-6 overflow-x-hidden overflow-y-scroll px-2">
						<IoMdArrowRoundBack
							className="absolute top-4 left-4 h-5 w-5 cursor-pointer hover:scale-105"
							onClick={() => setShowSettingsPage(false)}
						/>
						<div>
							<div className="my-6 flex items-center justify-between">
								<span className="font-bold"> {t("settingsPage.switch1.denumire")}</span>
								<Switch id="custom-switch-component1" disabled={true} defaultChecked />
							</div>
							<span>{t("settingsPage.switch1.descriere")}</span>
						</div>
						<div>
							<div className="my-6 flex items-center justify-between">
								<span>{t("settingsPage.switch2.denumire")}</span>
								<Switch
									id="custom-switch-component2"
									value={"checked"}
									onChange={() => {
										setChecked((prevCheck) => !prevCheck);
										checked === true ? setAnalyticsConsent(true) : setAnalyticsConsent(false);
									}}
								/>
							</div>
							<span>{t("settingsPage.switch2.descriere")}</span>{" "}
						</div>
						<div className="flex w-full items-center justify-center">
							<button
								className="max-w-sm rounded-xl border border-gri-brand py-2 px-4 text-xs font-medium text-gri-brand hover:bg-gri-brand hover:text-alb-site md:text-sm"
								onClick={acceptSelectedCookies}
							>
								{t("settingsPage.butonAcceptaSelectie")}
							</button>
						</div>
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
