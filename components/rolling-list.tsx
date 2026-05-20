import { cn } from "@/lib/utils";
import Image from "next/image";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: "blue";
}

interface RollingTextItemProps {
  item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
  blue: "text-blue-500",
};

function RollingTextItem({ item }: RollingTextItemProps) {
  return (
    <div className="group relative w-full cursor-pointer select-none border-b border-neutral-200 dark:border-neutral-800 py-6">
      {/* Rolling text */}
      <div className="relative overflow-hidden h-[60px] md:h-20">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:group-hover:-translate-y-1/2 group-active:-translate-y-1/2">
          {/* State 1: Normal */}
          <div className="h-[60px] md:h-20 flex items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter">
              {item.title}
            </h2>
          </div>

          {/* State 2: Hover (Italic + Color) */}
          <div className="h-[60px] md:h-20 flex items-center">
            <h2
              className={cn(
                "text-5xl md:text-7xl font-black uppercase tracking-tighter italic",
                colorClassMap[item.color]
              )}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Category Label */}
      <span className="absolute top-8 right-0 text-xs font-bold uppercase tracking-widest text-neutral-400 transition-opacity duration-300 md:group-hover:opacity-0 group-active:opacity-0 hidden md:block">
        {item.category}
      </span>

      {/* Image Reveal Effect */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl",
          "transition-all duration-500 ease-out",
          "opacity-0 scale-95 rotate-3 translate-x-4",
          "md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:rotate-0 md:group-hover:translate-x-0",
          "group-active:opacity-100 group-active:scale-100 group-active:rotate-0 group-active:translate-x-0"
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover grayscale transition-all duration-500 ease-out md:group-hover:grayscale-0 group-active:grayscale-0"
          />
          <div className="absolute inset-0 bg-blue-600/15 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

function RollingTextList() {
  const items: ListItem[] = [
    {
      id: 1,
      title: "Discover",
      category: "Research",
      src: "/Assets/Work/App-Mos.png",
      alt: "Team discovering insights",
      color: "blue",
    },
    {
      id: 2,
      title: "Design",
      category: "Experience",
      src: "/Assets/Work/App-Mos.png",
      alt: "Design collaboration",
      color: "blue",
    },
    {
      id: 3,
      title: "Develop",
      category: "Engineering",
      src: "/Assets/Work/App-Mos.png",
      alt: "Developers coding",
      color: "blue",
    },
    {
      id: 4,
      title: "Deploy",
      category: "Launch",
      src: "/Assets/Work/App-Mos.png",
      alt: "Product launch",
      color: "blue",
    },
  ];

  return (
    <div className="mx-auto flex w-full flex-col items-center px-6 md:px-20 py-12">
      <h3 className="mb-20 text-2xl uppercase tracking-widest text-neutral-500">
        Work
      </h3>

      <div className="w-full flex flex-col">
        {items.map((item) => (
          <RollingTextItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export { RollingTextList };