"use client";
import query from "@/lib/apollo/queries/categories/categories";
import locationQuery from "@/lib/apollo/queries/locations/locations";
import { useSuspenseQuery } from "@apollo/client";
import { Input, Option, Select } from "@material-tailwind/react";

const SearchBar = ({ category, setCategory }: { category: string; setCategory: (e: string) => void }) => {
	const { data: categoryData }: { data: { categories: [{ name: string }] } } = useSuspenseQuery(query);
	const { data: locationData }: { data: { locations: [{ name: string }] } } = useSuspenseQuery(locationQuery);

	return (
		<div className="flex w-1/2 items-center justify-center gap-4">
			<Input label="Cauta" />
			<div className="flex w-1/3 gap-4">
				<Select
					size="md"
					onChange={(e) => {
						if (!e) return;
						setCategory(e);
					}}
					variant="outlined"
					defaultValue={category}
					label="Domeniu"
				>
					{categoryData.categories.map(({ name }) => (
						<Option key={name} value={name}>
							{name}
						</Option>
					))}
				</Select>
				<Select
					size="md"
					onChange={(e) => {
						if (!e) return;
						setCategory(e);
					}}
					variant="outlined"
					defaultValue={category}
					label="Locatie"
				>
					{locationData.locations.map(({ name }) => (
						<Option key={name} value={name}>
							{name}
						</Option>
					))}
				</Select>
				<button className="rounded-2xl bg-gri-deschis-bg py-2 px-4 text-sm text-gri-brand">Cauta</button>
			</div>
		</div>
	);
};
export default SearchBar;
