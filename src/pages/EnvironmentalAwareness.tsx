import { Leaf, Droplets, Recycle, Zap, TreePine, Apple, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipCard from "@/components/TipCard";

import tipRecycle from "@/assets/tip-recycle.jpg";
import tipWater from "@/assets/tip-water.jpg";
import tipEnergy from "@/assets/tip-energy.jpg";
import tipTrees from "@/assets/tip-trees.jpg";
import tipLocalFood from "@/assets/tip-local-food.jpg";
import tipFoodWaste from "@/assets/tip-food-waste.jpg";

const tips = [
  {
    icon: Recycle,
    title: "Reduza, Reutilize, Recicle",
    description:
      "Separe o lixo em casa: orgânico, reciclável e rejeito. Dê preferência a produtos com menos embalagem e leve sua própria sacola ao supermercado.",
    variant: "environment" as const,
    image: tipRecycle,
    imageAlt: "Lixeiras coloridas para separação de resíduos recicláveis",
  },
  {
    icon: Droplets,
    title: "Economize Água",
    description:
      "Feche a torneira ao escovar os dentes, tome banhos mais curtos e reaproveite a água da máquina de lavar para limpar o quintal.",
    variant: "environment" as const,
    image: tipWater,
    imageAlt: "Ilustração sobre economia de água com torneira e gotas",
  },
  {
    icon: Zap,
    title: "Use Energia com Consciência",
    description:
      "Desligue aparelhos da tomada quando não estiver usando, aproveite a luz natural durante o dia e troque lâmpadas por LED.",
    variant: "environment" as const,
    image: tipEnergy,
    imageAlt: "Infográfico sobre economia de energia com lâmpada LED e painel solar",
  },
  {
    icon: TreePine,
    title: "Plante Árvores e Cuide das Plantas",
    description:
      "Participe de ações de reflorestamento na sua comunidade. Até um vaso na janela ajuda a melhorar o ar e a biodiversidade.",
    variant: "environment" as const,
    image: tipTrees,
    imageAlt: "Mãos plantando uma muda de árvore na terra",
  },
  {
    icon: Apple,
    title: "Prefira Alimentos Locais",
    description:
      "Comprar de produtores locais reduz o transporte e a emissão de gases. Feiras livres são ótimas opções!",
    variant: "environment" as const,
    image: tipLocalFood,
    imageAlt: "Feira de alimentos frescos com frutas e verduras locais",
  },
  {
    icon: AlertTriangle,
    title: "Evite o Desperdício de Comida",
    description:
      "Planeje suas refeições, congele sobras e aproveite cascas e talos em receitas criativas. Cada grama conta!",
    variant: "warning" as const,
    image: tipFoodWaste,
    imageAlt: "Infográfico sobre como reduzir o desperdício de alimentos",
  },
];

const EnvironmentalAwareness = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-environment-light py-12 sm:py-16">
        <div className="container text-center">
          <Leaf className="mx-auto mb-4 h-14 w-14 text-environment" />
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Consciência Ambiental
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground sm:text-xl">
            Pequenas atitudes no dia a dia fazem uma grande diferença para o planeta. Veja como você pode ajudar!
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="container py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => (
            <div key={tip.title} style={{ animationDelay: `${i * 100}ms` }}>
              <TipCard {...tip} />
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default EnvironmentalAwareness;
