"use client";
import { Typography } from "@material-tailwind/react";
import CasetaServicii from "./CasetaServicii";
import dateServicii from "./dateServicii";
import { useTranslation } from "@/app/i18n/client";

const ServiciiSection = ({ params }: { params: { lang: string; country: string } }) => {
	const { t } = useTranslation(params.lang, "home");
	return (
		<section className="container flex w-full flex-col items-center  px-6 text-center md:gap-8 md:px-0 lg:mx-0  ">
			<Typography variant="h5" className="pb-[30px] font-bold text-gri-brand md:pb-[60px] md:text-3xl ">
				{t("servicii.titlu")}
			</Typography>
			<div className="flex w-full flex-col items-center justify-between gap-y-16 gap-x-5 lg:flex-row">
				<CasetaServicii
					params={params}
					href="/services/#sectiune-servicii-1"
					icon="leasing"
					titlu={t("servicii.card1.titlu")}
					descriere={t("servicii.card1.continut")}
					textButon={t("servicii.card1.buton")}
				/>
				<CasetaServicii
					params={params}
					href="/services/#sectiune-servicii-2"
					icon="payroll"
					titlu={t("servicii.card2.titlu")}
					descriere={t("servicii.card2.continut")}
					textButon={t("servicii.card2.buton")}
				/>
				<CasetaServicii
					params={params}
					href="/services/#sectiune-servicii-3"
					icon="recrutare"
					titlu={t("servicii.card3.titlu")}
					descriere={t("servicii.card3.continut")}
					textButon={t("servicii.card3.buton")}
				/>
			</div>
		</section>
	);
};

export default ServiciiSection;
