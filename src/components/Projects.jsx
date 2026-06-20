import React from 'react';

// --- NEW WORK EXPERIENCE DATA ---
const experienceData = [
    {
        title: "Livestream Operations Intern",
        company: "Intrepid Asia",
        time: "04/2026 - Present",
        responsibilities: [
            "Coordinated cross-functional production teams—including hosts, brand representatives, and technical staff—to execute flawless livestream campaigns across platforms.",
            "Configured and optimized live broadcast setups utilizing OBS Studio, professional camera equipment, and network monitoring tools to guarantee high-quality streaming",
            "Managed real-time troubleshooting and operational adjustments during live sessions, adapting instantly to technical constraints and audience dynamics to maintain optimal viewer engagement."
        ],
        skills: ["Live Production", "OBS Setup", "Stakeholder Management", "Cross-functional Coordination"],
        link: "", 
        buttonText: ""
    },
    {
        title: "E-commerce Store Owner & Operator",
        company: `Thanh Thúy Bedding store`,
        time: "04/2026 - Present",
        responsibilities: [
            "Direct end-to-end digital storefront operations, demonstrating deep practical expertise in Shopee Seller Center mechanics, product SEO optimization, and marketplace algorithms.",
            "Engineer monthly promotional campaigns utilizing native marketing tools to maximize organic traffic and boost overall sales volume.",
            "Analyze daily performance dashboards, tracking key metrics NMV, CTR, CR... to continuously refine pricing strategies and inventory management."
        ],
        skills: ["Shopee Operations", "Performance Tracking", "Campaign Execution", "E-commerce Strategy"],
        link: "https://shopee.vn/dat411200loooo",
        buttonText: "Visit My Store"
    },
    {
        title: "Dropshipping Operator",
        company: "Freelance (Part-time)",
        time: "08/2022 - 04/2023",
        responsibilities: [
            "Managed a cross-border digital retail model, conducting extensive market research to identify trending product niches and establish competitive pricing strategies.",
            "Designed and optimized e-commerce storefronts to ensure seamless user checkout experiences and maximize visitor-to-buyer conversion rates.",
            "Coordinated directly with international suppliers to ensure timely order fulfillment while actively managing customer inquiries to build brand trust and resolve disputes."
        ],
        skills: ["Dropshipping", "Product Research", "Order Fulfillment"],
        link: "", 
        buttonText: ""
    }
];

// --- UPDATED PROJECTS DATA ---
const projectsData = [
    {
        title: "OP SHIFT — Automated Shift Scheduling System",
        challenge: "Manual livestream scheduling consumed heavy resources. Staff cross-checked spreadsheets manually, leading to missed or delayed shifts which negatively impacted brand performance.",
        contribution: "Developed a 'Zero Human Intervention' background system that extracts schedule data, syncs directly to operators' Google Calendars, and triggers automated email alerts.",
        result: "Completely eliminated manual tracking, prevented late shifts, and established a foundation for an Analytics Dashboard to track room fill rates and individual performance.",
        skills: ["Workflow Automation", "Data Standardization", "API Integration", "Process Optimization"],
        // ADD THESE TWO LINES:
        link: `${import.meta.env.BASE_URL}documents/OP_SHIFT_Presentation.pdf`, 
        buttonText: "View Presentation"
    },
    {
        title: "Project 'Bep Viet' E-commerce Website",
        challenge: "Required building a complete e-commerce platform that leveraged Generative AI to provide users with recipe recommendations based on available ingredient inventory.",
        contribution: "Managed the full SDLC, designed the database ERD, and defined Use Cases for integrating the Google Gemini API to analyze inventory data.",
        result: "Validated an AI-integrated system architecture, earning a 9.0/10 academic review for successfully applying AI to solve practical e-commerce challenges.",
        skills: ["SDLC", "ERD Design", "Generative AI", "E-commerce Architecture"],
        link: `${import.meta.env.BASE_URL}documents/Bep_Viet_Docs.pdf`,
        buttonText: "View Technical Docs"
    },
    {
        title: "Bach Khoa Mentoring Platform",
        challenge: "The platform suffered from user drop-offs during report submissions and required strict Role-Based Access Control to ensure security.",
        contribution: "Acted as the bridge between Operations and Tech to clarify requirements. Analyzed UI drop-off points and executed test scripts across 12 QA rounds.",
        result: "Standardized the requirement documentation process, enabling the dev team to build features supporting over 130 mentor-mentee pairs with zero logic errors upon launch.",
        skills: ["Quality Assurance (QA)", "UI/UX Analysis", "Stakeholder Communication", "UAT"],
        link: "", 
        buttonText: ""
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                
                {/* --- WORK EXPERIENCE SECTION --- */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-center mb-4 text-white">
                        Work Experience
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
                </div>
                <div className="space-y-8 mb-24">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                <div>
                                    <h4 className="text-2xl font-semibold text-white">{exp.title}</h4>
                                    <p className="text-cyan-400 mt-1 font-medium">{exp.company} <span className="text-slate-400 font-normal">| {exp.time}</span></p>
                                </div>
                                
                                {exp.link && (
                                    <a 
                                        href={exp.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shrink-0"
                                    >
                                        {exp.buttonText || "View Detail"}
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>

                            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-2">
                                {exp.responsibilities.map((req, idx) => (
                                    <li key={idx} className="leading-relaxed">{req}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                {/* --- PROJECT CONTRIBUTIONS SECTION --- */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-center mb-4 text-white">
                        Project Contributions
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
                </div>
                <div className="space-y-12">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                                
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shrink-0"
                                    >
                                        {project.buttonText || "View Document"}
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 text-slate-300">
                                <div>
                                    <h5 className="font-semibold text-cyan-400 mb-2">Challenge</h5>
                                    <p>{project.challenge}</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-cyan-400 mb-2">My Contribution</h5>
                                    <p>{project.contribution}</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-cyan-400 mb-2">Result</h5>
                                    <p>{project.result}</p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
