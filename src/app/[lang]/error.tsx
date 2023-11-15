"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ErrorSvg from "@/components/error/ErrorSvg";
import HomeIco from "@/components/error/HomeIco";
import { useParams } from "next/navigation";
import { useTranslation } from "../i18n/client";
type lang = string;
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	const router = useRouter();
	useEffect(() => {
		console.error(error);
	}, [error]);
	const params = useParams();
	const language: lang = params.lang as string;

	const { t } = useTranslation(language, "error");
	return (
		<div className="flex min-h-screen flex-col md:flex-row">
			<div className="mt-5 flex flex-col items-center justify-center gap-7 px-5 md:w-1/2">
				<h1 className="text-[2rem] font-[800]">Ooops.. </h1>
				<h2 className="text-xl font-bold">{t("mesaj1")}</h2>
				<h3 className="text-sm font-[350]">{t("mesaj2")}</h3>
				<button
					className="flex items-center justify-center gap-3 rounded-2xl bg-gri-brand py-4 px-5 text-alb-site"
					onClick={() => {
						router.push(`/${params.lang}`);
					}}
				>
					<span className="flex items-center justify-center">
						<HomeIco />
					</span>{" "}
					{t("buton")}
				</button>
			</div>
			<div className="flex flex-col items-center justify-center md:w-1/2  md:items-start">
				<ErrorSvg />
			</div>
		</div>
	);
}
