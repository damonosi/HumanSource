"use client";
import dynamic from "next/dynamic";


import { useTranslation } from "@/app/i18n/client";
import { Suspense } from "react";
import Spinner from "@/components/Spinner/Spinner";
const CaruselBloguri = dynamic(() => import("./CaruselBloguri"));

const BlogSection = ({ params }: { params: { lang: string } }) => {
	const { t } = useTranslation(params.lang, "home");
	return (
		<section className="container  px-[14px] text-center md:px-0">
			<h5 className="mb-[30px] mt-[50px] text-start font-bold md:mb-[60px]  md:mt-[100px] md:text-2xl ">
				{t("blog.titlu")}
			</h5>
			<Suspense fallback={<Spinner />}>
				<CaruselBloguri params={params} />
			</Suspense>
		</section>
	);
};

export default BlogSection;
