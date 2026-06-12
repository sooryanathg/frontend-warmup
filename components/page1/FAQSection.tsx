import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-8 pb-20">
      <h2 className="mb-8 text-center text-[42px] font-bold tracking-tight">
        Frequently Asked Questions
      </h2>
      <p className="mb-12 text-center text-lg text-zinc-500">
  Answers to common questions about academics, resources, and department activities.
</p>


 <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="item-1">
          <AccordionTrigger
  className="
  px-4 py-3
  text-lg font-medium
  hover:no-underline
  transition-all duration-300
  hover:text-zinc-700
  hover:translate-x-1
"
>
            Where can students access notes and PYQs?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-zinc-600">
            Students can access notes and previous year question papers through
            the department portal.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger
  className="
  px-4 py-3
  text-lg font-medium
  hover:no-underline
  transition-all duration-300
  hover:text-zinc-700
  hover:translate-x-1
"
>
            How can I contact faculty members?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-zinc-600">
            Faculty profiles and contact details are available in the Faculty
            Information section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger
  className="
  px-4 py-3
  text-lg font-medium
  hover:no-underline
  transition-all duration-300
  hover:text-zinc-700
  hover:translate-x-1
"
>
            Are project opportunities available for students?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-zinc-600">
            Yes. Students can participate in academic, research, and innovative
            projects throughout the year.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger
  className="
  px-4 py-3
  text-lg font-medium
  hover:no-underline
  transition-all duration-300
  hover:text-zinc-700
  hover:translate-x-1
"
>
            How can I stay updated about events?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-zinc-600">
            Upcoming workshops, seminars, and hackathons are regularly posted
            on the department website.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger
  className="
  px-4 py-3
  text-lg font-medium
  hover:no-underline
  transition-all duration-300
  hover:text-zinc-700
  hover:translate-x-1
"
>
            Are study materials available online?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-zinc-600">
            Important notes and academic resources are provided digitally for students.
            This ensures materials are accessible anytime and anywhere.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger
  className="
  px-4 py-3
  text-lg font-medium
  hover:no-underline
  transition-all duration-300
  hover:text-zinc-700
  hover:translate-x-1
"
>
            What are the placement opportunities available for students?
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-zinc-600">
            The department provides students with placement support through training programs
            , aptitude sessions, and campus recruitment drives. Many students secure opportunities 
            in leading companies through internships and placements.
          </AccordionContent>
        </AccordionItem>


      </Accordion>
      </div>
    </section>
  );
}