import ErrorSvg from "@/components/error/ErrorSvg";
import HomeIco from "@/components/error/HomeIco";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
import { getLocalePartsFrom, locales } from "i18n";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col md:flex-row">
			<div className="mt-5 flex flex-col items-center justify-center gap-7 px-5 md:w-1/2">
				<h1 className="text-[2rem] font-[800]">Ooops.. </h1>
				<h2 className="text-xl font-bold">Pagina nu exista </h2>
				<h3 className="text-sm font-[350]">
					Lorem ipsum dolor sit amet consectetur. In enim semper leo quam pharetra lectus diam.{" "}
				</h3>
				<Link
					href="/"
					className="flex items-center justify-center gap-3 rounded-2xl bg-gri-brand px-5 py-4 text-alb-site"
				>
					<span className="flex items-center justify-center">
						<HomeIco />
					</span>{" "}
					Inapoi acasa
				</Link>
			</div>
			<div className="flex flex-col items-center justify-center md:w-1/2  md:items-start">
				<ErrorSvg />
			</div>
		</div>
	);
}
