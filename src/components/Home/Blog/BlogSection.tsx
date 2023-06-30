"use client";
import { Typography } from "@material-tailwind/react";
import CaruselBloguri from "./CaruselBloguri";

const BlogSection = () => {
	return (
		<section className="container  px-[14px] text-center md:px-0">
			<Typography
				variant="h5"
				className="mb-[30px] mt-[50px] text-start font-bold md:mb-[60px]  md:mt-[100px] md:text-2xl "
			>
				Cele mai noi articole de pe blog
			</Typography>

			<CaruselBloguri />
		</section>
	);
};

export default BlogSection;
