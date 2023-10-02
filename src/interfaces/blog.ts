import { ApolloError } from "@apollo/client";
import { StaticImageData } from "next/image";

export type IPaginationData = {
	currentPage: number;
	bloguri: {
		id: string;
		content: {
			document: string;
		};
		dateCreated: string;
		slug: string;
		title: string;
		photo: {
			altText: string;
			id: string;
			image: {
				height: number;
				url: StaticImageData;
				width: number;
			};
		};
	}[];
	pageSize: number;
	params: { lang: string; country: string };
};

export interface IPaginatedData {
	id: string;
	content: {
		document: string;
	};
	dateCreated: string;
	slug: string;
	title: string;
	photo: {
		altText: string;
		id: string;
		image: {
			height: number;
			url: StaticImageData;
			width: number;
		};
	};
}
export type IdataBloguri = {
	error: ApolloError | undefined;
	data: {
		blogs: {
			id: string;
			content: {
				document: string;
			};
			dateCreated: string;
			slug: string;
			title: string;
			photo: {
				altText: string;
				id: string;
				image: {
					height: number;
					url: StaticImageData;
					width: number;
				};
			};
		};
	};
};
export interface IdataBlog {
	error: ApolloError | undefined;
	data: {
		blog: {
			id: string;
			content: {
				document: string;
			};
			dateCreated: string;
			slug: string;
			title: string;
			photo: {
				altText: string;
				id: string;
				image: {
					height: number;
					url: string;
					width: number;
				};
			};
		};
	};
}
