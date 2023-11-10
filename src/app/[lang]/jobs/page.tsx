import { Metadata } from "next";
import ClientJobsPage from "./ClientJobsPage";
export const metadata: Metadata = {
	title: "Locuri de munca - HumanSource ",
	description: "Huma Source Blog",
};
const JobsPage = ({ params }: { params: { lang: string; country: string; category: string } }) => {
	return (
		<section className=" bg-[#E5E5E5] px-5 pb-16 md:px-[70px] ">
			<ClientJobsPage params={params} />
		</section>
	);
};

export default JobsPage;
