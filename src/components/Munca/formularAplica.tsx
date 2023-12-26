import { useTranslation } from "@/app/i18n/client";
import AddJobApplication from "@/lib/apollo/mutations/mutateJobAplication";
import { useMutation } from "@apollo/client";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useCookies } from "next-client-cookies";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

type Inputs = {
	nume: string;
	dataNastere: string;
	email: string;
	telefon: string;
	mesaj: string;
	privacy: boolean;
};

const FormularAplica = ({
	id,
	params,
	title,
	category,
}: {
	id: string;
	params: { lang: string; title: string };
	title: string;
	category: string;
}) => {
	const [addJobApplication, { loading, error }] = useMutation(AddJobApplication);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm<Inputs>();
	const cookies = useCookies();
	function callFunctionByCategory(data: any, category: string) {
		switch (category) {
			case "Transport":
				return TransportFormAdd(data);

			case "Medical":
				return MedicalFormAdd(data);

			default:
				return DefaultAdd(data);
		}
	}
	const medicalId = cookies.get("medicalFormId") as string;
	const transportId = cookies.get("transportFormId") as string;
	function TransportFormAdd(data: any) {
		addJobApplication({
			variables: {
				data: {
					birthDate: data.dataNastere,
					email: data.email,
					name: data.nume,
					transport: { connect: { id: transportId } },
					message: data.mesaj,
					phone: data.telefon,

					job: {
						connect: {
							id: id,
						},
					},
				},
			},
		});
		isSubmitted && router.push(`/${params.lang}/multumim?title=${title}`);
	}
	function MedicalFormAdd(data: any) {
		addJobApplication({
			variables: {
				data: {
					birthDate: data.dataNastere,
					email: data.email,
					name: data.nume,
					medical: { connect: { id: medicalId } },
					message: data.mesaj,
					phone: data.telefon,

					job: {
						connect: {
							id: id,
						},
					},
				},
			},
		});
		isSubmitted && router.push(`/${params.lang}/multumim?title=${title}`);
	}
	function DefaultAdd(data: any) {
		addJobApplication({
			variables: {
				data: {
					birthDate: data.dataNastere,
					email: data.email,
					name: data.nume,

					message: data.mesaj,
					phone: data.telefon,

					job: {
						connect: {
							id: id,
						},
					},
				},
			},
		});
		isSubmitted && router.push(`/${params.lang}/multumim?title=${title}`);
	}
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		try {
			callFunctionByCategory(data, category);
		} catch (error) {
			console.log(error);
		}
	};

	const { t } = useTranslation(params.lang, "job");
	let numeLabel = t("form.nume");
	let nastereLabel = t("form.dataNastere");
	let telefonLabel = t("form.telefon");
	let mesajLabel = t("form.mesaj");

	return (
		<form className="relative w-full justify-between  " onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4 grid grid-cols-1 gap-8 ">
				<Typography className="mb-5 md:mb-16" variant="h3">
					Aplicare
				</Typography>
				<Input
					variant="outlined"
					type="text"
					{...register("nume", { required: true })}
					id="nume"
					label={numeLabel}
					icon={<MdPersonOutline />}
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>

				<Input
					variant="outlined"
					type="date"
					{...register("dataNastere", { required: true })}
					id="dataNastere"
					label={nastereLabel}
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>

				<Input
					variant="outlined"
					type="text"
					{...register("email", { required: true })}
					id="email"
					icon={<AiOutlineMail />}
					label="Email"
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>

				<Input
					variant="outlined"
					type="text"
					{...register("telefon", { required: true })}
					id="telefon"
					icon={<FiPhone />}
					label={telefonLabel}
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>

				<Textarea
					variant="outlined"
					{...register("mesaj", { required: true })}
					id="telefon"
					aria-expanded
					label={mesajLabel}
					className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent"
					labelProps={{
						className:
							"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
					}}
				/>
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
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-2 text-rosu-brand">
				{errors.nume && <span>Trebuie sa adaugati un nume</span>}
				{errors.dataNastere && <span>Trebuie sa adaugati o data de nastere</span>}
				{errors.email && <span>Trebuie sa adaugati o adresa de email</span>}
				{errors.telefon && <span>Trebuie sa adaugati un numar de telefon</span>}
				{errors.privacy && <span>Trebuie sa fiti de acord cu politica de confidentialitate</span>}
			</div>
			<div className="mt-16 flex w-full items-center justify-center">
				<button className=" rounded-2xl bg-gri-brand  px-5 py-4 text-alb-site " type="submit">
					{t("form.buton")}
				</button>
			</div>
		</form>
	);
};

export default FormularAplica;
