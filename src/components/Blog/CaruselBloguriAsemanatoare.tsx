"use client";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import query from "@/lib/apollo/queries/blog/getBlogsSameCategory";

import { IlastBlogs } from "@/interfaces/blog";
import CardBlog from "../Home/Blog/CardBlog";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1224 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1224, min: 464 },
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
				className="absolute left-0 top-1/2 mr-4 hidden h-8 w-8 cursor-pointer hover:scale-110 md:flex"
				onClick={previous}
			/>
			<MdOutlineKeyboardArrowRight
				className="absolute right-0 top-1/2 hidden h-8 w-8 cursor-pointer hover:scale-110 md:flex"
				onClick={next}
			/>
		</>
	);
};
const CaruselBloguriAsemanatoare = ({
	params,
	categoriesId,
}: {
	params: { lang: string; id: string };
	categoriesId: string;
}) => {
	const capitalizedParams = params.lang.toLocaleUpperCase();

	const { data }: IlastBlogs = useSuspenseQuery(query, {
		variables: {
			blogsWhere2: {
				language: { languages: { contains: capitalizedParams } },
				categories: { some: { id: { equals: categoriesId } } },
			},
			orderBy: [{ dateCreated: "desc" }],
		},
	});

	const blogs = data.blogs;
console.log("categoriesId", categoriesId);
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
				{blogs
					.filter(({}, index) => index <= 5)
					.map(({ id, dateCreated, title, content, slug, photo }, index) => {
						let imageUrl = photo?.image?.publicUrlTransformed;

						return (
							<CardBlog
								params={params}
								slug={slug}
								data={dateCreated}
								titlu={title}
								content={content}
								imageUrl={imageUrl}
								id={id}
								key={id}
							/>
						);
					})}
			</Carousel>
		</div>
	);
};

export default CaruselBloguriAsemanatoare;
