import { useTranslation } from "@/app/i18n/client";
import AddJobApplication from "@/lib/apollo/mutations/mutateJobAplication";
import { useMutation } from "@apollo/client";
import { Input, Textarea, Typography, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { useCookies } from "next-client-cookies";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

import { format } from "date-fns";
import { Button, DayContentProps, DayPicker, useDayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import "../../lib/react-day-picker/styles.css";
import { ro } from "date-fns/locale";
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
	const [openedDatePicker, setOpenedDatePicker] = useState(false);
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		watch,
		formState: { errors, isSubmitted },
	} = useForm<Inputs>();

	const cookies = useCookies();
	const ref = useOnclickOutside(() => {
		setTimeout(() => {
			setOpenedDatePicker(false);
		}, 100);
	});
	function callFunctionByCategory(data: Inputs, category: string) {
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
	function TransportFormAdd(data: Inputs) {
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
	function MedicalFormAdd(data: Inputs) {
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
	function DefaultAdd(data: Inputs) {
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
	const today = new Date();
	const [date, setDate] = useState<Date>();

	const newDate = date ? date.toString() : today.toString();
	const formattedDate = format(new Date(newDate), "yyyy-MM-dd");

	return (
		<div className="relative flex rounded-2xl bg-alb-site p-5 md:w-1/2 md:p-10">
			{openedDatePicker && <div className="absolute z-40 flex h-full w-full backdrop-blur-sm" id="mask" />}

			<form className="relative w-full justify-between px-1 " onSubmit={handleSubmit(onSubmit)}>
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
					<div className="relative flex" ref={ref}>
						<Input
							label={nastereLabel}
							data-popover-target="popover-default"
							labelProps={{
								className:
									"text-xs peer-focus:text-xs peer-focus:after:!border-rosu-brand peer-focus:!text-rosu-brand  peer-focus:!text-rosu-brand  peer-focus:before:!border-rosu-brand",
							}}
							id="dataNastere"
							{...register("dataNastere", { required: true })}
							className="w-full cursor-pointer ring-0 focus:border-rosu-brand focus:!border-t-transparent"
							onClick={() => setOpenedDatePicker(!openedDatePicker)}
							value={formattedDate}
						/>

						{openedDatePicker ? (
							<div
								data-popover
								id="popover-default"
								role="tooltip"
								className="absolute  z-50 flex h-full w-full items-center justify-center gap-4"
							>
								<DayPicker
									mode="single"
									selected={date}
									locale={ro}
									onSelect={setDate}
									onDayClick={() => setOpenedDatePicker(false)}
									showOutsideDays
									captionLayout="dropdown-buttons"
									fromYear={1930}
									toYear={2024}
									className="border-0 bg-alb-site px-6 py-4 "
									classNames={{
										caption_dropdowns: " flex w-full justify-center flex-col-reverse items-center gap-1",

										dropdown_month:
											"bg-gri-deschis-bg/10 flex relative  hover:scale-110 w-full justify-center py-2 cursor-pointer",

										dropdown_year:
											"bg-gri-deschis-bg/10 flex relative hover:scale-110 w-full justify-center py-2 cursor-pointer",
										caption: "flex justify-center py-2 mb-4 relative items-center overflow-hidden p-1 ",
										caption_label: "text-sm flex w-full px-5 justify-between items-center  font-medium text-gray-900",
										dropdown_icon: "",
										nav: "flex items-center",
										nav_button:
											"h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
										nav_button_previous: "hidden",
										nav_button_next: "hidden",
										table: "w-full border-collapse",
										head_row: "flex font-medium text-gray-900",
										head_cell: "m-0.5 w-9 font-normal text-sm",
										row: "flex w-full mt-2",
										cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
										day: "h-9 w-9 p-0 font-normal",
										day_range_end: "day-range-end",
										day_selected:
											"rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",

										day_outside:
											"day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
										day_disabled: "text-gray-500 opacity-50",
										day_hidden: "invisible",
									}}
								/>
							</div>
						) : null}
					</div>

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
		</div>
	);
};

export default FormularAplica;
