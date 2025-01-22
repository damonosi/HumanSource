import { useTranslation } from "@/app/i18n/client";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
import { Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface INavItem {
	label: string;
	href: string;
	params: { lang: string; country: string };
	pathname: string;
	handleCloseMenu: () => void;
}
export function NavItem({ label, href, params, handleCloseMenu, pathname }: INavItem) {
	return (
		<Link
			className=" flex items-center  visited:text-red-600 md:h-[60px] md:justify-center"
			href={CheckIfDefaulthLang(params, href)}
		>
			<Typography
				variant="small"
				className={` relative  flex  items-center p-1 font-[350]    text-gri-brand  ${
					pathname === `/${params.lang}/${href}` ? "linkUnderline-forever" : "linkUnderline"
				} `}
				onClick={handleCloseMenu}
			>
				{label}
			</Typography>
		</Link>
	);
}
export const DropdownAplica = ({
	t,
	params,
	handleCloseMenu,
	pathname,
	href,
}: {
	t: any;
	params: { lang: string; country: string };
	handleCloseMenu: () => void;
	pathname: string;
	href: string;
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const triggers = {
		onClick: () => setOpenMenu(!open),
	};
	return (
		<Menu
			open={openMenu}
			handler={setOpenMenu}
			placement="bottom"
			offset={0}
			animate={{
				mount: { y: 0 },
				unmount: { y: -25 },
			}}
		>
			<MenuHandler>
				<div
					className=" relative flex h-full  items-center justify-start px-4 py-2 pl-1 md:justify-center"
					{...triggers}
				>
					<span
						className={`  relative flex h-fit  w-fit cursor-pointer items-center justify-start gap-[10px]  text-center  text-sm  font-bold text-gri-brand md:gap-[0.62rem]      md:p-1 ${
							pathname === `/${params.lang}/${href}` ? "linkUnderline-forever" : "linkUnderline"
						}`}
					>
						{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
                // @ts-ignore */}
						{t("aplica")}
						<svg
							width="10"
							className={` ${openMenu ? "rotate-180" : ""}  `}
							height="17"
							viewBox="0 0 10 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0.773438 8.5L5.01608 12.7426L9.25872 8.5" stroke="#383A3C" strokeWidth="2" />
						</svg>
					</span>
				</div>
			</MenuHandler>
			<MenuList className=" w-full md:w-fit" {...triggers}>
				{params.lang === "ro" && (
					<MenuItem className="hover:bg-transparent hover:bg-opacity-100 focus:bg-transparent">
						<NavItem
							handleCloseMenu={handleCloseMenu}
							params={params}
							pathname={pathname}
							href={`/form/worker`}
							label={t("aplicaMuncitor")}
						/>
					</MenuItem>
				)}
				<MenuItem className="hover:bg-transparent hover:bg-opacity-100 focus:bg-transparent">
					<NavItem
						params={params}
						pathname={pathname}
						handleCloseMenu={handleCloseMenu}
						href={`/form/employer`}
						label={t("aplicaAngajator")}
					/>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
export const DropdownServicii = ({
	t,
	params,
	handleCloseMenu,
	pathname,
	href,
}: {
	t: any;
	params: { lang: string; country: string };
	handleCloseMenu: () => void;
	pathname: string;
	href: string;
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const triggers = {
		onClick: () => setOpenMenu(!open),
	};
	return (
		<Menu
			open={openMenu}
			handler={setOpenMenu}
			placement="bottom"
			offset={0}
			animate={{
				mount: { y: 0 },
				unmount: { y: -25 },
			}}
		>
			<MenuHandler>
				<div
					className=" relative flex h-full  items-center justify-start px-4 py-2 pl-1 md:justify-center"
					{...triggers}
				>
					<span
						className={`  relative flex h-fit  w-fit cursor-pointer items-center justify-start gap-[10px]   text-center  text-sm font-bold text-gri-brand   md:gap-[0.62rem]   md:p-1 ${
							pathname === `/${params.lang}/${href}` ? "linkUnderline-forever" : "linkUnderline"
						}`}
					>
						{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
                    // @ts-ignore */}
						{t("servicii")}
						<svg
							width="10"
							className={` ${openMenu ? "rotate-180" : ""}  `}
							height="17"
							viewBox="0 0 10 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0.773438 8.5L5.01608 12.7426L9.25872 8.5" stroke="#383A3C" strokeWidth="2" />
						</svg>
					</span>
				</div>
			</MenuHandler>
			<MenuList className=" w-full md:w-fit" {...triggers}>
				<MenuItem className="hover:bg-transparent hover:bg-opacity-100 focus:bg-transparent">
					<NavItem
						pathname={pathname}
						params={params}
						handleCloseMenu={handleCloseMenu}
						href={`/services/#sectiune-servicii-1`}
						label={t("serviciiLeasing")}
					/>
				</MenuItem>
				<MenuItem className="hover:bg-transparent hover:bg-opacity-100 focus:bg-transparent">
					<NavItem
						pathname={pathname}
						params={params}
						handleCloseMenu={handleCloseMenu}
						href={`/services/#sectiune-servicii-2`}
						label={t("serviciiRecrutare")}
					/>
				</MenuItem>
				<MenuItem className="hover:bg-transparent hover:bg-opacity-100 focus:bg-transparent">
					<NavItem
						pathname={pathname}
						params={params}
						handleCloseMenu={handleCloseMenu}
						href={`/services/#sectiune-servicii-3`}
						label={t("serviciiPayroll")}
					/>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export function NavList({
	handleCloseMenu,
	params,
}: {
	handleCloseMenu: () => void;
	params: { lang: string; country: string };
}) {
	const { t } = useTranslation(params.lang, "header");
	const pathname = usePathname();
	return (
		<ul className=" flex w-full flex-col justify-end gap-3 text-gri-brand  md:h-[60px] md:flex-row md:items-center md:gap-[1.25rem]">
			<NavItem
				pathname={pathname}
				handleCloseMenu={handleCloseMenu}
				params={params}
				href={`/about`}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				label={t("despre")}
			/>
			<NavItem
				pathname={pathname}
				handleCloseMenu={handleCloseMenu}
				params={params}
				href={`/jobs`}
				label={t("munca")}
			/>
			<NavItem
				pathname={pathname}
				handleCloseMenu={handleCloseMenu}
				params={params}
				href={`/contact`}
				label={t("contact")}
			/>
			<DropdownServicii
				href={`/services`}
				pathname={pathname}
				params={params}
				handleCloseMenu={handleCloseMenu}
				t={t}
			/>
			{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
            // @ts-ignore */}
			<NavItem pathname={pathname} handleCloseMenu={handleCloseMenu} params={params} href={`/blog`} label={t("blog")} />
			<DropdownAplica href={`form/`} pathname={pathname} params={params} handleCloseMenu={handleCloseMenu} t={t} />
		</ul>
	);
}
