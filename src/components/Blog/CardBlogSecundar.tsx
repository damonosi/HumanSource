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
let altText = !photo ? "nu are alt" : photo.altText;
let imageUrl = !photo
	? "https://res.cloudinary.com/dmm7tnk7s/image/upload/v1698689593/87Af-eFtsR_JPiASGbYk9RpEly4.jpg"
	: photo.image.publicUrl;


	return (
		<Link className="cursor-pointer rounded-2xl hover:shadow-xl " id={id} href={`blog/${slug}`}>
			<div className="flex  h-fit   flex-col  gap-5 " id="container-card-blog-secundar">
				<div className="relative flex aspect-video h-1/2 w-full flex-col overflow-hidden rounded-t-2xl">
					<Image alt={altText} src={imageUrl} fill />
				</div>
				<div className="flex h-1/2 flex-col  gap-5 px-2 pb-4">
					<Typography variant="small" className="text-start text-gri-brand opacity-50">
						{formatDate(date)}
					</Typography>
					<Typography variant="h4" className="text-start font-bold text-gri-brand">
						{title}
					</Typography>
					<div className="flex flex-col justify-end">
						{categories.map(({ name }, index) => (
							<Typography key={index} variant="paragraph" className="text-start font-bold text-red-800">
								{name.toUpperCase()}
							</Typography>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CardBlogSecundar;
