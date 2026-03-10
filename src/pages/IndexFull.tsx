import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScenarioCard } from "@/components/ScenarioCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SystemPreview } from "@/components/SystemPreview";
import { ChatPopup } from "@/components/ChatPopup";
import heroCocktail from "@/assets/hero-cocktail.jpg";
import seductionWine from "@/assets/seduction-wine.jpg";
import mixingCocktails from "@/assets/mixing-cocktails.jpg";
import drinkBookingLogo from "@/assets/drinkbooking-main-logo.png";
import drinkBookingIcon from "@/assets/drinkbooking-main-logo.png";

const Index = () => {
  const [chatPopupOpen, setChatPopupOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<typeof scenarios[0] | null>(null);

  const handleViewGuide = (scenario: typeof scenarios[0]) => {
    setSelectedScenario(scenario);
    setChatPopupOpen(true);
  };
  const scenarios = [
    {
      title: "Conquer & Seduce",
      description: "Transform any encounter into a magnetic and unforgettable experience",
      icon: "💕",
      isPopular: true,
      features: [
        "Aphrodisiac drinks and their exact dosages",
        "Playlist that awakens instant chemistry",
        "Conversation scripts to create deep connection",
        "Irresistible body language",
        "Perfect timing for every move"
      ]
    },
    {
      title: "Impress Family",
      description: "Make the best first impression and be remembered forever",
      icon: "👨‍👩‍👧‍👦",
      features: [
        "Classic drinks that show sophistication",
        "Conversations that generate admiration and respect",
        "How to be the dream son/daughter-in-law",
        "Impeccable social etiquette",
        "Stories that captivate all generations"
      ]
    },
    {
      title: "Disarm Rivals",
      description: "Neutralize tensions and transform adversaries into allies",
      icon: "🤝",
      features: [
        "Drinks that create a harmonious atmosphere",
        "Elegant persuasion techniques",
        "How to dissipate conflicts with class",
        "Pacifying yet assertive language",
        "Strategies to turn the game in your favor"
      ]
    },
    {
      title: "Strengthen Friendships",
      description: "Create eternal bonds and be the friend everyone wants to have around",
      icon: "🎉",
      features: [
        "Drinks for celebration and unity",
        "Activities that strengthen bonds",
        "How to be the center of positive attention",
        "Traditions that mark forever",
        "The secret of inseparable groups"
      ]
    },
    {
      title: "Shine at Events",
      description: "Be the most interesting person at any party or gathering",
      icon: "✨",
      features: [
        "Drinks that draw attention and curiosity",
        "How to become the natural focal point",
        "Stories that captivate crowds",
        "Strategic networking with drinks",
        "Magnetic presence in any environment"
      ]
    },
    {
      title: "Create Intimacy",
      description: "Build unique moments that will be engraved forever",
      icon: "🌹",
      features: [
        "Drinks that awaken the senses",
        "Ambiance that melts hearts",
        "Conversations that touch the soul",
        "How to create indelible memories",
        "The art of being unforgettable"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Executive, 34 years old",
      content: "In 3 weeks using the manual, I managed to impress my in-laws, win back my wife and even became the 'official bartender' of my friend group. My social life has never been so rich!",
      beforeAfter: {
        before: "Always stayed in the corner at parties, didn't know how to start conversations",
        after: "I'm the center of attention, everyone wants to know my relationship 'secrets'"
      }
    },
    {
      name: "Marina L.",
      role: "Lawyer, 28 years old",
      content: "The manual completely changed how I relate to people. I got my dream job by impressing at the company happy hour and even found an incredible relationship!",
      beforeAfter: {
        before: "Shy, insecure at social and professional events",
        after: "Confident, charismatic and with an enviable network of contacts"
      }
    },
    {
      name: "Roberto S.",
      role: "Entrepreneur, 41 years old",
      content: "I thought it was nonsense at first, but the results are undeniable. I closed 3 important partnerships at strategic dinners and my marriage is more passionate than ever.",
      beforeAfter: {
        before: "Cold relationships, difficult business to close",
        after: "Irresistible partner, magnetic entrepreneur, renewed marriage"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src={drinkBookingLogo} 
                alt="DrinkBooking Logo" 
                className="h-8 sm:h-10 lg:h-12 object-contain"
              />
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs sm:text-sm px-2 sm:px-4"
              onClick={() => window.open('https://wa.me/5511939595959', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={heroCocktail} 
            alt="Luxury cocktail with golden lighting" 
            className="w-full h-full object-cover object-center opacity-30 sm:object-center md:object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-hero mb-6 sm:mb-8 leading-tight sm:leading-none px-2">
              Never Go Unnoticed Again
            </h1>
            
            <div className="text-hero text-primary mb-6 sm:mb-8 px-2">
              in ANY Occasion
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              The <span className="text-primary font-bold">first complete system</span> that transforms 
              drinks into <span className="text-accent font-bold">tools of seduction and influence</span> 
              for ANY social situation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <Button 
                variant="hero" 
                size="hero" 
                className="animate-pulse-glow w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.open('https://wa.me/5511939595959', '_blank')}
              >
                🚀 I WANT TO BE IRRESISTIBLE
              </Button>
              <Button 
                variant="premium" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5511939595959', '_blank')}
              >
                View Complete System
              </Button>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/30 shadow-elegant backdrop-blur-sm mx-4">
              <p className="text-base sm:text-lg text-accent font-bold mb-3 sm:mb-4">
                ⚡ STOP IMPROVISING IN THE MOMENTS THAT MATTER MOST!
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                The manual that should be taught in school - how to be irresistible in any social situation
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
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-section mb-4 sm:mb-6 text-primary px-4">
              Master ANY Social Situation
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Each scenario includes <span className="text-primary font-bold">strategic drink + playlist + conversation scripts + body language + perfect timing</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <ScenarioCard
                key={index}
                {...scenario}
                onViewGuide={() => handleViewGuide(scenario)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* System Preview */}
      <SystemPreview />

      {/* Problem/Solution Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-section mb-8 text-secondary">
                Tired of Being Forgettable?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Always stays in the corner at parties, not knowing how to start conversations</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Your encounters are always "just okay" - never memorable</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Always improvises and results are unpredictable</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">✗</span>
                  </div>
                  <p className="text-lg text-foreground">Sees others being the center of attention and doesn't understand the "secret"</p>
                </div>
              </div>
              
              <Button 
                variant="seduction" 
                size="lg"
                onClick={() => window.open('https://wa.me/5511939595959', '_blank')}
              >
                I Want to Change This NOW!
              </Button>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <img 
                src={seductionWine} 
                alt="Elegant wine setting for seduction" 
                className="rounded-2xl shadow-seduction w-full h-64 sm:h-80 lg:h-auto object-cover animate-float"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-hero p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-luxury">
                <p className="text-luxury-black font-bold text-sm sm:text-base lg:text-lg">
                  🎯 Guaranteed<br/>
                  Transformation!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-section mb-4 sm:mb-6 text-primary px-4">
              Real Transformations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Ordinary people who became <span className="text-primary font-bold">irresistible</span> 
              using our system
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
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mixingCocktails} 
            alt="Professional cocktail mixing scene" 
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section mb-6 sm:mb-8 text-primary px-4">
              How Did You Live Without This Guide Until Now?!
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground mb-8 sm:mb-12 leading-relaxed px-4">
              Stop going unnoticed. <span className="text-primary font-bold">Today</span> you transform 
              into the person everyone wants to meet, conquer and have around.
            </p>
            
            <div className="bg-gradient-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary/30 shadow-elegant backdrop-blur-sm mb-8 sm:mb-12 mx-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-sm sm:text-base text-muted-foreground">Situations Covered</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm sm:text-base text-muted-foreground">Lives Transformed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm sm:text-base text-muted-foreground">Satisfaction Guaranteed</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button 
                  variant="hero" 
                  size="hero" 
                  className="animate-pulse-glow text-base sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-16 w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/5511939595959', '_blank')}
                >
                  🔥 INSTANT ACCESS - $97
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">From $297</p>
                  <p className="text-primary font-bold text-sm sm:text-base">LIMITED OFFER</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              ⚡ <span className="text-accent font-bold animate-pulse hover:scale-110 transition-all duration-300 inline-block cursor-pointer">TOTAL GUARANTEE:</span> 30 days to test. 
              If you're not impressed with the results, we'll refund 100% of your money.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-border/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src={drinkBookingLogo} 
                  alt="DrinkBooking Logo" 
                  className="h-6 sm:h-8 lg:h-10 object-contain opacity-80"
                />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-center sm:text-left">
                Get in contact with us: <a href="mailto:info@drinkbooking.com" className="text-primary hover:text-primary/80 transition-colors">info@drinkbooking.com</a> | 
                <a href="https://wa.me/5511939595959" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">WhatsApp</a>
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by: <a href="https://2my.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">2my.ai</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Popup */}
      <ChatPopup 
        isOpen={chatPopupOpen}
        onClose={() => setChatPopupOpen(false)}
        scenario={selectedScenario}
      />
    </div>
  );
};

export default Index;