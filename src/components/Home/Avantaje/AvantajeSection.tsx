"use client";
import { Typography } from "@material-tailwind/react";
import CardAvantaje from "./CardAvantaje";

import { useTranslation } from "@/app/i18n/client";

const AvantajeSection = ({ params }: { params: { lang: string } }) => {
	const { t } = useTranslation(params.lang, "home");
	return (
		<section className="container flex flex-col items-center pb-[100px] text-center md:pb-0">
			<Typography variant="h3" className="mb-[30px] hidden px-2 md:mb-[60px]   md:block ">
				{t("avantaje.titlu")}
			</Typography>
			<Typography variant="h5" className="my-[30px] px-2 md:my-[60px] md:hidden ">
				Avantajele Human Source
			</Typography>

			<div className="mb-20 grid w-full grid-cols-2 place-items-center gap-x-5 gap-y-10 2xl:grid-cols-4    ">
				<CardAvantaje
					titluMobil={t("avantaje.card1.titlu")}
					titlu={t("avantaje.card1.titlu")}
					descriere={t("avantaje.card1.continut")}
					icon="bank"
				/>
				<CardAvantaje
					titluMobil={t("avantaje.card2.titlu")}
					titlu={t("avantaje.card2.titlu")}
					descriere={t("avantaje.card2.continut")}
					icon="ue"
				/>
				<CardAvantaje
					titluMobil={t("avantaje.card3.titlu")}
					titlu={t("avantaje.card3.titlu")}
					descriere={t("avantaje.card3.continut")}
					icon="manageri"
				/>
				<CardAvantaje
					titluMobil={t("avantaje.card4.titluMobil")}
					titlu={t("avantaje.card4.titlu")}
					descriere={t("avantaje.card4.continut")}
					icon="suport"
				/>
			</div>
		</section>
	);
};

export default AvantajeSection;
