"use client";

import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { useTranslation } from "../i18n/client";

import CheckIfDefaulthLang from "@/utils/isDefaultLang";

const FooterNavItem = ({ params, href, label }: { params: { lang: string }; href: string; label: string }) => {
	return (
		<Link className=" flex items-center md:items-start" href={CheckIfDefaulthLang(params, href)}>
			<Typography
				variant="small"
				className={` relative flex  items-center  p-1 font-[350] text-alb-site    before:absolute before:-bottom-1 before:left-0 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-rosu-brand before:transition before:duration-300
              before:ease-in-out before:content-[''] before:hover:scale-x-100  `}
			>
				{label}
			</Typography>
		</Link>
	);
};

const Footer = ({ params }: { params: { lang: string } }) => {
	const { t } = useTranslation(params.lang, "footer");

	return (
		<footer className="relative z-40  w-full overflow-hidden bg-gri-bg pt-12 pb-10 text-white md:mx-auto   md:items-center  md:justify-center">
			<div className="mx-auto  flex w-full flex-col items-center justify-center  pb-0   md:px-[70px]">
				<nav className="container z-30 flex w-full flex-col  items-center justify-between  md:items-start  ">
					<div className=" flex w-full  flex-col items-center justify-center gap-8 gap-y-6 p-4 md:items-start  md:justify-between lg:flex-row ">
						<div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-1/4 md:items-start md:text-start ">
							<h6 className=" text-[16px]  font-bold leading-[20px]">HUMAN SOURCE</h6>
							<hr className="h-2 w-full" />
							<div className="flex flex-col items-center gap-8 text-[16px] font-[350]  leading-[24px] md:items-start">
								<FooterNavItem params={params} href={`about`} label={t("1.despre")} />
								<FooterNavItem params={params} href={`about`} label={t("1.angajatori")} />
								<FooterNavItem params={params} href={`blog`} label={t("1.candidati")} />
								<FooterNavItem params={params} href={`jobs`} label={t("1.munca")} />
							</div>
						</div>
						<div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/4 md:items-start">
							<h6 className="font-bold">{t("2.titlu")}</h6>

							<hr className="h-2 w-full" />
							<div className="flex flex-col items-center  gap-8 md:items-start">
								<FooterNavItem params={params} href={`services/#sectiune-servicii-1`} label={t("2.leasing")} />
								<FooterNavItem params={params} href={`services/#sectiune-servicii-2`} label={t("2.recrutare")} />
								<FooterNavItem params={params} href={`services/#sectiune-servicii-3`} label={t("2.payroll")} />
							</div>
						</div>
						<div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-1/4 md:items-start md:text-start">
							<h6 className="font-bold">{t("3.titlu")}</h6>
							<hr className="h-2 w-full" />

							<Typography variant="small">{t("3.registrul")}</Typography>
							<Typography variant="small">{t("3.cod")}</Typography>
							<Typography variant="small">{t("3.telefon")}</Typography>
							<Typography variant="small">{t("3.email")}</Typography>
						</div>
						<div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-1/4 md:items-start md:text-start">
							<h6 className="font-bold">{t("4.titlu")}</h6>
							<hr className="h-2 w-full" />
							<div className="flex flex-col items-center gap-8 md:items-start">
								<FooterNavItem params={params} href={`about`} label={t("4.politica")} />
								<FooterNavItem params={params} href={`blog`} label={t("4.termeni")} />
								<FooterNavItem params={params} href={`contact`} label={t("4.cookies")} />
							</div>
						</div>
					</div>
					<div className="flex w-full items-center justify-center gap-6 pt-12 " id="social container">
						<a href="">
							<FiFacebook className="hover:text-[#64C7CE]" />
						</a>
						<a href="">
							<GrInstagram className="hover:text-[#64C7CE]" />
						</a>{" "}
						<a href="">
							<SlSocialTwitter className="hover:text-[#64C7CE]" />
						</a>
					</div>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
