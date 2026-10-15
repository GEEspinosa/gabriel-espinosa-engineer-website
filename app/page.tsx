// // // "use client";

// // // import type { ReactNode } from "react";

// // // type Entry = {
// // //   title: string;
// // //   organization?: string;
// // //   location?: string;
// // //   dates?: string;
// // //   description?: string;
// // // };

// // // type Credit = {
// // //   year: string;
// // //   artist: string;
// // //   title: string;
// // //   roles: string;
// // // };

// // // const experience: Entry[] = [
// // //   {
// // //     title: "Owner & House Audio Engineer",
// // //     organization: "WinterBeast",
// // //     location: "Portland, Oregon",
// // //     dates: "2018–Present",
// // //     description:
// // //       "Founded and operate an independent recording studio in Northeast Portland. Produce, record, edit, and mix music projects from initial tracking through final delivery. Built and maintain the studio’s acoustic treatment, sound isolation, recording infrastructure, and analog-to-digital signal chain. Manage project planning, artist communication, scheduling, file organization, and delivery.",
// // //   },
// // //   {
// // //     title: "Audio Engineer",
// // //     organization: "Outta Sight Outta Mind Music",
// // //     location: "Portland, Oregon",
// // //     dates: "2022–2024",
// // //     description:
// // //       "Mixed more than 120 music projects through a community music program serving incarcerated participants. Developed standardized file-naming and archiving workflows. Supported live showcases through technical setup, stage coordination, and front-of-house sound.",
// // //   },
// // //   {
// // //     title: "Writing Tutor",
// // //     organization: "Portland Community College",
// // //     location: "Portland, Oregon",
// // //     dates: "2018–2023",
// // //     description:
// // //       "Supported students in developing writing, research, argumentation, and revision skills across disciplines. Helped students clarify ideas, strengthen organization, and approach academic assignments with greater independence.",
// // //   },
// // //   {
// // //     title: "Facilities & AV Support",
// // //     organization: "Oregon Contemporary",
// // //     location: "Portland, Oregon",
// // //     dates: "2017–2018",
// // //     description:
// // //       "Supported exhibition spaces, facilities operations, and audiovisual systems in a contemporary art institution. Assisted with the technical and practical requirements of exhibitions and public programming.",
// // //   },
// // //   {
// // //     title: "Stagehand & AV Support",
// // //     organization: "Portland Institute for Contemporary Art",
// // //     location: "Portland, Oregon",
// // //     dates: "2017",
// // //     description:
// // //       "Provided event and audiovisual support for performances and public programming. Recorded performances for archival and press use.",
// // //   },
// // //   {
// // //     title: "Freelance Audio Engineer",
// // //     organization: "Independent / Contract",
// // //     location: "New York, California, Oregon & Montreal",
// // //     dates: "2008–2014",
// // //     description:
// // //       "Worked across commercial recording studios on music recording and production projects. Studio experience includes Headgear Recording, Rare Book Room, Avatar, LoHo, Mercy Sound, Applehead, Studios Piccolo, Hyde Street, and The Map Room. Project credits include work with Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
// // //   },
// // //   {
// // //     title: "AV Technician",
// // //     organization: "Portland Community College",
// // //     location: "Portland, Oregon",
// // //     dates: "2005–2006",
// // //     description:
// // //       "Provided audiovisual and technical support in an educational environment.",
// // //   },
// // // ];

// // // const releasedCredits: Credit[] = [
// // //   {
// // //     year: "2026",
// // //     artist: "Hail",
// // //     title: "Child of A Cursed Temple",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2026",
// // //     artist: "Zothique",
// // //     title: "Abominations of Yondo",
// // //     roles: "Drum Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2024",
// // //     artist: "Hail",
// // //     title: "Transgression",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2024",
// // //     artist: "Old Town Diamonds",
// // //     title: "40 Miles",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2023",
// // //     artist: "Hail",
// // //     title: "We Are Nothing",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2023",
// // //     artist: "Old Town Diamonds",
// // //     title: "A Pale Horse",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2023",
// // //     artist: "Hollow Senses",
// // //     title: "Taurobolium",
// // //     roles: "Mixing, Noise/Synthesis Interlude Recording",
// // //   },
// // //   {
// // //     year: "2022",
// // //     artist: "Fliege",
// // //     title: "The Invisible Seam",
// // //     roles: "Mixing, Vocal Recording",
// // //   },
// // //   {
// // //     year: "2020",
// // //     artist: "The Kolotov Mocktails",
// // //     title: "Ivy Hall",
// // //     roles: "Mixing",
// // //   },
// // //   {
// // //     year: "2019",
// // //     artist: "L’Acephale",
// // //     title: "L’Acephale",
// // //     roles: "Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2018",
// // //     artist: "Twin Perish",
// // //     title: "Blue Pour",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2016",
// // //     artist: "Bulldog Shadow",
// // //     title: "24-Hour Drunk",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2014",
// // //     artist: "Night Surgeon",
// // //     title: "Gandola Crimewave",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2013",
// // //     artist: "Night Surgeon",
// // //     title: "Self-Titled",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2012",
// // //     artist: "Steelhymen",
// // //     title: "0 || 0/0",
// // //     roles: "Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2011",
// // //     artist: "Blondie",
// // //     title: "Panic of Girls",
// // //     roles: "Recording",
// // //   },
// // //   {
// // //     year: "2011",
// // //     artist: "Shalants",
// // //     title: "Self-Titled",
// // //     roles: "Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2011",
// // //     artist: "Night Surgeon",
// // //     title: "Day for Night",
// // //     roles: "Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "2011",
// // //     artist: "Casey Spooner",
// // //     title: "Adult Contemporary",
// // //     roles: "Recording",
// // //   },
// // //   {
// // //     year: "2009",
// // //     artist: "Fischerspooner",
// // //     title: "Entertainment",
// // //     roles: "Recording",
// // //   },
// // //   {
// // //     year: "2008",
// // //     artist: "Mobile",
// // //     title: "Tales from the City",
// // //     roles: "Recording",
// // //   },
// // //   {
// // //     year: "2007",
// // //     artist: "Stab The Matador",
// // //     title: "Doctor",
// // //     roles: "Recording",
// // //   },
// // // ];

// // // const forthcomingCredits: Credit[] = [
// // //   {
// // //     year: "Forthcoming",
// // //     artist: "Notnauts",
// // //     title: "Title Forthcoming",
// // //     roles: "Full-Length LP · Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "Forthcoming",
// // //     artist: "Refrigerated Nurses",
// // //     title: "Title Forthcoming",
// // //     roles: "Full-Length LP · Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "Forthcoming",
// // //     artist: "Entrain",
// // //     title: "Title Forthcoming",
// // //     roles: "Full-Length LP · Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "Forthcoming",
// // //     artist: "Mistons",
// // //     title: "Return to Cinder",
// // //     roles: "Full-Length LP · Production, Recording, Mixing",
// // //   },
// // //   {
// // //     year: "Forthcoming",
// // //     artist: "L’Acephale",
// // //     title: "Eden!",
// // //     roles: "Full-Length LP · Production, Recording, Mixing",
// // //   },
// // // ];

// // // const activities: Entry[] = [
// // //   {
// // //     title: "Performance Photographer",
// // //     organization: "Portland Butoh Festival",
// // //     dates: "2024–2025",
// // //     description:
// // //       "Photographed live performances for a festival dedicated to butoh and experimental performance.",
// // //   },
// // //   {
// // //     title: "Grant Panelist / Reviewer",
// // //     organization: "Regional Arts & Culture Council",
// // //     location: "Portland, Oregon",
// // //     dates: "2022",
// // //     description:
// // //       "Reviewed arts grant applications as part of a regional arts funding process.",
// // //   },
// // //   {
// // //     title: "Grant Panelist / Reviewer",
// // //     organization: "Regional Arts & Culture Council",
// // //     location: "Portland, Oregon",
// // //     dates: "2020",
// // //     description:
// // //       "Reviewed arts grant applications as part of a regional arts funding process.",
// // //   },
// // //   {
// // //     title: "External Reviewer",
// // //     organization: "STANCE: An International Undergraduate Philosophy Journal",
// // //     dates: "2017",
// // //     description:
// // //       "Reviewed undergraduate philosophy submissions for an academic journal.",
// // //   },
// // // ];

// // // const awards: Entry[] = [
// // //   {
// // //     title: "Fellow",
// // //     organization: "Western States Center",
// // //     dates: "2022–2023",
// // //   },
// // // ];

// // // const skillGroups = [
// // //   {
// // //     title: "Recording & Production",
// // //     skills:
// // //       "Music production, studio recording, microphone selection and placement, analog signal chains, multitrack tracking, overdubbing, editing, reamping, arrangement support, session management",
// // //   },
// // //   {
// // //     title: "Mixing & Audio Systems",
// // //     skills:
// // //       "Digital audio workstations, in-the-box mixing, monitoring, routing, gain staging, signal flow, analog and digital integration, session delivery and archiving",
// // //   },
// // //   {
// // //     title: "Technical Operations",
// // //     skills:
// // //       "Studio construction and maintenance, acoustic treatment, sound isolation, equipment troubleshooting, audiovisual support, live sound, stage coordination",
// // //   },
// // //   {
// // //     title: "Photography & Film",
// // //     skills:
// // //       "Analog photography, 35mm and 120-format film, black-and-white film development, candid and lifestyle photography, performance documentation, portraiture, landscape photography (personal practice)",
// // //   },
// // //   {
// // //     title: "Research & Communication",
// // //     skills:
// // //       "Writing instruction, research, critical analysis, documentation, workflow development, project coordination, collaborative problem-solving",
// // //   },
// // // ];

// // // function SectionHeading({
// // //   number,
// // //   children,
// // // }: {
// // //   number: string;
// // //   children: ReactNode;
// // // }) {
// // //   return (
// // //     <div className="mb-7 flex items-baseline gap-4 border-b border-[#d9d6cf] pb-3">
// // //       <span className="font-mono text-[11px] tracking-[0.12em] text-[#8a867e]">
// // //         {number}
// // //       </span>
// // //       <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-[#393832]">
// // //         {children}
// // //       </h2>
// // //     </div>
// // //   );
// // // }

// // // function EntryBlock({ entry }: { entry: Entry }) {
// // //   return (
// // //     <article className="grid grid-cols-1 gap-x-8 gap-y-2 py-5 sm:grid-cols-[minmax(0,1fr)_145px]">
// // //       <div>
// // //         <h3 className="text-[16px] font-medium leading-snug text-[#292824]">
// // //           {entry.title}
// // //         </h3>
// // //         {entry.organization && (
// // //           <p className="mt-1 text-[14px] leading-relaxed text-[#5c5952]">
// // //             {entry.organization}
// // //             {entry.location ? ` · ${entry.location}` : ""}
// // //           </p>
// // //         )}
// // //         {entry.description && (
// // //           <p className="mt-3 max-w-[650px] text-[15px] leading-[1.8] text-[#55524b]">
// // //             {entry.description}
// // //           </p>
// // //         )}
// // //       </div>
// // //       {entry.dates && (
// // //         <p className="font-mono text-[11px] tracking-wide text-[#858178] sm:pt-1 sm:text-right">
// // //           {entry.dates}
// // //         </p>
// // //       )}
// // //     </article>
// // //   );
// // // }

// // // function CreditRow({ credit }: { credit: Credit }) {
// // //   return (
// // //     <div className="grid grid-cols-[82px_minmax(0,1fr)] gap-x-4 border-b border-[#e7e4dd] py-3 last:border-b-0 sm:grid-cols-[94px_minmax(0,1fr)_minmax(190px,0.8fr)] sm:gap-x-6">
// // //       <span className="pt-[2px] font-mono text-[11px] text-[#858178]">
// // //         {credit.year}
// // //       </span>
// // //       <div>
// // //         <p className="text-[14px] leading-snug text-[#292824]">
// // //           <span className="font-medium">{credit.artist}</span>
// // //           <span className="text-[#77736b]"> — </span>
// // //           <span className="italic">{credit.title}</span>
// // //         </p>
// // //         <p className="mt-1 text-[12px] leading-relaxed text-[#77736b] sm:hidden">
// // //           {credit.roles}
// // //         </p>
// // //       </div>
// // //       <p className="hidden text-[12px] leading-relaxed text-[#77736b] sm:block">
// // //         {credit.roles}
// // //       </p>
// // //     </div>
// // //   );
// // // }

// // // export default function Home() {
// // //   return (
// // //     <main className="min-h-screen bg-[#faf9f6] text-[#292824] selection:bg-[#dcd7ca]">
// // //       <div className="mx-auto max-w-[900px] px-6 pb-24 pt-10 sm:px-10 sm:pt-16">
// // //         <header className="border-b border-[#d9d6cf] pb-10">
// // //           <div className="flex items-start justify-between gap-6">
// // //             <div>
// // //               <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#858178]">
// // //                 Professional Archive
// // //               </p>
// // //               <h1 className="text-[2.6rem] font-normal leading-[0.98] tracking-[-0.055em] sm:text-[4.5rem]">
// // //                 Gabriel
// // //                 <br />
// // //                 Espinosa
// // //               </h1>
// // //               <p className="mt-6 max-w-[600px] text-[15px] leading-[1.85] text-[#5c5952]">
// // //                 Audio engineer, music producer, and interdisciplinary
// // //                 practitioner working across recording, arts, community
// // //                 programming, photography, and technical operations.
// // //               </p>
// // //             </div>
// // //             <button
// // //               type="button"
// // //               onClick={() => window.print()}
// // //               className="mt-1 shrink-0 border border-[#d9d6cf] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5c5952] transition-colors hover:border-[#8a867e] hover:text-[#292824] print:hidden"
// // //             >
// // //               Print / PDF
// // //             </button>
// // //           </div>

// // //           <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[12px] uppercase tracking-[0.08em] text-[#858178]">
// // //             <span>Portland, Oregon</span>
// // //             <a
// // //               href="mailto:YOUR-EMAIL-HERE"
// // //               className="transition-colors hover:text-[#292824]"
// // //             >
// // //               Email
// // //             </a>
// // //             <a
// // //               href="https://winter-beast-studio-site.vercel.app/"
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="transition-colors hover:text-[#292824]"
// // //             >
// // //               WinterBeast Studio
// // //             </a>
// // //             <a
// // //               href="https://ge-espinosa-photo-portfolio.vercel.app/"
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="transition-colors hover:text-[#292824]"
// // //             >
// // //               Photography
// // //             </a>
// // //           </div>
// // //         </header>

// // //         <section id="profile" className="py-12">
// // //           <SectionHeading number="01">Professional Profile</SectionHeading>
// // //           <div className="max-w-[720px] space-y-4 text-[15px] leading-[1.85] text-[#55524b]">
// // //             <p>
// // //               Audio engineer and producer with experience spanning independent
// // //               recording studios, commercial studio environments, community
// // //               music programs, and arts organizations. Work includes production,
// // //               recording, mixing, technical operations, and the development of
// // //               practical systems for creative collaboration.
// // //             </p>
// // //             <p>
// // //               Founded and built WinterBeast, an independent recording studio in
// // //               Portland, Oregon, in 2018. The studio provides a setting for
// // //               artist-led recording and production, with an emphasis on
// // //               collaboration, careful listening, and supporting the work rather
// // //               than imposing a predetermined process.
// // //             </p>
// // //             <p>
// // //               Academic background in philosophy, with additional experience in
// // //               writing instruction, arts grant review, performance photography,
// // //               and audiovisual support.
// // //             </p>
// // //           </div>
// // //         </section>

// // //         <section id="experience" className="py-12">
// // //           <SectionHeading number="02">Professional Experience</SectionHeading>
// // //           <div className="divide-y divide-[#e7e4dd]">
// // //             {experience.map((entry) => (
// // //               <EntryBlock
// // //                 key={`${entry.organization}-${entry.title}`}
// // //                 entry={entry}
// // //               />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <section id="credits" className="py-12">
// // //           <SectionHeading number="03">Recording Credits</SectionHeading>

