"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Button, Menu, MenuHandler, MenuItem, MenuList, MobileNav, Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

import Hamburger from "@/public/imagini/hamburger.svg";
import Logo from "@/public/imagini/logo.svg";
import { useTranslation } from "../i18n/client";


interface INavItem {
	label: string;
	href: string;
	handleCloseMenu: () => void;
}
function NavItem({ label, href, handleCloseMenu }: INavItem) {
	return (
		<Link className="flex items-center md:h-[60px] md:justify-center" href={href}>
			<Typography
				variant="small"
				className="flex  items-center gap-1.5 p-1 font-[350]  text-gri-brand"
				onClick={handleCloseMenu}
			>
				{label}
			</Typography>
		</Link>
	);
}
const DropdownAplica = ({
	t,
	params,
	handleCloseMenu,
}: {
	t: any;
	params: { lang: string; country: string };
	handleCloseMenu: () => void;
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const triggers = {
		onMouseEnter: () => setOpenMenu(true),
		onMouseLeave: () => setOpenMenu(false),
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
				<span
					{...triggers}
					className="flex w-fit cursor-pointer items-center justify-start  gap-[10px] px-4 py-2 pl-1  text-center text-sm font-bold text-gri-brand    md:h-[60px] md:gap-[0.62rem]"
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
			</MenuHandler>
			<MenuList {...triggers}>
				<MenuItem>
					<NavItem
						handleCloseMenu={handleCloseMenu}
						href={`${params.lang}/formular/muncitor`}
						label={t("aplicaMuncitor")}
					/>
				</MenuItem>
				<MenuItem>
					<NavItem
						handleCloseMenu={handleCloseMenu}
						href={`${params.lang}/formular/angajator`}
						label={t("aplicaAngajator")}
					/>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
const DropdownServicii = ({
	t,
	params,
	handleCloseMenu,
}: {
	t: any;
	params: { lang: string; country: string };
	handleCloseMenu: () => void;
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	const triggers = {
		onMouseEnter: () => setOpenMenu(true),
		onMouseLeave: () => setOpenMenu(false),
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
				<span
					className="flex w-fit cursor-pointer items-center justify-start  gap-[10px] px-4 py-2 pl-1  text-center text-sm font-bold text-gri-brand    md:h-[60px] md:gap-[0.62rem]"
					{...triggers}
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
			</MenuHandler>
			<MenuList {...triggers}>
				<MenuItem>
					<NavItem
						handleCloseMenu={handleCloseMenu}
						href={`${params.lang}/servicii/#sectiune-servicii-1`}
						label={t("serviciiLeasing")}
					/>
				</MenuItem>
				<MenuItem>
					<NavItem
						handleCloseMenu={handleCloseMenu}
						href={`${params.lang}/servicii/#sectiune-servicii-2`}
						label={t("serviciiRecrutare")}
					/>
				</MenuItem>
				<MenuItem>
					<NavItem
						handleCloseMenu={handleCloseMenu}
						href={`${params.lang}/servicii//#sectiune-servicii-3`}
						label={t("serviciiPayroll")}
					/>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

function NavList({
	params,
	handleCloseMenu,
}: {
	params: { lang: string; country: string };
	handleCloseMenu: () => void;
}) {
	const { t } = useTranslation(params.lang, "header");
	return (
		<ul className=" flex w-full flex-col justify-end gap-3 text-gri-brand  md:h-[60px] md:flex-row md:items-center md:gap-[1.25rem]">
			{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
            // @ts-ignore */}
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/despre-noi`} label={t("despre")} />
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/locuri-de-munca`} label={t("munca")} />
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/contact`} label={t("contact")} />
			<DropdownServicii params={params} handleCloseMenu={handleCloseMenu} t={t} />
			{/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
            // @ts-ignore */}
			<NavItem handleCloseMenu={handleCloseMenu} href={`${params.lang}/blog`} label={t("blog")} />

			<DropdownAplica params={params} handleCloseMenu={handleCloseMenu} t={t} />
		</ul>
	);
}

export function Header({ params }: { params: { lang: string; country: string } }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	const handleCloseMenu = () => {
		setOpen(false);
	};

	const menuOpenIcon = <Hamburger className="h-8 w-8" />;

	const menuCloseIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			className="h-6 w-6"
			viewBox="0 0 24 24"
			stroke="black"
			strokeWidth={2}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);

	return (
		<Navbar
			fullWidth
			className="fixed z-50 h-[60px] w-full  items-center  justify-center border-b border-alb-site bg-alb-site  bg-opacity-100 py-0  px-0 md:px-[70px] "
		>
			<div className="container mx-auto flex h-[60px]  w-full items-center justify-between  px-4 text-gri-brand md:px-0">
				<div className="flex w-1/3 ">
					<Typography
						as="a"
						href={`/${params.lang}`}
						variant="small"
						color="black"
						className="mr-4 cursor-pointer py-1.5 font-bold"
					>
						<Logo className="w-32" />
					</Typography>
					<LanguageSwitcher params={params} className=" md:flex" />
				</div>

				<div className="hidden  w-full items-center justify-end gap-6 lg:flex">
					<NavList handleCloseMenu={handleCloseMenu} params={params} />
				</div>
				<div className="flex gap-2 lg:hidden">
					<button className="" onClick={handleOpen}>
						{open ? menuCloseIcon : menuOpenIcon}
					</button>
				</div>
			</div>
			<MobileNav className="bg-alb-site  px-4 py-4 text-center lg:hidden" open={open}>
				<NavList handleCloseMenu={handleCloseMenu} params={params} />
			</MobileNav>
		</Navbar>
	);
}

export default Header;
