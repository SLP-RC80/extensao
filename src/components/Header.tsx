import { Link, useLocation } from "react-router-dom";
import { Leaf, Shield, Home } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isEnvironment = location.pathname === "/consciencia-ambiental";
  const isSecurity = location.pathname === "/seguranca-digital";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <Home className="h-5 w-5" />
          <span className="hidden sm:inline">Comunidade Conectada</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/consciencia-ambiental"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-4 sm:text-base ${
              isEnvironment
                ? "bg-environment text-environment-foreground"
                : "text-foreground hover:bg-environment-light"
            }`}
          >
            <Leaf className="h-5 w-5" />
            <span className="hidden sm:inline">Meio Ambiente</span>
          </Link>
          <Link
            to="/seguranca-digital"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-4 sm:text-base ${
              isSecurity
                ? "bg-security text-security-foreground"
                : "text-foreground hover:bg-security-light"
            }`}
          >
            <Shield className="h-5 w-5" />
            <span className="hidden sm:inline">Segurança Digital</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
