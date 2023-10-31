import { ApolloError } from "@apollo/client";
import { DocumentRendererProps } from "@keystone-6/document-renderer";
import { StaticImageData } from "next/image";

export type DocumentProp = DocumentRendererProps["document"];
export type IPaginationData = {
	currentPage: number;
	bloguri: [
		{
			id: string;
			content: {
				document: DocumentProp;
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
		},
	];
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
	categories: { name: string }[];
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

export interface IlastBlogs {
	data: {
		blogs: [
			{
				id: string;
				slug: string;
				dateCreated: string;
				title: string;
				content: {
					document: { children: [{ text: string }] }[];
				};
				photo: {
					altText: string;
					id: string;
					image: {
						height: number;
						url: string;
						width: number;
					};
				};
			},
		];
	};
}
export interface IBlogBySlug {
	data: {
		blog: {
			id: string;
			slug: string;
			dateCreated: string;
			title: string;
			content: {
				document: [{ type: string; children: [{ text: string }] }];
			};

			tags: [{ name: string }];
			author: { name: string };
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