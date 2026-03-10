import drinkBookingLogo from "@/assets/drinkbooking-main-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <img
          src={drinkBookingLogo}
          alt="DrinkBooking Logo"
          className="h-16 sm:h-20 object-contain mb-10 animate-float"
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          🚧 Site em Construção
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
          Estamos preparando algo incrível para você. Em breve estaremos no ar!
        </p>

        <a
          href="https://wa.me/5511939595959"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-luxury hover:scale-105 transition-all duration-300"
        >
          📩 Fale Conosco
        </a>
      </div>

      {/* Footer */}
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
