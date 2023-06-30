import imagineFemei from "@/public/imagini/nevoi/femei.png";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const NevoiSection = () => {
	return (
		<section className="container relative flex w-full items-start justify-start bg-[#506673] px-2 pb-[100px] md:pb-0       ">
			<div className="flex w-full flex-col-reverse items-center lg:flex-row ">
				<div className="flex  max-w-[606px] flex-col justify-center gap-12   text-alb-site md:w-full md:pr-2" id="text">
					<Typography variant="h3" className="text-start font-bold   ">
						In ce situatii ai nevoie de noi?
					</Typography>

					<Typography variant="h6" className=" text-start font-[500]  md:text-xl">
						&#x2713; &nbsp; Am o companie intr-o alta tara si am nevoie de specialisti romani, insa nu doresc sa imi
						deschid o filiala in romania
					</Typography>

					<Typography variant="h6" className="text-start  font-[500] md:text-xl ">
						&#x2713; &nbsp; Una dintre angajatele tale de baza intra in curand in concediu de maternitate. Cine ii va
						face treaba la fel de bine ?
					</Typography>

					<Typography variant="h6" className="text-start  font-[500]  md:text-xl">
						&#x2713; &nbsp; Cum pot angaja un numar mare de oameni, in perioada aceasta foarte aglomerata, daca nu am
						departament de HR?
					</Typography>
				</div>

				<div className="relative right-0 top-0 w-full  -translate-y-24 transform   md:w-2/3 md:-translate-y-[9%] ">
					<Image
						className=" w-full rounded-xl object-cover drop-shadow"
						alt="imagine-femei"
						placeholder="blur"
						src={imagineFemei}
					/>
				</div>
			</div>
		</section>
	);
};

export default NevoiSection;
