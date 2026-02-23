import { Star } from "lucide-react";
import oceanHero from "@/assets/ocean-hero.jpg";

const data = [
  { month: "January", stars: 2, size: "2-5 ft", conditions: "Light winds, glassy mornings", bestFor: "Beginners, longboarders." },
  { month: "March", stars: 3, size: "3-6 ft", conditions: "Transition to dry; improving consistency", bestFor: "Intermediates." },
  { month: "May", stars: 5, size: "4-8 ft", conditions: "Peak season begins; offshore mornings", bestFor: "Intermediate - Advanced." },
  { month: "July", stars: 5, size: "5-10 ft+", conditions: "Maximum size; strong SE trades", bestFor: "Experts; big wave hunters." },
  { month: "September", stars: 5, size: "4-8 ft", conditions: "Clean conditions; high consistency", bestFor: "All advanced surfers." },
  { month: "November", stars: 3, size: "3-6 ft", conditions: "Smaller swells; light variable winds", bestFor: "Intermediates." },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "fill-gold text-gold" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const SeasonShowcase = () => (
  <section className="px-6 py-20">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-ocean">
        Season at a Glance
      </h2>
      <p className="text-muted-foreground mb-10">Visual breakdown of the best surfing months around the year.</p>

      <div className="relative rounded-2xl overflow-hidden glow-primary">
        <div className="absolute inset-0">
          <img src={oceanHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative p-6 md:p-10">
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Month</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Wave Consistency</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Wind & Conditions</th>
                    <th className="px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={row.month}
                      className={`border-b border-border/30 transition-colors hover:bg-secondary/40 ${i === data.length - 1 ? "border-b-0" : ""}`}
                    >
                      <td className="px-6 py-5 font-semibold text-foreground">{row.month}</td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <Stars count={row.stars} />
                          <span className="text-sm text-muted-foreground">({row.size})</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground">{row.conditions}</td>
                      <td className="px-6 py-5 text-muted-foreground">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mx-auto text-center mt-8">
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
