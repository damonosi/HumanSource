"use client";

import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import It from "../../../public/imagini/header/it.svg";
import Ro from "../../../public/imagini/header/ro.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { i18n } from "i18n.config";

interface Iclass {
	className?: string;
	params: { lang: string; country: string };
}

const LanguageSwitcher = ({ className, params }: Iclass) => {
	const [open, setOpened] = useState(false);
	const [language, setLanguage] = useState(params.lang);
	const pathName = usePathname();
	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";

		const pathnameIsMissingLocale = i18n.locales.every(
			(locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
		);

		if (pathnameIsMissingLocale) {
			if (locale === i18n.defaultLocale) return pathName;
			return `/${locale}${pathName}`;
		} else {
			if (locale === i18n.defaultLocale) {
				const segments = pathName.split("/");
				const isHome = segments.length === 2;
				if (isHome) return "/";

				segments.splice(1, 1);
				return segments.join("/");
			}

			const segments = pathName.split("/");
			segments[1] = locale;
			return segments.join("/");
		}
	};

	const ref = useOnclickOutside(() => {
		setOpened(!open && false);
	});

	const { t } = useTranslation(params.lang, "languageSwitcher");

	return (
		<div ref={ref} className={`${className}  relative z-50 flex  w-72 flex-col items-start justify-center`}>
			<div className="flex cursor-pointer items-center gap-2" onClick={() => setOpened(!open)} id="selector-limba">
				{language === "ro" && <Ro className="h-5 w-5   " />}
				{language === "it" && <It className="h-5 w-5    " />}

				{open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowUp className="rotate-180 " />}
			</div>
			{open && (
				<div className="absolute top-full mt-2 flex flex-col gap-4 rounded-b-2xl bg-alb-site py-5 px-5">
					<Link
						href={redirectedPathName("ro")}
						locale="ro"
						onClick={() => {
							setOpened(false);
							setLanguage("ro");
						}}
						className={`${language === "ro" && "font-bold"} linkUnderline relative flex items-center gap-4`}
					>
						<Ro className="h-5 w-5 " />
						<span>{t("romana")}</span>
					</Link>
					<Link
						href={redirectedPathName("it")}
						locale="it"
						onClick={() => {
							setOpened(false);
							setLanguage("it");
						}}
						className={`${language === "it" && "font-bold "} linkUnderline relative flex items-center gap-4`}
					>
						<It className="h-5 w-5 " /> <span>{t("italiana")}</span>
					</Link>
				</div>
			)}
		</div>
	);
};
export default LanguageSwitcher;
