import {CardsParallax, type iCardItem} from "@/components/ui/scroll-cards";


const cardItems: iCardItem[] = [
	{
		title: "Everest Camp",
		description: "Experience the ultimate trek to the world's highest mountain",
		tag: "trekking",
		src: "/Assets/Navoda.png",
		link: "#",
		color: "white",
		textColor: "white",
	},
	{
		title: "Annapurna",
		description: "Journey through the stunning landscapes of Nepal",
		src: "/Assets/Navoda.png",
		tag: "hiking",
		link: "#",
		color: "green",
		textColor: "white",
	},
	{
		title: "Inca Trail",
		description: "Ancient paths leading to Machu Picchu",
		src: "/Assets/Navoda.png",
		tag: "adventure",
		link: "#",
		color: "white",
		textColor: "black",
	},
	{
		title: "Swiss Alps",
		description: "Discover the breathtaking beauty of European mountains",
		src: "/Assets/Navoda.png",
		tag: "mountains",
		link: "#",
		color: "white",
		textColor: "white",
	},
];

const DemoOne = () => {
  return (

			<CardsParallax items={cardItems} />
   
  );
};

export { DemoOne };
