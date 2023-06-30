import ImgFillerConstructii from "@/public/imagini/munca/constructii.png";
import ImgFillerMedical from "@/public/imagini/munca/medical.png";
import ImgFillerTransport from "@/public/imagini/munca/transport.png";
import { StaticImageData } from "next/image";
interface IdataJoburi {
	id: number;
	data: string;
	titlu: string;
	src: StaticImageData;

	descriere: string;

	categorie: string;
	salariu: number;
}
export type Idate = IdataJoburi[];

const muncaFiller: Idate = [
	{
		id: 1,
		data: "Prelata",
		src: ImgFillerMedical,

		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "medic Italia-Romania",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 2,
		data: "Prelata",
		src: ImgFillerMedical,
		titlu: "medic de tir Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 3,
		data: "Prelata",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 4,
		data: "Prelata",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 5,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 6,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 7,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 2000,
	},
	{
		id: 8,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 9,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerMedical,
		titlu: "medic Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "medical",
		salariu: 1000,
	},
	{
		id: 10,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		titlu: "Inginer Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",

		categorie: "constructii",
		salariu: 1000,
	},
	{
		id: 11,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		titlu: "Inginer Italia-Romania",
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",

		salariu: 1000,
	},
	{
		id: 12,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 13,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 14,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 15,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 16,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 17,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 18,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerConstructii,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "constructii",
		titlu: "Inginer Italia-Romania",

		salariu: 1000,
	},
	{
		id: 19,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		categorie: "transport",
		titlu: "Sofer de tir Italia-Romania",

		salariu: 1000,
	},
	{
		id: 20,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 21,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 22,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 23,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 24,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 25,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 26,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",

		salariu: 1000,
	},
	{
		id: 27,
		data: "Luni, 24 Septembrie 2030",
		src: ImgFillerTransport,
		descriere:
			"Lorem ipsum dolor sit amet consectetur. Massa tortor aliquam venenatis mauris sodales enim vel. Dui nec sed nec augu",
		titlu: "Sofer de tir Italia-Romania",
		categorie: "transport",
		salariu: 1000,
	},
];

export default muncaFiller;
