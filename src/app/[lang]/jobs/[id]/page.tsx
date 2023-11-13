import ClientJobPage from "./ClientJobPage";

export async function generateMetadata({ params }: { params: { lang: string; id: string } }) {
	const decodedString = decodeURIComponent(params.id);

	return {
		title: decodedString,
	};
}
interface IpageProps {
	params: { lang: string; title: string };
}

const AplicareJob = ({ params }: IpageProps) => {
	return (
		<section className="min-h-screen bg-[#E5E5E5]  pb-24 text-start md:px-20">
			<ClientJobPage params={params} />
		</section>
	);
};

export default AplicareJob;
