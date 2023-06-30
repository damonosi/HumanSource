import CardParteneri from "./CardParteneri";
import dateParteneri from "./dateParteneri";

const ParteneriSection = () => {
	return (
		<section className="container my-36 flex flex-col items-center justify-center text-start md:text-center ">
			<div
				className="mx-2 grid w-full grid-cols-3 place-items-center  gap-3 px-2 sm:grid-cols-2 md:w-full md:grid-cols-3 md:content-center  md:gap-6  2xl:grid-cols-5"
				id="container-parteneri"
			>
				{dateParteneri.map(({ id, firma, descriere, src }) => (
					<CardParteneri src={src} key={id} firma={firma} descriere={descriere} />
				))}
			</div>
		</section>
	);
};

export default ParteneriSection;
