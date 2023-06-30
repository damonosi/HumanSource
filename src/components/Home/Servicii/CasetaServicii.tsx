import { Button, Typography } from "@material-tailwind/react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoDocumentAttachOutline } from "react-icons/io5";

interface ICasetaServicii {
	titlu: string;
	descriere: string;
	textButon: string;
	icon: string;
}

const CasetaServicii = ({ titlu, descriere, textButon, icon }: ICasetaServicii) => {
	const [hovered, setHovered] = useState(false);
	const handleMouseEnter = () => {
		setHovered(true);
	};
	const handleMouseLeave = () => {
		setHovered(false);
	};
	return (
		<AnimatePresence>
			<motion.div
				key="shadow"
				layout
				transition={{
					layout: {
						type: "spring",
						stiffness: 20,
						duration: 1,
					},
				}}
				className={`container  ${
					hovered && "drop-shadow-xl"
				}  flex  h-fit min-h-[335px] w-full max-w-[500px] flex-col items-center justify-between gap-4  rounded-[10px] bg-alb-site px-4 py-8 text-center  `}
				id="caseta-servicii"
				onMouseLeave={handleMouseLeave}
				onMouseEnter={handleMouseEnter}
			>
				<div className="flex w-full items-center justify-center text-rosu-brand">
					{icon === "leasing" && <HiOutlineUserGroup className="h-8 w-8" />}
					{icon === "payroll" && <IoDocumentAttachOutline className="h-8 w-8" />}
					{icon === "recrutare" && <AiOutlineUsergroupAdd className="h-8 w-8" />}
				</div>
				<Typography variant="h5" className=" font-normal   text-gri-brand">
					{titlu}
				</Typography>
				<Typography variant="paragraph" className=" font-light text-gri-brand opacity-60">
					{descriere}
				</Typography>
				<motion.div layout>
					<Button
						className={`rounded-[8px] border border-alb-site  bg-transparent px-6 py-4 text-[#B21E23]  shadow-none hover:shadow-none ${
							hovered && "  border-rosu-brand"
						}`}
					>
						<Typography variant="paragraph" className="font-bold normal-case ">
							{textButon}
						</Typography>
					</Button>
				</motion.div>
			</motion.div>{" "}
		</AnimatePresence>
	);
};

export default CasetaServicii;
