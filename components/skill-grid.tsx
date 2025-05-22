import Image from "next/image"

interface SkillProps {
  image: string
  name: string
}

const Skill = ({ image, name }: SkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-lg border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl card-3d">
      <div className="relative h-16 w-16 mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      <span className="text-foreground font-medium">{name}</span>
    </div>
  )
}

export function SkillGrid() {
  const skills = [
    { image: "/bahasa/flutter.png", name: "Flutter" },
    { image: "/bahasa/react.png", name: "React" },
    { image: "/bahasa/nextjs.png", name: "Next.js" },
    { image: "/bahasa/laravel.png", name: "Laravel" },
    { image: "/bahasa/php.png", name: "PHP" },
    { image: "/bahasa/python.png", name: "Python" },
    { image: "/bahasa/mysql.png", name: "MySQL" },
    { image: "/bahasa/figma.png", name: "Figma" },
    { image: "/bahasa/vscode.png", name: "VSCode" },
    { image: "/bahasa/xampp.png", name: "XAMPP" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <Skill key={index} image={skill.image} name={skill.name} />
      ))}
    </div>
  )
}
