import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const CardAngajator = () => {
	return (
		<Card className="mt-6 h-44 w-1/2 justify-between md:h-56 md:w-60">
			<CardHeader className="flex justify-center bg-transparent shadow-none overflow-visible">
				<div className="relative flex w-fit items-center justify-center justify-self-center rounded-full bg-rosu-brand p-2 shadow-lg ">
					<svg width="30" height="30" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							id="Vector"
							d="M15.7812 15.7188C13.7188 15.7188 11.9531 14.9844 10.4844 13.5156C9.01562 12.0469 8.28125 10.2812 8.28125 8.21875C8.28125 6.15625 9.01562 4.39063 10.4844 2.92188C11.9531 1.45313 13.7188 0.71875 15.7812 0.71875C17.8438 0.71875 19.6094 1.45313 21.0781 2.92188C22.5469 4.39063 23.2812 6.15625 23.2812 8.21875C23.2812 10.2812 22.5469 12.0469 21.0781 13.5156C19.6094 14.9844 17.8438 15.7188 15.7812 15.7188ZM36.5938 37.2812L30.5938 31.2812C29.9375 31.6562 29.2344 31.9687 28.4844 32.2187C27.7344 32.4687 26.9375 32.5938 26.0938 32.5938C23.75 32.5938 21.7575 31.7737 20.1163 30.1337C18.4763 28.4925 17.6562 26.5 17.6562 24.1562C17.6562 21.8125 18.4763 19.82 20.1163 18.1788C21.7575 16.5388 23.75 15.7188 26.0938 15.7188C28.4375 15.7188 30.43 16.5388 32.0712 18.1788C33.7113 19.82 34.5312 21.8125 34.5312 24.1562C34.5312 25 34.4062 25.7969 34.1562 26.5469C33.9062 27.2969 33.5938 28 33.2188 28.6562L39.2188 34.6562L36.5938 37.2812ZM26.0938 28.8438C27.4062 28.8438 28.5156 28.3906 29.4219 27.4844C30.3281 26.5781 30.7812 25.4688 30.7812 24.1562C30.7812 22.8438 30.3281 21.7344 29.4219 20.8281C28.5156 19.9219 27.4062 19.4688 26.0938 19.4688C24.7812 19.4688 23.6719 19.9219 22.7656 20.8281C21.8594 21.7344 21.4062 22.8438 21.4062 24.1562C21.4062 25.4688 21.8594 26.5781 22.7656 27.4844C23.6719 28.3906 24.7812 28.8438 26.0938 28.8438ZM15.8281 17.5938C14.5156 19.5312 13.8594 21.7188 13.8594 24.1562C13.8594 26.5938 14.5156 28.7812 15.8281 30.7188H0.78125V25.5156C0.78125 24.4531 1.04687 23.4688 1.57812 22.5625C2.10937 21.6562 2.84375 20.9688 3.78125 20.5C5.375 19.6875 7.17188 19 9.17188 18.4375C11.1719 17.875 13.3906 17.5938 15.8281 17.5938Z"
							fill="#FCFEFF"
						/>
					</svg>
				</div>
			</CardHeader>
			<CardBody className="flex flex-col items-center justify-center gap-3 p-0  px-2 text-center md:p-6">
				<Typography variant="paragraph" className="text-brand-gri font-bold  uppercase md:text-xl md:capitalize  ">
					Angajator
				</Typography>
				<Typography variant="small" className=" font-[350]">
					Firma care are nevoie de serviciile noastre
				</Typography>
			</CardBody>
			<CardFooter className="flex justify-center p-0 md:pb-5 ">
				<Button className="flex gap-1 bg-transparent px-1 text-rosu-brand shadow-none hover:bg-rosu-brand hover:text-alb-site hover:shadow-none md:px-6 ">
					Construieste-ti echipa <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</Button>
			</CardFooter>
		</Card>
	);
};
const CardMuncitor = () => {
	return (
		<Card className="mt-6  h-44 w-1/2 justify-between md:h-56 md:w-60 ">
			<CardHeader className="flex justify-center overflow-visible bg-transparent shadow-none">
				<div className=" relative flex w-fit items-center justify-center justify-self-center  rounded-full bg-rosu-brand p-2 shadow-lg ">
					<svg width="30" height="30" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							id="Vector"
							d="M15 24.5625C6.7125 24.5625 0 27.9187 0 32.0625V35.8125H30V32.0625C30 27.9187 23.2875 24.5625 15 24.5625ZM7.5 13.3125C7.5 15.3016 8.29018 17.2093 9.6967 18.6158C11.1032 20.0223 13.0109 20.8125 15 20.8125C16.9891 20.8125 18.8968 20.0223 20.3033 18.6158C21.7098 17.2093 22.5 15.3016 22.5 13.3125M14.0625 0.1875C13.5 0.1875 13.125 0.58125 13.125 1.125V6.75H11.25V2.0625C11.25 2.0625 7.03125 3.675 7.03125 9.09375C7.03125 9.09375 5.625 9.35625 5.625 11.4375H24.375C24.2812 9.35625 22.9688 9.09375 22.9688 9.09375C22.9688 3.675 18.75 2.0625 18.75 2.0625V6.75H16.875V1.125C16.875 0.58125 16.5188 0.1875 15.9375 0.1875H14.0625Z"
							fill="#FCFEFF"
						/>
					</svg>
				</div>
			</CardHeader>

			<CardBody className="flex flex-col items-center justify-center gap-3 p-0  px-2 text-center md:p-6">
				<Typography variant="paragraph" className="text-brand-gri font-bold  uppercase md:text-xl md:capitalize  ">
					Muncitor
				</Typography>
				<Typography variant="small" className=" font-[350]">
					Iti cauti un loc de munca?
				</Typography>
			</CardBody>
			<CardFooter className="flex justify-center p-0 md:pb-5 ">
				<Button className="flex gap-1 bg-transparent px-1 text-rosu-brand shadow-none hover:bg-rosu-brand hover:text-alb-site hover:shadow-none md:px-6 ">
					Locuri de munca <ArrowSmallRightIcon strokeWidth={2} className="h-5 w-5" />
				</Button>
			</CardFooter>
		</Card>
	);
};

const CarduriHero = () => {
	return (
		<div id="container-carduri  " className="relative z-20  flex w-full items-center  justify-center gap-4 ">
			<CardAngajator />
			<CardMuncitor />
		</div>
	);
};

export default CarduriHero;
