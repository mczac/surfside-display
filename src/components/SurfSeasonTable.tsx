import { Star, Waves, Wind, Users } from "lucide-react";

const data = [
  { month: "January", stars: 2, size: "2-5 ft", conditions: "Light winds, glassy mornings", bestFor: "Beginners, longboarders.", peak: false },
  { month: "March", stars: 3, size: "3-6 ft", conditions: "Transition to dry; improving consistency", bestFor: "Intermediates.", peak: false },
  { month: "May", stars: 5, size: "4-8 ft", conditions: "Peak season begins; offshore mornings", bestFor: "Intermediate - Advanced.", peak: true },
  { month: "July", stars: 5, size: "5-10 ft+", conditions: "Maximum size; strong SE trades", bestFor: "Experts; big wave hunters.", peak: true },
  { month: "September", stars: 5, size: "4-8 ft", conditions: "Clean conditions; high consistency", bestFor: "All advanced surfers.", peak: true },
  { month: "November", stars: 3, size: "3-6 ft", conditions: "Smaller swells; light variable winds", bestFor: "Intermediates.", peak: false },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? "fill-gold text-gold" : "text-muted-foreground/20"}`}
      />
    ))}
  </div>
);

const SurfSeasonTable = () => (
  <section className="px-6 py-20">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-ocean">
        Surf Season Guide
      </h2>
      <p className="text-muted-foreground mb-10">Month-by-month breakdown for planning your next session.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((row, i) => (
          <div
            key={row.month}
            className={`relative rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02] hover:glow-primary opacity-0 animate-fade-in-up ${
              row.peak
                ? "border-primary/40 bg-primary/5"
                : "border-border/50 bg-card/40"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {row.peak && (
              <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Peak
              </span>
            )}

            <h3 className="text-xl font-bold text-foreground mb-3">{row.month}</h3>

            <div className="flex items-center gap-2 mb-4">
              <Stars count={row.stars} />
              <span className="text-xs text-muted-foreground font-medium">{row.size}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Wind className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-snug">{row.conditions}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-snug">{row.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SurfSeasonTable;
