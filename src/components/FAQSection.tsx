import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to know how to ski?",
    answer: "Not at all! Borovets has excellent ski schools. First-timers can join our trips and have an absolute blast."
  },
  {
    question: "What's the vibe like?",
    answer: "We attract friendly, social students from UK universities who want to ski during the day, make memories, and meet new people. It’s all about good vibes, community, and feeling part of something."
  },
  {
    question: "How do I get to Borovets?",
    answer: "Fly into Sofia Airport (SOF) or Plovdiv Airport (PDV). We'll share the best flight deals in our group chat and arrange transfers from the airport directly to the resort."
  },
  {
    question: "Is it safe?",
    answer: "Absolutely. Bulgaria is very safe, and you'll have 24/7 support from our experienced Broski reps. We also require travel insurance for all guests."
  },
  {
    question: "Can I come solo?",
    answer: "100%! Most people book solo or with 1-2 friends. Our packages are designed to help you meet new people through shared accommodation, group activities, and social events."
  },
  {
    question: "Where do I fly from?",
    answer: "Flights will be from Manchester Airport (MAN), Liverpool Airport (LPL), Birmingham Airport (BHX), or London airports (LHR, LGW)."
  },
  {
    question: "What's the payment process?",
    answer: "Register interest now (it's free!), and we'll send you booking details. A £100 deposit secures your spot, with the balance due 6 weeks before departure."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">FAQs</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            GOT <span className="text-gradient-gold">QUESTIONS</span>?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto glass rounded-2xl p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
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

export default FAQSection;
