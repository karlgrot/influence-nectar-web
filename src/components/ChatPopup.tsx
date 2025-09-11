import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
  scenario: {
    title: string;
    icon: string;
    features: string[];
  } | null;
}

export const ChatPopup = ({ isOpen, onClose, scenario }: ChatPopupProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleNext = () => {
    if (scenario && currentQuestionIndex < scenario.features.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // All questions completed
      handleComplete();
    }
  };

  const handleComplete = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    onClose();
  };

  if (!scenario) return null;

  const currentQuestion = scenario.features[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / scenario.features.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-4xl">{scenario.icon}</span>
            {scenario.title} - Interactive Guide
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestionIndex + 1} of {scenario.features.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-gradient-hero h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          <Card className="p-6 bg-background/50 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Tell me about: {currentQuestion}
              </h3>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm here to guide you through this aspect of {scenario.title.toLowerCase()}. 
                  What would you like to know about "{currentQuestion.toLowerCase()}"?
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium">Basic Guide</div>
                      <div className="text-sm text-muted-foreground">Essential tips and foundations</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium">Advanced Techniques</div>
                      <div className="text-sm text-muted-foreground">Pro-level strategies</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium">Practical Examples</div>
                      <div className="text-sm text-muted-foreground">Real-world scenarios</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium">Common Mistakes</div>
                      <div className="text-sm text-muted-foreground">What to avoid</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button variant="ghost" onClick={onClose}>
              Close Guide
            </Button>
            
            <div className="flex gap-3">
              {currentQuestionIndex > 0 && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                >
                  Previous
                </Button>
              )}
              
              <Button 
                variant={currentQuestionIndex === scenario.features.length - 1 ? "luxury" : "premium"}
                onClick={handleNext}
              >
                {currentQuestionIndex === scenario.features.length - 1 ? "Complete Guide" : "Next Question"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};