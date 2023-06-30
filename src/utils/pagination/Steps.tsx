interface IPasiFormular {
	data: number;
	currentPage: number;
}

const StepsPagination = ({ data, currentPage }: IPasiFormular) => {
	return (
		<div className="mx-auto my-6  flex items-center justify-between px-16 font-bold" id="buline-locatie">
			<span>{currentPage}</span>
			<span>/</span>
			<span>{data}</span>
		</div>
	);
};

export default StepsPagination;
