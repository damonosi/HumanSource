import { Iparams } from "@/interfaces/params";
import formatDate from "@/utils/formatDate";
import CheckIfDefaulthLang from "@/utils/isDefaultLang";
import { Typography } from "@material-tailwind/react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICardBlogSecundar {
	id: string;
	title: string;

	date: string;
	slug: string;
	categories: { name: string; id: string }[];
	photo: {
		altText: string;
		id: string;
		image: {
			publicUrlTransformed: StaticImageData;
		};
	};
	params: {
		lang: string;
		country: string;
	};
}

const CardBlogSecundar = ({ id, date, title, photo, categories, params, slug }: ICardBlogSecundar) => {

	let altText = !photo ? "nu are alt" : photo.altText;
	let imageUrl = !photo
		? "https://res.cloudinary.com/dmm7tnk7s/image/upload/v1698689593/87Af-eFtsR_JPiASGbYk9RpEly4.jpg"
		: photo.image.publicUrlTransformed;

	return (
		<Link className=" cursor-pointer " id={id} href={CheckIfDefaulthLang(params, `/blog/${slug}`)}>
			<div
				className="group flex aspect-square  h-fit flex-col gap-5  rounded-2xl hover:shadow-xl  "
				id="container-card-blog-secundar"
			>
				<div className="relative flex h-1/2 w-full flex-col overflow-hidden rounded-b-2xl rounded-t-2xl transition-all duration-700  ">
					<Image fill alt={altText} sizes="" src={imageUrl} className="object-cover" />
				</div>
				<div className="flex h-1/2 flex-col gap-2  px-2 pb-4 leading-10">
					<Typography variant="small" className="text-start text-gri-brand opacity-50">
						{formatDate(date, params)}
					</Typography>
					<Typography variant="h4" className="text-base font-[500] text-gri-brand md:text-2xl">
						{title}
					</Typography>
					<div className="mt-auto flex flex-col justify-self-end">
						{categories.map(({ name }, index) => (
							<Typography
								key={index}
								variant="paragraph"
								className="text-start text-base font-[350] tracking-[0.015rem] text-red-800"
							>
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
