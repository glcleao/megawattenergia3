import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Santos",
    location: "Lisboa",
    quote: "Percebi rapidamente a poupança possível. Processo simples e acompanhado do início ao fim.",
    savings: "23€/mês",
  },
  {
    name: "João Ferreira",
    location: "Porto",
    quote: "Sempre adiei isto por achar complicado. Afinal, foi fácil. Estou a poupar mais de 20€ por mês.",
    savings: "21€/mês",
  },
  {
    name: "Ana Costa",
    location: "Braga",
    quote: "Gostei da transparência. Mostraram-me as opções e deixaram-me decidir sem pressão.",
    savings: "18€/mês",
  },
  {
    name: "Pedro Oliveira",
    location: "Coimbra",
    quote: "Nem acreditava que era grátis. Fizeram tudo por mim e a fatura baixou mesmo.",
    savings: "26€/mês",
  },
  {
    name: "Sofia Martins",
    location: "Faro",
    quote: "Recomendo a quem nunca comparou tarifas. Vale a pena perder 5 minutos para ver quanto pode poupar.",
    savings: "15€/mês",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testemunhos" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header inline */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-medium text-primary mb-2">Quem já poupou</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Histórias de clientes reais
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-surface transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-surface transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Main testimonial card */}
          <div className="relative">
            <div 
              key={activeIndex}
              className="bg-surface rounded-2xl p-8 sm:p-10 animate-fade-in"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Quote */}
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-base font-semibold text-accent-foreground">
                        {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Savings highlight */}
                <div className="lg:w-48 flex-shrink-0">
                  <div className="bg-background rounded-xl p-6 text-center border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Poupança mensal</p>
                    <p className="text-3xl font-bold text-primary">{testimonials[activeIndex].savings}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Ver testemunho ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mini cards below - hidden on mobile, show on tablet+ */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {testimonials.filter((_, i) => i !== activeIndex).slice(0, 4).map((t, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(testimonials.indexOf(t))}
                className="p-4 bg-background border border-border rounded-xl text-left hover:border-primary/30 hover:shadow-soft transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{t.location}</span>
                </div>
                <p className="text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  "{t.quote.slice(0, 50)}..."
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
