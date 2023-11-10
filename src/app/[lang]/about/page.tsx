import AboutClientPage from "./AboutClientPage";

export const metadata = {
	title: "About - Human Source",
	applicationName: "Human Source",
};

const DespreNoiPage = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="bg-[#E5E5E5] px-5 pb-[100px] md:px-[70px] ">
			<AboutClientPage params={params} />
		</section>
	);
};

export default DespreNoiPage;
