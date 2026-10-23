const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://iqbal.is-a.dev")

export const siteConfig = {
  name: "Rafi Iqbal Rendy Syachputra",
  shortName: "Rafi Iqbal",
  title: "Rafi Iqbal Rendy Syachputra | Frontend Developer",
  description:
    "Portfolio of Rafi Iqbal Rendy Syachputra, frontend developer in Semarang specializing in responsive websites with Vue.js, Nuxt.js, React, and Next.js.",
  url: rawSiteUrl.replace(/\/$/, ""),
  email: "rafiiqbal2407@gmail.com",
  location: "Semarang, Central Java, Indonesia",
  github: "https://github.com/rafiiiqball24",
  gitlab: "https://gitlab.com/rafiiqbal2407",
  linkedin: "https://www.linkedin.com/in/rafi-iqbal-72a038335",
  instagram: "https://instagram.com/rafi_iqbal_",
} as const
