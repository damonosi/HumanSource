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
	photo: {
		altText: string;
		id: string;
		image: {
			publicUrl: StaticImageData;
		};
	};
}

const CardBlogSecundar = ({ id, date, title, slug, photo, categories }: ICardBlogSecundar) => {
	let altText = photo.altText;
	let imageUrl = photo.image.publicUrl;

	return (
		<Link className="cursor-pointer rounded-2xl hover:shadow-xl " id={id} href={`blog/${slug}`}>
			<div className="flex flex-col gap-5" id="container-card-blog-secundar">
				<div className="flex aspect-video w-full flex-col overflow-hidden rounded-t-2xl">
					<Image alt={altText} src={imageUrl} width={500} height={500} />
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
