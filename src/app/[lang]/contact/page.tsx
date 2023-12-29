import { Metadata } from "next";
import ClientContactPage from "./ClientContactPage";
export const metadata: Metadata = {
	title: "Formular de cerere oferta pentru companii - Humansource.ro ",
	description:
		"Ai nevoie de personal pentru desfasurarea activitatii tale? Completeaza formularul si cere o oferta pentru a te putea ajuta! ✔️ Flexibilitate ✔️ Transparenta",
};

const Contact = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="  bg-[#E5E5E5] px-4 pb-[100px] md:px-[70px]">
			<ClientContactPage params={params} />
		</section>
	);
};

export default Contact;
