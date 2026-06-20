import React from 'react';

// UPDATED TOOLKIT DATA
const toolkitData = {
    "Social Commerce & Platforms": [
        "Livestream Operations & Setup",
        "E-commerce Store Management",
        "Campaign & Promotion Execution",
        "Cross-functional Coordination" 
    ],
    "Data Analysis & Tracking": [
        "Advanced Excel (MOS Certified)",
        "Performance Metrics (NMV, CTR, CR)",
        "Data Querying (SQL)",
        "Reporting & Analytics Dashboards" 
    ],
    "Operations & Automation": [
        "Workflow Automation (n8n, Apps Script)",
        "Google Workspace Integrations",
        "Standard Operating Procedures (SOP)",
        "Process Optimization" 
    ],
};

const Toolkit = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-center mb-4 text-white">
                        My Toolkit
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(toolkitData).map(([category, skills]) => (
                        <div key={category} className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm hover:border-cyan-400/50 transition-colors">
                            <h4 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h4>
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                    <li key={skill} className="text-slate-300 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Toolkit;
