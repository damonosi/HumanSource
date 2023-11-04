import AddJobApplication from "@/lib/apollo/mutations/mutateJobAplication";
import { useMutation } from "@apollo/client";
import { Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import { RandomUUIDOptions } from "crypto";
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

const FormularAplica = ({ id, params }: { id: RandomUUIDOptions; params: { lang: string; id: RandomUUIDOptions } }) => {
	const [addJobApplication, { data, loading, error }] = useMutation(AddJobApplication);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		try {
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
			router.push(`/${params.lang}/multumim`);
		} catch (error) {
			console.log(error);
		}
	};
	if (loading) {
		return <span> "Submitting..."</span>;
	}

	if (error) {
		return <span> `Submission error! ${error.message}`</span>;
	}
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
					label="Numele tau complet"
					icon={<MdPersonOutline />}
				/>

				<Input
					variant="outlined"
					type="date"
					{...register("dataNastere", { required: true })}
					id="dataNastere"
					label="Data Nastere"
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
					{...register("telefon", { required: true })}
					id="telefon"
					icon={<FiPhone />}
					label="Numar de telefon"
				/>

				<Textarea
					variant="outlined"
					{...register("mesaj", { required: true })}
					id="telefon"
					aria-expanded
					label="Trimite-ne un mesaj"
				/>
				<Checkbox
					className=" "
					{...register("privacy", { required: true })}
					label={
						<Typography color="blue-gray" className="flex text-center text-xs font-medium md:text-lg">
							*sunt de acord cu
							<Typography
								as="a"
								href="#"
								color="blue"
								className="text-xs font-medium transition-colors hover:text-blue-700 md:text-lg"
							>
								&nbsp;termenii si conditiile
							</Typography>
							.
						</Typography>
					}
				/>
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
					Trimite datele
				</button>
			</div>
		</form>
	);
};

export default FormularAplica;
