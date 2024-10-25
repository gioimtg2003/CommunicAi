import { LocaleCode, LocaleList } from "@/constants";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const defaultLocale = "en" as LocaleCode;

export const intlMiddleware = createIntlMiddleware({
    locales: LocaleList,
    defaultLocale,
    localeDetection: true,
});

export default function middleware(req: NextRequest) {
    return intlMiddleware(req);
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
