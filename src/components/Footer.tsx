import megawattLogo from '@/assets/megawatt-logo.png';

const Footer = () => {
  return (
    <footer className="section-padding bg-surface border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            {/* Logo */}
            <div>
              <img 
                src={megawattLogo} 
                alt="MegaWatt Consulting" 
                className="h-8 w-auto mb-3"
              />
              <p className="text-sm text-muted-foreground max-w-xs">
                Ajudamos particulares a poupar na conta de eletricidade e gás, de forma simples e transparente.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-3">Contacto</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>geral@megawatt.pt</p>
                  <p>+351 XXX XXX XXX</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-3">Legal</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Termos e Condições
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Política de Privacidade
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust note */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} MegaWatt. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground">
                Comprometidos com a transparência e a poupança dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
