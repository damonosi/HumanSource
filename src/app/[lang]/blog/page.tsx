import { Metadata } from "next";
import ClientBloguriPage from "./ClientBloguriPage";
export const metadata: Metadata = {
	title: "Blog - HumanSource ",

	description: "Huma Source Blog",
};
const BloguriPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="bg-[#E5E5E5]    px-4 pb-[100px] md:px-[70px]">
			<ClientBloguriPage params={params} />
		</section>
	);
};

export default BloguriPage;
