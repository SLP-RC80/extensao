import { Shield, Lock, Eye, AlertTriangle, Smartphone, Mail, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipCard from "@/components/TipCard";

import tipPasswords from "@/assets/tip-passwords.jpg";
import tipScamMessages from "@/assets/tip-scam-messages.jpg";
import tipPersonalInfo from "@/assets/tip-personal-info.jpg";
import tipPhoneUpdate from "@/assets/tip-phone-update.jpg";
import tipPhishingEmail from "@/assets/tip-phishing-email.jpg";
import tipAskHelp from "@/assets/tip-ask-help.jpg";

const tips = [
  {
    icon: Lock,
    title: "Crie Senhas Fortes",
    description:
      "Use senhas com pelo menos 8 caracteres, misturando letras maiúsculas, minúsculas, números e símbolos. Nunca use datas de nascimento ou nomes de familiares.",
    variant: "security" as const,
    image: tipPasswords,
    imageAlt: "Infográfico sobre como criar senhas fortes e seguras",
  },
  {
    icon: AlertTriangle,
    title: "Cuidado com Golpes por Mensagem",
    description:
      "Desconfie de mensagens pedindo dados pessoais, senhas ou dinheiro — mesmo que pareçam ser de bancos ou parentes. Ligue para confirmar antes de agir.",
    variant: "warning" as const,
    image: tipScamMessages,
    imageAlt: "Infográfico sobre golpes e mensagens fraudulentas no celular",
  },
  {
    icon: Eye,
    title: "Não Compartilhe Informações Pessoais",
    description:
      "Evite publicar endereço, telefone, CPF ou fotos de documentos em redes sociais ou sites desconhecidos.",
    variant: "security" as const,
    image: tipPersonalInfo,
    imageAlt: "Infográfico sobre proteção de informações pessoais online",
  },
  {
    icon: Smartphone,
    title: "Mantenha seu Celular Atualizado",
    description:
      "Atualizações de sistema corrigem falhas de segurança. Ative as atualizações automáticas sempre que possível.",
    variant: "security" as const,
    image: tipPhoneUpdate,
    imageAlt: "Infográfico sobre manter o celular atualizado",
  },
  {
    icon: Mail,
    title: "Desconfie de E-mails Estranhos",
    description:
      "Não clique em links de e-mails que você não esperava. Verifique o remetente e, na dúvida, delete a mensagem.",
    variant: "warning" as const,
    image: tipPhishingEmail,
    imageAlt: "Infográfico sobre e-mails de phishing e como identificá-los",
  },
  {
    icon: UserCheck,
    title: "Peça Ajuda a Alguém de Confiança",
    description:
      "Se receber algo suspeito ou não souber o que fazer, peça ajuda a um familiar, amigo ou vizinho de confiança antes de tomar qualquer ação.",
    variant: "security" as const,
    image: tipAskHelp,
    imageAlt: "Ilustração de pessoa idosa recebendo ajuda com tecnologia",
  },
];

const DigitalSecurity = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-security-light py-12 sm:py-16">
        <div className="container text-center">
          <Shield className="mx-auto mb-4 h-14 w-14 text-security" />
          <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Segurança Digital
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground sm:text-xl">
            Navegar na internet com segurança é simples quando você conhece os cuidados certos. Veja dicas claras e práticas.
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="container py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

export default DigitalSecurity;
