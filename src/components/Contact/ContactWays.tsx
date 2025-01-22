"use client";
import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";

import PhoneIcon from "@mui/icons-material/Phone";

const ContactWays = () => {
	return (
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
				<Link href="http://api.whatsapp.com/send?phone=400744889886">
					<div className="rounded-full border bg-white py-2 px-3">
						<PhoneIcon /> <span className="ml-3"> +40209764893</span>
					</div>
				</Link>
			</Tooltip>
		</div>
	);
};

export default ContactWays;
