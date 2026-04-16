import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Accordionpage() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className=" flex  flex-col gap-6 justify-center items-center md:w-[900px]"
    >
      <AccordionItem value="shipping" className='bg-white !px-4 !py-4 rounded-xl  w-full h-auto'>
        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold md:text-2xl text-lg ">What services does First Bridge Dispatch Services provid?</AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
          First Bridge Dispatch Services offers professional truck dispatching, load finding, route planning, broker communication, billing support, CDL driver recruitment, factoring setup assistance, and insurance guidance for owner operators and fleet owners.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="return" className='bg-white !px-4 !py-4 rounded-xl  w-full'>
        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold md:text-2xl text-lg ">How does your dispatch service help increase my revenue?</AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
          We secure high-paying loads, negotiate better freight rates, reduce deadhead miles, and keep your truck consistently moving to maximize your weekly and monthly earnings
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="percentage" className='bg-white !px-4 !py-4 rounded-xl  w-full'>
        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold md:text-2xl text-lg ">What percentage do you charge for dispatch services ?</AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
          Our dispatch service typically charges a competitive percentage per load, depending on the level of service and support required. Contact us fo pricing details tailored to your operation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="didicated" className='bg-white !px-4 !py-4 rounded-xl  w-full'>
        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold md:text-2xl text-lg ">Do you provide dedicated dispatchers?</AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
          Yes, every client is assigned a dedicated dispatcher who handles load booking, negotiations, and real-time support to ensure smooth operations around the clock.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="help" className='bg-white !px-4 !py-4 rounded-xl  w-full'>
        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold md:text-2xl text-lg ">Can you help new trucking companies with MC authority?</AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
          Yes, we assist new trucking companies with carrier setup guidance, documentation, and finding their first loads after activating MC authority so you can start earning as quickly as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="truck" className='bg-white border-b !px-4 !py-4 rounded-xl  w-full'>
        <AccordionTrigger className="font-[Orbitron] text-[#004e89] font-bold md:text-2xl text-lg ">What type of trucks do you work with?</AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
          We dispatch a variety of equipment including Dry Van, Reefer, Flatbed, Step Deck, Power Only, and Hotshot trucks across all 48 contiguous states.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
