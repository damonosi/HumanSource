"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import BlogCover from "@/public/imagini/blog/heroBlogImg.png";
import { Typography } from "@material-tailwind/react";
import { getLocalePartsFrom, locales } from "i18n";
import Image from "next/image";
import Link from "next/link";
import PaginatedItems from "./Paginate";

export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}

const BloguriPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="bg-[#E5E5E5]    px-4 pb-[100px] md:px-[70px]">
			<div className="container mx-auto flex flex-col  gap-16 ">
				<Breadcrumbs>
					<Link className="text-gri-brand" href={`/${params.lang}`}>
						Home
					</Link>
					<Link className="text-red-600" href={`/${params.lang}/blog`}>
						Blog
					</Link>
				</Breadcrumbs>
				<section className="flex w-full flex-col-reverse items-center gap-8 md:flex-row" id="hero-bloguri">
					<div className="flex flex-col items-start gap-6 md:w-1/2" id="container-text-blog">
						<Typography variant="h2">Blogul nostru</Typography>
						<Typography className="text-gri-brand" variant="h5">
							Et semper nulla sit quis feugiat.
						</Typography>
						<Typography variant="paragraph">
							Lorem ipsum dolor sit amet consectetur. Duis faucibus erat adipiscing elit ultrices in libero. Tincidunt
							commodo augue consectetur suspendisse ornare elementum. Maecenas hac arcu.
						</Typography>
					</div>
					<div className="flex items-center justify-center md:w-1/2" id="container-imagine">
						{" "}
						<Image alt="cover-blog" src={BlogCover} placeholder="blur" />{" "}
					</div>
				</section>
				<div id="container-bloguri">
					<PaginatedItems params={params} />
				</div>
			</div>
		</section>
	);
};

export default BloguriPage;
