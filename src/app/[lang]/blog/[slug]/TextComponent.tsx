"use client";

import { DocumentRenderer } from "@keystone-6/document-renderer";
import { Typography } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { Fragment } from "react";
interface ITextComponent {
	formattedDate: string;
	textData: [{ type: string; children: [{ text: string }] }];
	title: string;
	author: { name: string };
	tags: [{ name: string }];
}
const TextComponent = ({ formattedDate, textData, title, tags, author }: ITextComponent) => {
	return (
		<div className="flex flex-col gap-12 text-start">
			<h2>By {author.name}</h2> <span>{formattedDate}</span>
			<div className="py-8">
				<h1>{title}</h1>
			</div>
			<div className="flex flex-col ">
				<DocumentRenderer document={textData} />
				{textData.map(({ type, children }, index) => (
					<Fragment key={index}>
						{children.map(({ text }, index) => (
							<Typography variant={type} key={index} className=" text-start font-light text-gri-brand ">
								{text}
							</Typography>
						))}
					</Fragment>
				))}
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
