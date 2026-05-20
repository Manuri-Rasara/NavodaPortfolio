import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/logo-cloud-3";

export default function Expert() {
  return (
    <div className="h-[400px] w-full place-content-center mb-2 md:mb-5">
    <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-3xl">
        <h2 className="mb-25 text-center font-medium text-foreground text-2xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">STACK</span>
    
          
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-2 md:mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}


const logos = [
  {
    src: "/Assets/Logos/figma-icon.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "/Assets/Logos/github-icon.svg",
    alt: "Supabase Logo",
  },
  {
    src: "/Assets/Logos/vscode-icon.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "/Assets/Logos/xd-icon.svg",
    alt: "Turso Logo",
  },
  {
    src: "/Assets/Logos/CSS-SVG.svg",
    alt: "Vercel Logo",
  },
  {
    src: "/Assets/Logos/HTML.png",
    alt: "Vercel Logo",
  },
    {
    src: "/Assets/Logos/PS.png",
    alt: "Vercel Logo",
  },
    {
    src: "/Assets/Logos/AI.png",
    alt: "Vercel Logo",
  },

];
