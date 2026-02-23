import SurfboardHero from "@/components/SurfboardHero";
import SurfSeasonTable from "@/components/SurfSeasonTable";
import SeasonShowcase from "@/components/SeasonShowcase";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SurfboardHero />
    <SurfSeasonTable />
    <SeasonShowcase />
  </div>
);

export default Index;
