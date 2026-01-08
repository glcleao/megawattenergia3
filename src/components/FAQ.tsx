import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isto tem algum custo?",
    answer: "Não. O serviço é totalmente gratuito para si. Analisamos a sua fatura, apresentamos as opções de poupança e acompanhamos a mudança sem qualquer custo.",
  },
  {
    question: "Vou ficar sem luz ou gás durante o processo?",
    answer: "Não. A mudança de comercializador é um processo administrativo. O fornecimento de energia nunca é interrompido.",
  },
  {
    question: "Quanto tempo demora todo o processo?",
    answer: "A simulação é enviada em poucas horas. Se decidir avançar com a mudança, o processo demora normalmente 5 a 10 dias úteis.",
  },
  {
    question: "O que fazem com a minha fatura?",
    answer: "Usamos a fatura apenas para identificar o seu consumo, tarifa atual e potência contratada. Estes dados permitem-nos calcular a poupança real. Não partilhamos nem vendemos os seus dados.",
  },
  {
    question: "Posso enviar uma foto da fatura em vez do PDF?",
    answer: "Sim. Pode enviar uma foto legível da fatura. O importante é conseguirmos ler os valores de consumo e identificação do contrato.",
  },
  {
    question: "E se eu não quiser mudar depois de ver a simulação?",
    answer: "Sem problema. A simulação é apenas informativa. A decisão de mudar é sempre sua e não há qualquer obrigação.",
  },
  {
    question: "Como sei que isto é legítimo?",
    answer: "Somos consultores de energia registados. Trabalhamos de forma transparente e pode contactar-nos a qualquer momento para esclarecer dúvidas. Não pedimos dados bancários nem acesso a contas.",
  },
  {
    question: "O que preciso para começar?",
    answer: "Apenas a sua fatura de eletricidade ou gás e um contacto (email ou telefone) para lhe enviarmos a simulação.",
  },
  {
    question: "Tenho de trocar o contador?",
    answer: "Não. O contador pertence ao operador de rede de distribuição, não ao comercializador. Mudar de comercializador não implica qualquer alteração no contador.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim. Se iniciar o processo e mudar de ideias, pode cancelar. Após a mudança estar concluída, pode sempre voltar a mudar de comercializador quando quiser.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas claras às dúvidas mais comuns.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
