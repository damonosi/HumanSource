import { i18n } from "i18n.config";

function CheckIfDefaulthLang(params: { lang: string }, startingPath: string) {
	const isDefaultLang = params.lang === i18n.defaultLocale;

	const path = isDefaultLang ? startingPath : `/${params.lang}/${startingPath}`;
	return path;
}

export default CheckIfDefaulthLang;
