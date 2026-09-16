import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pl'],

  // Always use English when the URL does not explicitly include a locale.
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false
})
