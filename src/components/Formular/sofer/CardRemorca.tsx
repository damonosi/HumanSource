"use client";

interface ICardProps {
	text: string;
	className?: string;
	svg: JSX.Element;
	onClick: () => void;
}

const CardRemorca = ({ svg, text, onClick, className }: ICardProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`flex h-40 w-20 flex-col items-center  justify-center gap-2 rounded-2xl bg-alb-site px-5 py-8 drop-shadow-xl active:bg-gri-brand lg:h-80 lg:w-72 lg:gap-9 lg:py-16 lg:px-6 ${className} `}
		>
			<span>{svg}</span>
			<span className="text-sm md:text-2xl">{text}</span>
		</button>
	);
};

export default CardRemorca;
