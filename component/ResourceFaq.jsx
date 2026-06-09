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
        </div>
    )
}
