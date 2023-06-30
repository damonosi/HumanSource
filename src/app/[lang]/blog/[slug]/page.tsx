"use client";
import dateBloguri from "@/components/Blog/dateBloguri";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IpageProps {
	params: { lang: string; slug: string };
}

const Blog: FC<IpageProps> = ({ params }) => {
	return (
		<section className="min-h-screen bg-[#E5E5E5] px-5 pb-[100px]  text-start md:px-20">
			<div className="container mx-auto grid ">
				<Breadcrumbs>
					<Link className="text-gri-brand" href={`/${params.lang}`}>
						Home
					</Link>
					<Link className="text-gri-brand" href={`/${params.lang}/blog`}>
						Bloguri
					</Link>
					<Link className="text-red-600" href={`${params.lang}/blog/${params.slug}`}>
						{params.slug}
					</Link>
				</Breadcrumbs>
				{dateBloguri
					.filter((blog) => blog.slug === params.slug)
					.map(({ src, text, id }) => {
						return (
							<div key={id} className="">
								<div className="flex max-h-[405px] w-full justify-center py-6">
									<Image src={src} className="h-auto w-full" placeholder="blur" alt="cover-blog" />
								</div>
								<div className="flex flex-col gap-5 text-start">
									<Typography variant="small">By Author Name</Typography>{" "}
									<Typography variant="small">Luni, 24 Septembrie 2019</Typography>
									<Typography variant="h4" className="text-start font-bold">
										Lorem ipsum dolor sit amet consectetur. Magnis sem a.
									</Typography>
								</div>
								<div className="py-8">
									<Typography variant="paragraph">{text}</Typography>
								</div>
							</div>
						);
					})}{" "}
			</div>
		</section>
	);
};

export default Blog;
