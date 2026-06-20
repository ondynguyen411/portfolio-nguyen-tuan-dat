import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const aboutDetails = [
    {
        icon: <GraduationCap size={24} />,
        title: "Major",
        text: "Management Information System",
    },
    {
        icon: <BookOpen size={24} />,
        title: "University",
        text: "HCMC University of Banking (2022 - 2026)",
    },
    {
        icon: <Award size={24} />,
        title: "Academic Performance",
        text: "GPA: 8.5 / 10",
    },
];

const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                
                <h3 className="text-3xl font-bold text-center mb-4 text-white">About Me</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
                
                <div className="flex flex-col md:flex-row bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden backdrop-blur-sm shadow-[0_0_30px_rgba(0,223,216,0.1)]">
                    
                    <div className="w-full md:w-1/4 relative flex items-end justify-center pt-8 bg-slate-900/50 md:border-r border-b md:border-b-0 border-cyan-500/30 overflow-hidden">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[50px] rounded-full z-0"></div>
                        <img                        
                            src={`${import.meta.env.BASE_URL}aboutme.jpg`}
                            alt="About Nguyễn Tuấn Đạt"
                            className="relative z-10 object-contain object-bottom max-h-[280px] md:max-h-[105%] drop-shadow-[0_0_15px_rgba(0,223,216,0.4)] -translate-x-[30px] transform origin-bottom scale-[1.75] hover:scale-[1.85] transition-all duration-500"
                        />
                    </div>

                    <div className="w-full md:w-3/4 p-8 md:p-10 flex flex-col gap-10">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-4">Hello! I am Nguyễn Tuấn Đạt.</h4>
                            {/* UPDATED BIO */}
                            <p className="text-lg text-slate-300 leading-relaxed">
                                As a final-year MIS student, I bridge the gap between technical operations and digital retail. My hands-on experience running my e-commerce store and working in Livestream Operations at Intrepid Asia gives me a sharp eye for platform trends, cross-functional coordination, and building automated workflows to streamline social commerce.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-center mt-2">
                            <div className="w-full md:w-1/4 flex flex-col items-center justify-center shrink-0">
                                <div className="w-32 h-32 flex items-center justify-center group">
                                    <img 
                                        src={`${import.meta.env.BASE_URL}HUB logo.png`} 
                                        alt="HCMC University of Banking Logo" 
                                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,223,216,0.15)] scale-[1.55]  group-hover:scale-[1.65] transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-3/4 grid gap-6">
                                {aboutDetails.map((item, index) => (
                                    <div key={index} className="flex gap-5 items-center group">
                                        <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 text-cyan-500 shrink-0 group-hover:border-cyan-400/50 group-hover:bg-slate-800 transition-all duration-300 shadow-lg">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.title}</h5>
                                            <p className="text-white font-semibold text-lg md:text-xl group-hover:text-cyan-300 transition-colors leading-tight">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
