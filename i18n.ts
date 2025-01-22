export const defaultLocale = "ro";
export const locales = ["ro", "it"] as const;
export type ValidLocale = (typeof locales)[number];

type PathnameLocale = {
	pathname: string;
	locale?: never;
};
type ISOLocale = {
	pathname?: never;
	locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
	if (locale) {
		const localeParts = locale.toLowerCase().split("-");
		return {
			lang: localeParts[0],
			country: localeParts[1],
		};
	} else {
		const pathnameParts = pathname!.toLowerCase().split("/");
		return {
			lang: pathnameParts[1],
			country: pathnameParts[2],
		};
	}
};
