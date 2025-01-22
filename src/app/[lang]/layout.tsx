import Providers, { ClientCookiesProvider } from "@/utils/providers";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { getLocalePartsFrom, locales } from "../../../i18n";
import { Metadata, Viewport } from "next";
import Footer from "./Footer";
import Header from "./Header";
import { cookies } from "next/headers";
import CookieConsent from "@/components/cookies/CookiesConsent";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
	title: "Human Source",
	icons: [
		{ rel: "icon", url: "/favicons/favicon.ico" },
		{ rel: "apple-touch-icon", url: "/favicons/apple-touch-icon.png" },
		{ rel: "apple-icon", url: "/favicons/favicon.ico" },
	],
	verification: {
		google: `${process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CODE}`,
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Human Source",
		description:
			"Human Source ofera servicii complete: leasing personal, recrutare si selectie, administrare dosare de personal si payroll ✔ Flexibilitate",

		images: "/imagini/openGraph.png",
	},

	openGraph: {
		type: "website",
		url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
		title: "Human Source",
		description:
			"Human Source ofera servicii complete: leasing personal, recrutare si selectie, administrare dosare de personal si payroll ✔ Flexibilitate",
		siteName: "Human Source",
		images: "/imagini/openGraph.png",
	},
	description:
		"Human Source ofera servicii complete: leasing personal, recrutare si selectie, administrare dosare de personal si payroll ✔ Flexibilitate",
	applicationName: "Human Source",
	other: {
		["fb:app_id"]: `${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}`,
		["facebook-domain-verification"]: `${process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_ID}`,
	},
};
const madera = localFont({
	src: [
		{
			path: "../../../public/fonts/Madera-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../../public/fonts/Madera-Thin-Italic.ttf",
			weight: "100",
			style: "italic",
		},
		{
			path: "../../../public/fonts/Madera-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../public/fonts/Madera-Light-Italic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../../public/fonts/Madera-Regular.ttf",
			weight: "400",
			style: "normal",
		},

		{
			path: "../../../public/fonts/Madera-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../public/fonts/Madera-Medium-Italic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../../public/fonts/Madera-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../public/fonts/Madera-Bold-Italic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../../public/fonts/Madera-Extra-Bold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../../public/fonts/Madera-Extra-Bold-Italic.ttf",
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
export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string; country: string };
}) {
	return (
		<html id="root" lang={params.lang}>
			<body
				className={`${madera.variable}  m-0 mx-auto flex  items-center justify-center  overflow-x-hidden bg-gri-deschis-bg font-sans text-gri-brand`}
			>
				<ClientCookiesProvider value={cookies().getAll()}>
					<Providers>
						<div className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden  " id="site-container">
							<CookieConsent params={params} />
							<Header params={params} />

							<main className=" z-30 mt-14 flex w-full flex-col  ">
								{children}
								<Analytics />
							</main>

							<Footer params={params} />
						</div>
					</Providers>
				</ClientCookiesProvider>
			</body>
		</html>
	);
}