// // //           <div className="mb-10">
// // //             <div className="mb-3 flex items-baseline justify-between gap-4">
// // //               <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#55524b]">
// // //                 Released Projects
// // //               </h3>
// // //               <span className="font-mono text-[11px] text-[#858178]">
// // //                 Selected credits
// // //               </span>
// // //             </div>
// // //             <div className="border-t border-[#d9d6cf]">
// // //               {releasedCredits.map((credit, index) => (
// // //                 <CreditRow
// // //                   key={`${credit.artist}-${credit.title}-${index}`}
// // //                   credit={credit}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <div className="mb-3 flex items-baseline justify-between gap-4">
// // //               <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#55524b]">
// // //                 Forthcoming Projects
// // //               </h3>
// // //               <span className="font-mono text-[11px] text-[#858178]">
// // //                 In progress / unreleased
// // //               </span>
// // //             </div>
// // //             <div className="border-t border-[#d9d6cf]">
// // //               {forthcomingCredits.map((credit) => (
// // //                 <CreditRow
// // //                   key={`${credit.artist}-${credit.title}`}
// // //                   credit={credit}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section id="skills" className="py-12">
// // //           <SectionHeading number="04">Technical Skills & Practice</SectionHeading>
// // //           <div className="divide-y divide-[#e7e4dd]">
// // //             {skillGroups.map((group) => (
// // //               <div
// // //                 key={group.title}
// // //                 className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8"
// // //               >
// // //                 <h3 className="text-[14px] font-medium text-[#393832]">
// // //                   {group.title}
// // //                 </h3>
// // //                 <p className="text-[15px] leading-[1.8] text-[#5c5952]">
// // //                   {group.skills}
// // //                 </p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <section id="education" className="py-12">
// // //           <SectionHeading number="05">Education & Training</SectionHeading>
// // //           <div className="divide-y divide-[#e7e4dd]">
// // //             <EntryBlock
// // //               entry={{
// // //                 title: "Bachelor of Arts, Philosophy",
// // //                 organization: "Portland State University",
// // //                 location: "Portland, Oregon",
// // //                 dates: "2016",
// // //                 description:
// // //                   "Graduated with departmental honors. Minor in History of Science.",
// // //               }}
// // //             />
// // //             <EntryBlock
// // //               entry={{
// // //                 title: "Software Engineering Program",
// // //                 organization: "BloomTech",
// // //                 dates: "Completed 2025",
// // //                 description:
// // //                   "Completed software engineering training. Included here as part of a broader record of technical education and professional development.",
// // //               }}
// // //             />
// // //           </div>
// // //         </section>

// // //         <section id="community" className="py-12">
// // //           <SectionHeading number="06">Arts & Community Engagement</SectionHeading>
// // //           <div className="divide-y divide-[#e7e4dd]">
// // //             {activities.map((entry, index) => (
// // //               <EntryBlock
// // //                 key={`${entry.organization}-${entry.title}-${index}`}
// // //                 entry={entry}
// // //               />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <section id="awards" className="py-12">
// // //           <SectionHeading number="07">
// // //             Awards, Grants & Fellowships
// // //           </SectionHeading>
// // //           <div className="divide-y divide-[#e7e4dd]">
// // //             {awards.map((entry) => (
// // //               <EntryBlock
// // //                 key={`${entry.organization}-${entry.title}`}
// // //                 entry={entry}
// // //               />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <footer
// // //           id="contact"
// // //           className="mt-4 border-t border-[#d9d6cf] pt-8"
// // //         >
// // //           <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
// // //             <div>
// // //               <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#858178]">
// // //                 Contact
// // //               </p>
// // //               <p className="mt-2 text-[16px] text-[#393832]">
// // //                 Gabriel Espinosa
// // //               </p>
// // //               <a
// // //                 href="mailto:YOUR-EMAIL-HERE"
// // //                 className="mt-1 inline-block text-[14px] text-[#77736b] underline decoration-[#d9d6cf] underline-offset-4 transition-colors hover:text-[#292824]"
// // //               >
// // //                 YOUR-EMAIL-HERE
// // //               </a>
// // //             </div>
// // //             <p className="font-mono text-[11px] text-[#a09b91]">
// // //               Portland, Oregon · Professional Archive
// // //             </p>
// // //           </div>
// // //         </footer>
// // //       </div>

// // //       <style jsx global>{`
// // //         html {
// // //           scroll-behavior: smooth;
// // //         }

// // //         body {
// // //           margin: 0;
// // //           background: #faf9f6;
// // //         }

// // //         @media print {
// // //           @page {
// // //             margin: 16mm 14mm;
// // //           }

// // //           html {
// // //             scroll-behavior: auto;
// // //           }

// // //           body {
// // //             background: white !important;
// // //             color: #222 !important;
// // //             -webkit-print-color-adjust: exact;
// // //             print-color-adjust: exact;
// // //           }

// // //           main {
// // //             min-height: 0 !important;
// // //             background: white !important;
// // //           }

// // //           main > div {
// // //             max-width: none !important;
// // //             padding: 0 !important;
// // //           }

// // //           section,
// // //           article,
// // //           footer {
// // //             break-inside: avoid;
// // //           }

// // //           header {
// // //             padding-top: 0 !important;
// // //           }

// // //           a {
// // //             color: inherit !important;
// // //             text-decoration: none !important;
// // //           }

// // //           button {
// // //             display: none !important;
// // //           }
// // //         }
// // //       `}</style>
// // //     </main>
// // //   );
// // // }

// // "use client";

// // import type { ReactNode } from "react";

// // type Entry = {
// //   title: string;
// //   organization?: string;
// //   location?: string;
// //   dates?: string;
// //   description?: string;
// // };

// // type Credit = {
// //   year: string;
// //   artist: string;
// //   title: string;
// //   roles: string;
// // };

// // const experience: Entry[] = [
// //   {
// //     title: "Studio Owner & House Audio Engineer",
// //     organization: "WinterBeast",
// //     location: "Portland, Oregon",
// //     dates: "2018–Present",
// //     description:
// //       "Founded, designed, and built an independent recording studio in Northeast Portland, including acoustic treatment and sound isolation achieving approximately 30 dB of noise reduction. Produce, record, edit, and mix music from initial tracking through final delivery. Maintain studio infrastructure, equipment, scheduling, project files, and artist communications. Translate technical decisions into clear, accessible language and adapt to changing project needs while managing deadlines and deliverables.",
// //   },
// //   {
// //     title: "Audio Engineer",
// //     organization: "Outta Sight Outta Mind Music / Open Hearts Open Minds",
// //     location: "Portland, Oregon",
// //     dates: "2022–2024",
// //     description:
// //       "Mixed and archived more than 120 music projects for incarcerated participants. Standardized file naming and digital archives to support continuity and onboarding across a multi-year program. Supported live showcases through equipment setup, stage coordination, and front-of-house mixing. Began through a Western States Center fellowship and transitioned into a paid role after the fellowship ended.",
// //   },
// //   {
// //     title: "Writing Tutor — TRIO Student Support Services",
// //     organization: "Portland Community College, Cascade Campus",
// //     location: "Portland, Oregon",
// //     dates: "2018–2023",
// //     description:
// //       "Provided ongoing in-person and virtual academic support to TRIO students, including first-generation and low-income students and students with learning differences. Guided research, source evaluation, citation practices, essay development, revision, and scholarship applications. Led writing workshops and collaborated with TRIO advisors and faculty to align tutoring with students’ academic and transfer goals.",
// //   },
// //   {
// //     title: "Writing Tutor — Reading & Writing Center",
// //     organization: "Portland Community College, Cascade Campus",
// //     location: "Portland, Oregon",
// //     dates: "2018–2022",
// //     description:
// //       "Provided drop-in writing and research support across academic disciplines. Helped students interpret assignment prompts, navigate library databases and periodicals, evaluate sources, and improve clarity and organization. Adapted tutoring approaches to individual learning needs and collaborated with faculty and staff to support course objectives.",
// //   },
// //   {
// //     title: "Facilities & AV Support",
// //     organization: "Oregon Contemporary (formerly Disjecta)",
// //     location: "Portland, Oregon",
// //     dates: "2017–2018",
// //     description:
// //       "Prepared and maintained gallery and event spaces. Assisted with installation and operation of sound systems, projectors, lighting, and other audiovisual equipment for exhibitions and events. Provided technical support to event organizers, attendees, and freelance technicians.",
// //   },
// //   {
// //     title: "Stagehand & AV Support",
// //     organization: "Portland Institute for Contemporary Art — Time-Based Art Festival",
// //     location: "Portland, Oregon",
// //     dates: "2017",
// //     description:
// //       "Set up seating, sound systems, microphones, and instruments for performances and concerts. Supported front-of-house sound and recorded performances for archival and press use. Coordinated with artists and production staff to support event execution.",
// //   },
// //   {
// //     title: "Freelance Audio Engineer",
// //     organization: "Independent / Contract",
// //     location: "New York, California, Oregon & Montreal",
// //     dates: "2008–2014",
// //     description:
// //       "Worked across commercial recording studios on music recording and production projects. Studio experience includes Headgear Recording, Rare Book Room, Avatar, LoHo, Mercy Sound, Applehead, Studios Piccolo, Hyde Street, and The Map Room. Project credits include work with Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
// //   },
// //   {
// //     title: "AV Technician",
// //     organization: "Portland Community College",
// //     location: "Portland, Oregon",
// //     dates: "2005–2006",
// //     description:
// //       "Scheduled, delivered, and tracked audiovisual equipment for classrooms and events. Assisted students and faculty with equipment operation and troubleshooting, and supported audio, video, and lighting systems across campus spaces.",
// //   },
// // ];

// // const releasedCredits: Credit[] = [
// //   {
// //     year: "2026",
// //     artist: "Hail",
// //     title: "Child of A Cursed Temple",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2026",
// //     artist: "Zothique",
// //     title: "Abominations of Yondo",
// //     roles: "Drum Recording, Mixing",
// //   },
// //   {
// //     year: "2024",
// //     artist: "Hail",
// //     title: "Transgression",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2024",
// //     artist: "Old Town Diamonds",
// //     title: "40 Miles",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2023",
// //     artist: "Hail",
// //     title: "We Are Nothing",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2023",
// //     artist: "Old Town Diamonds",
// //     title: "A Pale Horse",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2023",
// //     artist: "Hollow Senses",
// //     title: "Taurobolium",
// //     roles: "Mixing, Noise/Synthesis Interlude Recording",
// //   },
// //   {
// //     year: "2022",
// //     artist: "Fliege",
// //     title: "The Invisible Seam",
// //     roles: "Mixing, Vocal Recording",
// //   },
// //   {
// //     year: "2020",
// //     artist: "The Kolotov Mocktails",
// //     title: "Ivy Hall",
// //     roles: "Mixing",
// //   },
// //   {
// //     year: "2019",
// //     artist: "L’Acephale",
// //     title: "L’Acephale",
// //     roles: "Recording, Mixing",
// //   },
// //   {
// //     year: "2018",
// //     artist: "Twin Perish",
// //     title: "Blue Pour",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2016",
// //     artist: "Bulldog Shadow",
// //     title: "24-Hour Drunk",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2014",
// //     artist: "Night Surgeon",
// //     title: "Gandola Crimewave",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2013",
// //     artist: "Night Surgeon",
// //     title: "Self-Titled",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2012",
// //     artist: "Steelhymen",
// //     title: "0 || 0/0",
// //     roles: "Recording, Mixing",
// //   },
// //   {
// //     year: "2011",
// //     artist: "Blondie",
// //     title: "Panic of Girls",
// //     roles: "Recording",
// //   },
// //   {
// //     year: "2011",
// //     artist: "Shalants",
// //     title: "Self-Titled",
// //     roles: "Recording, Mixing",
// //   },
// //   {
// //     year: "2011",
// //     artist: "Night Surgeon",
// //     title: "Day for Night",
// //     roles: "Production, Recording, Mixing",
// //   },
// //   {
// //     year: "2011",
// //     artist: "Casey Spooner",
// //     title: "Adult Contemporary",
// //     roles: "Recording",
// //   },
// //   {
// //     year: "2009",
// //     artist: "Fischerspooner",
// //     title: "Entertainment",
// //     roles: "Recording",
// //   },
// //   {
// //     year: "2008",
// //     artist: "Mobile",
// //     title: "Tales from the City",
// //     roles: "Recording",
// //   },
// //   {
// //     year: "2007",
// //     artist: "Stab The Matador",
// //     title: "Doctor",
// //     roles: "Recording",
// //   },
// // ];

// // const forthcomingCredits: Credit[] = [
// //   {
// //     year: "Forthcoming",
// //     artist: "Notnauts",
// //     title: "Title Forthcoming",
// //     roles: "Full-Length LP · Production, Recording, Mixing",
// //   },
// //   {
// //     year: "Forthcoming",
// //     artist: "Refrigerated Nurses",
// //     title: "Title Forthcoming",
// //     roles: "Full-Length LP · Production, Recording, Mixing",
// //   },
// //   {
// //     year: "Forthcoming",
// //     artist: "Entrain",
// //     title: "Title Forthcoming",
// //     roles: "Full-Length LP · Production, Recording, Mixing",
// //   },
// //   {
// //     year: "Forthcoming",
// //     artist: "Mistons",
// //     title: "Return to Cinder",
// //     roles: "Full-Length LP · Production, Recording, Mixing",
// //   },
// //   {
// //     year: "Forthcoming",
// //     artist: "L’Acephale",
// //     title: "Eden!",
// //     roles: "Full-Length LP · Production, Recording, Mixing",
// //   },
// // ];

// // const activities: Entry[] = [
// //   {
// //     title: "Performance Photographer",
// //     organization: "Portland Butoh Festival",
// //     dates: "2024–2025",
// //     description:
// //       "Documented performances using 35mm black-and-white and color-negative film.",
// //   },
// //   {
// //     title: "Grant Panelist — Urgency/Stability Support for Artists",
// //     organization: "Regional Arts & Culture Council",
// //     location: "Portland, Oregon",
// //     dates: "2022",
// //     description:
// //       "Reviewed applications for COVID-relief support for artists.",
// //   },
// //   {
// //     title: "Project Grant Panelist — Music Projects",
// //     organization: "Regional Arts & Culture Council",
// //     location: "Portland, Oregon",
// //     dates: "2020",
// //     description:
// //       "Reviewed music-project grant applications as part of a regional arts funding process.",
// //   },
// //   {
// //     title: "External Reviewer",
// //     organization: "STANCE: An International Undergraduate Philosophy Journal",
// //     dates: "2017",
// //     description:
// //       "Evaluated undergraduate philosophy submissions for publication.",
// //   },
// //   {
// //     title: "High School Ethics Bowl Coach",
// //     organization: "Columbia River High School",
// //     dates: "2013–2014",
// //     description:
// //       "Supported student teams in ethical argumentation, argument mapping, and oral presentation.",
// //   },
// // ];

// // const awards: Entry[] = [
// //   {
// //     title: "Western States Center Fellowship",
// //     organization: "Western States Center",
// //     dates: "2022–2023",
// //     description:
// //       "Fellowship connected to community music work with Outta Sight Outta Mind. The subsequent paid role is documented under Professional Experience.",
// //   },
// // ];

// // const skillGroups = [
// //   {
// //     title: "Recording & Production",
// //     skills:
// //       "Music production, studio recording, microphone selection and placement, analog signal chains, multitrack tracking, overdubbing, editing, reamping, arrangement support, session management",
// //   },
// //   {
// //     title: "Mixing & Audio Systems",
// //     skills:
// //       "Digital audio workstations, in-the-box mixing, monitoring, routing, gain staging, analog and digital integration, signal flow, session delivery and archiving",
// //   },
// //   {
// //     title: "AV & Technical Operations",
// //     skills:
// //       "Audio and AV troubleshooting, mixers, microphones, speakers, live sound, front-of-house setup, equipment inventory and maintenance, studio infrastructure, acoustic treatment, sound isolation, event setup and coordination",
// //   },
// //   {
// //     title: "Photography & Film",
// //     skills:
// //       "Analog photography, 35mm and 120-format film, black-and-white film development, candid and lifestyle photography, performance documentation, portraiture, landscape photography as a personal practice",
// //   },
// //   {
// //     title: "Research & Instruction",
// //     skills:
// //       "Academic research, literature review, bibliographic annotation, peer-reviewed databases, source evaluation, MLA/APA/Chicago citation, one-to-one tutoring, writing workshops, scholarship writing, academic coaching",
// //   },
// //   {
// //     title: "Digital Tools",
// //     skills:
// //       "Microsoft Office, Google Workspace, VS Code, JavaScript, HTML, CSS, SQL, Git, digital audio workstations",
// //   },
// //   {
// //     title: "Professional Practice",
// //     skills:
// //       "Clear technical communication, customer service, project coordination, workflow documentation, critical thinking, organization, adaptability, collaborative problem-solving",
// //   },
// // ];

