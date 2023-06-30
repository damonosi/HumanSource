"use client";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBlog from "./CardBlog";
import dateBlog from "./dateBlog";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const CustomButtonGroupAsArrows = ({ next, previous }: { next: () => void; previous: () => void }) => {
	return (
		<>
			<MdOutlineKeyboardArrowLeft
				className="absolute left-0 top-1/2 mr-4 hidden h-8 w-8 cursor-pointer md:flex"
				onClick={previous}
			/>
			<MdOutlineKeyboardArrowRight
				className="absolute right-0 top-1/2 hidden h-8 w-8 cursor-pointer md:flex"
				onClick={next}
			/>
		</>
	);
};
const CaruselBloguri = () => {
	return (
		<div className="relative flex w-full md:px-6">
			<Carousel
				responsive={responsive}
				additionalTransfrom={0}
				arrows={false}
				autoPlaySpeed={3000}
				centerMode={false}
				className="py-6 "
				containerClass="container"
				dotListClass=""
				draggable
				partialVisible={false}
				focusOnSelect={false}
				infinite
				itemClass="max-w-1/3 min-w-1/3 p-4"
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderDotsOutside={false}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={true}
				sliderClass=""
				slidesToSlide={1}
				swipeable
				renderButtonGroupOutside={true}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				customButtonGroup={<CustomButtonGroupAsArrows />}
			>
				{dateBlog.map(({ id, data, titlu, continut }) => (
					<CardBlog data={data} titlu={titlu} continut={continut} id={id} key={id} />
				))}
			</Carousel>
		</div>
	);
};

export default CaruselBloguri;
