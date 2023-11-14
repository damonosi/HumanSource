"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import BlogCover from "../../../public/imagini/blog/heroBlogImg.png";
import { useTranslation } from "@/app/i18n/client";
const DescriereBlog = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "blog");
	return (
		<section className="flex w-full flex-col-reverse items-center gap-8 md:flex-row" id="hero-bloguri">
			<div className="flex flex-col items-start gap-6 md:w-1/2" id="container-text-blog">
				<Typography variant="h2">{t("titlu")}</Typography>
				<Typography className="text-gri-brand" variant="h5">
					{t("subtitlu")}
				</Typography>
				<Typography variant="paragraph">{t("descriere")}</Typography>
			</div>
			<div className="flex items-center justify-center md:w-1/2" id="container-imagine">
				{" "}
				<Image alt="cover-blog" src={BlogCover} placeholder="blur" />{" "}
			</div>
		</section>
	);
};
export default DescriereBlog;
