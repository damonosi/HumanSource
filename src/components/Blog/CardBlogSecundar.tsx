import { Typography } from "@material-tailwind/react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICardBlogSecundar {
	id: string;
	title: string;

	slug: string;

	formattedDate: string;
	photo: { altText: string; image: { url: StaticImageData; width: number; height: number } };
	params: { lang: string; country: string };
}

const CardBlogSecundar = ({ id, formattedDate, title, slug, photo, params }: ICardBlogSecundar) => {
	return (
		<Link className="cursor-pointer rounded-2xl hover:shadow-xl " href={`blog/${slug}`}>
			<div className="flex flex-col gap-5" id="container-card-blog-secundar">
				<div className="flex w-full flex-col overflow-hidden rounded-t-2xl">
					<Image alt={photo.altText} src={photo.image.url} width={photo.image.width} height={photo.image.height} />
				</div>
				<div className="flex flex-col gap-2 px-2 pb-4">
					<Typography variant="small" className="text-start text-gri-brand opacity-50">
						{formattedDate}
					</Typography>
					<Typography variant="h4" className="text-start font-bold text-gri-brand">
						{title}
					</Typography>
				</div>
			</div>
		</Link>
	);
};

export default CardBlogSecundar;
