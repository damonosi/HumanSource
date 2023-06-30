import { Typography } from "@material-tailwind/react";

import { ReactNode } from "react";

interface IWrapperProps {
	intrebare: string;
	children: ReactNode;
}

const FormWrapper = ({ intrebare, children }: IWrapperProps) => {
	return (
		<div className=" flex w-full flex-col items-center justify-center lg:px-16">
			<div className="flex w-full justify-start">
				<Typography className=" text-xl font-bold md:text-3xl " variant="h3">
					{intrebare}
				</Typography>
			</div>
			<div className="flex min-h-[250px]  w-full flex-col items-center justify-center pt-7 md:min-h-[400px] md:py-12">
				{children}
			</div>
		</div>
	);
};

export default FormWrapper;
