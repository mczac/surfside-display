import { Waves, Wind, Timer, TrendingUp } from "lucide-react";
import surfboard from "@/assets/surfboard.png";

const facts = [
  {
    icon: Waves,
    title: "Wave Origins",
    desc: "Waves travel thousands of miles across open ocean before breaking on shore — some Pacific swells originate near Antarctica.",
  },
  {
    icon: Wind,
    title: "Offshore Winds",
    desc: "The best surf conditions come with offshore winds that groom wave faces into smooth, hollow barrels.",
  },
  {
    icon: Timer,
    title: "Ancient Roots",
    desc: "Surfing dates back over 3,000 years to Polynesian cultures. Modern surfing exploded in the 1960s from Hawaii.",
  },
  {
    icon: TrendingUp,
    title: "Biggest Wave",
    desc: "The world record for the largest wave surfed is 86 feet (26.2 m), ridden by Sebastian Steudtner at Nazaré, Portugal.",
  },
];

const SurfboardHero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Surfboard */}
      <div className="flex-shrink-0 relative animate-float">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full scale-75" />
        <img
          src={surfboard}
          alt="Custom artistic surfboard with cosmic ocean design"
          className="relative w-52 md:w-64 lg:w-72 xl:w-80 drop-shadow-2xl"
        />
      </div>

      {/* Facts */}
      <div className="flex-1 max-w-xl space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-gradient-ocean">Ride the Wave</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Surfing is more than sport — it&apos;s a communion with the ocean&apos;s raw energy. Here are some facts every wave rider should know.
        </p>

        <div className="grid gap-5">
          {facts.map((fact, i) => (
            <div
              key={fact.title}
              className="glass-card p-5 flex gap-4 items-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <fact.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{fact.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SurfboardHero;
