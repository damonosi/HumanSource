"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface ITranzitionProps {
	children: ReactNode;
	className?: string;
	initial?: object;
	animate?: object;
	transition?: object;
	exit?: object;
	id?: string;
}
const PageTransitionWrapper = ({ children, className, initial, animate, transition, exit, id }: ITranzitionProps) => {
	return (
		<motion.div
			initial={initial || { x: 100, opacity: 0 }}
			animate={animate || { x: 0, opacity: 1 }}
			transition={transition || { duration: 1 }}
			exit={exit || { x: 100, opacity: 0 }}
			className={className}
			id={id || "animationWrapper"}
		>
			{children}
		</motion.div>
	);
};

export default PageTransitionWrapper;
