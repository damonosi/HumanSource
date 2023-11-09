"use client";

import { DocumentProp } from "@/interfaces/blog";
import { BlockRenderer } from "./CustomDocumentRenderer";
import { Typography } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { ComponentProps, Fragment } from "react";
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
				<h1 className="max-w-[40ch] text-2xl font-[500]">{title}</h1>
			</div>
			<div className="flex flex-col ">
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
