"use client";
import { Breadcrumbs as MaterialCrumbs } from "@material-tailwind/react";
interface IBreadProps {
	children: JSX.Element | JSX.Element[];
}

const Breadcrumbs = ({ children }: IBreadProps) => {
	return (
		<MaterialCrumbs fullWidth className="mx-0 my-4 flex w-full flex-row  bg-transparent px-0  md:my-6 " separator=">">
			{children}
		</MaterialCrumbs>
	);
};

export default Breadcrumbs;
