import surfTable from "@/assets/surf-table.png";
import oceanHero from "@/assets/ocean-hero.jpg";

const SeasonShowcase = () => (
  <section className="px-6 py-20">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-ocean">
        Season at a Glance
      </h2>
      <p className="text-muted-foreground mb-10">Visual breakdown of the best surfing months around the year.</p>

      <div className="relative rounded-2xl overflow-hidden glow-primary">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={oceanHero}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-12 flex flex-col items-center gap-8">
          <div className="rounded-xl overflow-hidden border border-border/40 shadow-2xl max-w-4xl w-full">
            <img
              src={surfTable}
              alt="Surf season data table showing wave consistency, conditions, and recommended skill levels by month"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-center">
            <div className="glass-card p-5">
              <p className="text-3xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground mt-1">Peak Months</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-3xl font-bold text-accent">10 ft+</p>
              <p className="text-sm text-muted-foreground mt-1">Max Wave Height</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-3xl font-bold text-gold">★★★★★</p>
              <p className="text-sm text-muted-foreground mt-1">July Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SeasonShowcase;
