"use client";
import CardBlogSecundar from "@/components/Blog/CardBlogSecundar";

import { useEffect, useState } from "react";

import NavigationPagination from "@/utils/pagination/NavigationPagination";
import { paginate } from "@/utils/pagination/paginate";
import dateBloguri from "@/components/Blog/dateBloguri";

import { StaticImageData } from "next/image";

interface IPaginationData {
	currentPage: number;
	bloguri: Array<IPaginatedData>;
	pageSize: number;
	params: { lang: string; country: string };
}

interface IPaginatedData {
	id: number;
	data: string;
	src: StaticImageData;
	slug: string;
	descriere: string;

	categorie: string;
}

const ContentPagination = ({ currentPage, bloguri, pageSize, params }: IPaginationData) => {
	const paginatedPosts = paginate(bloguri, currentPage, pageSize);
	return (
		<div className="grid gap-4 md:grid-cols-3">
			{paginatedPosts &&
				paginatedPosts.map(({ id, src, data, descriere, categorie, slug }: IPaginatedData) => (
					<CardBlogSecundar
						key={id}
						src={src}
						data={data}
						slug={slug}
						descriere={descriere}
						categorie={categorie}
						params={params}
					/>
				))}
		</div>
	);
};
function PaginatedItems({ params }: { params: { lang: string; country: string } }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(1);
	const dataLength = dateBloguri.length;
	const numberOfPages = Math.round(dataLength / pageSize);
	const onNextPage = () => {
		if (currentPage >= numberOfPages) {
			setCurrentPage(numberOfPages);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};
	const onPrevPage = () => {
		if (currentPage <= 1) {
			setCurrentPage(1);
		} else {
			setCurrentPage(currentPage - 1);
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
			<ContentPagination params={params} pageSize={pageSize} currentPage={currentPage} bloguri={dateBloguri} />
			<NavigationPagination
				currentPage={currentPage}
				onNextPage={onNextPage}
				onPrevPage={onPrevPage}
				dataLength={numberOfPages}
				pageSize={pageSize}
			/>
		</>
	);
}
export default PaginatedItems;
