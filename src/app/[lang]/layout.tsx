import Providers from "@/utils/providers";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { getLocalePartsFrom, locales } from "../../../i18n";
import Footer from "./Footer";
import Header from "./Header";

export const metadata = {
	title: "Human Source",
	applicationName: "Human Source",
	referrer: "origin-when-cross-origin",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};
const madera = localFont({
	src: [
		{
			path: "../../public/fonts/Madera-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/fonts/Madera-Thin-Italic.ttf",
			weight: "100",
			style: "italic",
		},
		{
			path: "../../public/fonts/Madera-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Madera-Light-Italic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/fonts/Madera-Regular.ttf",
			weight: "400",
			style: "normal",
		},

		{
			path: "../../public/fonts/Madera-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Madera-Medium-Italic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/Madera-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Madera-Bold-Italic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/Madera-Extra-Bold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/Madera-Extra-Bold-Italic.ttf",
			weight: "800",
			style: "italic",
		},
	],
	preload: true,
	display: "swap",
	variable: "--font-madera",
});
export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}
export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string; country: string } }) {
	return (
		<html id="root" lang={params.lang}>
			<Providers>
				<body
					className={`${madera.variable} m-0 mx-auto flex  items-center justify-center  overflow-x-hidden bg-gri-deschis-bg font-sans text-gri-brand`}
				>
					<div className="relative grid w-full grid-cols-1  overflow-hidden  " id="site-container">
						<Header params={params} />
						<main className=" z-30 mt-14 flex w-full flex-col  ">
							{children}
							<Analytics />
						</main>

						<Footer />
					</div>
				</body>
			</Providers>
		</html>
	);
}
