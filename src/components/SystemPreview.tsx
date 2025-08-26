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
    title: "Perfect Drink",
    description: "Exact recipe for each specific situation"
  },
  {
    icon: "🎵",
    title: "Strategic Playlist",
    description: "Calculated music for every moment"
  },
  {
    icon: "🍽️",
    title: "Complete Menu",
    description: "Accompaniments that amplify the effect"
  },
  {
    icon: "💡",
    title: "Total Ambiance",
    description: "Ideal colors, lighting and decoration"
  },
  {
    icon: "🎯",
    title: "Conversation Scripts",
    description: "Tested and approved dialogues"
  },
  {
    icon: "📖",
    title: "Captivating Stories",
    description: "Narratives that grab attention"
  },
  {
    icon: "🤝",
    title: "Body Language",
    description: "Gestures and posture for each scenario"
  },
  {
    icon: "⏰",
    title: "Perfect Timing",
    description: "When to make each move"
  }
];

export const SystemPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6 text-primary">
            The Complete System Revealed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each situation includes <span className="text-primary font-bold">8 strategic elements</span> 
            working in perfect harmony to guarantee your social success
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
              🎯 EXAMPLE: "Winning Over Your Crush" Scenario
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div>
                <h4 className="font-bold text-accent mb-2">🍸 Strategic Drink:</h4>
                <p className="text-sm text-muted-foreground mb-4">Gin & Tonic with Orange - sophisticated yet relaxed</p>
                
                <h4 className="font-bold text-accent mb-2">🎵 Calculated Playlist:</h4>
                <p className="text-sm text-muted-foreground mb-4">Smooth Indie Pop → Engaging R&B → Subtle Electronic</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">💬 Conversation Script:</h4>
                <p className="text-sm text-muted-foreground mb-4">"This song reminds me of..." + storytelling technique</p>
                
                <h4 className="font-bold text-accent mb-2">⏰ Perfect Timing:</h4>
                <p className="text-sm text-muted-foreground">Exact moment for each move</p>
              </div>
            </div>
            
            <Button variant="luxury" size="lg" className="animate-pulse-glow">
              I WANT ACCESS TO THE COMPLETE SYSTEM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};