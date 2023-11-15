"use client";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
const MultumimPage = ({ params }: { params: { lang: string } }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const titluJob = searchParams.get("title");
	const categorieJob = searchParams.get("categorie");
	const { t } = useTranslation(params.lang, "multumim");

	return (
		<section className="flex  items-center  justify-center">
			<div className=" flex max-w-sm flex-col items-center justify-center gap-7 px-2 py-24 text-center">
				<h1 className="text-4xl font-[700] md:text-5xl">Multumim!</h1>

				{titluJob !== null && (
					<h2 className="text-base font-[500] md:text-2xl">
						{" "}
						{t("primulPasAngajat")} {titluJob}
					</h2>
				)}
				{categorieJob !== null && (
					<h2 className="text-base font-[500] md:text-2xl">
						{t("primulPasAngajator")} {categorieJob}
					</h2>
				)}

				<h3 className="text-base font-[500] md:text-2xl">{t("contactare")}</h3>
				<button
					onClick={() => router.push(`/${params.lang}/contact`)}
					className="flex items-center justify-center gap-3 rounded-2xl bg-gri-brand py-4 px-5 text-alb-site"
				>
					{t("intreaba")}
				</button>
			</div>
		</section>
	);
};
export default MultumimPage;
