import { Link } from "react-router-dom";
import { Leaf, Shield } from "lucide-react";
import heroEnvironment from "@/assets/hero-environment.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="container py-12 text-center sm:py-20">
          <h1 className="font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Comunidade Conectada
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground sm:text-xl">
            Um projeto de extensão universitária para proteger o que importa: nosso planeta e sua segurança online.
          </p>
          <p className="mt-2 font-body text-base text-muted-foreground">
            Escolha um tema abaixo para começar:
          </p>
        </section>

        {/* Split Cards */}
        <section className="container flex-1 pb-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Environment Card */}
            <Link
              to="/consciencia-ambiental"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={heroEnvironment}
                  alt="Floresta verde vista de cima representando a preservação ambiental"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <Leaf className="mb-2 h-10 w-10 text-environment-foreground" />
                  <h2 className="font-display text-2xl font-bold text-environment-foreground sm:text-3xl">
                    Consciência Ambiental
                  </h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-environment-light p-6">
                <p className="font-body text-base text-foreground sm:text-lg">
                  Dicas práticas para jovens e adolescentes: como cuidar do meio ambiente no dia a dia, reduzir resíduos e fazer a diferença.
                </p>
                <span className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-environment px-6 py-3 font-display text-base font-bold text-environment-foreground transition-colors group-hover:opacity-90">
                  Comece a Proteger o Planeta →
                </span>
              </div>
            </Link>

            {/* Security Card */}
            <Link
              to="/seguranca-digital"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={heroSecurity}
                  alt="Escudo digital representando segurança cibernética"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <Shield className="mb-2 h-10 w-10 text-security-foreground" />
                  <h2 className="font-display text-2xl font-bold text-security-foreground sm:text-3xl">
                    Segurança Digital
                  </h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-security-light p-6">
                <p className="font-body text-base text-foreground sm:text-lg">
                  Guia simples e claro para pessoas de todas as idades: como se proteger de golpes, criar senhas seguras e navegar com tranquilidade.
                </p>
                <span className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-security px-6 py-3 font-display text-base font-bold text-security-foreground transition-colors group-hover:opacity-90">
                  Fique Seguro Online →
                </span>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
