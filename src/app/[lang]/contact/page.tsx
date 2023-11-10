import ClientContactPage from "./ClientContactPage";
export const metadata = {
	title: "Contact - Human Source",
	description: "Human Source Contact Page",
};

const Contact = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="  bg-[#E5E5E5] px-4 pb-[100px] md:px-[70px]">
			<ClientContactPage params={params} />
		</section>
	);
};

export default Contact;
