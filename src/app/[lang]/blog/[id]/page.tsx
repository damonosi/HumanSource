"use client";
import Image, { StaticImageData } from "next/image";
import query from "@/lib/apollo/queries/blog/getBlogBySlug";

import BreadComponent from "./BreadComponent";
import formatDate from "@/utils/formatDate";
import TextComponent from "./TextComponent";
import ContactWays from "@/components/Contact/ContactWays";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { IBlog } from "@/interfaces/blog";

const Blog = ({ params }: { params: { lang: string; id: string } }) => {
	const paramsId = params.id;

	const { data }: IBlog = useSuspenseQuery(query, {
		variables: {
			where: { id: paramsId },
		},
	});
	if (!data) {
		return <span>Loading...</span>;
	}

	const blog = data.blog;
	let { photo, title, id, dateCreated, content, tags, author } = blog;

	const formattedDate = formatDate(dateCreated);

	let altText = !photo ? "nu are alt" : photo.altText;
	let imageUrl = !photo
		? "https://res.cloudinary.com/dmm7tnk7s/image/upload/v1698689593/87Af-eFtsR_JPiASGbYk9RpEly4.jpg"
		: photo.image.publicUrl;

	return (
		<section className="flex min-h-screen w-full flex-col gap-12 bg-[#E5E5E5] px-5 pb-[100px] text-start md:px-20">
			{!data ? (
				<span>loading...</span>
			) : (
				<div className="container mx-auto grid ">
					<BreadComponent title={title} params={params} />

					<div key={id} className="">
						<div className="relative flex h-48 w-full justify-center py-6 md:h-96">
							<Image alt={altText} src={imageUrl} fill className="rounded-2xl  object-cover" />
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
