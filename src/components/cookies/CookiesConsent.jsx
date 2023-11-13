"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = React.useState(true);

	React.useEffect(() => {
		console.log("exists");
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};
	const refuseCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "false", {});
	};

	if (showConsent) {
		return null;
	}

	return (
		<div className="fixed z-50  mt-14 flex h-full w-full items-center justify-center bg-opacity-70 px-20 backdrop-blur-sm">
			<div className="   flex max-w-3xl flex-col items-center justify-between gap-16 rounded-2xl bg-alb-site p-8 md:p-16">
				<span className="text-dark  text-sm font-[350] md:text-base">
					Lorem ipsum dolor sit amet consectetur. Tristique pharetra vulputate malesuada dui blandit sem nisi. Maecenas
					nulla ultricies posuere iaculis ut cum. Hac felis quis nullam suspendisse eget. Maecenas auctor dignissim nunc
					erat proin. Purus odio curabitur blandit eu tortor fames ullamcorper in et. Volutpat est nullam varius nibh
					commodo ut. Viverra tellus cursus hendrerit lacus diam et donec nunc proin. Morbi aliquet metus imperdiet
					porttitor at accumsan maecenas dolor. Tincidunt urna dolor ac{" "}
					<span className="text-rosu-brand"> Cookie Policy </span>.
				</span>
				<div className="flex w-full justify-between">
					<button
						className="text-sm font-[400] text-rosu-brand underline hover:text-gri-brand md:text-base"
						onClick={() => acceptCookie()}
					>
						Cookies Settings
					</button>
					<div className="flex gap-4">
						<button
							className="rounded-xl border border-gri-brand py-2 px-4 text-xs font-medium text-gri-brand hover:bg-gri-brand hover:text-alb-site md:text-sm"
							onClick={() => acceptCookie()}
						>
							Strict necesar
						</button>
						<button
							className="rounded-xl border border-gri-brand py-2 px-4 text-xs font-medium text-gri-brand hover:bg-gri-brand hover:text-alb-site md:text-sm"
							onClick={() => acceptCookie()}
						>
							Accepta tot
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieConsent;
