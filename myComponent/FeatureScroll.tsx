import {CardsParallax, type iCardItem} from "@/components/ui/scroll-cards";


const cardItems: iCardItem[] = [
	{
		title: "Navoda",
		description: "okok",
		tag: "trekking",
		src: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		link: "#",
		color: "black",
		textColor: "white",
	},
	{
		title: "Navoda",
		description: "kkk",
		src: "https://images.unsplash.com/photo-1635077637121-2f6013736f3d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tag: "hiking",
		link: "#",
		color: "green",
		textColor: "white",
	},
	{
		title: "Navoda",
		description: "iiiii",
		src: "https://images.unsplash.com/photo-1609668192525-c9b9342a0d92?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tag: "adventure",
		link: "#",
		color: "red",
		textColor: "black",
	},
	{
		title: "Navoda",
		description: "hhhhh",
		src: "https://images.unsplash.com/photo-1635191125273-ee825970dd05?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tag: "mountains",
		link: "#",
		color: "purple",
		textColor: "white",
	},
];

const DemoOne = () => {
  return (
		<CardsParallax items={cardItems} />  
  );
};

export { DemoOne };
