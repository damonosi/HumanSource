"use client";
import imagineFemei from "../../../../public/imagini/nevoi/femei.png";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
const NevoiSection = ({ params }: { params: { lang: string } }) => {
	const { t } = useTranslation(params.lang, "home");
	return (
		<section className="container relative flex w-full items-start justify-start bg-[#506673] px-2 pb-[100px] md:pb-0       ">
			<div className="flex w-full flex-col-reverse items-center lg:flex-row ">
				<div className="flex  max-w-[606px] flex-col justify-center gap-12   text-alb-site md:w-full md:pr-2" id="text">
					<Typography variant="h2" className="text-start text-3xl font-bold   ">
						{t("nevoi.titlu")}
					</Typography>

					<Typography variant="h3" className=" text-start  text-xl font-[500]">
						&#x2713; &nbsp; {t("nevoi.1")}
					</Typography>

					<Typography variant="h3" className="text-start  text-xl font-[500] ">
						&#x2713; &nbsp; {t("nevoi.2")}
					</Typography>

					<Typography variant="h3" className="text-start  text-xl  font-[500]">
						&#x2713; &nbsp; {t("nevoi.3")}
					</Typography>
				</div>

				<div className="relative right-0 top-0 w-full  -translate-y-24 transform   md:w-2/3 md:-translate-y-[9%] ">
					<Image
						className=" w-full rounded-xl object-cover drop-shadow"
						alt="imagine-femei"
						placeholder="blur"
						src={imagineFemei}
					/>
				</div>
			</div>
		</section>
	);
};

export default NevoiSection;
