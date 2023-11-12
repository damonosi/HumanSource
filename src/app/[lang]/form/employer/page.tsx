"use client";
import AddAngajatorForm from "@/lib/apollo/mutations/mutateAngajatorForm";
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { Checkbox, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import query from "@/lib/apollo/queries/categories/categories";
import { useCookies } from "next-client-cookies";
type Inputs = {
	codFiscal: string;
	domeniu: string;
	nrPersoane: string;
	email: string;
	telefon: string;
	subdomeniu: string;
	privacy: boolean;
	dateContact: string;
};

const FormularAngajator = ({ params }: { params: { lang: string; country: string } }) => {
	const [addAngajatorForm] = useMutation(AddAngajatorForm);
	const router = useRouter();
	const cookies = useCookies();
	const {
		register,
		handleSubmit,
		setValue,

		formState: { errors, isSubmitSuccessful },
	} = useForm<Inputs>();
	const { data }: { data: { categories: [{ name: string }] } } = useSuspenseQuery(query);
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		try {
			addAngajatorForm({
				variables: {
					data: {
						domeniu: data.domeniu,
						codFiscal: data.codFiscal,
						dateContact: "email",
						email: data.email,
						nrPersoane: data.nrPersoane,
						nrTel: data.telefon,
						subDomeniu: data.subdomeniu,
					},
				},
			});

			isSubmitSuccessful && router.push(`/${params.lang}/multumim?categorie=${data.domeniu}`);
			cookies.remove("employer-form-domeniu");
			cookies.remove("employer-form-subDomeniu");
			cookies.remove("employer-form-email");
			cookies.remove("employer-form-fiscal");
			cookies.remove("employer-form-nrPersoane");
			cookies.remove("employer-form-telefon");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className=" " onSubmit={handleSubmit(onSubmit)}>
			<div className="relative mx-auto grid w-fit max-w-2xl  grid-cols-1 justify-between gap-8 rounded bg-alb-site p-4 md:my-4">
				<Typography className="mb-16" variant="h3">
					Aplicare
				</Typography>
				<section className="grid grid-cols-1 gap-5 md:grid-cols-2">
					<Select
						size="lg"
						onChange={(e) => {
							if (!e) return;
							cookies.set("employer-form-domeniu", e);
							setValue("domeniu", e);
						}}
						variant="outlined"
						defaultValue={cookies.get("employer-form-domeniu")}
						label="Categorie"
						color="red"
					>
						{data.categories.map(({ name }) => (
							<Option
								key={name}
								value={name}
								onClick={() => {
									console.log(name);
									cookies.set("employer-form-domeniu", name);
								}}
							>
								{name}
							</Option>
						))}
					</Select>
					<div>
						<Input
							variant="outlined"
							type="text"
							{...register("subdomeniu", { required: true })}
							id="subdomeniu"
							label="Adaugati un subdomeniu"
							defaultValue={cookies.get("employer-form-subDomeniu")}
							onChange={(e) => {
								cookies.set("employer-form-subDomeniu", e.target.value);
							}}
							className=" focus:border-rosu-brand focus:!border-t-transparent"
							labelProps={{
								className:
									"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.subdomeniu && <span className="text-sm text-rosu-brand">Trebuie sa adaugati un subdomeniu</span>}
					</div>
					<div>
						<Input
							variant="outlined"
							type="text"
							{...register("codFiscal", { required: true })}
							id="codFiscal"
							label="Cod fiscal"
							icon={<MdPersonOutline />}
							defaultValue={cookies.get("employer-form-fiscal")}
							onChange={(e) => {
								cookies.set("employer-form-fiscal", e.target.value);
							}}
							className=" focus:border-rosu-brand focus:!border-t-transparent"
							labelProps={{
								className:
									"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.codFiscal && <span className="text-sm text-rosu-brand">Trebuie sa adaugati un cod fiscal</span>}{" "}
					</div>
					<div>
						<Input
							variant="outlined"
							type="number"
							{...register("nrPersoane", { required: true })}
							id="nrPersoane"
							label="cate persoane doriti sa angajati"
							defaultValue={cookies.get("employer-form-nrPersoane")}
							onChange={(e) => {
								cookies.set("employer-form-nrPersoane", e.target.value);
							}}
							className=" focus:border-rosu-brand focus:!border-t-transparent"
							labelProps={{
								className:
									"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.nrPersoane && (
							<span className="text-sm text-rosu-brand">Trebuie sa adaugati un numar de persoane</span>
						)}{" "}
					</div>
					<div>
						<Input
							variant="outlined"
							type="text"
							{...register("email", {
								required: true,
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Entered value does not match email format",
								},
							})}
							id="email"
							icon={<AiOutlineMail />}
							label="Email"
							defaultValue={cookies.get("employer-form-email")}
							onChange={(e) => {
								cookies.set("employer-form-email", e.target.value);
							}}
							className=" focus:border-rosu-brand focus:!border-t-transparent"
							labelProps={{
								className:
									"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.email && (
							<span className="text-sm text-rosu-brand">Trebuie sa adaugati o adresa de email valida</span>
						)}
					</div>{" "}
					<div>
						<Input
							variant="outlined"
							type="text"
							{...register("telefon", { required: true, valueAsNumber: true })}
							id="telefon"
							icon={<FiPhone />}
							label="Numar de telefon"
							defaultValue={cookies.get("employer-form-telefon")}
							onChange={(e) => {
								cookies.set("employer-form-telefon", e.target.value);
							}}
							className=" focus:border-rosu-brand focus:!border-t-transparent"
							labelProps={{
								className:
									"peer-focus:after:!border-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.telefon && <span className="text-sm text-rosu-brand">Trebuie sa adaugati un numar de telefon</span>}{" "}
					</div>
				</section>
				<div>
					<Checkbox
						className="my-4 items-center justify-center"
						{...register("privacy", { required: true })}
						label={
							<span className="text-xs  text-gri-bg">
								*Sunt de acord cu
								<a href="politica-confidentialitate" className=" mx-2 my-4 text-gri-bg underline underline-offset-4">
									Politica de confidentialitate
								</a>
								in vederea prelucrarii datelor personale.
							</span>
						}
					/>
					{errors.privacy && (
						<span className="text-sm text-rosu-brand">Trebuie sa fit deacord cu politica de confidentialitate</span>
					)}
				</div>
				<div className="mt-5 flex w-full items-center justify-center">
					<button className=" rounded-2xl  bg-gri-brand px-5 py-4 text-alb-site" type="submit">
						Trimite datele
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormularAngajator;
