"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Collapse, MobileNav, Navbar, Typography } from "@material-tailwind/react";

import { useState } from "react";

import { NavList } from "@/components/Header/Navigation";
import { i18n } from "i18n.config";
import isDefaultLang from "@/utils/isDefaultLang";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";

export function Header({ params }: { params: { lang: string; country: string } }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	const handleCloseMenu = () => {
		setOpen(false);
	};

	const menuOpenIcon = (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="6.5" y1="10.5" x2="25.5" y2="10.5" stroke="#383A3C" strokeLinecap="round" />
			<line x1="6.5" y1="15.5" x2="25.5" y2="15.5" stroke="#383A3C" strokeLinecap="round" />
			<line x1="6.5" y1="20.5" x2="25.5" y2="20.5" stroke="#383A3C" strokeLinecap="round" />
		</svg>
	);

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
		<header>
			<Navbar
				fullWidth
				className="fixed z-50 h-[60px] w-full  items-center  justify-center border-b border-alb-site bg-alb-site  bg-opacity-100 py-0  px-0 md:px-[70px] "
			>
				<div className="container mx-auto flex h-[60px]  w-full items-center justify-between  px-4 text-gri-brand md:px-0">
					<div className="flex w-1/3 ">
						<Typography
							as="a"
							href={CheckIfDefaulthLang(params, "/")}
							variant="small"
							color="black"
							className="mr-4 cursor-pointer py-1.5 font-bold hover:scale-105 active:scale-105"
						>
							<svg
								width="127"
								height="24"
								viewBox="0 0 127 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<rect width="127" height="24" fill="url(#pattern0)" />
								<defs>
									<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
										<use xlinkHref="#image0_1375_2239" transform="translate(-0.0929948) scale(0.00325821 0.0172414)" />
									</pattern>
									<image
										id="image0_1375_2239"
										width="364"
										height="58"
										xlinkHref="data:image/png;base64,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"
									/>
								</defs>
							</svg>
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

				<Collapse className={`bg-alb-site  px-4 text-center md:hidden  `} open={open}>
					<div className="py-4">
						<NavList params={params} handleCloseMenu={handleCloseMenu} />
					</div>
				</Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
