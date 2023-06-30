import { Typography } from "@material-tailwind/react";
import CardAvantaje from "./CardAvantaje";
import dateAvantaje from "./dateAvantaje";

const AvantajeSection = () => {
	return (
		<section className="container flex flex-col items-center pb-[100px] text-center md:pb-0">
			<Typography variant="h3" className="mb-[30px] hidden px-2 md:mb-[60px]   md:block ">
				{" "}
				Firma de recrutare strainatate - Avantajele serviciilor Human Source
			</Typography>
			<Typography variant="h5" className="my-[30px] px-2 md:my-[60px] md:hidden ">
				{" "}
				Avantajele Human Source
			</Typography>

			<div className="mb-20 grid w-full grid-cols-2 place-items-center gap-x-5 gap-y-10 2xl:grid-cols-4    ">
				{dateAvantaje.map(({ titlu, titluMobil, descriere, icon, id }) => (
					<CardAvantaje titluMobil={titluMobil} key={id} titlu={titlu} descriere={descriere} icon={icon} />
				))}
			</div>
		</section>
	);
};

export default AvantajeSection;
