"use client";
import query from "@/lib/apollo/queries/categories/categories";
import { useSuspenseQuery } from "@apollo/client";
import { Option, Select } from "@material-tailwind/react";

const CategorySelector = ({ category, setCategory }: { category: string; setCategory: (e: string) => void }) => {
	const { data }: { data: { categories: [{ name: string }] } } = useSuspenseQuery(query);
	return (
		<Select
			size="lg"
			onChange={(e) => {
				if (!e) return;
				setCategory(e);
			}}
			variant="outlined"
			defaultValue={category}
			label="Categorie"
		>
			{data.categories.map(({ name }) => (
				<Option key={name} value={name}>
					{name}
				</Option>
			))}
		</Select>
	);
};
export default CategorySelector;
