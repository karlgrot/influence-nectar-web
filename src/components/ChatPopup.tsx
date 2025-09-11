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
      <DialogContent className="max-w-2xl mx-4 sm:mx-auto bg-gradient-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl">
            <span className="text-2xl sm:text-3xl lg:text-4xl">{scenario.icon}</span>
            <span className="text-sm sm:text-base lg:text-lg">{scenario.title} - Interactive Guide</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
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
          <Card className="p-4 sm:p-6 bg-background/50 border-primary/20">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-primary">
                Tell me about: {currentQuestion}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground">
                  I'm here to guide you through this aspect of {scenario.title.toLowerCase()}. 
                  What would you like to know about "{currentQuestion.toLowerCase()}"?
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-3 sm:p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base">Basic Guide</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Essential tips and foundations</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-3 sm:p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base">Advanced Techniques</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Pro-level strategies</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-3 sm:p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base">Practical Examples</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Real-world scenarios</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="justify-start h-auto p-3 sm:p-4 text-left"
                    onClick={handleNext}
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base">Common Mistakes</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">What to avoid</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pt-4">
            <Button variant="ghost" onClick={onClose} className="text-sm sm:text-base">
              Close Guide
            </Button>
            
            <div className="flex gap-2 sm:gap-3">
              {currentQuestionIndex > 0 && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  className="text-sm sm:text-base"
                >
                  Previous
                </Button>
              )}
              
              <Button 
                variant={currentQuestionIndex === scenario.features.length - 1 ? "luxury" : "premium"}
                onClick={handleNext}
                className="text-sm sm:text-base"
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