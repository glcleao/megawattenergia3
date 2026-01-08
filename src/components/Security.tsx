import { Lock, UserCheck, Trash2, User, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const FORM_URL = "https://tally.so/r/ob64R1";

const Security = () => {
  return (
    <section id="seguranca" className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header unificado */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simples e seguro</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Só precisamos do essencial
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Para criar a sua simulação, pedimos apenas a sua fatura e um contacto. Os seus dados ficam sempre protegidos.
            </p>
          </div>

          {/* Grid unificado - o que pedimos + segurança */}
          <div className="grid gap-4 sm:gap-6 mb-10">
            {/* Linha 1: O que pedimos */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 sm:p-6 bg-background rounded-xl border border-border">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">A sua fatura</h3>
                  <p className="text-sm text-muted-foreground">
                    PDF ou foto — para vermos o seu consumo e tarifa atual.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 sm:p-6 bg-background rounded-xl border border-border">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Um contacto</h3>
                  <p className="text-sm text-muted-foreground">
                    Para lhe enviarmos a poupança e tirar dúvidas.
                  </p>
                </div>
              </div>
            </div>

            {/* Linha 2: Garantias de segurança */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                <div className="w-8 h-8 flex items-center justify-center bg-accent rounded-lg flex-shrink-0">
                  <Lock className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Dados protegidos</p>
                  <p className="text-xs text-muted-foreground">Uso exclusivo para simulação</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                <div className="w-8 h-8 flex items-center justify-center bg-accent rounded-lg flex-shrink-0">
                  <UserCheck className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Decisão é sua</p>
                  <p className="text-xs text-muted-foreground">Sem pressão, sem obrigação</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                <div className="w-8 h-8 flex items-center justify-center bg-accent rounded-lg flex-shrink-0">
                  <Trash2 className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Pode apagar tudo</p>
                  <p className="text-xs text-muted-foreground">A qualquer momento</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary-hover transition-all hover:shadow-elevated group"
            >
              Enviar fatura e ver poupança
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
