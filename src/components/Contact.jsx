import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
    { 
        icon: <Mail />, 
        href: "mailto:tuandatnguyen411@gmail.com" // Updated to your email 
    },
    { 
        icon: <Linkedin />, 
        href: "https://www.linkedin.com/in/dat-ondy-nguyen/" // Updated to your LinkedIn 
    },
    { 
        icon: <Github />, 
        href: "https://github.com/tuandatnguyen411" // Placeholder for your GitHub 
    },
];

const Contact = () => {
    return (
        <footer id="contact" className="py-12 px-4 bg-slate-900">
            <div className="max-w-lg mx-auto text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
                <p className="text-slate-300 mb-8">
                    I'm a final-year Management Information Systems student passionate about building user-centric products. 
                    If you're looking for a dedicated Business Analyst, let's chat.
                </p>
                <div className="flex justify-center gap-6">
                    {contactLinks.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                           {React.cloneElement(link.icon, { size: 32 })}
                        </a>
                    ))}
                </div>
                <p className="mt-12 text-sm text-slate-500 leading-relaxed">
                    © 2026 Nguyen Tuan Dat. Built with React & Tailwind CSS. <br />
                    Template originally designed by <a href="https://github.com/uycung" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 transition-colors">Uy Cung</a>.
                </p>
            </div>
        </footer>
    );
};

export default Contact;