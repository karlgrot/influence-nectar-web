import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScenarioCard } from "@/components/ScenarioCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SystemPreview } from "@/components/SystemPreview";
import heroCocktail from "@/assets/hero-cocktail.jpg";
import seductionWine from "@/assets/seduction-wine.jpg";
import mixingCocktails from "@/assets/mixing-cocktails.jpg";

const Index = () => {
  const scenarios = [
    {
      title: "Conquistar & Seduzir",
      description: "Transforme qualquer encontro em uma experiência magnética e inesquecível",
      icon: "💕",
      isPopular: true,
      features: [
        "Drinks afrodisíacos e suas dosagens exatas",
        "Playlist que desperta química instantânea",
        "Roteiros de conversa para criar conexão profunda",
        "Linguagem corporal irresistível",
        "Timing perfeito para cada movimento"
      ]
    },
    {
      title: "Impressionar Família",
      description: "Cause a melhor primeira impressão e seja lembrado para sempre",
      icon: "👨‍👩‍👧‍👦",
      features: [
        "Drinks clássicos que demonstram sofisticação",
        "Conversas que geram admiração e respeito",
        "Como ser o genro/nora dos sonhos",
        "Etiqueta social impecável",
        "Histórias que cativam todas as gerações"
      ]
    },
    {
      title: "Desarmar Rivais",
      description: "Neutralize tensões e transforme adversários em aliados",
      icon: "🤝",
      features: [
        "Drinks que criam ambiente de harmonia",
        "Técnicas de persuasão elegante",
        "Como dissipar conflitos com classe",
        "Linguagem pacificadora mas assertiva",
        "Estratégias para virar o jogo a seu favor"
      ]
    },
    {
      title: "Fortalecer Amizades",
      description: "Crie laços eternos e seja o amigo que todos querem ter por perto",
      icon: "🎉",
      features: [
        "Drinks para celebração e união",
        "Atividades que estreitam vínculos",
        "Como ser o centro das atenções positivas",
        "Tradições que marcam para sempre",
        "O segredo dos grupos inseparáveis"
      ]
    },
    {
      title: "Brilhar em Eventos",
      description: "Seja a pessoa mais interessante de qualquer festa ou reunião",
      icon: "✨",
      features: [
        "Drinks que chamam atenção e curiosidade",
        "Como se tornar o ponto focal natural",
        "Histórias que prendem multidões",
        "Networking estratégico com drinks",
        "Presença magnética em qualquer ambiente"
      ]
    },
    {
      title: "Criar Intimidade",
      description: "Construa momentos únicos que ficarão gravados para sempre",
      icon: "🌹",
      features: [
        "Drinks que despertam os sentidos",
        "Ambientação que derrete corações",
        "Conversas que tocam a alma",
        "Como criar memórias indeléveis",
        "A arte de ser inesquecível"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Executivo, 34 anos",
      content: "Em 3 semanas usando o manual, consegui impressionar meus sogros, reconquistar minha esposa e ainda virei o 'bartender oficial' do meu grupo de amigos. Minha vida social nunca foi tão rica!",
      beforeAfter: {
        before: "Sempre ficava no canto das festas, não sabia como começar conversas",
        after: "Sou o centro das atenções, todos querem saber meus 'segredos' de relacionamento"
      }
    },
    {
      name: "Marina L.",
      role: "Advogada, 28 anos",
      content: "O manual mudou completamente minha forma de me relacionar. Consegui o emprego dos sonhos impressionando no happy hour da empresa e ainda conquistei um relacionamento incrível!",
      beforeAfter: {
        before: "Tímida, insegura em eventos sociais e profissionais",
        after: "Confiante, carismática e com uma rede de contatos invejável"
      }
    },
    {
      name: "Roberto S.",
      role: "Empresário, 41 anos",
      content: "Pensei que era besteira no início, mas os resultados são inegáveis. Fechei 3 parcerias importantes em jantares estratégicos e meu casamento está mais apaixonado que nunca.",
      beforeAfter: {
        before: "Relacionamentos frios, negócios difíceis de fechar",
        after: "Parceiro irresistível, empresário magnético, casamento renovado"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCocktail} 
            alt="Luxury cocktail with golden lighting" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-hero mb-8 leading-none">
              Nunca Mais Passe Despercebido
            </h1>
            
            <div className="text-hero text-primary mb-8">
              em NENHUMA Ocasião
            </div>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              O <span className="text-primary font-bold">primeiro sistema completo</span> que transforma 
              drinks em <span className="text-accent font-bold">ferramentas de sedução e influência</span> 
              para QUALQUER situação social
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button variant="hero" size="hero" className="animate-pulse-glow">
                🚀 QUERO SER IRRESISTÍVEL
              </Button>
              <Button variant="premium" size="lg">
                Ver Sistema Completo
              </Button>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 border border-primary/30 shadow-elegant backdrop-blur-sm">
              <p className="text-lg text-accent font-bold mb-4">
                ⚡ PARE DE IMPROVISAR NOS MOMENTOS QUE MAIS IMPORTAM!
              </p>
              <p className="text-muted-foreground">
                O manual que deveria ser ensinado na escola - como ser irresistível em qualquer situação social
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6 text-primary">
              Domine QUALQUER Situação Social
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cada cenário inclui <span className="text-primary font-bold">drink estratégico + playlist + roteiros de conversa + linguagem corporal + timing perfeito</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <ScenarioCard
                key={index}
                {...scenario}
              />
            ))}
          </div>
        </div>
      </section>

      {/* System Preview */}
      <SystemPreview />

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section mb-8 text-secondary">
                Cansado de Ser Esquecível?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Sempre fica no canto das festas, sem saber como começar conversas</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Seus encontros são sempre "mais ou menos" - nunca memoráveis</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Improvisa sempre e os resultados são imprevisíveis</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Vê outros sendo o centro das atenções e não entende o "segredo"</p>
                </div>
              </div>
              
              <Button variant="seduction" size="lg">
                Eu Quero Mudar Isso AGORA!
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={seductionWine} 
                alt="Elegant wine setting for seduction" 
                className="rounded-2xl shadow-seduction w-full animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-hero p-6 rounded-2xl shadow-luxury">
                <p className="text-luxury-black font-bold text-lg">
                  🎯 Transformação<br/>
                  Garantida!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6 text-primary">
              Transformações Reais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pessoas comuns que se tornaram <span className="text-primary font-bold">irresistíveis</span> 
              usando nosso sistema
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mixingCocktails} 
            alt="Professional cocktail mixing scene" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section mb-8 text-primary">
              Como Você Viveu Até Hoje Sem Esse Guia?!
            </h2>
            
            <p className="text-2xl text-foreground mb-12 leading-relaxed">
              Pare de passar despercebido. <span className="text-primary font-bold">Hoje</span> você se transforma 
              na pessoa que todos querem conhecer, conquistar e ter por perto.
            </p>
            
            <div className="bg-gradient-card rounded-3xl p-12 border border-primary/30 shadow-elegant backdrop-blur-sm mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Situações Cobertas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Vidas Transformadas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Satisfação Garantida</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="hero" size="hero" className="animate-pulse-glow text-xl px-16">
                  🔥 ACESSO IMEDIATO - R$ 197
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">De R$ 497</p>
                  <p className="text-primary font-bold">OFERTA LIMITADA</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              ⚡ <span className="text-accent font-bold">GARANTIA TOTAL:</span> 30 dias para testar. 
              Se não ficar impressionado com os resultados, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;