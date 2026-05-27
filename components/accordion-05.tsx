import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils"; 

const items = [
  {
    id: "1",
    title: "Who am I?",
    content:
"I design experiences that feel effortless, human, and alive.Blending UI/UX strategy with bold visual storytelling to create products people remember. :)"  },
  {
    id: "2",
    title: "What do I design?",
    content:
      "I create clean, functional interfaces, brand systems, and digital products. My work blends simplicity with clarity and usability.",
  },
  {
    id: "3",
    title: "My design approach",
    content:
"I believe design should speak before words do.Every color, motion, and detail is intentional — built to guide, inspire, and simplify. ✨ :)"  },
  {
    id: "4",
    title: "Beyond design",
    content:
      "I bridge design and development, turning ideas into interactive experiences with modern tools and technology.",
  },
  {
    id: "5",
    title: "What inspires me",
    content:
      "Minimalism, architecture, and everyday details. I believe great design is found in the small things we often overlook.",
  },
  {
    id: "6",
    title: "Beyond design",
    content:
"Outside the screen, I explore creativity through music, photography, culture, and everyday moments.Inspiration lives in everything around us."  },
  {
    id: "7",
    title: "My toolkit",
    content:
    "Figma, Adobe XD, prototyping,Illustrator,photoshop visual systems, branding, and a mindset focused on clarity + creativity."
  },
  {
    id: "8",
    title: "Why me?",
    content:
    "Creative vision. User-first thinking. Attention to detail. Flexible team collaboration. Designs that look premium and feel effortless."
  },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="5" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b">
            <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-white/40 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-white/80 [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs">{item.id}</p>
                <h1 className="uppercase text-3xl md:text-5xl data-[state=open]:text-white/80">
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pb-6 pl-6 md:px-20">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
