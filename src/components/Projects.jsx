import React from 'react';

const projectsData = [
    {
        title: "Hotel Management System - BA Course Project",
        challenge: "Needed a comprehensive business analysis and system design for a complex hotel management application, ensuring all functional and security requirements were clearly defined.",
        contribution: "I led the project by analyzing core modules, designing end-to-end UML workflows, creating UI wireframes, and authoring a detailed Software Requirements Specification (SRS) document.",
        result: "Delivered a comprehensive Software Requirements Specification (SRS) that established clear system boundaries, defined actionable development phases, and ensured full requirement traceability for technical implementation.",
        skills: ["Requirements Analysis", "UML Diagrams", "SRS Documentation", "Wireframing"],
        // Points directly to the PDF in your public/documents folder
        link: `${import.meta.env.BASE_URL}documents/Hotel_Management_SRS.pdf`, 
        buttonText: "View SRS Report"
    },
    {
        title: "Project 'Bep Viet' E-commerce Website",
        challenge: "Required building a complete e-commerce platform that intelligently leveraged Generative AI to provide users with recipe recommendations based on available ingredient inventory.",
        contribution: "I managed the full SDLC, designed the database ERD, and defined Use Cases for integrating the Google Gemini API. I also collaborated with developers to ensure AI outputs strictly adhered to business logic.",
        result: "Validated a complex, AI-integrated system architecture, earning a 9.0/10 academic review for successfully applying Generative AI to solve practical e-commerce inventory challenges.",
        skills: ["SDLC", "ERD Design", "Generative AI (Gemini API)", "Use Case Definition", "UAT"],
        // Points directly to the PDF in your public/documents folder
        link: `${import.meta.env.BASE_URL}documents/Bep_Viet_Docs.pdf`,
        buttonText: "View Technical Docs"
    },
    {
        title: "LinkedIn Job Intelligence & Automation",
        challenge: "Manual job searching is time-consuming and often results in missing high-priority postings due to poor platform sorting and repetitive manual checks.",
        contribution: "Built a sophisticated n8n automation pipeline. Developed custom JavaScript nodes for data cleaning, implemented randomized delay logic to bypass rate limits, and designed a relative-time sorting algorithm for real-time market tracking.",
        result: "Automated the collection of curated job leads into a centralized Google Sheets dashboard, featuring keyword-based filtering and zero-duplicate data entry.",
        skills: ["n8n", "Workflow Automation", "JavaScript", "API Integration", "Regex"],
        // Points to your Notion case study
        link: "https://grave-dead-8b3.notion.site/Automated-LinkedIn-Job-Searching-310f69babc29803a9cb4fac7efb4b680", 
        buttonText: "Read Case Study"
    },
    {
        title: "Bach Khoa Mentoring Platform",
        challenge: "The platform suffered from user drop-offs during report submissions and required strict Role-Based Access Control (RBAC) to ensure security for mentor-mentee pairs.",
        contribution: "Acted as the bridge between Operations and Tech to clarify RBAC requirements. I analyzed user drop-off points, proposed UI improvements, and executed test scripts across 12 QA rounds.",
        result: "Standardized the requirement documentation process, enabling the dev team to build features supporting over 130 mentor-mentee pairs with zero logic errors during UAT.",
        skills: ["Quality Assurance (QA)", "RBAC", "UI/UX Analysis", "Stakeholder Communication", "UAT"]
        // No link provided, so the button will cleanly hide itself
    },
    
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
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