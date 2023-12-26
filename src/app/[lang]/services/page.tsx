import type { Metadata } from "next";
import ClientServicii from "./ClientServicii";
export const metadata: Metadata = {
	title: "Servicii - Human Source",
	description: "Human Source servicii",
};
const ServiciiPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className=" bg-[#E5E5E5] px-4 pb-28  md:px-[70px] ">
			<ClientServicii params={params} />
		</section>
	);
};

export default ServiciiPage;
