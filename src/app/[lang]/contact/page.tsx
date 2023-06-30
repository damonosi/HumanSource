"use client";
import { Tooltip, Typography } from "@material-tailwind/react";
import EmailIcon from "@mui/icons-material/Email";

import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ContactForm from "@/components/Contact/ContactForm";
import imgContact from "@/public/imagini/contact/imgContact2.png";
import { getLocalePartsFrom, locales } from "i18n";
export async function generateStaticParams() {
	return locales.map((locale) => getLocalePartsFrom({ locale }));
}

const Contact = ({ params }: { params: { lang: string; country: string } }) => {
	return (
		<section className="  bg-[#E5E5E5] px-4 pb-[100px] md:px-[70px]">
			<div className="container mx-auto flex flex-col ">
				<Breadcrumbs>
					<Link className="text-gri-brand" href={`${params.lang}/`}>
						Home
					</Link>
					<Link className="text-red-600" href={`${params.lang}/contact`}>
						Contact
					</Link>
				</Breadcrumbs>
				<div className="flex flex-col-reverse gap-14 py-4 md:flex-row ">
					<div className="flex w-full flex-col  justify-between gap-[60px] md:w-1/2">
						<div className="flex flex-col gap-8 md:pr-12">
							<Typography variant="h3" className="text-start font-bold">
								Contacteaza-ne!
							</Typography>
							<p>
								Lorem ipsum dolor sit amet consectetur. Cras felis tristique pharetra magna. Orci quis dui viverra mi
								lacus amet pulvinar quis. Eu auctor ullamcorper imperdiet ultricies amet elementum quam. T
							</p>
						</div>
						<div className="flex w-full flex-col items-start gap-2 md:flex-row">
							<Tooltip
								content="Trimiteti un email"
								placement="bottom"
								animate={{
									mount: { scale: 1, y: 5 },
									unmount: { scale: 0, y: 0 },
								}}
							>
								<Link href="mailto:office@humansource.com">
									<div className="rounded-full border bg-white py-2 px-3">
										<EmailIcon /> <span className="ml-3"> office@humansource.com</span>
									</div>
								</Link>
							</Tooltip>
							<Tooltip
								content="Sunati pe whatts up"
								placement="bottom"
								animate={{
									mount: { scale: 1, y: 5 },
									unmount: { scale: 0, y: 0 },
								}}
							>
								<Link href="http://api.whatsapp.com/send?phone=0209764893">
									<div className="rounded-full border bg-white py-2 px-3">
										<PhoneIcon /> <span className="ml-3"> +40209764893</span>
									</div>
								</Link>
							</Tooltip>
						</div>
						<ContactForm />
					</div>
					<div className="flex w-full md:w-1/2">
						<Image alt="imagine contact" placeholder="blur" src={imgContact} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
