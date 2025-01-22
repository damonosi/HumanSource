export const paginate = (items: Array<any>, pageNumber: number, pageSize: number) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return items.slice(startIndex, startIndex + pageSize); // 0, 9
};
