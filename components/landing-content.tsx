"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Ana",
    avatar: "A",
    title: "Engenheira de Software",
    description: "A melhor ferramenta de IA que já usei",
  },
  {
    name: "João",
    avatar: "J",
    title: "Designer de UI/UX",
    description: "Excelente habilidade em design e usabilidade",
  },
  {
    name: "Pedro",
    avatar: "P",
    title: "Analista de Dados",
    description: "Focado em extrair insights valiosos dos dados",
  },
  {
    name: "Carla",
    avatar: "C",
    title: "Gerente de Projetos",
    description: "Liderança e organização são minhas maiores habilidades",
  },
];
export function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testemunhas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
