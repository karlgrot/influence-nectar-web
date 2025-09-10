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
              Never Go Unnoticed Again
            </h1>
            
            <div className="text-hero text-primary mb-8">
              in ANY Occasion
            </div>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              The <span className="text-primary font-bold">first complete system</span> that transforms 
              drinks into <span className="text-accent font-bold">tools of seduction and influence</span> 
              for ANY social situation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button variant="hero" size="hero" className="animate-pulse-glow">
                🚀 I WANT TO BE IRRESISTIBLE
              </Button>
              <Button variant="premium" size="lg">
                View Complete System
              </Button>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 border border-primary/30 shadow-elegant backdrop-blur-sm">
              <p className="text-lg text-accent font-bold mb-4">
                ⚡ STOP IMPROVISING IN THE MOMENTS THAT MATTER MOST!
              </p>
              <p className="text-muted-foreground">
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
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6 text-primary">
              Master ANY Social Situation
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Each scenario includes <span className="text-primary font-bold">strategic drink + playlist + conversation scripts + body language + perfect timing</span>
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
              
              <Button variant="seduction" size="lg">
                I Want to Change This NOW!
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
                  🎯 Guaranteed<br/>
                  Transformation!
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
              Real Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              How Did You Live Without This Guide Until Now?!
            </h2>
            
            <p className="text-2xl text-foreground mb-12 leading-relaxed">
              Stop going unnoticed. <span className="text-primary font-bold">Today</span> you transform 
              into the person everyone wants to meet, conquer and have around.
            </p>
            
            <div className="bg-gradient-card rounded-3xl p-12 border border-primary/30 shadow-elegant backdrop-blur-sm mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Situations Covered</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Lives Transformed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Satisfaction Guaranteed</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="hero" size="hero" className="animate-pulse-glow text-xl px-16">
                  🔥 INSTANT ACCESS - $97
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">From $297</p>
                  <p className="text-primary font-bold">LIMITED OFFER</p>
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
      <footer className="py-8 border-t border-border/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              Get in contact with us: <a href="mailto:info@drinkbooking.com" className="text-primary hover:text-primary/80 transition-colors">info@drinkbooking.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;