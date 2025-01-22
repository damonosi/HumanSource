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
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

import CheckIfDefaulthLang from "@/utils/isDefaultLang";

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

const ClientEmployerPage = ({ params }: { params: { lang: string; country: string } }) => {
	const [addAngajatorForm] = useMutation(AddAngajatorForm);
	const router = useRouter();
	const cookies = useCookies();
	const {
		register,
		handleSubmit,
		setValue,

		formState: { errors, isSubmitSuccessful, isLoading },
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

			router.push(`/${params.lang}/multumim?categorie=${data.domeniu}`);
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
	const { t } = useTranslation(params.lang, "formularAngajator");
	let labelCategorie = t("form.categorie");
	let labelSubdomeniu = t("form.subdomeniu");
	let labelFiscal = t("form.fiscal");
	let labelNrPersoane = t("form.nrPersoane");
	let labelTelefon = t("form.telefon");

	return (
		<section className="container mx-auto flex flex-col px-5 pb-9 lg:px-0">
			<Breadcrumbs>
				<Link className="text-gri-brand hover:text-rosu-brand" href={CheckIfDefaulthLang(params, "/")}>
					{t("breadHome")}
				</Link>
				<Link className="text-rosu-brand" href={CheckIfDefaulthLang(params, "/blog")}>
					{t("breadCurrent")}
				</Link>
			</Breadcrumbs>
			<form
				className="relative flex  w-full items-center justify-center  rounded-2xl bg-alb-site p-4 px-9 md:my-4 md:px-24"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="grid  max-w-xl grid-cols-1 justify-between gap-8 pt-6 text-center">
					<Typography className="mb-8" variant="h3">
						{t("form.titlu")}
					</Typography>
					<section className="grid grid-cols-1 gap-5 md:grid-cols-2">
						<Select
							size="md"
							onChange={(e) => {
								if (!e) return;
								cookies.set("employer-form-domeniu", e);
								setValue("domeniu", e);
							}}
							variant="outlined"
							defaultValue={cookies.get("employer-form-domeniu")}
							label={labelCategorie}
							className="     aria-expanded:!border-rosu-brand aria-expanded:!border-t-transparent"
							labelProps={{
								className:
									"peer-aria-expanded:text-rosu-brand   peer-aria-expanded:before:border-rosu-brand peer-aria-expanded:after:border-rosu-brand   ",
							}}
						>
							{data.categories.map(({ name }) => (
								<Option
									key={name}
									value={name}
									onClick={() => {
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
								label={labelSubdomeniu}
								defaultValue={cookies.get("employer-form-subDomeniu")}
								onChange={(e) => {
									cookies.set("employer-form-subDomeniu", e.target.value);
								}}
								className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
								labelProps={{
									className:
										"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
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
								label={labelFiscal}
								icon={<MdPersonOutline />}
								defaultValue={cookies.get("employer-form-fiscal")}
								onChange={(e) => {
									cookies.set("employer-form-fiscal", e.target.value);
								}}
								className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
								labelProps={{
									className:
										"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
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
								label={labelNrPersoane}
								defaultValue={cookies.get("employer-form-nrPersoane")}
								onChange={(e) => {
									cookies.set("employer-form-nrPersoane", e.target.value);
								}}
								className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
								labelProps={{
									className:
										"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
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
								className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
								labelProps={{
									className:
										"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
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
								label={labelTelefon}
								defaultValue={cookies.get("employer-form-telefon")}
								onChange={(e) => {
									cookies.set("employer-form-telefon", e.target.value);
								}}
								className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
								labelProps={{
									className:
										"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
								}}
							/>
							{errors.telefon && (
								<span className="text-sm text-rosu-brand">Trebuie sa adaugati un numar de telefon</span>
							)}{" "}
						</div>
					</section>
					<div>
						<label className="flex items-center py-6">
							<input
								id="privacy"
								type="checkbox"
								{...register("privacy", { required: true })}
								name="privacy"
								className=" mx-4  h-4 w-4 rounded-full  checked:bg-rosu-brand   focus:ring-rosu-brand "
							/>

							<span className="text-sm font-medium text-gri-brand dark:text-gray-300">
								{t("form.politica.1")}
								<a href="politica-confidentialitate" className=" mx-2 my-4 text-gri-bg underline underline-offset-4">
									{t("form.politica.2")}
								</a>
								{t("form.politica.3")}
							</span>
						</label>
						{errors.privacy && (
							<span className="text-sm text-rosu-brand">Trebuie sa fit deacord cu politica de confidentialitate</span>
						)}
					</div>
					<div className="mt-5 flex w-full items-center justify-center">
						<button className=" rounded-2xl  bg-gri-brand px-5 py-4 text-alb-site" type="submit">
							{t("form.buton")}
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default ClientEmployerPage;
