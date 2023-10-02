const months = [
	"Ianuarie",
	"februarie",
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

const days = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambate"];

export default function formatDate(dateCreated: string) {
	const newDate = new Date(dateCreated);

	const month = newDate.getMonth();
	const monthName = months[`${month - 1}`];
	const day = newDate.getDay();
	const dayName = days[day];
	const formattedDate = `${dayName},  ${newDate.getDate()}  ${monthName}  ${newDate.getFullYear()} `;
	return formattedDate;
}
