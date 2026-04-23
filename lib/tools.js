import ratePerMile from "@/component/tools/ratePerMile";
import LoadProfitCalculator from "@/component/tools/LoadPro";
import DieselFuelCalculator from "@/component/tools/FuelCost";
import DispatchFeeCalculator from "@/component/tools/DispatchFee";
import DeadheadCostCalculator from "@/component/tools/DeathHost";
import BreakEvenCalculator from "@/component/tools/Breakeven";
import TruckPaymentCalculator from "@/component/tools/TruckPayment";
import FreightWeightCalculator from "@/component/tools/Freight";

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
  {
    slug: "fuel-cost",
    icon: "⛽",
    name: "Fuel Cost Calculator",
    description: "Estimate total diesel usage and fuel cost for any trip distance based on your truck's MPG",
    component: DieselFuelCalculator,
  },
  {
    slug: "dispatch-fee",
    icon: "📋",
    name: " Dispatch Fee Calculator",
    description: "Calculate dispatcher percentage fees from load revenue and see your remaining take-home pay.",
    component: DispatchFeeCalculator
  },
  {
    slug: "deadhead-cost",
    icon: "🛣",
    name: "Deadhead Cost Calculator",
    description: "Find out exactly how much money you lose on empty miles and fuel wasted on deadhead trips",
    component: DeadheadCostCalculator 
  },
  {
    slug: "break-even",
    icon: "⚖️",
    name: "Break Even Rate Calculator",
    description: "Know the minimum rate per mile needed to cover all monthly trucking expenses and stay profitable",
    component: BreakEvenCalculator 
  },
  {
    slug: "truck-payment",
    icon: "🏦",
    name: "Semi Truck Payment Calculator",
    description: "Estimate monthly truck loan payments, total interest, and full cost over your loan term.",
    component: TruckPaymentCalculator 
  },
  {
    slug: "freight-weight",
    icon: "📦",
    name: "Freight Weight Calculator",
    description: "Estimate monthly truck load payments, total interest, and full cost over your loan term",
    component: FreightWeightCalculator 
  },
  {
    slug: "break-even",
    icon: "⚖️",
    name: "Break Even Rate Calculator",
    description: "Know the minimum rate per mile needed to cover all monthly trucking expenses and stay profitable",
    component: FreightWeightCalculator 
  },
];