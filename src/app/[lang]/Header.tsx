"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { MobileNav, Navbar, Typography } from "@material-tailwind/react";

import { useState } from "react";

import Hamburger from "@/public/imagini/hamburger.svg";
import Logo from "@/public/imagini/logo.svg";
import { NavList } from "@/components/Header/Navigation";

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
						className="mr-4 cursor-pointer py-1.5 font-bold hover:scale-105 active:scale-105"
					>
						<Logo className="w-32" />
					</Typography>
					<LanguageSwitcher params={params} className=" md:flex" />
				</div>

				<div className="hidden  w-full items-center justify-end gap-6 lg:flex">
					<NavList params={params} handleCloseMenu={handleCloseMenu} />
				</div>
				<div className="flex gap-2 lg:hidden">
					<button className="" onClick={handleOpen}>
						{open ? menuCloseIcon : menuOpenIcon}
					</button>
				</div>
			</div>
			<MobileNav className="bg-alb-site  px-4 py-4 text-center lg:hidden" open={open}>
				<NavList params={params} handleCloseMenu={handleCloseMenu} />
			</MobileNav>
		</Navbar>
	);
}

export default Header;
