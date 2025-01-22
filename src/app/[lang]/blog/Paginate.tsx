"use client";

import CardBlogSecundar from "@/components/Blog/CardBlogSecundar";

import { useEffect, useState } from "react";

import NavigationPagination from "@/utils/pagination/NavigationPagination";
import { paginate } from "@/utils/pagination/paginate";

import { DocumentProp, IPaginatedData, IPaginationData } from "@/interfaces/blog";
import { scrollToTop } from "@/utils/scrollToTop";
import { StaticImageData } from "next/image";

const ContentPagination = ({ currentPage, bloguri, pageSize, params }: IPaginationData) => {
	const paginatedPosts = paginate(bloguri, currentPage, pageSize);

	return (
		<div className="grid gap-4 md:grid-cols-3">
			{paginatedPosts.map(({ id, dateCreated, title, photo, categories, slug }: IPaginatedData) => {
				return (
					<CardBlogSecundar
						slug={slug}
						params={params}
						key={id}
						id={id}
						date={dateCreated}
						categories={categories}
						title={title}
						photo={photo}
					/>
				);
			})}
		</div>
	);
};
function PaginatedItems({
	params,
	data,
}: {
	params: { lang: string; country: string };
	data: {
		blogs: [
			{
				id: string;
				slug: string;
				content: {
					document: DocumentProp;
				};
				dateCreated: string;
				category: { name: string; id: string };
				title: string;
				photo: {
					altText: string;
					id: string;
					image: {
						publicUrlTransformed: StaticImageData;
					};
				};
			},
		];
	};
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(1);

	const dateBloguri = data.blogs;

	const dataLength = dateBloguri.length;
	const lungime = dateBloguri.length as number;
	const numberOfPages = Math.ceil(dataLength / pageSize);

	const onNextPage = () => {
		if (currentPage >= numberOfPages) {
			setCurrentPage(numberOfPages);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};
	const onPrevPage = () => {
		scrollToTop();
		if (currentPage <= 1) {
			setCurrentPage(1);
		} else {
			currentPage === 0 ? setCurrentPage(1) : setCurrentPage(currentPage - 1);
		}
	};
	useEffect(() => {
		const isBrowser = () => typeof window !== "undefined";
		if (!isBrowser()) return;
		const windowWidth = window.innerWidth;
		if (windowWidth < 500) {
			setPageSize(3);
		} else {
			setPageSize(9);
		}
	}, []);

	return (
		<>
			{lungime === 0 ? null : (
				<div>
					<ContentPagination params={params} pageSize={pageSize} currentPage={currentPage} bloguri={dateBloguri} />
					<NavigationPagination
						currentPage={currentPage}
						onNextPage={onNextPage}
						onPrevPage={onPrevPage}
						dataLength={numberOfPages}
					/>
				</div>
			)}
		</>
	);
}
export default PaginatedItems;
