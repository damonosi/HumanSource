import { Dispatch, ReactElement, SetStateAction, useState } from "react";

export function useMultistepForm(steps: ReactElement[], setDisabled: Dispatch<SetStateAction<boolean>>) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const isBrowser = () => typeof window !== "undefined";
	function scrollToTop() {
		if (!isBrowser()) return;

		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	function next() {
		scrollToTop();
		console.log("clicked", currentStepIndex);
		setCurrentStepIndex((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});

		setDisabled(true);
	}
	function back() {
		scrollToTop();
		setCurrentStepIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	}
	console.log(steps.length - 1);
	console.log(currentStepIndex);
	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		next,
		back,
		steps,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length,
	};
}
