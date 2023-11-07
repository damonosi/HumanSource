"use client";
import AddAngajatorForm from "@/lib/apollo/mutations/mutateAngajatorForm";
import { useMutation } from "@apollo/client";
import { Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

type Inputs = {
	codFiscal: string;
	domeniu: string;
	nrPersoane: string;
	email: string;
	telefon: string;
	subdomeniu: string;
	privacy: boolean;
	dateContact:string
};

const FormularAngajatorMedical = ({ params }: { params: { lang: string; country: string } }) => {
	const [addAngajatorForm] = useMutation(AddAngajatorForm);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		try {
			addAngajatorForm({
				variables: {
					data: {
						domeniu: "medical",
						codFiscal: data.codFiscal,
dateContact:"email",
						email: data.email,
						nrPersoane: data.nrPersoane,
						nrTel: data.telefon,
						subDomeniu: data.subdomeniu,
					},
				},
			});

			router.push(`/${params.lang}/multumim`);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form className=" " onSubmit={handleSubmit(onSubmit)}>
			<div className="relative mx-auto my-4 grid  w-fit grid-cols-1 justify-between gap-8 rounded bg-alb-site p-4">
				<Typography className="mb-16" variant="h3">
					Aplicare
				</Typography>
				<section className="grid grid-cols-2 gap-5">
					<Input
						variant="outlined"
						className=""
						type="text"
						{...register("codFiscal", { required: true })}
						id="codFiscal"
						label="Cod fiscal"
						icon={<MdPersonOutline />}
					/>

					<Input
						variant="outlined"
						type="number"
						{...register("nrPersoane", { required: true })}
						id="nrPersoane"
						label="cate persoane doriti sa angajati"
					/>
					<Input
						variant="outlined"
						type="text"
						{...register("subdomeniu", { required: true })}
						id="subdomeniu"
						label="Adaugati un subdomeniu"
					/>

					<Input
						variant="outlined"
						type="text"
						{...register("email", { required: true })}
						id="email"
						icon={<AiOutlineMail />}
						label="Email"
					/>

					<Input
						variant="outlined"
						type="text"
						{...register("telefon", { required: true, valueAsNumber: true })}
						id="telefon"
						icon={<FiPhone />}
						label="Numar de telefon"
					/>
				</section>
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
				<div className="mt-16 flex w-full items-center justify-center">
					<button className="mt-5 rounded-2xl  bg-gri-brand px-5 py-4 text-alb-site" type="submit">
						Trimite datele
					</button>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-2 text-rosu-brand">
				{errors.codFiscal && <span>Trebuie sa adaugati un nume</span>}
				{errors.nrPersoane && <span>Trebuie sa adaugati un numar de persoane cautate</span>}
				{errors.email && <span>Trebuie sa adaugati o adresa de email</span>}
				{errors.telefon && <span>Trebuie sa adaugati un numar de telefon</span>}
				{errors.privacy && <span>Trebuie sa fiti de acord cu politica de confidentialitate</span>}
			</div>
		</form>
	);
};

export default FormularAngajatorMedical;
