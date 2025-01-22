const monthsRo = [
	"Ianuarie",
	"Februarie",
	"Martie",
	"Aprilie",
	"Mai",
	"Iunie",
	"Iulie",
	"August",
	"Septembrie",
	"Octombrie",
	"Noiembrie",
	"Decembrie",
];
const monthsIt = [
	"Gennaio",
	"Febbraio",
	"marzo",
	"Aprilie",
	"Maggio",
	"Giugno",
	"Luglio",
	"Agosto",
	"Settembre",
	"Ottobre",
	"Novembre",
	"Dicembre",
];

const daysRo = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambate"];
const daysIt = ["Domenica", "Lunedi", "Mertedi", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

export default function formatDate(dateCreated: string, params: { lang: string }) {
	const newDate = new Date(dateCreated);
	if (params.lang === "ro") {
		const month = newDate.getMonth();
		const monthName = monthsRo[`${month}`];
		const day = newDate.getDay();
		const dayName = daysRo[day];
		const formattedDate = `${dayName},  ${newDate.getDate()}  ${monthName}  ${newDate.getFullYear()} `;
		return formattedDate;
	} else {
		const month = newDate.getMonth();
		const monthName = monthsIt[`${month}`];
		const day = newDate.getDay();
		const dayName = daysIt[day];
		const formattedDate = `${dayName},  ${newDate.getDate()}  ${monthName}  ${newDate.getFullYear()} `;
		return formattedDate;
	}
}
