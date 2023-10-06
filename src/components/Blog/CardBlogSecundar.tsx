import formatDate from "@/utils/formatDate";
import { Typography } from "@material-tailwind/react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICardBlogSecundar {
	id: string;
	title: string;

	slug: string;

	date: string;
	categories: { name: string }[];
	photo: { altText: string; image: { url: StaticImageData; width: number; height: number } };
}

const CardBlogSecundar = ({ id, date, title, slug, photo, categories }: ICardBlogSecundar) => {
	let altText = photo ? photo.altText : "default_photo";
	let imageUrl = photo ? photo.image.url : "https://picsum.photos/1200/500";
	let width = photo ? photo.image.width : 500;
	let height = photo ? photo.image.height : 1200;
	return (
		<Link className="cursor-pointer rounded-2xl hover:shadow-xl " id={id} href={`blog/${slug}`}>
			<div className="flex flex-col gap-5" id="container-card-blog-secundar">
				<div className="flex aspect-video w-full flex-col overflow-hidden rounded-t-2xl">
					<Image alt={altText} src={imageUrl} width={width} height={height} />
				</div>
				<div className="flex flex-col gap-5 px-2 pb-4">
					<Typography variant="small" className="text-start text-gri-brand opacity-50">
						{formatDate(date)}
					</Typography>
					<Typography variant="h4" className="text-start font-bold text-gri-brand">
						{title}
					</Typography>
					{categories.map(({ name }, index) => (
						<Typography key={index} variant="paragraph" className="text-start font-bold text-red-800">
							{name.toUpperCase()}
						</Typography>
					))}
				</div>
			</div>
		</Link>
	);
};

export default CardBlogSecundar;
