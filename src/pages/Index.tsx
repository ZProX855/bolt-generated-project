import { FoodComparison } from "@/components/FoodComparison"
import { Card } from "@/components/ui/card";
const watchHeartLogo = "/placeholder.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src={watchHeartLogo}
            alt="Wellness Tracker Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Wellness Tracker
          </h1>
        </div>
        
        {/* Main content container */}
        <Card className="bg-white shadow-lg p-4 md:p-6">
          <FoodComparison />
        </Card>
      </div>
    </div>
  );
};

export default Index;
