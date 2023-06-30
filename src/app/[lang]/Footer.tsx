import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
	return (
		<footer className="relative z-10  w-full overflow-hidden bg-gri-bg pt-12 pb-10 text-white md:mx-auto   md:items-center  md:justify-center">
			<div className="mx-auto  flex w-full flex-col items-center justify-center  pb-0   md:px-[70px]">
				<nav className="container z-30 flex w-full flex-col  items-center justify-between  md:items-start  ">
					<div className=" flex w-full  flex-col items-center justify-center gap-8 gap-y-6 p-4 md:items-start  md:justify-between lg:flex-row ">
						<div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-1/4 md:items-start md:text-start ">
							<h6 className=" text-[16px]  font-bold leading-[20px]">HUMAN SOURCE</h6>
							<hr className="h-2 w-full" />
							<div className="flex flex-col gap-8 text-[16px]  font-[350] leading-[24px]">
								<Link href="/despre-noi">Despre noi </Link>
								<Link href="/despre-noi">Angajatori </Link>
								<Link href="/blog">Candidati</Link>
								<Link href="/munca">Locuri de munca</Link>
							</div>
						</div>
						<div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/4 md:items-start">
							<h6 className="font-bold">SERVICII</h6>

							<hr className="h-2 w-full" />
							<div className="flex flex-col gap-8">
								<Link href="/locuri-de-munca">Leasing de personal</Link>
								<Link href="/plasare">Recrutare si selectie</Link>
								<Link href="/cerere-oferta">Payroll si administrare</Link>
							</div>
						</div>
						<div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-1/4 md:items-start md:text-start">
							<h6 className="font-bold">CONTACT</h6>
							<hr className="h-2 w-full" />

							<p>Nr. de ordine in registrul comertului : J40/17607/20</p>
							<p>Cod unic de identificare : 38366948</p>
							<p>Telefon : 0040743096465 </p>
							<p>Email : office@humansource.ro</p>
						</div>
						<div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-1/4 md:items-start md:text-start">
							<h6 className="font-[500]">INFORMATII</h6>
							<hr className="h-2 w-full" />
							<div className="flex flex-col gap-8">
								<Link href="/despre-noi">Politica si confidentialitate</Link>
								<Link href="/blog">Termeni si conditii de utilizare</Link>
								<Link href="/contact">Politica privind Cookie-urile</Link>
							</div>
						</div>
					</div>
					<div className="flex w-full items-center justify-center gap-6 pt-12 " id="social container">
						<a href="">
							<FiFacebook className="hover:text-[#64C7CE]" />
						</a>
						<a href="">
							<GrInstagram className="hover:text-[#64C7CE]" />
						</a>{" "}
						<a href="">
							<SlSocialTwitter className="hover:text-[#64C7CE]" />
						</a>
					</div>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
