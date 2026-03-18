const Footer = () => (
  <footer className="border-t border-border bg-muted py-8">
    <div className="container text-center">
      <p className="font-body text-base text-muted-foreground">
        Projeto de Extensão Universitária — Comunidade Conectada © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
