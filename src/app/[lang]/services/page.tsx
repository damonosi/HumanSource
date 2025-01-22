import type { Metadata } from "next";
import ClientServicii from "./ClientServicii";
export const metadata: Metadata = {
	title: "Leasing Personal, recrutare si selectie, payroll si administrare dosare de personal - Human Source",
	description: "Alege payroll si administrare dosare de personal, recrutare si selectie, leasingul de personal si servicii de inchiriere forta de munca de la o firma specializata in resurse umane! ✔️ Flexibilitate ✔️ Transparenta",
};
const ServiciiPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className=" bg-[#E5E5E5] px-4 pb-28  md:px-[70px] ">
			<ClientServicii params={params} />
		</section>
	);
};

export default ServiciiPage;
