export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  number: string
  title: string
  category: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  links: ProjectLink[]
}

export const featuredProjects: Project[] = [
  {
    slug: "deep-sky-villa",
    number: "Featured / 01",
    title: "Deep Sky Villa",
    category: "Hospitality website",
    description:
      "A hospitality website for a villa stay in Karimunjawa, built to make the atmosphere, accommodation, and booking journey feel clear from the first screen.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    image: "/porto/Screenshot 2026-10-17 221446.png",
    imageAlt: "Deep Sky Villa homepage showing the villa grounds and pool",
    links: [{ label: "Visit website", href: "https://deepsky-villa.com/" }],
  },
  {
    slug: "grand-mega-diving-resort",
    number: "Featured / 02",
    title: "Grand Mega Diving Resort",
    category: "Resort website",
    description:
      "A resort website that presents rooms, facilities, and the route to reserve a stay through an immersive, image-led experience.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    image: "/porto/Screenshot 2026-10-17 221015.png",
    imageAlt: "Grand Mega Diving Resort homepage showing a resort room",
    links: [{ label: "Visit website", href: "https://grandmegadivingresort.id/" }],
  },
  {
    slug: "srikandi-group",
    number: "Featured / 03",
    title: "Srikandi Group",
    category: "Property company website",
    description:
      "A company website for Srikandi Group that helps visitors explore its housing and company information with a direct, approachable interface.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    image: "/porto/Screenshot 2026-10-17 221034.png",
    imageAlt: "Srikandi Group homepage showing a housing development",
    links: [{ label: "Visit website", href: "https://srikandigroup.com/" }],
  },
  {
    slug: "creativlabz-affiliate-center",
    number: "Featured / 04",
    title: "CreativLabz Affiliate Center",
    category: "Affiliate dashboard",
    description:
      "A focused affiliate dashboard for monitoring performance, sharing referral links, and managing account activity within the CreativLabz commerce ecosystem.",
    tags: ["Vue.js", "Tailwind CSS", "Responsive UI"],
    image: "/porto/porto7.png",
    imageAlt: "CreativLabz affiliate dashboard showing referral tools and performance cards",
    links: [{ label: "Visit website", href: "https://creativlabz.co.id/" }],
  },
]

export const moreProjects: Project[] = [
  {
    slug: "phri-shop",
    number: "Archive / 05",
    title: "PHRI Shop",
    category: "E-commerce website",
    description:
      "An e-commerce experience for Perhimpunan Hotel dan Restoran Indonesia, built around clear discovery, approachable navigation, and responsive storefront presentation.",
    tags: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    image: "/porto/porto8.png",
    imageAlt: "PHRI Shop landing page with an orange retail campaign hero",
    links: [{ label: "Visit website", href: "https://phri.or.id/shop" }],
  },
  {
    slug: "flexy-mobile-app",
    number: "Archive / 06",
    title: "Flexy Mobile App",
    category: "Mobile ticketing application",
    description:
      "A mobile ticketing concept developed with a multidisciplinary student team, connecting a Flutter interface with a Laravel backend and a tested Figma prototype.",
    tags: ["Flutter", "Laravel", "Figma"],
    image: "/porto/porto2.jpg",
    imageAlt: "Flexy mobile app project team after a classroom presentation",
    links: [{ label: "Open prototype", href: "https://www.figma.com/proto/lwnoA9GxUdOjM9XEPhOlPV/flexyApp?node-id=242-61&p=f&t=E98sbroYmi5Op61V-1&scaling=scale-down&content-scaling=fixed&page-id=27%3A25&starting-point-node-id=100%3A97&show-proto-sidebar=1" }],
  },
  {
    slug: "online-examination-app",
    number: "Archive / 07",
    title: "Online Examination App",
    category: "Web application",
    description: "A browser-based TOEFL testing interface with participant, question, schedule, and result management.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/porto/porto1.png",
    imageAlt: "Online examination admin dashboard",
    links: [{ label: "View on GitHub", href: "https://github.com/rafiiiqball24/aplikasi-ujian-online.git" }],
  },
  {
    slug: "iot-parking-system",
    number: "Archive / 08",
    title: "IoT Parking System",
    category: "Connected-device prototype",
    description: "An Arduino prototype that simulates parking availability and entry management using connected sensors.",
    tags: ["Arduino", "IoT", "C++"],
    image: "/porto/porto 5.jpg",
    imageAlt: "IoT parking system project team presenting the Arduino prototype",
    links: [
      { label: "Read report", href: "/porto/KELOMPOK_4_Car Parking System.pdf" },
      { label: "Watch video", href: "/porto/porto.mp4" },
    ],
  },
  {
    slug: "unity-game-collection",
    number: "Archive / 09",
    title: "Unity Game Collection",
    category: "Game development",
    description: "Three small games assembled in a single Unity project as an exploration of gameplay systems and interaction.",
    tags: ["Unity", "C#", "Game Design"],
    image: "/porto/porto3.jpg",
    imageAlt: "Unity game project team presentation",
    links: [
      { label: "View on GitHub", href: "https://github.com/rafiiiqball24/games.git" },
      { label: "Download project files", href: "/porto/GAME.zip" },
    ],
  },
  {
    slug: "cinemate-ui-ux",
    number: "Archive / 10",
    title: "Cinemate UI/UX",
    category: "Mobile product design",
    description: "A mobile streaming concept focused on movie discovery, browsing patterns, and a familiar entertainment interface.",
    tags: ["Figma", "Mobile UI", "UX Design"],
    image: "/porto/porto6.png",
    imageAlt: "Cinemate mobile streaming app interface",
    links: [
      {
        label: "Open in Figma",
        href: "https://www.figma.com/design/Gg1Thvi5wUrQwGfwbSiNOZ/Cinemate?node-id=87-249&t=Y5kIXNK8Rres11VP-1",
      },
    ],
  },
]

export const projects = [...featuredProjects, ...moreProjects]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
