import { MdPersonOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { Alert, Checkbox, Input, Textarea } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import addContactForm from "@/lib/apollo/mutations/mutateContactForm";
import { useMutation } from "@apollo/client";
import { useCookies } from "next-client-cookies";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";

type Inputs = {
	nume: string;
	email: string;
	telefon: string;
	mesaj: string;
	privacy: boolean;
};
function Icon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

const ContactForm = ({ params }: { params: { lang: string; country: string } }) => {
	const [open, setOpen] = useState(false);
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
			setOpen(true);
		} catch (error) {
			console.log(error);
		}
	};
	const { t } = useTranslation(params.lang, "contact");
	let numeLabel = t("formular.nume");

	let telefonLabel = t("formular.telefon");
	let mesajLabel = t("formular.mesaj");
	return (
		<div className="relative flex justify-end rounded-2xl bg-alb-site p-5">
			<form className="relative w-full justify-between bg-alb-site" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<Input
							variant="outlined"
							type="text"
							{...register("nume", { required: true })}
							id="nume"
							label={numeLabel}
							defaultValue={cookies.get("contact-name")}
							onChange={(e) => {
								cookies.set("contact-name", e.target.value);
							}}
							icon={<MdPersonOutline />}
							className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
							labelProps={{
								className:
									"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.nume && <span className="text-sm text-rosu-brand">Trebuie sa adaugati un nume</span>}
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
							defaultValue={cookies.get("contact-email")}
							onChange={(e) => {
								cookies.set("contact-email", e.target.value);
							}}
							label="Email"
							className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
							labelProps={{
								className:
									"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.email && <span className="text-sm text-rosu-brand">Trebuie sa adaugati un email valid</span>}
					</div>
					<div>
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
							label={telefonLabel}
							className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
							labelProps={{
								className:
									"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
						/>
						{errors.telefon && (
							<span className="text-sm text-rosu-brand">Trebuie sa adaugati un numar de telefon valid</span>
						)}
					</div>
				</div>
				<div>
					<Textarea
						variant="outlined"
						{...register("mesaj", { required: true })}
						id="telefon"
						aria-expanded
						label={mesajLabel}
						defaultValue={cookies.get("contact-message")}
						onChange={(e) => {
							cookies.set("contact-message", e.target.value);
						}}
						className="w-full ring-0 focus:border-rosu-brand focus:!border-t-transparent "
						labelProps={{
							className:
								"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
						}}
					/>
					{errors.mesaj && <span className="text-sm text-rosu-brand">Adaugat un scurt mesaj</span>}
				</div>
				<label className="flex items-center py-6">
					<input
						id="vechime"
						type="checkbox"
						{...register("privacy", { required: true })}
						name="privacy"
						className=" mx-4  h-4 w-4 rounded-full  checked:bg-rosu-brand   focus:ring-rosu-brand "
					/>

					<span className="text-sm font-medium text-gri-brand dark:text-gray-300">
						{t("formular.politica.1")}
						<a href="politica-confidentialitate" className=" mx-2 my-4 text-gri-bg underline underline-offset-4">
							{t("formular.politica.2")}
						</a>
						{t("formular.politica.3")}
					</span>
				</label>

				<div className="flex w-full items-center justify-center">
					<button className="mt-5 rounded-2xl  bg-gri-brand px-5 py-4 text-alb-site" type="submit">
						Trimite datele
					</button>
				</div>
			</form>
			{open && (
				<Alert
					icon={<Icon />}
					className="absolute left-1/2 z-50 rounded-none border-l-4 border-[#2ec946] bg-[#2ec946] font-medium text-alb-site opacity-0"
					onClose={() => setOpen(false)}
				>
					Felicitari ! Te vom contacta in cel mai scurt timp
				</Alert>
			)}
		</div>
	);
};

export default ContactForm;
