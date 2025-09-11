import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ScenarioCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  isPopular?: boolean;
  onViewGuide?: () => void;
}

export const ScenarioCard = ({ title, description, icon, features, isPopular, onViewGuide }: ScenarioCardProps) => {
  return (
    <Card className={`relative bg-gradient-card border-border/50 backdrop-blur-sm transition-luxury hover:scale-105 hover:shadow-luxury group ${isPopular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-hero px-4 py-1 text-xs font-bold text-luxury-black rounded-full shadow-luxury">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="p-8">
        <div className="text-6xl mb-6 text-center animate-float">{icon}</div>
        
        <h3 className="text-2xl font-bold text-center mb-4 text-primary">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-center mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-glow"></div>
              <span className="text-sm text-card-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant={isPopular ? "luxury" : "elegant"} 
          className="w-full group-hover:scale-105"
          onClick={onViewGuide}
        >
          View Complete Guide
        </Button>
      </div>
    </Card>
  );
};