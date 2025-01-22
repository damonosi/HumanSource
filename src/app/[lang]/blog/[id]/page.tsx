import JsonLd from "@/utils/JsonLd";
import ClientBlogPage from "./ClientBlogPage";

const BlogPage = ({ params }: { params: { lang: string; id: string } }) => {
	const slug = params.id;
	const decodedUrl = decodeURIComponent(slug);
	params.id = decodedUrl;
	return (
		<section className="flex min-h-screen w-full flex-col gap-12 bg-[#E5E5E5] px-5 pb-[100px] text-start md:px-20">
			<ClientBlogPage params={params} />
		</section>
	);
};

export default BlogPage;