// // function SectionHeading({
// //   number,
// //   children,
// // }: {
// //   number: string;
// //   children: ReactNode;
// // }) {
// //   return (
// //     <div className="mb-7 flex items-baseline gap-4 border-b border-[#d9d6cf] pb-3">
// //       <span className="font-mono text-[11px] tracking-[0.12em] text-[#8a867e]">
// //         {number}
// //       </span>
// //       <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-[#393832]">
// //         {children}
// //       </h2>
// //     </div>
// //   );
// // }

// // function EntryBlock({ entry }: { entry: Entry }) {
// //   return (
// //     <article className="grid grid-cols-1 gap-x-8 gap-y-2 py-5 sm:grid-cols-[minmax(0,1fr)_145px]">
// //       <div>
// //         <h3 className="text-[16px] font-medium leading-snug text-[#292824]">
// //           {entry.title}
// //         </h3>
// //         {entry.organization && (
// //           <p className="mt-1 text-[14px] leading-relaxed text-[#5c5952]">
// //             {entry.organization}
// //             {entry.location ? ` · ${entry.location}` : ""}
// //           </p>
// //         )}
// //         {entry.description && (
// //           <p className="mt-3 max-w-[650px] text-[15px] leading-[1.8] text-[#55524b]">
// //             {entry.description}
// //           </p>
// //         )}
// //       </div>
// //       {entry.dates && (
// //         <p className="font-mono text-[11px] tracking-wide text-[#858178] sm:pt-1 sm:text-right">
// //           {entry.dates}
// //         </p>
// //       )}
// //     </article>
// //   );
// // }

