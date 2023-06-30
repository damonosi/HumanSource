import { Typography } from "@material-tailwind/react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface ICardBlogSecundar {
	src: StaticImageData;
	data: string;
	descriere: string;
	categorie: string;
	slug: string;
	params: { lang: string; country: string };
}

const CardBlogSecundar = ({ src, data, descriere, categorie, slug, params }: ICardBlogSecundar) => {
	return (
		<Link className="cursor-pointer rounded-2xl hover:shadow-xl " href={`${params.lang}/blog/${slug}`}>
			<div className="flex flex-col gap-5" id="container-card-blog-secundar">
				<div className="flex w-full flex-col overflow-hidden rounded-t-2xl">
					<Image alt="imagine-blog" placeholder="blur" src={src} />
				</div>
				<div className="flex flex-col gap-2 px-2 pb-4">
					{" "}
					<Typography variant="small" className="text-start text-gri-brand opacity-50">
						{data}
					</Typography>
					<Typography variant="h4" className="text-start font-bold text-gri-brand">
						{descriere}
					</Typography>
					<Typography variant="paragraph" className="text-start text-red-600">
						{categorie}
					</Typography>
				</div>
			</div>
		</Link>
	);
};

export default CardBlogSecundar;
