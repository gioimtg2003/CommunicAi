import { LocaleCode, LocaleList } from "@/constants";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const defaultLocale = "en" as LocaleCode;
// const PUBLIC_FILE = /\.(.*)$/;

export const intlMiddleware = createIntlMiddleware({
    locales: LocaleList,
    defaultLocale,
    localeDetection: true,
});

export default function middleware(req: NextRequest) {
    // const excludePattern = '^(/(' + LocaleList.join('|') + '))?/admin/?.*?$';
    // const isPublicPage = !PUBLIC_FILE.test(req.nextUrl.pathname);

    return intlMiddleware(req);
}

export const config = {
    // Skip paths that should not be internationalized
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
