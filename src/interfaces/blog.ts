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
			category: { name: string; id: string };
			title: string;
			photo: {
				altText: string;

				image: {
					publicUrlTransformed: StaticImageData;
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
	categories: { name: string; id: string }[];
	photo: {
		altText: string;
		id: string;
		image: {
			publicUrlTransformed: StaticImageData;
		};
	};
}
export type IdataBloguri = {
	error: ApolloError | undefined;
	data: {
		blogs: {
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
					publicUrl: StaticImageData;
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
				document: DocumentProp;
			};
			dateCreated: string;
			slug: string;
			title: string;
			photo: {
				altText: string;
				id: string;
				image: {
					publicUrl: StaticImageData;
				};
			};
		};
	};
}

export interface IlastBlogs {
	data: {
		error: ApolloError | undefined;
		blogs: [
			{
				id: string;
				slug: string;
				dateCreated: string;
				title: string;
				content: {
					document: { type: string; children: [{ text: string }] }[];
				};
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
}
export interface IBlog {
	data: {
		blog: {
			id: string;
			slug: string;
			dateCreated: string;
			title: string;
			categories: [{ id: string; name: string }];
			content: {
				document: DocumentProp;
			};

			tags: [{ name: string }];
			author: { name: string };
			photo: {
				altText: string;
				id: string;
				image: {
					publicUrlTransformed: StaticImageData;
				};
			};
		};
	};
}
export interface IBlogs {
	data: {
		blogs: [
			{
				id: string;
				slug: string;
				dateCreated: string;
				title: string;
				content: {
					document: DocumentProp;
				};
				category: { id: string; name: string };
				tags: [{ name: string }];
				author: { name: string };
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
}