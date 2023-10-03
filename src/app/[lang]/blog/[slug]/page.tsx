import Image from "next/image";
import query from "@/lib/apollo/queries/getBlogBySlug";
import { getClient } from "@/lib/apollo/client";
import BreadComponent from "./BreadComponent";
import formatDate from "@/utils/formatDate";
import TextComponent from "./TextComponent";
import ContactWays from "@/components/Contact/ContactWays";

const Blog = async ({ params }: { params: { lang: string; slug: string } }) => {
	const slug = params.slug;
	const { data, error, loading } = await getClient().query({ query, variables: { where: { slug: slug } } });
	if (loading) {
		return <span>Loading.....</span>;
	}
	if (error) {
		return <h1 className="text-red-800">error</h1>;
	}

	const dateBlog = data.blog;

	const { photo, title, id, dateCreated, content, tags } = dateBlog;

	const formattedDate = formatDate(dateCreated);

	return (
		<section className="flex min-h-screen flex-col gap-12 bg-[#E5E5E5] px-5 pb-[100px] text-start md:px-20">
			<div className="container mx-auto grid ">
				<BreadComponent params={params} />

				<div key={id} className="">
					<div className="flex max-h-[405px] w-full justify-center py-6">
						<Image
							alt={photo.altText}
							src={photo.image.url}
							width={photo.image.width}
							height={photo.image.height}
							className="h-auto w-full"
						/>
					</div>

					<TextComponent title={title} textData={content.document} formattedDate={formattedDate} tags={tags} />
				</div>
			</div>
			<div className="mx-auto flex w-fit flex-col gap-12 text-center">
				<span className="text-[7vw] font-extrabold md:text-[2vw]">Contacteaza-ne !</span>
				<ContactWays />
			</div>
		</section>
	);
};

export default Blog;
