import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
interface IDropdownInfo {
	intrebare: string;
	raspuns: string;
	ultimaIntrebare?: boolean;
}

const DropdownIntrebare = ({ intrebare, raspuns }: IDropdownInfo) => {
	const [showRaspuns, setShowRaspuns] = useState(false);
	const ref = useOnclickOutside(() => {
		setTimeout(() => {
			setShowRaspuns(!showRaspuns && false);
		}, 100);
	});
	const handleClick = () => {
		setShowRaspuns(!showRaspuns);
	};
	return (
		<div ref={ref} className="mb-5 flex flex-col gap-5" id="container-dd">
			<button onClick={handleClick} className="flex items-center justify-between text-start">
				<Typography variant="h6" className=" text-start font-[500] text-alb-site md:text-xl ">
					{intrebare}
				</Typography>

				<div className="flex h-6 w-6 items-center justify-center " id="sageata-container">
					<span className="text-alb-site opacity-50">{showRaspuns ? "-" : "+"}</span>
				</div>
			</button>
			<Typography
				variant="paragraph"
				className={` mt-[4px] px-1  pt-2  text-start text-alb-site  opacity-60  lg:opacity-80 ${
					!showRaspuns ? "hidden" : "block"
				} `}
			>
				{raspuns}
			</Typography>
		</div>
	);
};

export default DropdownIntrebare;
