"use client";

import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import It from "../../../public/imagini/header/it.svg";
import Ro from "../../../public/imagini/header/ro.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
		const segments = pathName.split("/");
		if (segments[3] === undefined) {
			segments[1] = locale;
			return segments.join("/");
		} else {
			segments[1] = locale;
			if (segments[2] === "jobs") {
				segments[2] = "jobs";
				segments[3] = "";
				return segments.join("/");
			} else if (segments[2] === "blog") {
				segments[2] = "blog";
				segments[3] = "";
				return segments.join("/");
			}
			return segments.join("/");
		}
	
		
		
	};

	const ref = useOnclickOutside(() => {
		setOpened(!open && false);
	});



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
						<span>Romana</span>
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
						<It className="h-5 w-5 " /> <span>Italiana</span>
					</Link>
				</div>
			)}
		</div>
	);
};
export default LanguageSwitcher;
