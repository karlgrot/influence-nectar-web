import drinkBookingLogo from "@/assets/drinkbooking-main-logo.png";
import { Mail, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <img
          src={drinkBookingLogo}
          alt="DrinkBooking Logo"
          className="h-16 sm:h-20 object-contain mb-10 animate-float"
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          🚧 Under Construction
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg mb-4 leading-relaxed">
          We're preparing something amazing. Coming soon!
        </p>

        <p className="text-muted-foreground/70 text-sm mb-8">
          For investors and those interested in the project, get in touch:
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:info@2my.ai"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-luxury hover:scale-110 transition-all duration-300"
            aria-label="Email us"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://wa.me/5511996541392"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-luxury hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </div>

      <footer className="absolute bottom-6 text-sm text-muted-foreground">
        Powered by:{" "}
        <a
          href="https://2my.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 font-medium transition-colors"
        >
          2my.ai
        </a>
      </footer>
    </div>
  );
};

export default Index;
