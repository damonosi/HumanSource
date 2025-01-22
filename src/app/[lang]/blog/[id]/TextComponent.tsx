"use client";

import { DocumentProp } from "@/interfaces/blog";
import { BlockRenderer } from "./CustomDocumentRenderer";

import { Chip } from "@material-tailwind/react";

import React from "react";
interface ITextComponent {
	formattedDate: string;
	textData: DocumentProp;
	title: string;
	author: { name: string };
	tags: [{ name: string }];
}

const TextComponent = ({ formattedDate, textData, title, tags, author }: ITextComponent) => {
	return (
		<div className="mt-7 flex flex-col gap-12 text-start">
			<div className="flex flex-col gap-6" id="titleSection">
				<h2 className="text-base font-[350] opacity-50">By {author.name}</h2>{" "}
				<span className="text-xs font-[350] opacity-50">{formattedDate}</span>
				<h1 className="w-full text-2xl font-[500]">{title}</h1>
			</div>

			<div className=" flex w-full flex-col gap-4 overflow-visible [&>ul>li]:py-2 [&>ul]:list-disc [&>ul]:overflow-visible [&>ul]:px-4 ">
				<BlockRenderer document={textData} />
			</div>
			<div className="flex w-full items-center justify-center">
				{tags &&
					tags.map(({ name }) => {
						return (
							<div key={name} className="flex gap-5">
								<Chip className="rounded-full" color="blue-gray" value={`# ${name}`} />
							</div>
						);
					})}
			</div>
		</div>
	);
};

	


export default TextComponent;
