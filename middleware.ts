import { type NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";

import { defaultLocale, locales } from "@/locales/options";

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get("Accept-Language") || "";
  const languages = acceptLang.split(",").map((lang) => lang.split(";")[0]);

  // [ 'en-US', 'en' ] [ 'en', 'ko' ] 'ko'
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  // Redirect /asdf to /ko/asdf
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}
