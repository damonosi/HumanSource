import ClientEmployerPage from "./ClientEmployerPage";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Formular de cerere oferta pentru companii - Humansource.ro ",

	description:
		"Ai nevoie de personal pentru desfasurarea activitatii tale? Completeaza formularul si cere o oferta pentru a te putea ajuta! ✔️ Flexibilitate ✔️ Transparenta",
};

const FormularAngajator = ({ params }: { params: { lang: string; country: string } }) => {
	return <ClientEmployerPage params={params} />;
};

export default FormularAngajator;
