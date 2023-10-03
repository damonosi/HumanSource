"use client";

import { Typography } from "@material-tailwind/react";

interface ITextComponent {
	formattedDate: string;
	textData: [];
	title: string;
}
const TextComponent = ({ formattedDate, textData, title }: ITextComponent) => {
	return (
		<div className="flex flex-col gap-5 text-start">
			<h2>By Author Name</h2> <span>{formattedDate}</span>
			<div className="py-8">
				<h1>{title}</h1>
			</div>
			<div className="flex flex-col ">
				{textData.map(({ type, children }: { type: string; children: [] }) => (
					<>
						{children.map(({ text }) => (
							<Typography variant={type} className=" text-start font-light text-gri-brand ">
								{text}
							</Typography>
						))}
					</>
				))}
			</div>
		</div>
	);
};

export default TextComponent;
