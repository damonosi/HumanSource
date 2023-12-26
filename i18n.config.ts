export const i18n = {
	defaultLocale: "ro",
	locales: ["ro", "it"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
