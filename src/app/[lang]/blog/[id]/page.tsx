import ClientBlogPage from "./ClientBlogPage";

export async function generateMetadata({ params }: { params: { lang: string; id: string } }) {
	const decodedString = decodeURIComponent(params.id);

	return {
		title: decodedString,
	};
}

const BlogPage = ({ params }: { params: { lang: string; id: string } }) => {
	return (
		<section className="flex min-h-screen w-full flex-col gap-12 bg-[#E5E5E5] px-5 pb-[100px] text-start md:px-20">
			<ClientBlogPage params={params} />
		</section>
	);
};

export default BlogPage;
