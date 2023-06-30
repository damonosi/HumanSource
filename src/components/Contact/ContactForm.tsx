import { MdPersonOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { Checkbox, Input, Textarea } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
	nume: string;
	dataNastere: string;
	email: string;
	telefon: string;
	mesaj: string;
	privacy: boolean;
};
const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<div className="flex justify-end rounded-2xl bg-alb-site p-5">
			<form className="relative w-full justify-between bg-alb-site" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
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
				</div>
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

				<Textarea
					variant="outlined"
					{...register("mesaj", { required: true })}
					id="telefon"
					aria-expanded
					label="Trimite-ne un mesaj"
				/>
				<div className="flex flex-col items-center justify-center gap-2 text-rosu-brand">
					{errors.nume && <span>Trebuie sa adaugati un nume</span>}
					{errors.dataNastere && <span>Trebuie sa adaugati o data de nastere</span>}
					{errors.email && <span>Trebuie sa adaugati o adresa de email</span>}
					{errors.telefon && <span>Trebuie sa adaugati un numar de telefon</span>}
					{errors.privacy && <span>Trebuie sa fiti de acord cu politica de confidentialitate</span>}
				</div>
				<div className="flex w-full items-center justify-center">
					<button className="mt-5 rounded-2xl  bg-gri-brand px-5 py-4 text-alb-site" type="submit">
						Trimite datele
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
