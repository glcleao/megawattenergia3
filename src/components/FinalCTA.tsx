import { ArrowRight } from 'lucide-react';

const FORM_URL = "https://tally.so/r/vGe1qv";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mb-4">
            Quer saber quanto pode poupar?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Envie a sua fatura e receba uma simulação gratuita. Sem compromisso, sem custos.
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary-hover transition-all hover:shadow-elevated group"
          >
            Enviar fatura e ver poupança
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
