"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ErrorSvg from "@/components/error/ErrorSvg";
import HomeIco from "@/components/error/HomeIco";

export default function Error({ error, reset, params }: { error: Error; reset: () => void; params: { lang: string } }) {
	const router = useRouter();
	useEffect(() => {

		console.error(error);
	}, [error]);
console.log(params);
	return (
		<div className="flex min-h-screen flex-col md:flex-row">
			<div className="mt-5 flex flex-col items-center justify-center gap-7 px-5 md:w-1/2">
				<h1 className="text-[2rem] font-[800]">Ooops.. </h1>
				<h2 className="text-xl font-bold">Pagina nu functioneaza momentan</h2>
				<h3 className="text-sm font-[350]">
					Lorem ipsum dolor sit amet consectetur. In enim semper leo quam pharetra lectus diam.{" "}
				</h3>
				<button
					className="flex items-center justify-center gap-3 rounded-2xl bg-gri-brand py-4 px-5 text-alb-site"
					onClick={() => router.push(`${params.lang}/`)}
				>
					<span className="flex items-center justify-center">
						<HomeIco />
					</span>{" "}
					Inapoi acasa
				</button>
			</div>
			<div className="flex flex-col items-center justify-center md:w-1/2  md:items-start">
				<ErrorSvg />
			</div>
		</div>
	);
}
