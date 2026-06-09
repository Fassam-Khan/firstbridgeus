import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Accordionpage() {
    return (
        <div className="mt-6">
            <div>
                {/* Heading  */}
                <div className="flex items-center mb-4  ">
                    <div className="text-[var(--primary-color)] font-bold text-lg w-[350px]">🚛 Starting a Trucking Business</div>
                    <div className="bg-[var(--primary-color)] h-[2px] w-full"></div>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="flex flex-col gap-4 "
                >
                    <AccordionItem value="shipping" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How much does it cost to start a trucking company from scratch?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Total startup costs typically range from $15,000 to $40,000, including truck down payment or purchase ($5,000–$25,000 down), commercial insurance ($667–$1,500/month), FMCSA filing fees (~$300–$500), IRP plates ($1,500–$3,500), ELD device (~$300–$800), and 2–3 months of operating reserves ($5,000–$10,000). If buying a truck outright with cash, total startup can exceed $60,000–$100,000.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gfd" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How long does it take to get MC authority and start hauling?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            FMCSA processes MC authority applications in 20–25 business days after submission. After authority activates, you also need to file BOC-3, pay UCR, get insurance on file, and set up your carrier packet before brokers will book you. Total timeline from filing to first load is typically 4–8 weeks. Using a dispatch service speeds up the broker onboarding process significantly.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gmhk" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>Do I need a CDL to be an owner operator</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            For semi-trucks (Class 8), yes — a Class A CDL is required. For hotshot operations using a pickup truck and gooseneck trailer where the combined GVWR stays under 26,001 lbs, no CDL is required. However, operating without a CDL limits your maximum payload significantly and excludes you from most brokered freight requiring a CDL carrier.

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gdf" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>Should I lease on with a carrier or get my own authority?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Leasing on (operating under a carrier's authority) is lower risk and simpler to start — no authority filing, insurance is often included, and loads are provided. However, you earn less and have less control. Getting your own authority gives you full control of your rates, loads, and business growth, but requires more capital and business knowledge. Most drivers benefit from leasing for 1–2 years before going independent.
                        </AccordionContent>
                    </AccordionItem>



                </Accordion>

            </div>
            <div className="mt-4">
                {/* Heading  */}
                <div className="flex items-center mb-4  ">
                    <div className="text-[var(--primary-color)] font-bold text-lg w-[350px]">💰 Rates, Revenue & Profitability</div>
                    <div className="bg-[var(--primary-color)] h-[2px] w-full"></div>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="flex flex-col gap-4 "
                >
                    <AccordionItem value="shipping" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>What is good rate per mile for an owner operator?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            A good rate is anything at least 15–20% above your cost per mile. For most owner operators with CPM of $1.50–$2.00, that means targeting $2.25+ for dry van, $2.75+ for reefer, and $3.00+ for flatbed and step deck. Use our Rate Per Mile Calculator and Freight Rate Checker to benchmark any load before accepting.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gfd" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How much can an operator make per year?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Gross revenue for active owner operators typically ranges from $120,000 to $250,000+ per year depending on equipment type, miles driven, and rate quality. After all operating expenses (fuel, insurance, truck payment, maintenance, permits, dispatch fee), net take-home is typically $45,000–$100,000+. Higher-margin equipment like reefer and flatbed consistently outperforms dry van net income.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gmhk" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How do I calculate whether a load is profitable?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Use the formula: Load Revenue − Fuel Cost − Dispatch Fee − Tolls − Maintenance Reserve − Deadhead Cost = Net Profit. Always calculate BEFORE accepting the load, not after. Our Load Profit Calculator does this instantly. A load is profitable if net margin is 15–20%+ after all expenses. Never rely on gross rate alone.

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gdf" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>When should I turn down a load?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Turn down a load when: (1) the net profit after all expenses is below 10–15%, (2) the delivery location is a freight dead zone with no return loads, (3) it requires significant deadhead that kills your margin, or (4) the broker has a poor payment history. A broke-even load in a good market beats a losing load in a dead market. Waiting one day for a better load is often more profitable than accepting a bad one.
                        </AccordionContent>
                    </AccordionItem>



                </Accordion>
            </div>
            <div className="mt-4">
                {/* Heading  */}
                <div className="flex items-center mb-4  ">
                    <div className="text-[var(--primary-color)] font-bold text-lg w-[350px]">📋 Dispatch Services & Brokers</div>
                    <div className="bg-[var(--primary-color)] h-[2px] w-full"></div>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="flex flex-col gap-4 "
                >
                    <AccordionItem value="shipping" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>What does a truck dispatcher do and what do they charge?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            A dispatcher finds loads, negotiates rates, handles broker communication, coordinates check calls, and manages rate confirmations and paperwork on your behalf. Most dispatchers charge 5–10% of gross load revenue per load. This fee is typically offset by the higher rates and time savings a professional dispatcher provides — most carriers net more with a dispatcher than self-dispatching at lower rates.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gfd" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How do I vet a freight broker before accepting a load?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Check the broker's MC number on the FMCSA SAFER website to confirm active authority and bond. Verify their credit rating on DAT Carrier TMS or Carrier411 — look for ratings of 90+ days to pay or "Quick Pay Available." Ask for their standard payment terms upfront (net 30 is standard; some offer quick pay for 2–3% fee). Dispatch services maintain vetted broker lists and avoid known slow-pay or problem brokers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gmhk" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>Can I use a dispatch service if I have my own broker relationships?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Yes — a good dispatch service supplements your existing relationships rather than replacing them. You can direct the dispatcher to work with your preferred brokers while they fill gaps with new loads. Many carriers maintain direct broker relationships for preferred lanes while using dispatch services to stay loaded during slow periods or when entering new markets.
                        </AccordionContent>
                    </AccordionItem>




                </Accordion>
            </div>
            <div className="mt-4">
                {/* Heading  */}
                <div className="flex items-center mb-4  ">
                    <div className="text-[var(--primary-color)] font-bold text-lg w-[350px]">⛽ Fuel, Costs & Operations</div>
                    <div className="bg-[var(--primary-color)] h-[2px] w-full"></div>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="flex flex-col gap-4 "
                >
                    <AccordionItem value="shipping" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How can I reduce my fuel costs as an owner operator?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            The most impactful strategies: (1) Use a fuel card (EFS, Comdata, RTS) for discounts of $0.10–$0.40/gallon, (2) Plan fuel stops at low-cost states (TX, OK, MO consistently cheaper), (3) Reduce idle time — 1 hour idling = ~0.8 gallons burned, (4) Maintain proper tire inflation — underinflated tires cut MPG by 0.5–1%, (5) Drive 62–65 mph instead of 70+ mph — saves 10–15% on fuel.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gfd" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>What is IFTA and how does it work?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            IFTA (International Fuel Tax Agreement) simplifies fuel tax reporting for carriers operating in multiple states. You report total miles driven and fuel purchased by state each quarter. States with low fuel tax (where you bought cheap fuel) collect; states with high fuel tax (where you drove more) receive a portion. Net result: you owe tax to high-tax states, or receive a refund from low-tax states. Use our IFTA Calculator to estimate your quarterly liability.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gmhk" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How should I handle taxes as an owner operator?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            Set aside 25–30% of net profit for federal and state taxes. Owner operators pay self-employment tax (15.3%) on top of income tax. Pay quarterly estimated taxes (due Jan 15, Apr 15, Jun 15, Sep 15) to avoid penalties. Track all expenses — fuel, maintenance, insurance, phone, home office, health insurance premiums, and retirement contributions are all deductible. Use accounting software or hire a trucking-specific CPA.
                        </AccordionContent>
                    </AccordionItem>




                </Accordion>
            </div>
            <div className="mt-4">
                {/* Heading  */}
                <div className="flex items-center mb-4  ">
                    <div className="text-[var(--primary-color)] font-bold text-lg w-[350px]">🚛 Equipment & Insurance</div>
                    <div className="bg-[var(--primary-color)] h-[2px] w-full"></div>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="flex flex-col gap-4 "
                >
                    <AccordionItem value="shipping" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>How much does commerical trucking insurance cost?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            For new authorities, expect $8,000–$18,000 per year ($667–$1,500/month) for primary liability, cargo, and physical damage combined. New authorities typically pay the most — costs decrease as your safety record builds. Required minimums: $750,000 liability (most brokers require $1M), $100,000 cargo. Get quotes from at least 3–5 providers — rates vary significantly between carriers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="gfd" className='bg-white px-4 py-1 rounded border border-gray-300  w-full h-auto hover:bg-[#FFDCD0] cursor-pointer transition-all'>
                        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold  text-lg "><h2>Should I buy or lease a truck to start?</h2></AccordionTrigger>
                        <AccordionContent className="text-[16px] h-auto">
                            For most new owner operators, financing a used truck with 20–30% down is the most practical starting point. Buying cash eliminates payments but ties up capital. Leasing (rent-to-own from carrier) is easy to start but expensive long-term. Used trucks in the $30,000–$80,000 range with 400,000–700,000 miles offer the best cost/value balance for new carriers. Avoid trucks with deferred maintenance — repair costs will wipe out your margins.
                        </AccordionContent>
                    </AccordionItem>





                </Accordion>
            </div>

        </div>
    )
}
