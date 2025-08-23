import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SystemElement {
  icon: string;
  title: string;
  description: string;
}

const systemElements: SystemElement[] = [
  {
    icon: "🍸",
    title: "Drink Perfeito",
    description: "Receita exata para cada situação específica"
  },
  {
    icon: "🎵",
    title: "Playlist Estratégica",
    description: "Músicas calculadas para cada momento"
  },
  {
    icon: "🍽️",
    title: "Cardápio Completo",
    description: "Acompanhamentos que potencializam o efeito"
  },
  {
    icon: "💡",
    title: "Ambientação Total",
    description: "Cores, iluminação e decoração ideais"
  },
  {
    icon: "🎯",
    title: "Roteiros de Conversa",
    description: "Diálogos testados e aprovados"
  },
  {
    icon: "📖",
    title: "Histórias Cativantes",
    description: "Narrativas que prendem a atenção"
  },
  {
    icon: "🤝",
    title: "Linguagem Corporal",
    description: "Gestos e postura para cada cenário"
  },
  {
    icon: "⏰",
    title: "Timing Perfeito",
    description: "Quando fazer cada movimento"
  }
];

export const SystemPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6 text-primary">
            O Sistema Completo Revelado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada situação inclui <span className="text-primary font-bold">8 elementos estratégicos</span> 
            trabalhando em perfeita harmonia para garantir seu sucesso social
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {systemElements.map((element, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 backdrop-blur-sm transition-luxury hover:scale-105 hover:shadow-luxury group"
            >
              <div className="p-6 text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {element.icon}
                </div>
                <h3 className="font-bold text-primary mb-3 group-hover:text-primary-glow transition-luxury">
                  {element.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {element.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-card border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-elegant">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎯 EXEMPLO: Cenário "Conquistar o Crush"
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div>
                <h4 className="font-bold text-accent mb-2">🍸 Drink Estratégico:</h4>
                <p className="text-sm text-muted-foreground mb-4">Gin Tônica com Laranja - sofisticado mas descontraído</p>
                
                <h4 className="font-bold text-accent mb-2">🎵 Playlist Calculada:</h4>
                <p className="text-sm text-muted-foreground mb-4">Indie Pop suave → R&B envolvente → Eletrônica sutil</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">💬 Roteiro de Conversa:</h4>
                <p className="text-sm text-muted-foreground mb-4">"Essa música me lembra de..." + técnica de storytelling</p>
                
                <h4 className="font-bold text-accent mb-2">⏰ Timing Perfeito:</h4>
                <p className="text-sm text-muted-foreground">Momento exato para cada movimento</p>
              </div>
            </div>
            
            <Button variant="luxury" size="lg" className="animate-pulse-glow">
              QUERO ACESSO AO SISTEMA COMPLETO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};