// // function CreditRow({ credit }: { credit: Credit }) {
// //   return (
// //     <div className="grid grid-cols-[82px_minmax(0,1fr)] gap-x-4 border-b border-[#e7e4dd] py-3 last:border-b-0 sm:grid-cols-[94px_minmax(0,1fr)_minmax(190px,0.8fr)] sm:gap-x-6">
// //       <span className="pt-[2px] font-mono text-[11px] text-[#858178]">
// //         {credit.year}
// //       </span>
// //       <div>
// //         <p className="text-[14px] leading-snug text-[#292824]">
// //           <span className="font-medium">{credit.artist}</span>
// //           <span className="text-[#77736b]"> — </span>
// //           <span className="italic">{credit.title}</span>
// //         </p>
// //         <p className="mt-1 text-[12px] leading-relaxed text-[#77736b] sm:hidden">
// //           {credit.roles}
// //         </p>
// //       </div>
// //       <p className="hidden text-[12px] leading-relaxed text-[#77736b] sm:block">
// //         {credit.roles}
// //       </p>
// //     </div>
// //   );
// // }

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-[#faf9f6] text-[#292824] selection:bg-[#dcd7ca]">
// //       <div className="mx-auto max-w-[900px] px-6 pb-24 pt-10 sm:px-10 sm:pt-16">
// //         <header className="border-b border-[#d9d6cf] pb-10">
// //           <div className="flex items-start justify-between gap-6">
// //             <div>
// //               <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#858178]">
// //                 Professional Archive
// //               </p>
// //               <h1 className="text-[2.5rem] font-normal leading-[0.98] tracking-[-0.055em] sm:text-[4.25rem]">
// //                 Gabriel Eduardo
// //                 <br />
// //                 Espinosa
// //               </h1>
// //               <p className="mt-6 max-w-[650px] text-[15px] leading-[1.85] text-[#5c5952]">
// //                 Audio engineer, music producer, tutor, and interdisciplinary
// //                 practitioner working across recording, technical operations,
// //                 photography, research, and community arts.
// //               </p>
// //             </div>
// //             <button
// //               type="button"
// //               onClick={() => window.print()}
// //               className="mt-1 shrink-0 border border-[#d9d6cf] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5c5952] transition-colors hover:border-[#8a867e] hover:text-[#292824] print:hidden"
// //             >
// //               Print / PDF
// //             </button>
// //           </div>

// //           <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[12px] uppercase tracking-[0.06em] text-[#858178]">
// //             <span>Portland, Oregon</span>
// //             <a
// //               href="tel:+15034309499"
// //               className="transition-colors hover:text-[#292824]"
// //             >
// //               503.430.9499
// //             </a>
// //             <a
// //               href="mailto:gabiespinosa138@gmail.com"
// //               className="transition-colors hover:text-[#292824]"
// //             >
// //               Email
// //             </a>
// //             <a
// //               href="https://winter-beast-studio-site.vercel.app/"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="transition-colors hover:text-[#292824]"
// //             >
// //               WinterBeast Studio
// //             </a>
// //             <a
// //               href="https://ge-espinosa-photo-portfolio.vercel.app/"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="transition-colors hover:text-[#292824]"
// //             >
// //               Photography
// //             </a>
// //           </div>
// //         </header>

// //         <section id="profile" className="py-12">
// //           <SectionHeading number="01">Professional Profile</SectionHeading>
// //           <div className="max-w-[720px] space-y-4 text-[15px] leading-[1.85] text-[#55524b]">
// //             <p>
// //               Audio engineer and producer with more than 15 years of experience
// //               across independent recording studios, commercial studio
// //               environments, community music programs, and arts organizations.
// //               Work includes production, recording, mixing, AV support, and the
// //               development of practical systems for creative collaboration.
// //             </p>
// //             <p>
// //               Founded and built WinterBeast, an independent recording studio in
// //               Portland, Oregon, in 2018. The studio supports artist-led
// //               recording and production, with an emphasis on collaboration,
// //               careful listening, and supporting the work rather than imposing
// //               a predetermined process.
// //             </p>
// //             <p>
// //               A background in philosophy and academic tutoring complements
// //               hands-on technical work, with experience helping people navigate
// //               research, equipment, creative processes, and complex information.
// //               Photography and community arts work extend this practice beyond
// //               audio.
// //             </p>
// //           </div>
// //         </section>

// //         <section id="experience" className="py-12">
// //           <SectionHeading number="02">Professional Experience</SectionHeading>
// //           <div className="divide-y divide-[#e7e4dd]">
// //             {experience.map((entry) => (
// //               <EntryBlock
// //                 key={`${entry.organization}-${entry.title}`}
// //                 entry={entry}
// //               />
// //             ))}
// //           </div>
// //         </section>

// //         <section id="credits" className="py-12">
// //           <SectionHeading number="03">Recording Credits</SectionHeading>

// //           <div className="mb-10">
// //             <div className="mb-3 flex items-baseline justify-between gap-4">
// //               <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#55524b]">
// //                 Released Projects
// //               </h3>
// //               <span className="font-mono text-[11px] text-[#858178]">
// //                 Selected credits
// //               </span>
// //             </div>
// //             <div className="border-t border-[#d9d6cf]">
// //               {releasedCredits.map((credit, index) => (
// //                 <CreditRow
// //                   key={`${credit.artist}-${credit.title}-${index}`}
// //                   credit={credit}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <div className="mb-3 flex items-baseline justify-between gap-4">
// //               <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#55524b]">
// //                 Forthcoming Projects
// //               </h3>
// //               <span className="font-mono text-[11px] text-[#858178]">
// //                 In progress / unreleased
// //               </span>
// //             </div>
// //             <div className="border-t border-[#d9d6cf]">
// //               {forthcomingCredits.map((credit) => (
// //                 <CreditRow
// //                   key={`${credit.artist}-${credit.title}`}
// //                   credit={credit}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         <section id="skills" className="py-12">
// //           <SectionHeading number="04">Technical Skills & Practice</SectionHeading>
// //           <div className="divide-y divide-[#e7e4dd]">
// //             {skillGroups.map((group) => (
// //               <div
// //                 key={group.title}
// //                 className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8"
// //               >
// //                 <h3 className="text-[14px] font-medium text-[#393832]">
// //                   {group.title}
// //                 </h3>
// //                 <p className="text-[15px] leading-[1.8] text-[#5c5952]">
// //                   {group.skills}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         <section id="education" className="py-12">
// //           <SectionHeading number="05">Education & Training</SectionHeading>
// //           <div className="divide-y divide-[#e7e4dd]">
// //             <EntryBlock
// //               entry={{
// //                 title: "Full Stack Web Development",
// //                 organization: "Bloom Institute of Technology",
// //                 dates: "2023–2024",
// //                 description:
// //                   "Technical training in web development, including JavaScript, HTML, CSS, SQL, and related development tools.",
// //               }}
// //             />
// //             <EntryBlock
// //               entry={{
// //                 title: "Bachelor of Arts, Philosophy",
// //                 organization: "Portland State University",
// //                 location: "Portland, Oregon",
// //                 dates: "2011–2016",
// //                 description:
// //                   "Graduated with departmental honors. Minor in History of Science.",
// //               }}
// //             />
// //           </div>
// //         </section>

// //         <section id="community" className="py-12">
// //           <SectionHeading number="06">Arts & Community Engagement</SectionHeading>
// //           <div className="divide-y divide-[#e7e4dd]">
// //             {activities.map((entry, index) => (
// //               <EntryBlock
// //                 key={`${entry.organization}-${entry.title}-${index}`}
// //                 entry={entry}
// //               />
// //             ))}
// //           </div>
// //         </section>

// //         <section id="awards" className="py-12">
// //           <SectionHeading number="07">
// //             Awards, Grants & Fellowships
// //           </SectionHeading>
// //           <div className="divide-y divide-[#e7e4dd]">
// //             {awards.map((entry) => (
// //               <EntryBlock
// //                 key={`${entry.organization}-${entry.title}`}
// //                 entry={entry}
// //               />
// //             ))}
// //           </div>
// //         </section>

// //         <footer
// //           id="contact"
// //           className="mt-4 border-t border-[#d9d6cf] pt-8"
// //         >
// //           <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
// //             <div>
// //               <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#858178]">
// //                 Contact
// //               </p>
// //               <p className="mt-2 text-[16px] text-[#393832]">
// //                 Gabriel Eduardo Espinosa
// //               </p>
// //               <a
// //                 href="mailto:gabiespinosa138@gmail.com"
// //                 className="mt-1 inline-block text-[14px] text-[#77736b] underline decoration-[#d9d6cf] underline-offset-4 transition-colors hover:text-[#292824]"
// //               >
// //                 gabiespinosa138@gmail.com
// //               </a>
// //               <p className="mt-1 text-[14px] text-[#77736b]">
// //                 503.430.9499
// //               </p>
// //             </div>
// //             <p className="font-mono text-[11px] text-[#a09b91]">
// //               Portland, Oregon · Professional Archive
// //             </p>
// //           </div>
// //         </footer>
// //       </div>

// //       <style jsx global>{`
// //         html {
// //           scroll-behavior: smooth;
// //         }

// //         body {
// //           margin: 0;
// //           background: #faf9f6;
// //         }

// //         @media print {
// //           @page {
// //             margin: 16mm 14mm;
// //           }

// //           html {
// //             scroll-behavior: auto;
// //           }

// //           body {
// //             background: white !important;
// //             color: #222 !important;
// //             -webkit-print-color-adjust: exact;
// //             print-color-adjust: exact;
// //           }

// //           main {
// //             min-height: 0 !important;
// //             background: white !important;
// //           }

// //           main > div {
// //             max-width: none !important;
// //             padding: 0 !important;
// //           }

// //           section,
// //           article,
// //           footer {
// //             break-inside: avoid;
// //           }

// //           header {
// //             padding-top: 0 !important;
// //           }

// //           a {
// //             color: inherit !important;
// //             text-decoration: none !important;
// //           }

// //           button {
// //             display: none !important;
// //           }
// //         }
// //       `}</style>
// //     </main>
// //   );
// // }

// "use client";

// import type { ReactNode } from "react";

// type Entry = {
//   title: string;
//   organization?: string;
//   location?: string;
//   dates?: string;
//   description?: string;
// };

// type Credit = {
//   year: string;
//   artist: string;
//   title: string;
//   roles: string;
// };

// const experience: Entry[] = [
//   {
//     title: "Studio Owner & House Audio Engineer",
//     organization: "WinterBeast",
//     location: "Portland, Oregon",
//     dates: "2018–Present",
//     description:
//       "Own and operate WinterBeast, an independent recording studio in Northeast Portland. Designed and built the studio interior and sound isolation, achieving approximately 30 dB of noise reduction. Produce, record, and mix full-length albums for independent artists, supporting projects from production and tracking through final mixes and delivery. Manage scheduling, equipment maintenance, studio infrastructure, project organization, and artist relationships. Communicate technical decisions clearly, respond to artists' needs, adapt to changing project scope, and deliver reference bounces, mixes, and stems on deadline.",
//   },
//   {
//     title: "Audio Engineer",
//     organization: "Outta Sight Outta Mind Music",
//     location: "Portland, Oregon",
//     dates: "2022–2024",
//     description:
//       "Mixed and archived more than 120 music projects for incarcerated participants. Standardized file naming and organized digital archives to support continuity and onboarding across a multi-year program. Supported live showcases through equipment setup, stage coordination, and occasional front-of-house mixing. Began through a Western States Center fellowship and transitioned into a paid role under Open Hearts Open Minds after the fellowship ended.",
//   },
//   {
//     title: "Writing Tutor — TRIO Student Support Services",
//     organization: "Portland Community College, Cascade Campus",
//     location: "Portland, Oregon",
//     dates: "2018–2023",
//     description:
//       "Provided in-person and virtual academic support to TRIO students, including first-generation and low-income students and students with learning differences. Guided research, source evaluation, citation practices, essay development, revision, and scholarship applications. Led writing workshops and collaborated with TRIO advisors and faculty to align tutoring with students' academic goals.",
//   },
//   {
//     title: "Writing Tutor — Reading & Writing Center",
//     organization: "Portland Community College, Cascade Campus",
//     location: "Portland, Oregon",
//     dates: "2018–2022",
//     description:
//       "Provided drop-in writing and research support across academic disciplines. Helped students interpret assignment prompts, navigate library databases and periodicals, evaluate sources, and improve clarity and organization. Adapted tutoring approaches to individual learning needs and collaborated with faculty and staff to support course objectives.",
//   },
//   {
//     title: "Facilities & AV Support",
//     organization: "Oregon Contemporary (formerly Disjecta)",
//     location: "Portland, Oregon",
//     dates: "2017–2018",
//     description:
//       "Prepared and maintained gallery and event spaces, including painting, cleaning, and landscaping. Assisted with installation and operation of sound systems, projectors, lighting, and other audiovisual equipment. Provided technical support to event organizers, attendees, and freelance technicians.",
//   },
//   {
//     title: "Stagehand & AV Support",
//     organization: "Portland Institute for Contemporary Art — Time-Based Art Festival",
//     location: "Portland, Oregon",
//     dates: "2017",
//     description:
//       "Set up seating, sound systems, microphones, and instruments for performances and concerts. Assisted with front-of-house sound and recorded performances for archival and press use. Coordinated with artists and production staff to support event execution.",
//   },
//   {
//     title: "Freelance Audio Engineer",
//     organization: "Independent / Contract",
//     location: "New York, California, Oregon & Montreal",
//     dates: "2008–2014",
//     description:
//       "Worked across commercial recording studios on music recording and production projects. Studio experience includes Headgear Recording, Rare Book Room, Avatar, LoHo, Mercy Sound, Applehead, Studios Piccolo, Hyde Street, and The Map Room. Project credits include work with Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
//   },
//   {
//     title: "AV Technician",
//     organization: "Portland Community College",
//     location: "Portland, Oregon",
//     dates: "2005–2006",
//     description:
//       "Scheduled, delivered, and tracked audiovisual equipment for classrooms and events. Assisted students and faculty with equipment operation and troubleshooting, and supported audio, video, and lighting systems across campus spaces.",
//   },
// ];

// const releasedCredits: Credit[] = [
//   { year: "2026", artist: "Hail", title: "Child of A Cursed Temple", roles: "Production, Recording, Mixing" },
//   { year: "2026", artist: "Zothique", title: "Abominations of Yondo", roles: "Drum Recording, Mixing" },
//   { year: "2024", artist: "Hail", title: "Transgression", roles: "Production, Recording, Mixing" },
//   { year: "2024", artist: "Old Town Diamonds", title: "40 Miles", roles: "Production, Recording, Mixing" },
//   { year: "2023", artist: "Hail", title: "We Are Nothing", roles: "Production, Recording, Mixing" },
//   { year: "2023", artist: "Old Town Diamonds", title: "A Pale Horse", roles: "Production, Recording, Mixing" },
//   { year: "2023", artist: "Hollow Senses", title: "Taurobolium", roles: "Mixing, Noise/Synthesis Interlude Recording" },
//   { year: "2022", artist: "Fliege", title: "The Invisible Seam", roles: "Mixing, Vocal Recording" },
//   { year: "2020", artist: "The Kolotov Mocktails", title: "Ivy Hall", roles: "Mixing" },
//   { year: "2019", artist: "L’Acephale", title: "L’Acephale", roles: "Recording, Mixing" },
//   { year: "2018", artist: "Twin Perish", title: "Blue Pour", roles: "Production, Recording, Mixing" },
//   { year: "2016", artist: "Bulldog Shadow", title: "24-Hour Drunk", roles: "Production, Recording, Mixing" },
//   { year: "2014", artist: "Night Surgeon", title: "Gandola Crimewave", roles: "Production, Recording, Mixing" },
//   { year: "2013", artist: "Night Surgeon", title: "Self-Titled", roles: "Production, Recording, Mixing" },
//   { year: "2012", artist: "Steelhymen", title: "0 || 0/0", roles: "Recording, Mixing" },
//   { year: "2011", artist: "Blondie", title: "Panic of Girls", roles: "Recording" },
//   { year: "2011", artist: "Shalants", title: "Self-Titled", roles: "Recording, Mixing" },
//   { year: "2011", artist: "Night Surgeon", title: "Day for Night", roles: "Production, Recording, Mixing" },
//   { year: "2011", artist: "Casey Spooner", title: "Adult Contemporary", roles: "Recording" },
//   { year: "2009", artist: "Fischerspooner", title: "Entertainment", roles: "Recording" },
//   { year: "2008", artist: "Mobile", title: "Tales from the City", roles: "Recording" },
//   { year: "2007", artist: "Stab The Matador", title: "Doctor", roles: "Recording" },
// ];

// const forthcomingCredits: Credit[] = [
//   { year: "Forthcoming", artist: "Notnauts", title: "Title Forthcoming", roles: "Full-Length LP · Production, Recording, Mixing" },
//   { year: "Forthcoming", artist: "Refrigerated Nurses", title: "Title Forthcoming", roles: "Full-Length LP · Production, Recording, Mixing" },
//   { year: "Forthcoming", artist: "Entrain", title: "Title Forthcoming", roles: "Full-Length LP · Production, Recording, Mixing" },
//   { year: "Forthcoming", artist: "Mistons", title: "Return to Cinder", roles: "Full-Length LP · Production, Recording, Mixing" },
//   { year: "Forthcoming", artist: "L’Acephale", title: "Eden!", roles: "Full-Length LP · Production, Recording, Mixing" },
// ];

// const activities: Entry[] = [
//   {
//     title: "Performance Photographer",
//     organization: "Portland Butoh Festival",
//     location: "Portland, Oregon",
//     dates: "2024–2025",
//     description:
//       "Documented performances using 35mm black-and-white and color-negative film.",
//   },
//   {
//     title: "Grant Panelist — Urgency Support for Artists",
//     organization: "City of Portland / Regional Arts & Culture Council",
//     location: "Portland, Oregon",
//     dates: "2022",
//     description:
//       "Reviewed applications for the Urgency track of the City of Portland's Urgency/Stability Support for Artists program, administered by RACC. Evaluated applicants under the track's program-specific criteria, including urgency of need.",
//   },
//   {
//     title: "Grant Panelist — Stability Support for Artists",
//     organization: "City of Portland / Regional Arts & Culture Council",
//     location: "Portland, Oregon",
//     dates: "2022",
//     description:
//       "Reviewed applications for the Stability track of the City of Portland's Urgency/Stability Support for Artists program, administered by RACC. Evaluated a distinct applicant pool using the track's criteria for supporting ongoing creative practice.",
//   },
//   {
//     title: "Project Grant Panelist — Music Projects",
//     organization: "Regional Arts & Culture Council",
//     location: "Portland, Oregon",
//     dates: "2020",
//     description:
//       "Reviewed grant applications for music projects.",
//   },
//   {
//     title: "External Reviewer",
//     organization: "STANCE: An International Undergraduate Philosophy Journal",
//     dates: "2017",
//     description:
//       "Evaluated undergraduate philosophy submissions for publication.",
//   },
//   {
//     title: "High School Ethics Bowl Coach",
//     organization: "Columbia River High School",
//     dates: "2013–2014",
//     description:
//       "Supported student teams in ethical argumentation, argument mapping, and oral presentation.",
//   },
// ];

// const awards: Entry[] = [
//   {
//     title: "Western States Center Fellowship",
//     organization: "Western States Center",
//     dates: "2022–2023",
//     description:
//       "Fellowship connected to community music work with Outta Sight Outta Mind. The subsequent paid role is documented under Professional Experience.",
//   },
// ];

// const skillGroups = [
//   {
//     title: "Audio Production & Engineering",
//     skills:
//       "Music production, full-album recording and mixing, microphone selection and placement, analog and digital signal flow, multitrack recording, overdubbing, session management, reamping, arrangement support, project delivery",
//   },
//   {
//     title: "Audio Software & Processing",
//     skills:
//       "Pro Tools, FabFilter, Valhalla DSP, Universal Audio / UAD, Waves, digital audio workstations, equalization, dynamics processing, effects, session organization and archiving",
//   },
//   {
//     title: "Audio Equipment & Systems",
//     skills:
//       "Microphones, multichannel preamps, audio converters, monitoring and routing, gain staging, equipment maintenance, basic troubleshooting, studio infrastructure, acoustic treatment and sound isolation",
//   },
//   {
//     title: "Live Sound & AV",
//     skills:
//       "Occasional front-of-house assistance, basic live-sound setup, mixers and microphones, event AV support, projector and lighting setup, stage and event coordination",
//   },
//   {
//     title: "Field Recording",
//     skills:
//       "Basic field-recording experience and location audio capture",
//   },
//   {
//     title: "Web Development & Programming",
//     skills:
//       "JavaScript, TypeScript, HTML, CSS, React, Next.js, Tailwind CSS, Styled Components, Node.js, Express.js, SQL",
//   },
//   {
//     title: "Development & Productivity Tools",
//     skills:
//       "VS Code, Git, Microsoft Office, Google Workspace, Zoom",
//   },
//   {
//     title: "Research & Instruction",
//     skills:
//       "Academic research, literature review, bibliographic annotation, JSTOR, EBSCOhost, peer-reviewed databases, source evaluation, MLA/APA/Chicago citation, individual tutoring, workshops, scholarship writing, academic coaching",
//   },
//   {
//     title: "Photography & Film",
//     skills:
//       "Analog photography, 35mm and 120-format film, black-and-white film development, candid and lifestyle photography, performance documentation, portraiture, landscape photography as a personal practice",
//   },
//   {
//     title: "Professional Practice",
//     skills:
//       "Clear technical communication, customer service, project coordination, workflow documentation, critical thinking, organization, adaptability, collaborative problem-solving",
//   },
// ];

// function SectionHeading({
//   number,
//   children,
// }: {
//   number: string;
//   children: ReactNode;
// }) {
//   return (
//     <div className="mb-7 flex items-baseline gap-4 border-b border-[#d9d6cf] pb-3">
//       <span className="font-mono text-[11px] tracking-[0.12em] text-[#8a867e]">
//         {number}
//       </span>
//       <h2 className="text-[14px] font-medium uppercase tracking-[0.14em] text-[#393832]">
//         {children}
//       </h2>
//     </div>
//   );
// }

// function EntryBlock({ entry }: { entry: Entry }) {
//   return (
//     <article className="grid grid-cols-1 gap-x-8 gap-y-2 py-5 sm:grid-cols-[minmax(0,1fr)_145px]">
//       <div>
//         <h3 className="text-[16px] font-medium leading-snug text-[#292824]">
//           {entry.title}
//         </h3>
//         {entry.organization && (
//           <p className="mt-1 text-[14px] leading-relaxed text-[#5c5952]">
//             {entry.organization}
//             {entry.location ? ` · ${entry.location}` : ""}
//           </p>
//         )}
//         {entry.description && (
//           <p className="mt-3 max-w-[650px] text-[15px] leading-[1.8] text-[#55524b]">
//             {entry.description}
//           </p>
//         )}
//       </div>
//       {entry.dates && (
//         <p className="font-mono text-[11px] tracking-wide text-[#858178] sm:pt-1 sm:text-right">
//           {entry.dates}
//         </p>
//       )}
//     </article>
//   );
// }

// function CreditRow({ credit }: { credit: Credit }) {
//   return (
//     <div className="grid grid-cols-[82px_minmax(0,1fr)] gap-x-4 border-b border-[#e7e4dd] py-3 last:border-b-0 sm:grid-cols-[94px_minmax(0,1fr)_minmax(190px,0.8fr)] sm:gap-x-6">
//       <span className="pt-[2px] font-mono text-[11px] text-[#858178]">
//         {credit.year}
//       </span>
//       <div>
//         <p className="text-[14px] leading-snug text-[#292824]">
//           <span className="font-medium">{credit.artist}</span>
//           <span className="text-[#77736b]"> — </span>
//           <span className="italic">{credit.title}</span>
//         </p>
//         <p className="mt-1 text-[12px] leading-relaxed text-[#77736b] sm:hidden">
//           {credit.roles}
//         </p>
//       </div>
//       <p className="hidden text-[12px] leading-relaxed text-[#77736b] sm:block">
//         {credit.roles}
//       </p>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#faf9f6] text-[#292824] selection:bg-[#dcd7ca]">
//       <div className="mx-auto max-w-[900px] px-6 pb-24 pt-10 sm:px-10 sm:pt-16">
//         <header className="border-b border-[#d9d6cf] pb-10">
//           <div className="flex items-start justify-between gap-6">
//             <div>
//               <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#858178]">
//                 Professional Archive
//               </p>
//               <h1 className="text-[2.5rem] font-normal leading-[0.98] tracking-[-0.055em] sm:text-[4.25rem]">
//                 Gabriel Eduardo
//                 <br />
//                 Espinosa
//               </h1>
//               <p className="mt-6 max-w-[650px] text-[15px] leading-[1.85] text-[#5c5952]">
//                 Audio engineer, music producer, tutor, and interdisciplinary
//                 practitioner working across recording, technical operations,
//                 photography, research, and community arts.
//               </p>
//             </div>
//             <button
//               type="button"
//               onClick={() => window.print()}
//               className="mt-1 shrink-0 border border-[#d9d6cf] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5c5952] transition-colors hover:border-[#8a867e] hover:text-[#292824] print:hidden"
//             >
//               Print / PDF
//             </button>
//           </div>

//           <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[12px] uppercase tracking-[0.06em] text-[#858178]">
//             <span>Portland, Oregon</span>
//             <a
//               href="tel:+15034309499"
//               className="transition-colors hover:text-[#292824]"
//             >
//               503.430.9499
//             </a>
//             <a
//               href="mailto:gabiespinosa138@gmail.com"
//               className="transition-colors hover:text-[#292824]"
//             >
//               Email
//             </a>
//             <a
//               href="https://winter-beast-studio-site.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="transition-colors hover:text-[#292824]"
//             >
//               WinterBeast Studio
//             </a>
//             <a
//               href="https://ge-espinosa-photo-portfolio.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="transition-colors hover:text-[#292824]"
//             >
//               Photography
//             </a>
//           </div>
//         </header>

//         <section id="profile" className="py-12">
//           <SectionHeading number="01">Professional Profile</SectionHeading>
//           <div className="max-w-[720px] space-y-4 text-[15px] leading-[1.85] text-[#55524b]">
//             <p>
//               Audio engineer and producer with more than 15 years of experience
//               across independent recording studios, commercial studio
//               environments, community music programs, and arts organizations.
//               Work includes music production, recording, mixing, AV support,
//               and the development of practical systems for creative
//               collaboration.
//             </p>
//             <p>
//               Own and operate WinterBeast, an independent recording studio in
//               Portland, Oregon, built to support artist-led recording and
//               production. An academic background in philosophy and years of
//               writing tutoring complement hands-on technical work, with
//               experience helping people navigate research, equipment, creative
//               processes, and complex information.
//             </p>
//             <p>
//               Photography, software development training, and community arts
//               work extend this practice beyond audio.
//             </p>
//           </div>
//         </section>

//         <section id="experience" className="py-12">
//           <SectionHeading number="02">Professional Experience</SectionHeading>
//           <div className="divide-y divide-[#e7e4dd]">
//             {experience.map((entry) => (
//               <EntryBlock
//                 key={`${entry.organization}-${entry.title}`}
//                 entry={entry}
//               />
//             ))}
//           </div>
//         </section>

//         <section id="credits" className="py-12">
//           <SectionHeading number="03">Recording Credits</SectionHeading>

//           <div className="mb-10">
//             <div className="mb-3 flex items-baseline justify-between gap-4">
//               <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#55524b]">
//                 Released Projects
//               </h3>
//               <span className="font-mono text-[11px] text-[#858178]">
//                 Selected credits
//               </span>
//             </div>
//             <div className="border-t border-[#d9d6cf]">
//               {releasedCredits.map((credit, index) => (
//                 <CreditRow
//                   key={`${credit.artist}-${credit.title}-${index}`}
//                   credit={credit}
//                 />
//               ))}
//             </div>
//           </div>

//           <div>
//             <div className="mb-3 flex items-baseline justify-between gap-4">
//               <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#55524b]">
//                 Forthcoming Projects
//               </h3>
//               <span className="font-mono text-[11px] text-[#858178]">
//                 In progress / unreleased
//               </span>
//             </div>
//             <div className="border-t border-[#d9d6cf]">
//               {forthcomingCredits.map((credit) => (
//                 <CreditRow
//                   key={`${credit.artist}-${credit.title}`}
//                   credit={credit}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="skills" className="py-12">
//           <SectionHeading number="04">Technical Skills & Practice</SectionHeading>
//           <div className="divide-y divide-[#e7e4dd]">
//             {skillGroups.map((group) => (
//               <div
//                 key={group.title}
//                 className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-8"
//               >
//                 <h3 className="text-[14px] font-medium text-[#393832]">
//                   {group.title}
//                 </h3>
//                 <p className="text-[15px] leading-[1.8] text-[#5c5952]">
//                   {group.skills}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="education" className="py-12">
//           <SectionHeading number="05">Education & Training</SectionHeading>
//           <div className="divide-y divide-[#e7e4dd]">
//             <EntryBlock
//               entry={{
//                 title: "Full Stack Web Development",
//                 organization: "Bloom Institute of Technology",
//                 dates: "2023–2024",
//                 description:
//                   "Technical training in web development, including JavaScript, TypeScript, HTML, CSS, SQL, and related development tools.",
//               }}
//             />
//             <EntryBlock
//               entry={{
//                 title: "Bachelor of Arts, Philosophy",
//                 organization: "Portland State University",
//                 location: "Portland, Oregon",
//                 dates: "2011–2016",
//                 description:
//                   "Graduated with departmental honors. Minor in History of Science.",
//               }}
//             />
//           </div>
//         </section>

//         <section id="community" className="py-12">
//           <SectionHeading number="06">Arts & Community Engagement</SectionHeading>
//           <div className="divide-y divide-[#e7e4dd]">
//             {activities.map((entry, index) => (
//               <EntryBlock
//                 key={`${entry.organization}-${entry.title}-${index}`}
//                 entry={entry}
//               />
//             ))}
//           </div>
//         </section>

//         <section id="awards" className="py-12">
//           <SectionHeading number="07">
//             Awards, Grants & Fellowships
//           </SectionHeading>
//           <div className="divide-y divide-[#e7e4dd]">
//             {awards.map((entry) => (
//               <EntryBlock
//                 key={`${entry.organization}-${entry.title}`}
//                 entry={entry}
//               />
//             ))}
//           </div>
//           <p className="mt-5 text-[13px] leading-relaxed text-[#858178]">
//             Additional Regional Arts & Culture Council grant awards to be added.
//           </p>
//         </section>

//         <footer
//           id="contact"
//           className="mt-4 border-t border-[#d9d6cf] pt-8"
//         >
//           <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#858178]">
//                 Contact
//               </p>
//               <p className="mt-2 text-[16px] text-[#393832]">
//                 Gabriel Eduardo Espinosa
//               </p>
//               <a
//                 href="mailto:gabiespinosa138@gmail.com"
//                 className="mt-1 inline-block text-[14px] text-[#77736b] underline decoration-[#d9d6cf] underline-offset-4 transition-colors hover:text-[#292824]"
//               >
//                 gabiespinosa138@gmail.com
//               </a>
//               <p className="mt-1 text-[14px] text-[#77736b]">
//                 503.430.9499
//               </p>
//             </div>
//             <p className="font-mono text-[11px] text-[#a09b91]">
//               Portland, Oregon · Professional Archive
//             </p>
//           </div>
//         </footer>
//       </div>

//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           margin: 0;
//           background: #faf9f6;
//         }

//         @media print {
//           @page {
//             margin: 16mm 14mm;
//           }

//           html {
//             scroll-behavior: auto;
//           }

//           body {
//             background: white !important;
//             color: #222 !important;
//             -webkit-print-color-adjust: exact;
//             print-color-adjust: exact;
//           }

//           main {
//             min-height: 0 !important;
//             background: white !important;
//           }

//           main > div {
//             max-width: none !important;
//             padding: 0 !important;
//           }

//           section,
//           article,
//           footer {
//             break-inside: avoid;
//           }

//           header {
//             padding-top: 0 !important;
//           }

//           a {
//             color: inherit !important;
//             text-decoration: none !important;
//           }

//           button {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

// "use client";

// import React from "react";

// const experience = [
//   {
//     role: "Studio Owner & House Audio Engineer",
//     organization: "WinterBeast",
//     location: "Portland, OR",
//     dates: "2018–Present",
//     bullets: [
//       "Own and operate an independent recording studio in Northeast Portland, producing, recording, and mixing full-length albums for independent artists.",
//       "Designed and built the studio interior and sound isolation, achieving approximately 30 dB of noise reduction.",
//       "Support projects from production and tracking through final mixes and delivery, adapting to artists' needs and changing project scope.",
//       "Manage scheduling, equipment maintenance, studio infrastructure, project organization, and artist relationships.",
//       "Communicate technical decisions clearly and deliver reference bounces, mixes, and stems on deadline.",
//     ],
//   },
//   {
//     role: "Audio Engineer",
//     organization: "Outta Sight Outta Mind Music",
//     location: "Portland, OR",
//     dates: "2022–2024",
//     bullets: [
//       "Mixed and archived more than 120 music projects created by incarcerated participants; did not record or edit the source projects.",
//       "Maintained organized digital archives and standardized file naming to support reliable project retrieval and preservation.",
//       "Supported live showcases through equipment setup, stage coordination, and occasional front-of-house assistance.",
//       "Began through a Western States Center fellowship and continued in paid work with Open Hearts Open Minds after the fellowship ended.",
//     ],
//   },
//   {
//     role: "Writing Tutor — TRIO Student Support Services",
//     organization: "Portland Community College",
//     location: "Portland, OR",
//     dates: "2018–2023",
//     bullets: [
//       "Provided individualized writing and research support to first-generation and low-income students, including students with learning differences.",
//       "Helped students develop research questions, evaluate sources, integrate citations, and prepare scholarship applications.",
//       "Facilitated workshops and coordinated with TRIO advisors and faculty to support student progress.",
//     ],
//   },
//   {
//     role: "Writing Tutor — Reading & Writing Center",
//     organization: "Portland Community College",
//     location: "Portland, OR",
//     dates: "2018–2022",
//     bullets: [
//       "Supported students across disciplines with writing assignments, research, revision, and academic communication.",
//       "Helped students navigate library resources and databases, interpret assignment prompts, and adapt writing strategies to different contexts.",
//     ],
//   },
//   {
//     role: "Facilities & AV Support",
//     organization: "Oregon Contemporary (formerly Disjecta)",
//     location: "Portland, OR",
//     dates: "2017–2018",
//     bullets: [
//       "Maintained exhibition and event spaces through facilities work, painting, cleaning, and landscaping.",
//       "Installed and operated projectors, lighting, and sound equipment; provided technical support to artists, event organizers, attendees, and freelancers.",
//     ],
//   },
//   {
//     role: "Stagehand & AV Support",
//     organization: "Portland Institute for Contemporary Art — Time-Based Art Festival",
//     location: "Portland, OR",
//     dates: "2017",
//     bullets: [
//       "Supported performances and events through seating, sound-system and microphone setup, and instrument preparation.",
//       "Provided front-of-house sound and live recording for archival and press purposes while coordinating with artists and production staff.",
//     ],
//   },
//   {
//     role: "Freelance Audio Engineer",
//     organization: "Independent / Contract",
//     location: "New York, CA, OR, and Montreal",
//     dates: "2008–2014",
//     bullets: [
//       "Recorded and mixed music in professional studios including Headgear Recording, Rare Book Room, Avatar, LoHo, Mercy Sound, Applehead, Studios Piccolo, Hyde Street, and The Map Room.",
//       "Contributed recording work to projects associated with Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
//     ],
//   },
//   {
//     role: "AV Technician",
//     organization: "Portland Community College",
//     location: "Portland, OR",
//     dates: "2005–2006",
//     bullets: [
//       "Scheduled, delivered, and tracked audiovisual equipment for faculty and students.",
//       "Assisted with audio, video, and lighting setup and troubleshooting.",
//     ],
//   },
// ];

// const internships = [
//   {
//     role: "Studio Intern",
//     organization: "Headgear Recording",
//     location: "Williamsburg, Brooklyn, NY",
//     dates: "Dates to confirm",
//     description:
//       "Internship at a professional recording studio. Further responsibilities can be added if useful to the archive.",
//   },
//   {
//     role: "Studio Intern",
//     organization: "The Carriage House — Ian Pai",
//     location: "Brooklyn, NY",
//     dates: "Dates to confirm",
//     description:
//       "Interned with Ian Pai at his personal audio production and rehearsal space.",
//   },
// ];

// const releasedCredits = [
//   ["2026", "Hail", "Child of A Cursed Temple", "Production, Recording, Mixing"],
//   ["2026", "Zothique", "Abominations of Yondo", "Drum Recording, Mixing"],
//   ["2024", "Hail", "Transgression", "Production, Recording, Mixing"],
//   ["2024", "Old Town Diamonds", "40 Miles", "Production, Recording, Mixing"],
//   ["2023", "Hail", "We Are Nothing", "Production, Recording, Mixing"],
//   ["2023", "Old Town Diamonds", "A Pale Horse", "Production, Recording, Mixing"],
//   ["2023", "Hollow Senses", "Taurobolium", "Mixing, Noise/Synthesis Interlude Recording"],
//   ["2022", "Fliege", "The Invisible Seam", "Mixing, Vocal Recording"],
//   ["2020", "The Kolotov Mocktails", "Ivy Hall", "Mixing"],
//   ["2019", "L’Acephale", "L’Acephale", "Recording, Mixing"],
//   ["2018", "Twin Perish", "Blue Pour", "Production, Recording, Mixing"],
//   ["2016", "Bulldog Shadow", "24-Hour Drunk", "Production, Recording, Mixing"],
//   ["2014", "Night Surgeon", "Gandola Crimewave", "Production, Recording, Mixing"],
//   ["2013", "Night Surgeon", "Self-Titled", "Production, Recording, Mixing"],
//   ["2012", "Steelhymen", "0 || 0/0", "Recording, Mixing"],
//   ["2011", "Blondie", "Panic of Girls", "Recording"],
//   ["2011", "Shalants", "Self-Titled", "Recording, Mixing"],
//   ["2011", "Night Surgeon", "Day for Night", "Production, Recording, Mixing"],
//   ["2011", "Casey Spooner", "Adult Contemporary", "Recording"],
//   ["2009", "Fischerspooner", "Entertainment", "Recording"],
//   ["2008", "Mobile", "Tales from the City", "Recording"],
//   ["2007", "Stab The Matador", "Doctor", "Recording"],
// ];

// const forthcomingCredits = [
//   ["Notnauts", "Title forthcoming", "Full-length LP — Production, Recording, Mixing"],
//   ["Refrigerated Nurses", "Title forthcoming", "Full-length LP — Production, Recording, Mixing"],
//   ["Entrain", "Title forthcoming", "Full-length LP — Production, Recording, Mixing"],
//   ["Mistons", "Return to Cinder", "Full-length LP — Production, Recording, Mixing"],
//   ["L’Acephale", "Eden!", "Full-length LP — Production, Recording, Mixing"],
// ];

// const technicalSkills = [
//   {
//     heading: "Audio Engineering",
//     items: [
//       "Production, recording, editing, mixing, and delivery",
//       "Microphone selection and placement",
//       "Analog signal flow and multichannel recording",
//       "Preamps, converters, monitoring, and routing",
//       "Gain staging, equipment maintenance, and troubleshooting",
//       "Studio infrastructure, acoustic treatment, and sound isolation",
//     ],
//   },
//   {
//     heading: "Audio Software",
//     items: [
//       "Pro Tools",
//       "FabFilter, Valhalla DSP, UAD, and Waves",
//       "Digital audio workstations and plugin-based processing",
//       "Session organization, archival workflows, and file delivery",
//     ],
//   },
//   {
//     heading: "Live Sound & AV",
//     items: [
//       "Basic live-sound setup and occasional front-of-house assistance",
//       "Mixers, microphones, cabling, and stage equipment",
//       "Event AV support, projector and lighting setup",
//       "Stage and event coordination",
//     ],
//   },
//   {
//     heading: "Web Development",
//     items: [
//       "JavaScript and TypeScript",
//       "React and Next.js",
//       "HTML and CSS",
//       "Tailwind CSS and Styled Components",
//       "Node.js and Express.js",
//       "SQL, Git, and VS Code",
//     ],
//   },
//   {
//     heading: "Research & Instruction",
//     items: [
//       "Academic research and literature review",
//       "Bibliographic annotation and source evaluation",
//       "JSTOR, EBSCOhost, and peer-reviewed databases",
//       "MLA, APA, and Chicago citation styles",
//       "Writing tutoring, workshops, and academic coaching",
//     ],
//   },
//   {
//     heading: "Photography",
//     items: [
//       "Analog photography and 35mm / 120-format film",
//       "Black-and-white film development",
//       "Performance documentation, portraiture, candid and lifestyle photography",
//       "Landscape photography as personal practice",
//     ],
//   },
// ];

// const activities = [
//   {
//     title: "Grant Panelist — Urgency/Stability Support for Artists",
//     organization: "City of Portland / Regional Arts & Culture Council",
//     dates: "2022",
//     description:
//       "Served on review panels for both tracks of a City-funded artist support program administered by RACC, reviewing approximately 170 applications across the two tracks. The Urgency track addressed immediate financial needs; the Stability track supported ongoing creative practice. Applied each track’s distinct criteria, including urgency of need for Urgency applications.",
//   },
//   {
//     title: "Project Grant Panelist — Music Projects",
//     organization: "Regional Arts & Culture Council",
//     dates: "2020",
//     description:
//       "Reviewed and evaluated applications for music project grants.",
//   },
//   {
//     title: "Photographer",
//     organization: "Portland Butoh Festival",
//     dates: "2024–2025",
//     description:
//       "Documented performances using 35mm black-and-white and color-negative film.",
//   },
//   {
//     title: "External Reviewer",
//     organization: "STANCE: An International Undergraduate Philosophy Journal",
//     dates: "2017",
//     description: "Reviewed undergraduate philosophy submissions.",
//   },
//   {
//     title: "High School Ethics Bowl Coach",
//     organization: "Columbia River High School",
//     dates: "2013–2014",
//     description:
//       "Coached students in ethical reasoning, argument construction, and discussion in preparation for Ethics Bowl competition.",
//   },
// ];

// const awards = [
//   {
//     title: "Western States Center Fellowship",
//     dates: "2022–2023",
//     description:
//       "Fellowship associated with work supporting music programming for incarcerated participants.",
//   },
//   {
//     title: "Regional Arts & Culture Council Grants",
//     dates: "Details to add",
//     description:
//       "Two RACC grant awards; award names, years, and supported projects to be added.",
//   },
// ];

// function SectionHeading({
//   number,
//   children,
// }: {
//   number: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="mb-7 flex items-baseline gap-4 border-b border-[#d9d7d0] pb-3">
//       <span className="font-mono text-xs tracking-widest text-[#858178]">
//         {number}
//       </span>
//       <h2 className="text-lg font-medium tracking-tight text-[#292824] sm:text-xl">
//         {children}
//       </h2>
//     </div>
//   );
// }

// function ExperienceEntry({
//   role,
//   organization,
//   location,
//   dates,
//   bullets,
// }: {
//   role: string;
//   organization: string;
//   location: string;
//   dates: string;
//   bullets: string[];
// }) {
//   return (
//     <article className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//       <div>
//         <h3 className="text-base font-medium text-[#292824]">{role}</h3>
//         <p className="mt-1 text-sm text-[#5d5a53]">
//           {organization}
//           <span className="px-2 text-[#b5b1a8]">/</span>
//           {location}
//         </p>
//         <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-[#45433e] marker:text-[#9c988e]">
//           {bullets.map((bullet) => (
//             <li key={bullet}>{bullet}</li>
//           ))}
//         </ul>
//       </div>
//       <p className="font-mono text-xs tracking-wide text-[#858178] sm:pt-1 sm:text-right">
//         {dates}
//       </p>
//     </article>
//   );
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#faf9f6] px-5 py-8 text-[#292824] sm:px-8 sm:py-14">
//       <div className="mx-auto max-w-[920px]">
//         <header className="border-b border-[#d9d7d0] pb-9">
//           <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
//             <div>
//               <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#858178]">
//                 Professional Archive
//               </p>
//               <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
//                 Gabriel Eduardo Espinosa
//               </h1>
//               <p className="mt-4 max-w-2xl text-base leading-7 text-[#5d5a53] sm:text-lg">
//                 Audio engineer and producer, educator, and interdisciplinary
//                 technical practitioner.
//               </p>
//             </div>
//             <button
//               onClick={() => window.print()}
//               className="print:hidden w-fit border border-[#bcb9b0] px-4 py-2 text-sm text-[#45433e] transition hover:border-[#292824] hover:text-[#292824]"
//             >
//               Print / Save PDF
//             </button>
//           </div>

//           <div className="mt-7 flex flex-col gap-2 text-sm text-[#5d5a53] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
//             <span>Portland, Oregon, USA</span>
//             <a className="hover:text-[#292824]" href="tel:5034309499">
//               503.430.9499
//             </a>
//             <a
//               className="hover:text-[#292824]"
//               href="mailto:gabiespinosa138@gmail.com"
//             >
//               gabiespinosa138@gmail.com
//             </a>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
//             <a
//               href="https://winter-beast-studio-site.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="underline decoration-[#c8c4ba] underline-offset-4 hover:decoration-[#292824]"
//             >
//               WinterBeast Studio
//             </a>
//             <a
//               href="https://ge-espinosa-photo-portfolio.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="underline decoration-[#c8c4ba] underline-offset-4 hover:decoration-[#292824]"
//             >
//               Photography Portfolio
//             </a>
//           </div>
//         </header>

//         <section className="py-10">
//           <SectionHeading number="01">Professional Profile</SectionHeading>
//           <p className="max-w-3xl text-[16px] leading-8 text-[#45433e] sm:text-[17px]">
//             Audio engineer and producer with experience spanning independent
//             music production, professional recording studios, live performance,
//             audiovisual support, education, and arts organizations. Combines
//             hands-on technical practice with research, instruction, and
//             long-term collaboration with artists. Additional training in full
//             stack web development and an academic background in philosophy.
//           </p>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="02">Professional Experience</SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             {experience.map((entry) => (
//               <ExperienceEntry key={`${entry.organization}-${entry.role}`} {...entry} />
//             ))}
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="03">Recording Credits</SectionHeading>
//           <div className="mb-8">
//             <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
//               Selected Released Work
//             </h3>
//             <div className="border-t border-[#d9d7d0]">
//               {releasedCredits.map(([year, artist, title, role]) => (
//                 <div
//                   key={`${year}-${artist}-${title}`}
//                   className="grid gap-1 border-b border-[#e5e2da] py-3 sm:grid-cols-[54px_minmax(0,1fr)_minmax(170px,0.8fr)] sm:gap-4"
//                 >
//                   <span className="font-mono text-xs text-[#858178]">
//                     {year}
//                   </span>
//                   <div>
//                     <p className="text-[15px] font-medium">{artist}</p>
//                     <p className="text-sm text-[#5d5a53]">{title}</p>
//                   </div>
//                   <p className="text-sm leading-6 text-[#77736a] sm:text-right">
//                     {role}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
//               Forthcoming
//             </h3>
//             <div className="border-t border-[#d9d7d0]">
//               {forthcomingCredits.map(([artist, title, role]) => (
//                 <div
//                   key={artist}
//                   className="grid gap-1 border-b border-[#e5e2da] py-3 sm:grid-cols-[minmax(0,1fr)_minmax(170px,0.8fr)] sm:gap-4"
//                 >
//                   <div>
//                     <p className="text-[15px] font-medium">{artist}</p>
//                     <p className="text-sm text-[#5d5a53]">{title}</p>
//                   </div>
//                   <p className="text-sm leading-6 text-[#77736a] sm:text-right">
//                     {role}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="04">Technical Skills & Practice</SectionHeading>
//           <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
//             {technicalSkills.map((group) => (
//               <div key={group.heading}>
//                 <h3 className="mb-3 text-base font-medium">{group.heading}</h3>
//                 <ul className="space-y-2 text-[15px] leading-6 text-[#5d5a53]">
//                   {group.items.map((item) => (
//                     <li key={item} className="flex gap-2">
//                       <span className="text-[#aaa69b]">—</span>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="05">Education & Training</SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//               <div>
//                 <h3 className="text-base font-medium">
//                   Full Stack Web Development
//                 </h3>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Bloom Institute of Technology
//                 </p>
//               </div>
//               <p className="font-mono text-xs text-[#858178] sm:text-right">
//                 2023–2024
//               </p>
//             </div>
//             <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//               <div>
//                 <h3 className="text-base font-medium">
//                   BA, Philosophy — Departmental Honors
//                 </h3>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Minor: History of Science
//                 </p>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Portland State University
//                 </p>
//               </div>
//               <p className="font-mono text-xs text-[#858178] sm:text-right">
//                 2011–2016
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="06">
//             Arts, Community & Additional Production Credits
//           </SectionHeading>

//           <div className="divide-y divide-[#e5e2da]">
//             {activities.map((item) => (
//               <article key={item.title} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_120px] sm:gap-8">
//                 <div>
//                   <h3 className="text-base font-medium">{item.title}</h3>
//                   <p className="mt-1 text-sm text-[#5d5a53]">
//                     {item.organization}
//                   </p>
//                   <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                     {item.description}
//                   </p>
//                 </div>
//                 <p className="font-mono text-xs text-[#858178] sm:text-right">
//                   {item.dates}
//                 </p>
//               </article>
//             ))}
//           </div>

//           <div className="mt-8 border-t border-[#d9d7d0] pt-6">
//             <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
//               Selected Early-Career Studio Internships
//             </h3>
//             <div className="divide-y divide-[#e5e2da]">
//               {internships.map((item) => (
//                 <article key={item.organization} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//                   <div>
//                     <h4 className="text-base font-medium">{item.role}</h4>
//                     <p className="mt-1 text-sm text-[#5d5a53]">
//                       {item.organization}
//                       <span className="px-2 text-[#b5b1a8]">/</span>
//                       {item.location}
//                     </p>
//                     <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                       {item.description}
//                     </p>
//                   </div>
//                   <p className="font-mono text-xs text-[#858178] sm:text-right">
//                     {item.dates}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8 border-t border-[#d9d7d0] pt-6">
//             <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
//               Selected Production & Event Credits
//             </h3>
//             <article className="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//               <div>
//                 <h4 className="text-base font-medium">
//                   Stagehand — COSMIC YULE
//                 </h4>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Chaos & Candy · The Box, New York, NY
//                 </p>
//                 <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                   Assisted with equipment and instrument transport, cable runs,
//                   staging, and microphone setup for rehearsals and live
//                   performances. The production merged the aesthetics of outer
//                   space and the Renaissance.
//                 </p>
//               </div>
//               <p className="font-mono text-xs text-[#858178] sm:text-right">
//                 2006
//               </p>
//             </article>
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="07">Awards, Grants & Fellowships</SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             {awards.map((item) => (
//               <article key={item.title} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//                 <div>
//                   <h3 className="text-base font-medium">{item.title}</h3>
//                   <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                     {item.description}
//                   </p>
//                 </div>
//                 <p className="font-mono text-xs text-[#858178] sm:text-right">
//                   {item.dates}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </section>

//         <footer className="mt-4 border-t border-[#d9d7d0] py-8">
//           <div className="flex flex-col gap-3 text-sm text-[#77736a] sm:flex-row sm:items-center sm:justify-between">
//             <span>Gabriel Eduardo Espinosa</span>
//             <a
//               href="mailto:gabiespinosa138@gmail.com"
//               className="hover:text-[#292824]"
//             >
//               gabiespinosa138@gmail.com
//             </a>
//           </div>
//         </footer>
//       </div>

//       <style jsx global>{`
//         @media print {
//           @page {
//             size: auto;
//             margin: 14mm 13mm;
//           }

//           html,
//           body {
//             background: #fff !important;
//             color: #292824 !important;
//             font-size: 10pt;
//           }

//           main {
//             min-height: 0 !important;
//             padding: 0 !important;
//             background: #fff !important;
//           }

//           main > div {
//             max-width: none !important;
//           }

//           button,
//           .print\\:hidden {
//             display: none !important;
//           }

//           a {
//             color: inherit !important;
//             text-decoration: none !important;
//           }

//           section {
//             padding-top: 18pt !important;
//             padding-bottom: 18pt !important;
//           }

//           article,
//           h2,
//           h3,
//           h4 {
//             break-inside: avoid;
//           }

//           ul {
//             break-inside: avoid;
//           }

//           * {
//             -webkit-print-color-adjust: exact;
//             print-color-adjust: exact;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

// "use client";

// import React from "react";

// const experience = [
//   {
//     role: "Studio Owner & House Audio Engineer",
//     organization: "WinterBeast",
//     location: "Portland, OR",
//     dates: "2018–Present",
//     bullets: [
//       "Own and operate an independent recording studio in Northeast Portland, producing, recording, and mixing full-length albums for independent artists.",
//       "Designed and built the studio interior and sound isolation, achieving approximately 30 dB of noise reduction.",
//       "Support projects from production and tracking through final mixes and delivery, adapting to artists' needs and changing project scope.",
//       "Manage scheduling, equipment maintenance, studio infrastructure, project organization, and artist relationships.",
//       "Communicate technical decisions clearly and deliver reference bounces, mixes, and stems on deadline.",
//     ],
//   },
//   {
//     role: "Audio Engineer",
//     organization: "Outta Sight Outta Mind Music",
//     location: "Portland, OR",
//     dates: "2022–2024",
//     bullets: [
//       "Mixed and archived more than 120 music projects created by incarcerated participants; did not record or edit the source projects.",
//       "Maintained organized digital archives and standardized file naming to support reliable project retrieval and preservation.",
//       "Supported live showcases through equipment setup, stage coordination, and occasional front-of-house assistance.",
//       "Began through a Western States Center fellowship and continued in paid work with Open Hearts Open Minds after the fellowship ended.",
//     ],
//   },
//   {
//     role: "Writing Tutor — TRIO Student Support Services",
//     organization: "Portland Community College",
//     location: "Portland, OR",
//     dates: "2018–2023",
//     bullets: [
//       "Provided individualized writing and research support to first-generation and low-income students, including students with learning differences.",
//       "Helped students develop research questions, evaluate sources, integrate citations, and prepare scholarship applications.",
//       "Facilitated workshops and coordinated with TRIO advisors and faculty to support student progress.",
//     ],
//   },
//   {
//     role: "Writing Tutor — Reading & Writing Center",
//     organization: "Portland Community College",
//     location: "Portland, OR",
//     dates: "2018–2022",
//     bullets: [
//       "Supported students across disciplines with writing assignments, research, revision, and academic communication.",
//       "Helped students navigate library resources and databases, interpret assignment prompts, and adapt writing strategies to different contexts.",
//     ],
//   },
//   {
//     role: "Facilities & AV Support",
//     organization: "Oregon Contemporary (formerly Disjecta)",
//     location: "Portland, OR",
//     dates: "2017–2018",
//     bullets: [
//       "Maintained exhibition and event spaces through facilities work, painting, cleaning, and landscaping.",
//       "Installed and operated projectors, lighting, and sound equipment; provided technical support to artists, event organizers, attendees, and freelancers.",
//     ],
//   },
//   {
//     role: "Stagehand & AV Support",
//     organization:
//       "Portland Institute for Contemporary Art — Time-Based Art Festival",
//     location: "Portland, OR",
//     dates: "2017",
//     bullets: [
//       "Supported performances and events through seating, sound-system and microphone setup, and instrument preparation.",
//       "Provided front-of-house sound and live recording for archival and press purposes while coordinating with artists and production staff.",
//     ],
//   },
//   {
//     role: "Freelance Audio Engineer",
//     organization: "Independent / Contract",
//     location: "New York, NY; San Francisco, CA; Portland, OR; Montreal, QC",
//     dates: "2008–2014",
//     bullets: [
//       "Recorded and mixed music in professional studios including Headgear Recording, Rare Book Room, Avatar, LoHo, Mercy Sound, Applehead, Studios Piccolo, Hyde Street, and The Map Room.",
//       "Contributed recording work to projects associated with Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
//     ],
//   },
//   {
//     role: "Stagehand — COSMIC YULE",
//     organization: "Chaos & Candy · The Box",
//     location: "New York, NY",
//     dates: "2006",
//     bullets: [
//       "Assisted with equipment and instrument transport, cable runs, staging, and microphone setup for rehearsals and live performances.",
//     ],
//   },
//   {
//     role: "AV Technician",
//     organization: "Portland Community College",
//     location: "Portland, OR",
//     dates: "2005–2006",
//     bullets: [
//       "Scheduled, delivered, and tracked audiovisual equipment for faculty and students.",
//       "Assisted with audio, video, and lighting setup and troubleshooting.",
//     ],
//   },
// ];

// const internships = [
//   {
//     organization: "The Carriage House — Ian Pai",
//     location: "Brooklyn, NY",
//     dates: "2006-2008",
//     description:
//       "Internship with Ian Pai at his personal audio production and rehearsal space.",
//   },
//   {
//     organization: "Headgear Recording",
//     location: "Williamsburg, Brooklyn, NY",
//     dates: "2006-2007",
//     description:
//       "Internship at a professional recording studio. Specific responsibilities to be added when confirmed.",
//   },
// ];

// const releasedCredits = [
//   ["2026", "Hail", "Child of A Cursed Temple", "Production, Recording, Mixing"],
//   ["2026", "Zothique", "Abominations of Yondo", "Drum Recording, Mixing"],
//   ["2024", "Hail", "Transgression", "Production, Recording, Mixing"],
//   ["2024", "Old Town Diamonds", "40 Miles", "Production, Recording, Mixing"],
//   ["2023", "Hail", "We Are Nothing", "Production, Recording, Mixing"],
//   [
//     "2023",
//     "Old Town Diamonds",
//     "A Pale Horse",
//     "Production, Recording, Mixing",
//   ],
//   [
//     "2023",
//     "Hollow Senses",
//     "Taurobolium",
//     "Mixing, Noise/Synthesis Interlude Recording",
//   ],
//   ["2022", "Fliege", "The Invisible Seam", "Mixing, Vocal Recording"],
//   ["2020", "The Kolotov Mocktails", "Ivy Hall", "Mixing"],
//   ["2019", "L’Acephale", "L’Acephale", "Recording, Mixing"],
//   ["2018", "Twin Perish", "Blue Pour", "Production, Recording, Mixing"],
//   ["2016", "Bulldog Shadow", "24-Hour Drunk", "Production, Recording, Mixing"],
//   [
//     "2014",
//     "Night Surgeon",
//     "Gandola Crimewave",
//     "Production, Recording, Mixing",
//   ],
//   ["2013", "Night Surgeon", "Self-Titled", "Production, Recording, Mixing"],
//   ["2012", "Steelhymen", "0 || 0/0", "Recording, Mixing"],
//   ["2011", "Blondie", "Panic of Girls", "Recording"],
//   ["2011", "Shalants", "Self-Titled", "Recording, Mixing"],
//   ["2011", "Night Surgeon", "Day for Night", "Production, Recording, Mixing"],
//   ["2011", "Casey Spooner", "Adult Contemporary", "Recording"],
//   ["2009", "Fischerspooner", "Entertainment", "Recording"],
//   ["2008", "Mobile", "Tales from the City", "Recording"],
//   ["2007", "Stab The Matador", "Doctor", "Recording"],
// ];

// const forthcomingCredits = [
//   [
//     "Notnauts",
//     "Title forthcoming",
//     "Full-length LP — Production, Recording, Mixing",
//   ],
//   [
//     "Refrigerated Nurses",
//     "Title forthcoming",
//     "Full-length LP — Production, Recording, Mixing",
//   ],
//   [
//     "Entrain",
//     "Title forthcoming",
//     "Full-length LP — Production, Recording, Mixing",
//   ],
//   [
//     "Mistons",
//     "Return to Cinder",
//     "Full-length LP — Production, Recording, Mixing",
//   ],
//   ["L’Acephale", "Eden!", "Full-length LP — Production, Recording, Mixing"],
// ];

// const technicalSkills = [
//   {
//     heading: "Audio Engineering",
//     items: [
//       "Production, recording, editing, mixing, and delivery",
//       "Microphone selection and placement",
//       "Analog signal flow and multichannel recording",
//       "Preamps, converters, monitoring, and routing",
//       "Gain staging, equipment maintenance, and troubleshooting",
//       "Studio infrastructure, acoustic treatment, and sound isolation",
//     ],
//   },
//   {
//     heading: "Audio Software",
//     items: [
//       "Pro Tools",
//       "FabFilter, Valhalla DSP, UAD, and Waves",
//       "Digital audio workstations and plugin-based processing",
//       "Session organization, archival workflows, and file delivery",
//     ],
//   },
//   {
//     heading: "Live Sound & AV",
//     items: [
//       "Basic live-sound setup and occasional front-of-house assistance",
//       "Mixers, microphones, cabling, and stage equipment",
//       "Event AV support, projector and lighting setup",
//       "Stage and event coordination",
//     ],
//   },
//   {
//     heading: "Web Development",
//     items: [
//       "JavaScript and TypeScript",
//       "React and Next.js",
//       "HTML and CSS",
//       "Tailwind CSS and Styled Components",
//       "Node.js and Express.js",
//       "SQL, Git, and VS Code",
//     ],
//   },
//   {
//     heading: "Research & Instruction",
//     items: [
//       "Academic research and literature review",
//       "Bibliographic annotation and source evaluation",
//       "JSTOR, EBSCOhost, and peer-reviewed databases",
//       "MLA, APA, and Chicago citation styles",
//       "Writing tutoring, workshops, and academic coaching",
//     ],
//   },
//   {
//     heading: "Photography",
//     items: [
//       "Analog photography and 35mm / 120-format film",
//       "Black-and-white film development",
//       "Performance documentation, portraiture, candid and lifestyle photography",
//       "Landscape photography as personal practice",
//     ],
//   },
// ];

// const activities = [
//   {
//     title: "Grant Panelist — Urgency/Stability Support for Artists",
//     organization: "City of Portland / Regional Arts & Culture Council",
//     dates: "2022",
//     description:
//       "Served on review panels for both tracks of a City-funded artist support program administered by RACC, reviewing approximately 170 applications across the two tracks. The Urgency track addressed immediate financial needs; the Stability track supported ongoing creative practice. Applied each track’s distinct criteria, including urgency of need for Urgency applications.",
//   },
//   {
//     title: "Project Grant Panelist — Music Projects",
//     organization: "Regional Arts & Culture Council",
//     dates: "2020",
//     description:
//       "Reviewed and evaluated applications for music project grants.",
//   },
//   {
//     title: "Photographer",
//     organization: "Portland Butoh Festival",
//     dates: "2024–2025",
//     description:
//       "Documented performances using 35mm black-and-white and color-negative film.",
//   },
//   {
//     title: "External Reviewer",
//     organization: "STANCE: An International Undergraduate Philosophy Journal",
//     dates: "2017",
//     description: "Reviewed undergraduate philosophy submissions.",
//   },
//   {
//     title: "High School Ethics Bowl Coach",
//     organization: "Columbia River High School",
//     dates: "2013–2014",
//     description:
//       "Coached students in ethical reasoning, argument construction, and discussion in preparation for Ethics Bowl competition.",
//   },
// ];

// const awards = [
//   {
//     title: "Western States Center Fellowship",
//     dates: "2022–2023",
//     description:
//       "Fellowship associated with work supporting music programming for incarcerated participants.",
//   },
//   {
//     title: "Regional Arts & Culture Council Grants",
//     dates: "Details to add",
//     description:
//       "Two RACC grant awards; award names, years, and supported projects to be added.",
//   },
// ];

// function SectionHeading({
//   number,
//   children,
// }: {
//   number: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="mb-7 flex items-baseline gap-4 border-b border-[#d9d7d0] pb-3">
//       <span className="font-mono text-xs tracking-widest text-[#858178]">
//         {number}
//       </span>
//       <h2 className="text-lg font-medium tracking-tight text-[#292824] sm:text-xl">
//         {children}
//       </h2>
//     </div>
//   );
// }

// function ExperienceEntry({
//   role,
//   organization,
//   location,
//   dates,
//   bullets,
// }: {
//   role: string;
//   organization: string;
//   location: string;
//   dates: string;
//   bullets: string[];
// }) {
//   return (
//     <article className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//       <div>
//         <h3 className="text-base font-medium text-[#292824]">{role}</h3>
//         <p className="mt-1 text-sm text-[#5d5a53]">
//           {organization}
//           <span className="px-2 text-[#b5b1a8]">/</span>
//           {location}
//         </p>
//         <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-[#45433e] marker:text-[#9c988e]">
//           {bullets.map((bullet) => (
//             <li key={bullet}>{bullet}</li>
//           ))}
//         </ul>
//       </div>
//       <p className="font-mono text-xs tracking-wide text-[#858178] sm:pt-1 sm:text-right">
//         {dates}
//       </p>
//     </article>
//   );
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#faf9f6] px-5 py-8 text-[#292824] sm:px-8 sm:py-14">
//       <div className="mx-auto max-w-[920px]">
//         <header className="border-b border-[#d9d7d0] pb-9">
//           <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
//             <div>
//               <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#858178]">
//                 Professional Archive
//               </p>
//               <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
//                 Gabriel Eduardo Espinosa
//               </h1>
//               <p className="mt-4 max-w-2xl text-base leading-7 text-[#5d5a53] sm:text-lg">
//                 Audio engineer and producer, educator, and interdisciplinary
//                 technical practitioner.
//               </p>
//             </div>
//             <button
//               onClick={() => window.print()}
//               className="print:hidden w-fit border border-[#bcb9b0] px-4 py-2 text-sm text-[#45433e] transition hover:border-[#292824] hover:text-[#292824]"
//             >
//               Print / Save PDF
//             </button>
//           </div>

//           <div className="mt-7 flex flex-col gap-2 text-sm text-[#5d5a53] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
//             <span>Portland, Oregon, USA</span>
//             <a className="hover:text-[#292824]" href="tel:5034309499">
//               503.430.9499
//             </a>
//             <a
//               className="hover:text-[#292824]"
//               href="mailto:gabiespinosa138@gmail.com"
//             >
//               gabiespinosa138@gmail.com
//             </a>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
//             <a
//               href="https://winter-beast-studio-site.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="underline decoration-[#c8c4ba] underline-offset-4 hover:decoration-[#292824]"
//             >
//               WinterBeast Studio
//             </a>
//             <a
//               href="https://ge-espinosa-photo-portfolio.vercel.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="underline decoration-[#c8c4ba] underline-offset-4 hover:decoration-[#292824]"
//             >
//               Photography Portfolio
//             </a>
//           </div>
//         </header>

//         <section className="py-10">
//           <SectionHeading number="01">Professional Profile</SectionHeading>
//           <p className="max-w-3xl text-[16px] leading-8 text-[#45433e] sm:text-[17px]">
//             Audio engineer and producer with experience spanning independent
//             music production, professional recording studios, live performance,
//             audiovisual support, education, and arts organizations. Combines
//             hands-on technical practice with research, instruction, and
//             long-term collaboration with artists. Additional training in full
//             stack web development and an academic background in philosophy.
//           </p>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="02">Professional Experience</SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             {experience.map((entry) => (
//               <ExperienceEntry
//                 key={`${entry.organization}-${entry.role}`}
//                 {...entry}
//               />
//             ))}
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="03">Recording Credits</SectionHeading>
//           <div className="mb-8">
//             <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
//               Selected Released Work
//             </h3>
//             <div className="border-t border-[#d9d7d0]">
//               {releasedCredits.map(([year, artist, title, role]) => (
//                 <div
//                   key={`${year}-${artist}-${title}`}
//                   className="grid gap-1 border-b border-[#e5e2da] py-3 sm:grid-cols-[54px_minmax(0,1fr)_minmax(170px,0.8fr)] sm:gap-4"
//                 >
//                   <span className="font-mono text-xs text-[#858178]">
//                     {year}
//                   </span>
//                   <div>
//                     <p className="text-[15px] font-medium">{artist}</p>
//                     <p className="text-sm text-[#5d5a53]">{title}</p>
//                   </div>
//                   <p className="text-sm leading-6 text-[#77736a] sm:text-right">
//                     {role}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
//               Forthcoming
//             </h3>
//             <div className="border-t border-[#d9d7d0]">
//               {forthcomingCredits.map(([artist, title, role]) => (
//                 <div
//                   key={artist}
//                   className="grid gap-1 border-b border-[#e5e2da] py-3 sm:grid-cols-[minmax(0,1fr)_minmax(170px,0.8fr)] sm:gap-4"
//                 >
//                   <div>
//                     <p className="text-[15px] font-medium">{artist}</p>
//                     <p className="text-sm text-[#5d5a53]">{title}</p>
//                   </div>
//                   <p className="text-sm leading-6 text-[#77736a] sm:text-right">
//                     {role}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="04">
//             Technical Skills & Practice
//           </SectionHeading>
//           <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
//             {technicalSkills.map((group) => (
//               <div key={group.heading}>
//                 <h3 className="mb-3 text-base font-medium">{group.heading}</h3>
//                 <ul className="space-y-2 text-[15px] leading-6 text-[#5d5a53]">
//                   {group.items.map((item) => (
//                     <li key={item} className="flex gap-2">
//                       <span className="text-[#aaa69b]">—</span>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="05">Education & Training</SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//               <div>
//                 <h3 className="text-base font-medium">
//                   Full Stack Web Development
//                 </h3>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Bloom Institute of Technology
//                 </p>
//               </div>
//               <p className="font-mono text-xs text-[#858178] sm:text-right">
//                 2023–2024
//               </p>
//             </div>
//             <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
//               <div>
//                 <h3 className="text-base font-medium">
//                   BA, Philosophy — Departmental Honors
//                 </h3>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Minor: History of Science
//                 </p>
//                 <p className="mt-1 text-sm text-[#5d5a53]">
//                   Portland State University
//                 </p>
//               </div>
//               <p className="font-mono text-xs text-[#858178] sm:text-right">
//                 2011–2016
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="06">Internships</SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             {internships.map((item) => (
//               <article
//                 key={item.organization}
//                 className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8"
//               >
//                 <div>
//                   <h3 className="text-base font-medium">{item.organization}</h3>
//                   <p className="mt-1 text-sm text-[#5d5a53]">{item.location}</p>
//                   <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                     {item.description}
//                   </p>
//                 </div>
//                 <p className="font-mono text-xs text-[#858178] sm:text-right">
//                   {item.dates}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="07">
//             Arts, Community & Additional Production Credits
//           </SectionHeading>

//           <div className="divide-y divide-[#e5e2da]">
//             {activities.map((item) => (
//               <article
//                 key={item.title}
//                 className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_120px] sm:gap-8"
//               >
//                 <div>
//                   <h3 className="text-base font-medium">{item.title}</h3>
//                   <p className="mt-1 text-sm text-[#5d5a53]">
//                     {item.organization}
//                   </p>
//                   <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                     {item.description}
//                   </p>
//                 </div>
//                 <p className="font-mono text-xs text-[#858178] sm:text-right">
//                   {item.dates}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="py-10">
//           <SectionHeading number="08">
//             Awards, Grants & Fellowships
//           </SectionHeading>
//           <div className="divide-y divide-[#e5e2da]">
//             {awards.map((item) => (
//               <article
//                 key={item.title}
//                 className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8"
//               >
//                 <div>
//                   <h3 className="text-base font-medium">{item.title}</h3>
//                   <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
//                     {item.description}
//                   </p>
//                 </div>
//                 <p className="font-mono text-xs text-[#858178] sm:text-right">
//                   {item.dates}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </section>

//         <footer className="mt-4 border-t border-[#d9d7d0] py-8">
//           <div className="flex flex-col gap-3 text-sm text-[#77736a] sm:flex-row sm:items-center sm:justify-between">
//             <span>Gabriel Eduardo Espinosa</span>
//             <a
//               href="mailto:gabiespinosa138@gmail.com"
//               className="hover:text-[#292824]"
//             >
//               gabiespinosa138@gmail.com
//             </a>
//           </div>
//         </footer>
//       </div>

//       <style jsx global>{`
//         @media print {
//           @page {
//             size: auto;
//             margin: 14mm 13mm;
//           }

//           html,
//           body {
//             background: #fff !important;
//             color: #292824 !important;
//             font-size: 10pt;
//           }

//           main {
//             min-height: 0 !important;
//             padding: 0 !important;
//             background: #fff !important;
//           }

//           main > div {
//             max-width: none !important;
//           }

//           button,
//           .print\\:hidden {
//             display: none !important;
//           }

//           a {
//             color: inherit !important;
//             text-decoration: none !important;
//           }

//           section {
//             padding-top: 18pt !important;
//             padding-bottom: 18pt !important;
//           }

//           article,
//           h2,
//           h3,
//           h4 {
//             break-inside: avoid;
//           }

//           ul {
//             break-inside: avoid;
//           }

//           * {
//             -webkit-print-color-adjust: exact;
//             print-color-adjust: exact;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

"use client";

import React from "react";

const experience = [
  {
    role: "Studio Owner & House Audio Engineer",
    organization: "WinterBeast",
    location: "Portland, OR",
    dates: "2018–Present",
    bullets: [
      "Own and operate an independent recording studio in Northeast Portland, producing, recording, and mixing full-length albums for independent artists.",
      "Designed and built the studio interior and sound isolation, achieving approximately 30 dB of noise reduction.",
      "Support projects from production and tracking through final mixes and delivery, adapting to artists' needs and changing project scope.",
      "Manage scheduling, equipment maintenance, studio infrastructure, project organization, and artist relationships.",
      "Communicate technical decisions clearly and deliver reference bounces, mixes, and stems on deadline.",
    ],
  },
  {
    role: "Audio Engineer",
    organization: "Outta Sight Outta Mind Music",
    location: "Portland, OR",
    dates: "2022–2024",
    bullets: [
      "Mixed more than 120 music projects created by incarcerated participants.",
      "Maintained organized digital archives and standardized file naming to support reliable project retrieval and preservation.",
      "Supported live showcases through equipment setup, stage coordination, and occasional front-of-house assistance.",
      "Began through a Western States Center fellowship and continued in paid work with Open Hearts Open Minds after the fellowship ended.",
    ],
  },
  {
    role: "Writing Tutor — TRIO Student Support Services",
    organization: "Portland Community College",
    location: "Portland, OR",
    dates: "2018–2023",
    bullets: [
      "Provided individualized writing and research support to first-generation and low-income students, including students with learning differences.",
      "Helped students develop research questions, evaluate sources, integrate citations, and prepare scholarship applications.",
      "Coordinated with TRIO advisors and faculty to support student progress.",
    ],
  },
  {
    role: "Writing Tutor — Reading & Writing Center",
    organization: "Portland Community College",
    location: "Portland, OR",
    dates: "2018–2022",
    bullets: [
      "Supported students across disciplines with writing assignments, research, revision, and academic communication.",
      "Helped students navigate library resources and databases, interpret assignment prompts, and adapt writing strategies to different contexts.",
    ],
  },
  {
    role: "Facilities & AV Support",
    organization: "Oregon Contemporary (formerly Disjecta)",
    location: "Portland, OR",
    dates: "2017–2018",
    bullets: [
      "Maintained exhibition and event spaces through facilities work, painting, cleaning, and landscaping.",
      "Set up and configured event spaces for rentals, interpreting floor plans and coordinating with clients to arrange staging, risers, podiums, tables, seating, and audiovisual equipment.",
    ],
  },
  {
    role: "Stagehand & AV Support",
    organization:
      "Portland Institute for Contemporary Art — Time-Based Art Festival",
    location: "Portland, OR",
    dates: "2017",
    bullets: [
      "Supported performances and events through seating, sound-system and microphone setup, and instrument preparation.",
      "Provided front-of-house sound and live recording for archival and press purposes while coordinating with artists and production staff.",
    ],
  },
  {
    role: "Freelance Audio Engineer",
    organization: "Independent / Contract",
    location: "New York, NY; San Francisco, CA; Portland, OR; Montreal, QC",
    dates: "2007–2018",
    bullets: [
      "Recorded and mixed music in professional studios including Headgear Recording, Rare Book Room, Avatar, LoHo, Mercy Sound, Applehead, Studios Piccolo, Hyde Street, and The Map Room.",
      "Recording work with producer Jeff Saltzman through Blondie's Panic of Girls (2011). Subsequent album releases were independently engineered in Portland.",
      "Contributed recording work to projects associated with Blondie, Fischerspooner, Jake Shears, Marina Abramović, and Zach Condon.",
    ],
  },
  {
    role: "Stagehand — COSMIC YULE",
    organization: "Chaos & Candy · The Box",
    location: "New York, NY",
    dates: "2006",
    bullets: [
      "Assisted with equipment and instrument transport, cable runs, staging, and microphone setup for rehearsals and live performances.",
    ],
  },
  {
    role: "AV Technician",
    organization: "Portland Community College",
    location: "Portland, OR",
    dates: "2005–2006",
    bullets: [
      "Scheduled, delivered, and tracked audiovisual equipment for faculty and students.",
      "Assisted with audio, video, and lighting setup and troubleshooting.",
    ],
  },
];

const internships = [
  {
    organization: "The Carriage House — Ian Pai",
    location: "Brooklyn, NY",
    dates: "2006-2008",
    description:
      "Internship at the personal studio and production headquarters of Ian Pai, co-founder of Blue Man Group and musical director of Fischerspooner. The space served as Fischerspooner's rehearsal and performance-preparation headquarters, including audio-stem preparation for live performances, demos, and pre-production for new recorded material. The studio also hosted recording for commercial work and selected musical projects.",
  },
  {
    organization: "Headgear Recording",
    location: "Williamsburg, Brooklyn, NY",
    dates: "2006-2007",
    description:
      "Internship at a prominent independent recording studio and hub of Williamsburg's early-2000s indie music scene, associated with influential artists and albums of the era. Responsibilities included setting up sessions, recalling sessions, assisting the lead engineer, microphone placement, tape-machine calibration, and general session support. Subsequently hired briefly as an assistant engineer before moving on to work as Jeff Saltzman's personal engineer.",
  },
];

const releasedCredits = [
  ["2026", "Hail", "Child of A Cursed Temple", "Production, Recording, Mixing"],
  ["2026", "Zothique", "Abominations of Yondo", "Drum Recording, Mixing"],
  ["2024", "Hail", "Transgression", "Production, Recording, Mixing"],
  ["2024", "Old Town Diamonds", "40 Miles", "Production, Recording, Mixing"],
  ["2023", "Hail", "We Are Nothing", "Production, Recording, Mixing"],
  [
    "2023",
    "Old Town Diamonds",
    "A Pale Horse",
    "Production, Recording, Mixing",
  ],
  [
    "2023",
    "Hollow Senses",
    "Taurobolium",
    "Mixing, Noise/Synthesis Interlude Recording",
  ],
  ["2022", "Fliege", "The Invisible Seam", "Mixing, Vocal Recording"],
  ["2020", "The Kolotov Mocktails", "Ivy Hall", "Mixing"],
  ["2019", "L’Acephale", "L’Acephale", "Production, Recording, Mixing"],
  ["2018", "Twin Perish", "Blue Pour", "Production, Recording, Mixing"],
  ["2016", "Bulldog Shadow", "24-Hour Drunk", "Production, Recording, Mixing"],
  [
    "2014",
    "Night Surgeon",
    "Gandola Crimewave",
    "Production, Recording, Mixing",
  ],
  ["2013", "Night Surgeon", "Self-Titled", "Production, Recording, Mixing"],
  ["2012", "Steelhymen", "0 || 0/0", "Recording, Mixing"],
  ["2011", "Blondie", "Panic of Girls", "Recording"],
  ["2011", "Shalants", "Self-Titled", "Recording, Mixing"],
  ["2011", "Night Surgeon", "Day for Night", "Production, Recording, Mixing"],
  ["2011", "Casey Spooner", "Adult Contemporary", "Recording"],
  ["2009", "Fischerspooner", "Entertainment", "Recording"],
  ["2008", "Mobile", "Tales from the City", "Recording"],
  ["2007", "Stab The Matador", "Doctor", "Recording"],
];

const forthcomingCredits = [
  [
    "Mistons",
    "Return to Cinder",
    "Full-length LP — Production, Recording, Mixing",
  ],
  [
    "Entrain",
    "Title forthcoming",
    "Full-length LP — Production, Recording, Mixing",
  ],
  [
    "Notnauts",
    "Title forthcoming",
    "Full-length LP — Production, Recording, Mixing",
  ],
  [
    "Refrigerated Nurses",
    "Title forthcoming",
    "Full-length LP — Production, Recording, Mixing",
  ],
  [
    "L’Acephale",
    "Title forthcoming",
    "Full-length LP — Production, Recording, Mixing",
  ],
];

const technicalSkills = [
  {
    heading: "Audio Engineering",
    items: [
      "Production, recording, editing, mixing, and delivery",
      "Microphone selection and placement",
      "Analog signal flow and multichannel recording",
      "Preamps, converters, monitoring, and routing",
      "Outboard frequency-, dynamics-, and time-based processors",
      "Gain staging, equipment maintenance, and troubleshooting",
      "Studio infrastructure, acoustic treatment, and sound isolation",
    ],
  },
  {
    heading: "Audio Software",
    items: [
      "Pro Tools",
      "FabFilter, Valhalla DSP, UAD, and Waves",
      "Digital audio workstations and plugin-based processing",
      "Session organization, archival workflows, and file delivery",
    ],
  },
  {
    heading: "Live Sound & AV",
    items: [
      "Basic live-sound setup and occasional front-of-house assistance",
      "Mixers, microphones, cabling, and stage equipment",
      "Stage and event coordination",
    ],
  },
  {
    heading: "Web Development",
    items: [
      "JavaScript and TypeScript",
      "React and Next.js",
      "HTML and CSS",
      "Tailwind CSS and Styled Components",
      "Node.js and Express.js",
      "SQL, Git, and VS Code",
    ],
  },
  {
    heading: "Research & Instruction",
    items: [
      "Academic research and literature review",
      "Bibliographic annotation and source evaluation",
      "JSTOR, EBSCOhost, and peer-reviewed databases",
      "MLA, APA, and Chicago citation styles",
      "Writing tutoring, workshops, and academic coaching",
    ],
  },
  {
    heading: "Photography",
    items: [
      "Analog photography and 35mm / 120-format film",
      "Black-and-white film development",
      "Performance documentation, portraiture, candid and lifestyle photography",
      "Landscape photography as personal practice",
    ],
  },
];

const activities = [
  {
    title: "Photographer",
    organization: "Portland Butoh Festival/Portland Arts Collective",
    dates: "2024–2025",
    description:
      "Photographed performances during the festival’s first two years, documenting live butoh through 35mm black-and-white and color-negative film. Focused on capturing movement, gesture, and the atmosphere of live performance through analog photography.",
  },
  {
    title: "Grant Panelist — Urgency/Stability Support for Artists",
    organization: "City of Portland / Regional Arts & Culture Council",
    dates: "2022",
    description:
      "Served as an external reviewer for both tracks of the City of Portland’s Urgency/Stability Support for Artists program, administered by RACC. Reviewed approximately 170 applications, evaluating artists’ creative practices, community contributions, and funding requests against each track’s criteria, including the Urgency track’s assessment of immediate financial need.",
  },
  {
    title: "Project Grant Panelist — Music Projects",
    organization: "Regional Arts & Culture Council",
    dates: "2020",
    description:
      "Reviewed and evaluated applications for music project grants.",
  },
  {
    title: "External Reviewer",
    organization: "STANCE: An International Undergraduate Philosophy Journal",
    dates: "2017",
    description: "Reviewed undergraduate philosophy submissions.",
  },
  {
    title: "High School Ethics Bowl Coach",
    organization: "Columbia River High School",
    dates: "2013–2014",
    description:
      "Coached students in ethical reasoning, argument construction, and discussion in preparation for Ethics Bowl competition.",
  },
];

const awards = [
  {
    title: "Western States Center Fellowship",
    dates: "2022–2023",
    description:
      "Supported music programming connected to the Columbia River Correctional Institute Music Studio, later named Outta Sight Outta Mind Music, a recording program inside an Oregon state prison operated by Open Hearts Open Minds of Oregon. Contributed audio engineering expertise and explored opportunities to support music mixing, session-file organization, recording techniques, equipment consultation, and music gatherings involving formerly incarcerated participants.",
  },
  {
    title: "Regional Arts & Culture Council (RACC) — Make|Learn|Build Grant",
    dates: "2022",
    description:
      "Field Recording Equipment and Mobile Recording Development. Awarded grant funding to purchase field-recording equipment and expand WinterBeast’s services beyond the studio during COVID-19. The mobile recording setup was intended to support safer, more accessible recording opportunities for musicians and artists while adapting to pandemic-related restrictions. The expansion also established a foundation for future collaborations involving live performance, sound installations, dance, theater, film, podcasts, and other location-based audio projects.",
  },
  {
    title: "Regional Arts & Culture Council (RACC) — Catalyst Project Grant",
    dates: "2019",
    description:
      "Artist Residency Program Development. Awarded grant funding to launch a pilot artist-residency program at WinterBeast, supporting three local independent and experimental music projects over the course of a year. The program provided free studio access, recording equipment, engineering and production support, and artist stipends, removing financial barriers to recording and creating space for collaborative experimentation. The grant also supported artist receptions intended to connect participating musicians and build community across Portland’s independent music scenes.",
  },
  
];

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex items-baseline gap-4 border-b border-[#d9d7d0] pb-3">
      <span className="font-mono text-xs tracking-widest text-[#858178]">
        {number}
      </span>
      <h2 className="text-lg font-medium tracking-tight text-[#292824] sm:text-xl">
        {children}
      </h2>
    </div>
  );
}

function ExperienceEntry({
  role,
  organization,
  location,
  dates,
  bullets,
}: {
  role: string;
  organization: string;
  location: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <article className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
      <div>
        <h3 className="text-base font-medium text-[#292824]">{role}</h3>
        <p className="mt-1 text-sm text-[#5d5a53]">
          {organization}
          <span className="px-2 text-[#b5b1a8]">/</span>
          {location}
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-[#45433e] marker:text-[#9c988e]">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <p className="font-mono text-xs tracking-wide text-[#858178] sm:pt-1 sm:text-right">
        {dates}
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-8 text-[#292824] sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[920px]">
        <header className="border-b border-[#d9d7d0] pb-9">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#858178]">
                Professional Archive
              </p>
              <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                Gabriel Eduardo Espinosa
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5d5a53] sm:text-lg">
                Audio engineer, producer, and interdisciplinary technical
                practitioner.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="print:hidden w-fit border border-[#bcb9b0] px-4 py-2 text-sm text-[#45433e] transition hover:border-[#292824] hover:text-[#292824]"
            >
              Print / Save PDF
            </button>
          </div>

          <div className="mt-7 flex flex-col gap-2 text-sm text-[#5d5a53] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <span>Portland, Oregon, USA</span>
            <a className="hover:text-[#292824]" href="tel:5034309499">
              503.430.9499
            </a>
            <a
              className="hover:text-[#292824]"
              href="mailto:gabiespinosa138@gmail.com"
            >
              gabiespinosa138@gmail.com
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href="https://winterbeastpdx.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#c8c4ba] underline-offset-4 hover:decoration-[#292824]"
            >
              WinterBeast Studio
            </a>
            <a
              href="https://ge-espinosa-photo-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#c8c4ba] underline-offset-4 hover:decoration-[#292824]"
            >
              Photography Portfolio
            </a>
          </div>
        </header>

        <section className="py-10">
          <SectionHeading number="01">Professional Profile</SectionHeading>
          <p className="max-w-3xl text-[16px] leading-8 text-[#45433e] sm:text-[17px]">
            Audio engineer and producer with experience spanning independent
            music production, professional recording studios, live performance,
            audiovisual support, instructional support, and arts organizations.
            Combines hands-on technical practice with research, instruction, and
            long-term collaboration with artists. Additional training in full
            stack web development and an academic background in philosophy.
          </p>
        </section>

        <section className="py-10">
          <SectionHeading number="02">Professional Experience</SectionHeading>
          <div className="divide-y divide-[#e5e2da]">
            {experience.map((entry) => (
              <ExperienceEntry
                key={`${entry.organization}-${entry.role}`}
                {...entry}
              />
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeading number="03">Recording Credits</SectionHeading>
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
              Selected Released Work
            </h3>
            <div className="border-t border-[#d9d7d0]">
              {releasedCredits.map(([year, artist, title, role]) => (
                <div
                  key={`${year}-${artist}-${title}`}
                  className="grid gap-1 border-b border-[#e5e2da] py-3 sm:grid-cols-[54px_minmax(0,1fr)_minmax(170px,0.8fr)] sm:gap-4"
                >
                  <span className="font-mono text-xs text-[#858178]">
                    {year}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium">{artist}</p>
                    <p className="text-sm text-[#5d5a53]">{title}</p>
                  </div>
                  <p className="text-sm leading-6 text-[#77736a] sm:text-right">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[#77736a]">
              Forthcoming
            </h3>
            <div className="border-t border-[#d9d7d0]">
              {forthcomingCredits.map(([artist, title, role]) => (
                <div
                  key={artist}
                  className="grid gap-1 border-b border-[#e5e2da] py-3 sm:grid-cols-[minmax(0,1fr)_minmax(170px,0.8fr)] sm:gap-4"
                >
                  <div>
                    <p className="text-[15px] font-medium">{artist}</p>
                    <p className="text-sm text-[#5d5a53]">{title}</p>
                  </div>
                  <p className="text-sm leading-6 text-[#77736a] sm:text-right">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <SectionHeading number="04">
            Technical Skills & Practice
          </SectionHeading>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {technicalSkills.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-3 text-base font-medium">{group.heading}</h3>
                <ul className="space-y-2 text-[15px] leading-6 text-[#5d5a53]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#aaa69b]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeading number="05">Education & Training</SectionHeading>
          <div className="divide-y divide-[#e5e2da]">
            <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
              <div>
                <h3 className="text-base font-medium">
                  Full Stack Web Development
                </h3>
                <p className="mt-1 text-sm text-[#5d5a53]">
                  Bloom Institute of Technology
                </p>
              </div>
              <p className="font-mono text-xs text-[#858178] sm:text-right">
                2023–2024
              </p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8">
              <div>
                <h3 className="text-base font-medium">
                  BA, Philosophy — Departmental Honors
                </h3>
                <p className="mt-1 text-sm text-[#5d5a53]">
                  Minor: History of Science
                </p>
                <p className="mt-1 text-sm text-[#5d5a53]">
                  Portland State University
                </p>
              </div>
              <p className="font-mono text-xs text-[#858178] sm:text-right">
                2011–2016
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <SectionHeading number="06">Internships</SectionHeading>
          <div className="divide-y divide-[#e5e2da]">
            {internships.map((item) => (
              <article
                key={item.organization}
                className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8"
              >
                <div>
                  <h3 className="text-base font-medium">{item.organization}</h3>
                  <p className="mt-1 text-sm text-[#5d5a53]">{item.location}</p>
                  <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
                    {item.description}
                  </p>
                </div>
                <p className="font-mono text-xs text-[#858178] sm:text-right">
                  {item.dates}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeading number="07">
            Arts & Community Engagement
          </SectionHeading>

          <div className="divide-y divide-[#e5e2da]">
            {activities.map((item) => (
              <article
                key={item.title}
                className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_120px] sm:gap-8"
              >
                <div>
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#5d5a53]">
                    {item.organization}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
                    {item.description}
                  </p>
                </div>
                <p className="font-mono text-xs text-[#858178] sm:text-right">
                  {item.dates}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeading number="08">
            Awards, Grants & Fellowships
          </SectionHeading>
          <div className="divide-y divide-[#e5e2da]">
            {awards.map((item) => (
              <article
                key={item.title}
                className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_155px] sm:gap-8"
              >
                <div>
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#5d5a53]">
                    {item.description}
                  </p>
                </div>
                <p className="font-mono text-xs text-[#858178] sm:text-right">
                  {item.dates}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-4 border-t border-[#d9d7d0] py-8">
          <div className="flex flex-col gap-3 text-sm text-[#77736a] sm:flex-row sm:items-center sm:justify-between">
            <span>Gabriel Eduardo Espinosa</span>
            <a
              href="mailto:gabiespinosa138@gmail.com"
              className="hover:text-[#292824]"
            >
              gabiespinosa138@gmail.com
            </a>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: auto;
            margin: 14mm 13mm;
          }

          html,
          body {
            background: #fff !important;
            color: #292824 !important;
            font-size: 10pt;
          }

          main {
            min-height: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          main > div {
            max-width: none !important;
          }

          button,
          .print\\:hidden {
            display: none !important;
          }

          a {
            color: inherit !important;
            text-decoration: none !important;
          }

          section {
            padding-top: 18pt !important;
            padding-bottom: 18pt !important;
          }

          article,
          h2,
          h3,
          h4 {
            break-inside: avoid;
          }

          ul {
            break-inside: avoid;
          }

          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </main>
  );
}
