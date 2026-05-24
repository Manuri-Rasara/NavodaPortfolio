import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Send } from "lucide-react";

const ContactMeBTN = () => {
  return (
    <Button className="relative text-sm font-medium rounded-full h-15 md:h-20 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-80 md:w-100 overflow-hidden cursor-pointer">
      <span className="relative z-10 transition-all duration-500 text-xl md:text-2xl ">
        Get in Touch
      </span>
      <div className="absolute right-1 w-12 md:w-16 h-12 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-68px)] group-hover:rotate-45">
  <Send size={20} />
</div>
    </Button>
  );
};

export default ContactMeBTN;
