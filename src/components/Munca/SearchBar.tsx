"use client";
import { Iparams } from "@/interfaces/params";
import query from "@/lib/apollo/queries/categories/categories";
import locationQuery from "@/lib/apollo/queries/locations/locations";
import { useSuspenseQuery } from "@apollo/client";
import { Input, Option, Select } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({ params }: Iparams) => {
	const { data: categoryData }: { data: { categories: [{ name: string }] } } = useSuspenseQuery(query);
	const { data: locationData }: { data: { locations: [{ name: string }] } } = useSuspenseQuery(locationQuery);
	const [search, setSearchText] = useState("");
	const [domeniu, setDomeniu] = useState("");
	const [locatie, setLocatie] = useState("");
	const router = useRouter();
	return (
		<div className="flex w-full  flex-col items-center justify-center gap-4 md:w-1/2 md:flex-row">
			<Input
				label="Cauta"
				className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
				onChange={(e) => {
					setSearchText(e.target.value);
					console.log(search);
				}}
				labelProps={{
					className:
						"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
				}}
			/>
			<div className="flex w-full flex-col gap-4  md:w-1/3 md:flex-row">
				<Select
					size="md"
					onChange={(e) => {
						if (!e) return;
						setDomeniu(e);
					}}
					variant="outlined"
					defaultValue={domeniu}
					label="Domeniu"
					className="w-full  focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							" peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
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
						setLocatie(e);
					}}
					variant="outlined"
					defaultValue={locatie}
					label="Locatie"
					className="w-full focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							" peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				>
					{locationData.locations.map(({ name }) => (
						<Option key={name} value={name}>
							{name}
						</Option>
					))}
				</Select>
				<button
					onClick={() => router.push(`/${params.lang}/jobs?domeniu=${domeniu}&location=${locatie}&titlu=${search}`)}
					className="rounded-2xl bg-gri-deschis-bg py-2 px-4 text-sm text-gri-brand"
				>
					Cauta
				</button>
			</div>
		</div>
	);
};
export default SearchBar;
