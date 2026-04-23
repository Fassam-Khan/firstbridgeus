import ratePerMile from "@/component/tools/ratePerMile";
import LoadProfitCalculator from "@/component/tools/LoadPro";

export const tools = [
  {
    slug: "rate-calculator",
    icon : "💵",
    name: "Rate Per Mile Calculator",
    description: "Calculate how much you're earning per mile on any load based on pay and total miles",
    component: ratePerMile,
  },
  {
    slug: "load-profit-calculator",
    icon: "📊",
    name: "Load Profit Calculator",
    description: "See your actual profit after fuel, dispatch fees, tolls, and other expenses on any load.",
    component: LoadProfitCalculator,
  },
];