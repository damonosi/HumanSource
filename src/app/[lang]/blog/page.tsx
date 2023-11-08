"use client";
import PaginatedItems from "./Paginate";
import DescriereBlog from "@/components/Blog/DescrierePaginaBlog";
import BlogsBradcrumbs from "@/components/Blog/BlogsBreadcrumbs";

import query from "@/lib/apollo/queries/blog/getBlogsByLang";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { IBlogs } from "@/interfaces/blog";
const BloguriPage = ({ params }: { params: { lang: string; country: string } }) => {
	const capitalizedParams = params.lang.toLocaleUpperCase();

	const { data }: IBlogs = useSuspenseQuery(query, {
		variables: {
			where: {
				language: { languages: { contains: capitalizedParams } },
				status: {
					equals: "PUBLISHED",
				},
			},
		},
	});

	return (
		<section className="bg-[#E5E5E5]    px-4 pb-[100px] md:px-[70px]">
			<div className="container mx-auto flex flex-col  gap-16 ">
				<BlogsBradcrumbs params={params} />
				<DescriereBlog />
				<div className="" id="scrollTo"></div>
				<div id="container-bloguri">
					<PaginatedItems data={data} params={params} />
				</div>
			</div>
		</section>
	);
};

export default BloguriPage;
