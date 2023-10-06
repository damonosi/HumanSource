"use client";

import { Iparams } from "@/interfaces/params";
import CaruselBloguri from "./CaruselBloguri";

const BlogSection = ({ params }: Iparams) => {
	return (
		<section className="container  px-[14px] text-center md:px-0">
			<h5 className="mb-[30px] mt-[50px] text-start font-bold md:mb-[60px]  md:mt-[100px] md:text-2xl ">
				Cele mai noi articole de pe blog
			</h5>

			<CaruselBloguri params={params} />
		</section>
	);
};

export default BlogSection;
