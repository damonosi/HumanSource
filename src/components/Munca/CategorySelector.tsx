"use client";
import query from "@/lib/apollo/queries/categories/categories";
import { useSuspenseQuery } from "@apollo/client";
import { Option, Select } from "@material-tailwind/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const CategorySelector = ({ category, setCategory }: { category: string; setCategory: (e: string) => void }) => {
	const { data }: { data: { categories: [{ name: string }] } } = useSuspenseQuery(query);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	return (
		<Select
			size="lg"
			onChange={(e) => {
				if (!e) return;
				setCategory(e);
			}}
			variant="outlined"
			defaultValue={category}
			label="Domeniu"
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
