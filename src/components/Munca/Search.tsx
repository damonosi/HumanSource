"use client";
import { Input, Select, Option } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { Dispatch, SetStateAction, useEffect } from "react";

type Inputs = {
	searchInput: string;
	domeniu: string;
	locatie: string;
};

const Search = ({ setSelectedCategory }: { setSelectedCategory: Dispatch<SetStateAction<string>> }) => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	const selectDomeniu = watch("domeniu");
	const selectLocatie = watch("locatie");
	/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
       // @ts-ignore */
	const handleChangeDomeniu = (e) => {
		setSelectedCategory(e);
		setValue("domeniu", e);
	};

	/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
      // @ts-ignore */

	const handleChangeLocatie = (e) => setValue("locatie", e);
	useEffect(() => {
		register("domeniu");
		register("locatie");
	}, [register]);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center justify-between gap-4 md:w-3/5  md:flex-row"
		>
			<Input
				size="lg"
				variant="outlined"
				type="text"
				{...register("searchInput", { required: true })}
				id="nume"
				label="cauta"
				icon={<AiOutlineSearch />}
			/>

			<Select size="lg" onChange={handleChangeDomeniu} variant="outlined" value={selectDomeniu} label="Domeniu">
				<Option value="medical">medical</Option>
				<Option value="sofer">transport</Option>
				<Option value="constructii">constructii</Option>
			</Select>
			<Select onChange={handleChangeLocatie} variant="outlined" size="lg" value={selectLocatie} label="Locatie">
				<Option value="romania">romania</Option>
				<Option value="italia">italia</Option>
			</Select>

			<button type="submit" className="rounded-2xl bg-gri-deschis-bg py-4 px-12">
				cauta
			</button>
		</form>
	);
};

export default Search;
