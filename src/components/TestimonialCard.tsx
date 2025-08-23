import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

export const TestimonialCard = ({ name, role, content, beforeAfter }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50 backdrop-blur-sm transition-luxury hover:scale-105 hover:shadow-seduction">
      <div className="p-8">
        <div className="mb-6">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-xl">★</span>
            ))}
          </div>
          
          <blockquote className="text-lg text-card-foreground italic leading-relaxed mb-6">
            "{content}"
          </blockquote>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-secondary/20 rounded-lg p-4 border border-secondary/30">
            <h4 className="text-sm font-bold text-secondary mb-2">ANTES:</h4>
            <p className="text-sm text-muted-foreground">{beforeAfter.before}</p>
          </div>
          
          <div className="bg-primary/20 rounded-lg p-4 border border-primary/30">
            <h4 className="text-sm font-bold text-primary mb-2">DEPOIS:</h4>
            <p className="text-sm text-foreground font-medium">{beforeAfter.after}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center font-bold text-luxury-black">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-primary">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};