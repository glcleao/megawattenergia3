import { ArrowRight, ChevronDown } from 'lucide-react';

const FORM_URL = "https://tally.so/r/vGe1qv";

// Variante A (default)
const heroVariantA = {
  title: "Descubra a sua poupança em energia. Instantaneamente.",
  subtitle: "Envie a sua fatura e receba imediatamente por SMS quanto pode poupar. Gratuito, sem compromisso.",
};

// Variante B (para A/B testing)
const heroVariantB = {
  title: "Quanto está a pagar a mais na luz?",
  subtitle: "Envie a fatura, receba a resposta por SMS em segundos. Simples assim.",
};

// Usar variante A por padrão - alterar para heroVariantB para testar
const activeVariant = heroVariantA;

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-accent text-accent-foreground rounded-full">
            <span className="w-2 h-2 mr-2 bg-primary rounded-full"></span>
            Consultoria de energia para particulares
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            {activeVariant.title}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            {activeVariant.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary-hover transition-all hover:shadow-elevated group"
            >
              Enviar fatura e ver poupança
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-secondary-foreground bg-secondary rounded-lg hover:bg-muted transition-colors"
            >
              Como funciona
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Gratuito
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sem interrupção de serviço
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Acompanhamento em todo o processo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
