import { FileText, Zap, Mail, ArrowRightLeft } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Envie a fatura",
    description: "Basta enviar um PDF ou uma foto da sua fatura de eletricidade ou gás. Demora menos de 1 minuto.",
  },
  {
    icon: Zap,
    step: "2",
    title: "Receba a poupança estimada",
    description: "Em menos de 1 minuto recebe uma mensagem com o valor que pode poupar.",
  },
  {
    icon: Mail,
    step: "3",
    title: "Detalhes por email",
    description: "A nossa equipa comercial envia-lhe um email com a análise completa e opções disponíveis.",
  },
  {
    icon: ArrowRightLeft,
    step: "4",
    title: "Decide e acompanhamos",
    description: "Se quiser avançar, basta indicar. Tratamos de tudo e acompanhamos a mudança até ao fim.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo simples em 4 passos. Sem burocracia, sem complicações.
          </p>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="sm:hidden space-y-4 max-w-sm mx-auto">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-background rounded-xl shadow-card"
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {item.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2 min-h-[20px]" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg mb-3">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 bg-background rounded-2xl shadow-card hover:shadow-soft transition-shadow"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-6 lg:left-8 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                {item.step}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-xl mb-5 mt-2">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota importante */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-4 p-5 bg-accent/50 rounded-xl border border-accent">
            <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-foreground">
              <strong>Importante:</strong> Mudar de comercializador não implica obras no contador e não fica sem energia em nenhum momento. É um processo 100% administrativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
