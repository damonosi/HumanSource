"use client";
import PaginatedItems from "./Paginate";
import DescriereBlog from "@/components/Blog/DescrierePaginaBlog";
import BlogsBradcrumbs from "@/components/Blog/BlogsBreadcrumbs";

import query from "@/lib/apollo/queries/blog/getBlogsByLang";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { IBlogs } from "@/interfaces/blog";



const ClientBloguriPage = ({ params }: { params: { lang: string; country: string } }) => {
	const capitalizedParams = params.lang.toLocaleUpperCase();

	const { data }: IBlogs = useSuspenseQuery(query, {
		variables: {
			where: {
				language: { languages: { contains: capitalizedParams } },
				status: {
					equals: "PUBLISHED",
				},
			},
			orderBy: [{ dateCreated: "desc" }],
		},
	});

	return (
		<div className="container mx-auto flex flex-col  gap-16 ">
			<BlogsBradcrumbs params={params} />
			<DescriereBlog params={params} />
			<div className="" id="scrollTo"></div>
			<div id="container-bloguri">
				<PaginatedItems data={data} params={params} />
			</div>
		</div>
	);
};

export default ClientBloguriPage;
