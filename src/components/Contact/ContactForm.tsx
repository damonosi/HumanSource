import { MdPersonOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { Checkbox, Input, Textarea } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import addContactForm from "@/lib/apollo/mutations/mutateContactForm";
import { useMutation } from "@apollo/client";
import { useCookies } from "next-client-cookies";

type Inputs = {
	nume: string;
	email: string;
	telefon: string;
	mesaj: string;
	privacy: boolean;
};

const ContactForm = ({ params }: { params: { lang: string; country: string } }) => {
	const [addContact] = useMutation(addContactForm);
	const cookies = useCookies();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		try {
			addContact({
				variables: {
					data: {
						email: data.email,
						name: data.nume,
						message: data.mesaj,
						phone: data.telefon,
					},
				},
			});
			reset();
			cookies.remove("contact-name");
			cookies.remove("contact-email");
			cookies.remove("contact-phone");
			cookies.remove("contact-message");
		} catch (error) {
			console.log(error);
		}
	};
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
						defaultValue={cookies.get("contact-name")}
						onChange={(e) => {
							cookies.set("contact-name", e.target.value);
						}}
						icon={<MdPersonOutline />}
					/>

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
						defaultValue={cookies.get("contact-email")}
						onChange={(e) => {
							cookies.set("contact-email", e.target.value);
						}}
						label="Email"
					/>

					<Input
						variant="outlined"
						type="text"
						{...register("telefon", { required: true })}
						id="telefon"
						icon={<FiPhone />}
						defaultValue={cookies.get("contact-phone")}
						onChange={(e) => {
							cookies.set("contact-phone", e.target.value);
						}}
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
					defaultValue={cookies.get("contact-message")}
					onChange={(e) => {
						cookies.set("contact-message", e.target.value);
					}}
				/>
				<div className="flex flex-col items-center justify-center gap-2 text-rosu-brand">
					{errors.nume && <span>Trebuie sa adaugati un nume</span>}

					{errors.email && <span>Trebuie sa adaugati o adresa de email valida</span>}
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
