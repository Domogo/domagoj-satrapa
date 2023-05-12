import { Roboto_Mono } from "next/font/google";
import { FTButton } from "./FTButton";

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

const technologies = [
  { url: "https://www.typescriptlang.org/", name: "TypeScript" },
  { url: "https://nextjs.org/", name: "Nextjs" },
  { url: "https://reactjs.org/", name: "React" },
  { url: "https://nodejs.org/en/", name: "NodeJS" },
  { url: "https://tailwindcss.com/", name: "TailwindCSS" },
  { url: "https://www.mongodb.com/", name: "MongoDB" },
  { url: "https://www.postgresql.org/", name: "PostgreSQL" },
  { url: "https://svelte.dev/", name: "Svelte" },
  // { url: "https://www.golang.org/", name: "Go" },
];

export const FavoriteTechnologies = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className={`${robotoMono.className} text-l lg:text-l text-slate-300`}>
        These are my favorite technologies at the moment:
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((t) => (
          <FTButton key={t.name} url={t.url} name={t.name} />
        ))}
      </div>
    </div>
  );
};
