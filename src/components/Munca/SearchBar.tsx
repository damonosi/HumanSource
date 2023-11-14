"use client";
import { useTranslation } from "@/app/i18n/client";
import { Iparams } from "@/interfaces/params";
import query from "@/lib/apollo/queries/categories/categories";
import locationQuery from "@/lib/apollo/queries/locations/locations";
import { useSuspenseQuery } from "@apollo/client";
import { Input, Option, Select } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({ params }: Iparams) => {
	const { data: categoryData }: { data: { categories: [{ name: string }] } } = useSuspenseQuery(query);
	const { data: locationData }: { data: { countries: [{ name: string }] } } = useSuspenseQuery(locationQuery);
	const [search, setSearchText] = useState("");
	const [domeniu, setDomeniu] = useState("");
	const [locatie, setLocatie] = useState("");
	const router = useRouter();
	const { t } = useTranslation(params.lang, "jobs");
	let searchLabel = t("search.cauta");
	let domeniuLabel = t("search.domeniu");
	let locatieLabel = t("search.locatie");
	return (
		<div className="flex w-full  flex-col items-center justify-center gap-4 md:w-1/2 md:flex-row">
			<Input
				label={searchLabel}
				className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
				onChange={(e) => {
					setSearchText(e.target.value);
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
					label={domeniuLabel}
					className="     aria-expanded:!border-rosu-brand aria-expanded:!border-t-transparent"
					labelProps={{
						className:
							"peer-aria-expanded:text-rosu-brand   peer-aria-expanded:before:border-rosu-brand peer-aria-expanded:after:border-rosu-brand   ",
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
					label={locatieLabel}
					className="     aria-expanded:!border-rosu-brand aria-expanded:!border-t-transparent"
					labelProps={{
						className:
							"peer-aria-expanded:text-rosu-brand   peer-aria-expanded:before:border-rosu-brand peer-aria-expanded:after:border-rosu-brand   ",
					}}
				>
					{locationData.countries.map(({ name }) => (
						<Option key={name} value={name}>
							{name}
						</Option>
					))}
				</Select>
				<button
					onClick={() => router.push(`/${params.lang}/jobs?domeniu=${domeniu}&location=${locatie}&titlu=${search}`)}
					className="rounded-2xl bg-gri-deschis-bg py-2 px-4 text-sm text-gri-brand"
				>
					{t("search.buton")}
				</button>
			</div>
		</div>
	);
};
export default SearchBar;
