import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

interface IServiciiData {
	src: StaticImageData;
	titlu: string;
	descriere: string;
}

const CardServicii = ({ src, titlu, descriere }: IServiciiData) => {
	return (
		<Card color="transparent" className="w-full max-w-[26rem] ">
			<CardHeader color="transparent" floated={false} className="m-0">
				<Image alt="card-image" placeholder="blur" className="w-full" src={src} />
			</CardHeader>
			<CardBody>
				<Typography variant="h5" color="blue-gray" className="my-6 font-bold">
					{titlu}
				</Typography>
				<Typography color="gray">{descriere}</Typography>
			</CardBody>
			<CardFooter className="pt-3">
				<Button size="lg" fullWidth={true}>
					Solicita oferta
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CardServicii;
