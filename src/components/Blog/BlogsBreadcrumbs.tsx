"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

const BlogsBradcrumbs = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<Breadcrumbs>
			<Link className="text-gri-brand" href={`/${params.lang}`}>
				Home
			</Link>
			<Link className="text-red-600" href={`/${params.lang}/blog`}>
				Blog
			</Link>
		</Breadcrumbs>
	);
};

export default BlogsBradcrumbs;
