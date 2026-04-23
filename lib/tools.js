import ratePerMile from "@/component/tools/ratePerMile";
import LoadProfitCalculator from "@/component/tools/LoadPro";
import DieselFuelCalculator from "@/component/tools/FuelCost";
import DispatchFeeCalculator from "@/component/tools/DispatchFee";
import DeadheadCostCalculator from "@/component/tools/DeathHost";
import BreakEvenCalculator from "@/component/tools/Breakeven";
import TruckPaymentCalculator from "@/component/tools/TruckPayment";
import FreightWeightCalculator from "@/component/tools/Freight";
import IFTATaxCalculator from "@/component/tools/IFTA";
import HOSCalculator from "@/component/tools/HosCalculator";
import TripProfitCalculator from "@/component/tools/TripProfit";
import CostPerMileCalculator from "@/component/tools/CostPer";
import WeeklyRevenueEstimator from "@/component/tools/WeeklyRev";
import LoanAffordabilityCalculator from "@/component/tools/Truckloan";

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
    slug: "ifta-tax",
    icon: "📝",
    name: "IFTA Tax Calculator",
    description: "Estimate quartely fuel tax owed based on miles driven and gallons purchased across states",
    component: IFTATaxCalculator 
  },
  {
    slug: "hos-calculator",
    icon: "⏱",
    name: "HOS Driving Time Calculator",
    description: "Check remaining driving hours, on-duty time, and break requirements to stay HOS compilant",
    component: HOSCalculator 
  },
  {
    slug: "trip-profit",
    icon: "📈",
    name: " Trip Profit Calculator",
    description: "Estimate total profit after substracting fuel, talls, dispatch fees, and all other expanses",
    component: TripProfitCalculator 
  },
  {
    slug: "cost-per-mile",
    icon: "🔍",
    name: "Cost Per Mile Calculator",
    description: "Calculate your real operating cost per mile and set rates that guarantee a healthy profit margin",
    component: CostPerMileCalculator 
  },
  {
    slug: "weekly-revenue",
    icon: "📅",
    name: "Weekly Revenue Estimator",
    description: "Project weekly, monthly, and annual earnings based on your rate per mile and miles driven",
    component: WeeklyRevenueEstimator 
  },
  {
    slug: "loan-affordability",
    icon: "💳",
    name: "Truck Loan Affordability Calculator",
    description: "Determine the maximum monthly truck payment your business can safetly afford without risk",
    component: LoanAffordabilityCalculator 
  },
];