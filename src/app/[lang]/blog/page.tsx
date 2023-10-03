import PaginatedItems from "./Paginate";
import DescriereBlog from "@/components/Blog/DescrierePaginaBlog";
import BlogsBradcrumbs from "@/components/Blog/BlogsBreadcrumbs";
import { getClient } from "@/lib/apollo/client";
import query from "@/lib/apollo/queries/getBlogsByLang";
const BloguriPage = async ({ params }: { params: { lang: string; country: string } }) => {
	const capitalizedParams = params.lang.toLocaleUpperCase();

	const { data, error, loading } = await getClient().query({
		query,
		variables: { where: { language: { languages: { contains: capitalizedParams } } } },
	});
	if (loading) {
		return <span>Loading.....</span>;
	}
	if (error) {
		return <h1 className="text-red-800">error</h1>;
	}

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
