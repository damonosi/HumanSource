"use client";
import Image from "next/image";
import query from "@/lib/apollo/queries/blog/getBlogBySlug";

import BreadComponent from "./BreadComponent";
import formatDate from "@/utils/formatDate";
import TextComponent from "./TextComponent";
import ContactWays from "@/components/Contact/ContactWays";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { IBlogBySlug } from "@/interfaces/blog";

const Blog = ({ params }: { params: { lang: string; slug: string } }) => {
	const slug = params.slug;
	const { data }: IBlogBySlug = useSuspenseQuery(query, {
		variables: {
			where: { slug: slug },
		},
	});
	if (!data) {
		return <span>Loading...</span>;
	}
	const blog = data.blog;
	let { photo, title, id, dateCreated, content, tags, author } = blog;

	const formattedDate = formatDate(dateCreated);

	let altText = photo ? photo.altText : "default_photo";
	let imageUrl = !photo ? "https://picsum.photos/1200/500" : photo.image.url;
	let width = photo ? photo.image.width : 500;
	let height = photo ? photo.image.height : 1200;
	console.log(photo.image.url);
	return (
		<section className="flex min-h-screen flex-col gap-12 bg-[#E5E5E5] px-5 pb-[100px] text-start md:px-20">
			{!data ? (
				<span>loading...</span>
			) : (
				<div className="container mx-auto grid ">
					<BreadComponent params={params} />

					<div key={id} className="">
						<div className="flex max-h-[405px] w-full justify-center py-6">
							<Image alt={altText} src={imageUrl} width={width} height={height} className="h-auto w-full" />
						</div>

						<TextComponent
							title={title}
							author={author}
							textData={content.document}
							formattedDate={formattedDate}
							tags={tags}
						/>
					</div>
				</div>
			)}

			<div className="mx-auto flex w-fit flex-col gap-12 text-center">
				<span className="text-[7vw] font-extrabold md:text-[2vw]">Contacteaza-ne !</span>
				<ContactWays />
			</div>
		</section>
	);
};

export default Blog;
