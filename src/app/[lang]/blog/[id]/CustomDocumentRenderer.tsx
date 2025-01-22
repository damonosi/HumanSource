import { DocumentRenderer } from "@keystone-6/document-renderer";
import { ComponentProps } from "react";

import React from "react";
import { ReactNode } from "react";

type PropsImg = {
	padding: number;
	border: number;
	imageCld: {
		data:{
			image:{
				publicUrlTransformed: string;
			}
		}
	},
	width: number;
};

export function ImageBlock({imageCld, padding = 0, border = 0, width = 500, }: PropsImg) {
	return (
		<figure
			style={{
				margin: "0",
				width: width + "%",
				padding: padding + "px",
				height: "auto",
				border: `solid lightgrey ${String(border)}px`,
				marginInline: "auto",
			}}
		>
			<img
				src={imageCld.data.image.publicUrlTransformed}
				className={`image block`}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "contain",
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
		block: React.Fragment as any,

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
	"unordered-list": () => {
		return <ul className="p-6"></ul>;
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
