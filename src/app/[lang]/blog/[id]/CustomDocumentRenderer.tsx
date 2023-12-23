import { DocumentRenderer } from "@keystone-6/document-renderer";
import { ComponentProps } from "react";

import React from "react";
import { ReactNode } from "react";

type PropsImg = {
	color: string;
	padding: number;
	border: number;
	imageSrc: string;
	width: number;
};

export function ImageBlock({ color, imageSrc, padding = 0, border = 0, width = 500 }: PropsImg) {
	return (
		<figure
			style={{
				margin: "0",
				width: width + "px",
				padding: padding + "px",
				border: `solid lightgrey ${String(border)}px`,
				marginInline: "auto",
			}}
		>
			<img
				src={imageSrc}
				className={`image block`}
				style={{
					width: "100%",
					objectFit: "cover",
					display: "block",
				}}
			/>
		</figure>
	);
}
type Props = {
	children: ReactNode[];
	layout: number[];
};

function BlockLayout({ children, layout }: Props) {
	return (
		<div className="flex">
			<div className="grid">
				{children.map((child, i) => (
					<div key={i}> {child} </div>
				))}
			</div>
		</div>
	);
}
type CustomRendererProps = ComponentProps<typeof DocumentRenderer>;

const defaultElementRenderers: CustomRendererProps["renderers"] = {
	block: {
		block: React.Fragment,
		layout: (props) => {
			return <BlockLayout {...props} />;
		},
	},
	inline: {
		bold: ({ children }) => {
			return <strong>{children}</strong>;
		},

		link: ({ children }) => {
			return <a className="cursor-pointer text-blue-700 underline underline-offset-2">{children}</a>;
		},
		// inline code ` `
		code: ({ children }) => {
			return <code className={`code`}>{children}</code>;
		},
		// and more - check out the types to see all available inline elements
	},
};

const customComponentRenderers: CustomRendererProps["componentBlocks"] = {
	image: (props) => {
		return <ImageBlock {...props} />;
	},
};

export function BlockRenderer({ document }: CustomRendererProps) {
	return (
		<DocumentRenderer
			renderers={defaultElementRenderers}
			componentBlocks={customComponentRenderers}
			document={document}
		/>
	);
}
