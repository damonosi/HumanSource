import { Card, CardHeader } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

interface ICardParteneri {
	firma: string;
	descriere: string;
	src: StaticImageData;
}

const CardParteneri = ({ src }: ICardParteneri) => {
	return (
		<Card className="bg-transpartent max-w-[210px] shadow-none ">
			<CardHeader className="mt-0 bg-transparent py-6 shadow-none md:p-4" title="imagine-firma">
				<Image alt="" placeholder="blur" src={src} />
			</CardHeader>
		</Card>
	);
};

export default CardParteneri;
