"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
const MultumimPage = ({ params }: { params: { lang: string } }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const titluJob = searchParams.get("title");
	return (
		<section className="flex  items-center  justify-center">
			<div className=" flex max-w-sm flex-col items-center justify-center gap-7 px-2 py-24 text-center">
				<h1 className="text-4xl font-[700] md:text-5xl">Multumim!</h1>
				<h2 className="text-base font-[500] md:text-2xl">Ai făcut primul pas spre o carieră ca {titluJob}</h2>
				<h3 className="text-base font-[500] md:text-2xl">
					Unul dintre agenții noștri de recrutare te va contacta în cel mai scurt timp posibil
				</h3>
				<button
					onClick={() => router.push(`/${params.lang}/contact`)}
					className="flex items-center justify-center gap-3 rounded-2xl bg-gri-brand py-4 px-5 text-alb-site"
				>
					Intreaba-ne ceva
				</button>
			</div>
		</section>
	);
};
export default MultumimPage;
