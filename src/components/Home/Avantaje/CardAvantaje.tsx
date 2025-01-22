import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaUserTie } from "react-icons/fa";
import { GiEarthAmerica, GiPiggyBank } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";

interface ICardAvantaje {
	titlu: string;
	titluMobil: string;
	descriere: string;
	icon: string;
}
const CardAvantaje = ({ titlu, titluMobil, descriere, icon }: ICardAvantaje) => {
	return (
		<Card className="w-full  max-w-[300px] border-0 border-l-0 bg-alb-site shadow-none    ">
			<CardBody className="flex h-fit flex-col items-center gap-2 px-0  ">
				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-center text-[#BF4546]">
						{icon === "bank" && <GiPiggyBank className="h-8 w-8" />}
						{icon === "ue" && <GiEarthAmerica className="h-8 w-8" />}
						{icon === "manageri" && <FaUserTie className="h-8 w-8" />}
						{icon === "suport" && <VscLaw className="h-8 w-8" />}
					</div>
					<div className="flex flex-col gap-2 text-gri-brand">
						<Typography variant="h6" className="font-medium md:hidden md:px-14 ">
							{titluMobil}
						</Typography>
						<Typography variant="h6" className="hidden font-medium md:block md:px-14 ">
							{titlu}
						</Typography>
						<Typography variant="paragraph" className=" opacity-50 md:px-4">
							{descriere}
						</Typography>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default CardAvantaje;
