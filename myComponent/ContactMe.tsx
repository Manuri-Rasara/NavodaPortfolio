import { ContainerScroll, CardSticky } from "@/components/cards-stack"
import { Button } from "@/components/ui/button"
import ContactMeBTN from "./ContactMeBTN"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "UI/UX Design",
    description:
      "I create visually stunning and user-friendly interfaces for websites and mobile apps, ensuring seamless user experiences that align with your brand identity.",
  },
  {
    id: "process-2",
    title: "Graphic Design",
    description:
      "I design eye-catching visuals including logos, social media posts, and marketing materials that effectively communicate your message and enhance brand recognition.",
  },
  {
    id: "process-3",
    title: "Creative Designer",
    description:
      "I create stunning visual designs and digital assets that bring your ideas to life.",
  },
  // {
  //   id: "process-4",
  //   title: "Web Development",
  //   description:
  //   "I build responsive, fast, and secure websites using modern technologies, ensuring optimal performance across all devices.",
  // },
  // {
  //   id: "process-5",
  //   title: "Automation Engineer",
  //   description:
  //     "I design and implement automated systems that streamline workflows, reduce manual effort, and improve efficiency for businesses and industries.",
  // },
]

// const WORK_PROJECTS = [
//   {
//     id: "work-project-3",
//     title: "YCF DEV",
//     services: ["Portfolio", "Partnership", "UI UX Design"],
//     imageUrl:
//       "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: "work-project-1",
//     title: "Stridath Ecommerce",
//     services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
//     imageUrl:
//       "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: "work-project-2",
//     title: "Marketing Agency",
//     services: ["Partnership", "UI UX Design", "Development"],
//     imageUrl:
//       "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ]

// const ACHIEVEMENTS = [
//   {
//     id: "achivement-1",
//     title: "4",
//     description: "site of the day",
//     bg: "rgb(58,148,118)",
//   },
//   {
//     id: "achivement-2",
//     title: "60+",
//     description: "website created",
//     bg: "rgb(195,97,158)",
//   },
//   {
//     id: "achivement-3",
//     title: "5+",
//     description: "years of experience",
//     bg: "rgb(202,128,53)",
//   },
//   {
//     id: "achivement-4",
//     title: "6+",
//     description: "component created",
//     bg: "rgb(135,95,195)",
//   },
// ]
const Process = () => {
  return (
<div className="container min-h-svh place-content-center px-8 md:px-20 text-stone-900 overflow-clip my-20 md:my-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky self-start pt-12 md:py-12">
          {/* <h5 className=" text-xs uppercase tracking-wide">Contact Me</h5> */}
          <h2 className="mb-10 md:mb-20 mt-4 text-4xl md:text-6xl font-bold tracking-tight text-center md:text-left">
            CONTACT ME
          </h2>
          <div className="flex justify-center md:justify-start">
            <ContactMeBTN/>
          </div>
        </div>
        <ContainerScroll className="space-y-[15vh] md:space-y-[30vh] py-12 pb-[10vh]">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-2xl border p-8 shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-indigo-500">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-foreground">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

// const Work = () => {
//   return (
//     <div className="container min-h-svh place-content-center bg-slate-900 p-12 text-stone-50">
//       <div className="text-center">
//         <h5 className=" text-xs uppercase tracking-wide">latest projects</h5>
//         <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
//           Get a glimpse of <span className="text-indigo-500">our work</span>
//         </h2>
//         <p className="mx-auto max-w-prose text-sm text-muted/80">
//           From ecommerce to startup landing pages and singl/multi page websites,
//           building fully responsive and functional website that showcase your
//           product and your unique identity.
//         </p>
//       </div>
//       <ContainerScroll className="min-h-[500vh] py-12">
//         {WORK_PROJECTS.map((project, index) => (
//           <CardSticky
//             key={project.id}
//             index={index}
//             className="w-full overflow-hidden rounded-sm border border-x-indigo-900 border-y-indigo-500 bg-indigo-950"
//             incrementY={60}
//             incrementZ={5}
//           >
//             <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
//               <h2 className="text-2xl font-bold tracking-tighter">
//                 {project.title}
//               </h2>
//               <div className="flex flex-wrap gap-1">
//                 {project.services.map((service) => (
//                   <div
//                     key={service}
//                     className="flex rounded-xl bg-indigo-900 px-2 py-1"
//                   >
//                     <span className="text-xs tracking-tighter text-muted">
//                       {service}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <img
//               className="size-full object-cover"
//               width="100%"
//               height="100%"
//               src={project.imageUrl}
//             />
//           </CardSticky>
//         ))}
//       </ContainerScroll>
//     </div>
//   )
// }

// const Achievements = () => {
//   return (
    
//       <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
//         {ACHIEVEMENTS.map((achievement, index) => (
//           <CardSticky
//             key={achievement.id}
//             incrementY={20}
//             index={index + 2}
//             className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl  border border-current p-8 shadow-md"
//             style={{ rotate: index + 2, background: achievement.bg }}
//           >
//             <h1 className="text-left text-6xl font-semibold opacity-80">
//               {achievement.title}
//             </h1>
//             <div className="place-items-end text-right">
//               <h3 className="max-w-[10ch] text-wrap  text-4xl font-semibold capitalize tracking-tight">
//                 {achievement.description}
//               </h3>
//             </div>
//           </CardSticky>
//         ))}
//       </ContainerScroll>
    
//   )
// }
export { Process }
