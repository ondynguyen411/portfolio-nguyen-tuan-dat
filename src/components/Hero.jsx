import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
    { icon: <Mail />, href: "mailto:tuandatnguyen411@gmail.com" },
    { icon: <Linkedin />, href: "#" }, // Cập nhật link LinkedIn của bạn
    { icon: <Github />, href: "#" },   // Cập nhật link GitHub của bạn
];

const Hero = () => {
    const titles = ["Business Analyst", "Welcome!!"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
        }, 3500); // Tăng thời gian lên 3.5s để dễ đọc câu dài hơn

        return () => clearInterval(intervalId);
    }, [titles.length]);

    const gradientTextStyle = {
        background: 'linear-gradient(to right, #007CF0, #00DFD8)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const titleVariants = {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -15 },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
            {/* Đảo ngược thứ tự trên Mobile (Text trên, Ảnh dưới) và Side-by-Side trên Desktop (Text trái, Ảnh phải) */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12 md:gap-16 z-10">
                
                {/* LẼFT SIDE: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:pr-8">
                    
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
                    >
                        Nguyễn Tuấn Đạt <br />
                        
                        {/* Wrapper cho Text chuyển động, dùng min-h để không bị cắt chữ khi rớt dòng */}
                        
                        <div className="mt-2 h-[80px] w-full flex items-center justify-center md:justify-start overflow-hidden"> 
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={titles[currentTitleIndex]}
                                style={gradientTextStyle}
                                className="block text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap"
                                variants={titleVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                {titles[currentTitleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-6 max-w-xl text-xl md:text-2xl text-slate-400 leading-relaxed"
                    >
                       
                    A <strong className="text-white font-bold">final-year student</strong> passionate about using <strong className="text-white font-bold">technology</strong> and <strong className="text-white font-bold">data</strong> to <strong className="text-white font-bold">analyze business needs</strong> and ensure <strong className="text-white font-bold">quality software solutions</strong>.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-10 flex flex-col items-center md:items-start"
                    >
                        <div className="inline-flex flex-col items-center">
                            
                            {/* Buttons ở trên */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#work-experience" className="px-8 py-3.5 font-bold text-white rounded-lg transition-transform duration-300 hover:scale-105 text-lg"
                                    style={{ background: 'linear-gradient(to right, #007CF0, #00DFD8)' }}>
                                    View My Experience
                                </a>
                                <a
                                    href={`${import.meta.env.BASE_URL}resume.pdf`} 
                                    download
                                    className="px-8 py-3.5 font-bold text-white bg-slate-800 border border-slate-600 rounded-lg flex items-center gap-2 transition-colors duration-300 hover:bg-slate-700 text-lg"
                                >
                                    <Download size={22} />
                                    Download Resume
                                </a>
                            </div>

                            {/* 3 Icons ở dưới, tự động căn giữa 2 buttons */}
                            <div className="mt-6 flex justify-center gap-8 w-full">
                                {contactLinks.map((link, index) => (
                                    <a 
                                        href={link.href} 
                                        key={index} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-800"
                                    >
                                       {React.cloneElement(link.icon, { size: 28 })}
                                    </a>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: Profile Image with Rectangular Frame */}
                {/* THÊM: 'group/image' để làm mốc kích hoạt hover cho các phần tử con */}
                {/* RIGHT SIDE: Profile Image with Cyberpunk Glass Effect */}
                {/* Vẫn giữ 'group/image' để kích hoạt hover */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex-1 flex justify-center -translate-y-10 items-start mt-8 md:mt-0 w-full min-h-[22rem] md:min-h-[30rem] group/image"
                >

                    {/* --- KHUNG NỀN CHỮ NHẬT MỚI --- */}
                    <div className="absolute bottom-10 w-[16rem] h-[19rem] md:w-[22rem] md:h-[28rem] z-0">
                        
                        {/* LỚP 1 (Phía sau): Nguồn năng lượng phát sáng "thở" (Pulsing Glow) */}
                        {/* - inset-0: nằm gọn phía sau khung.
                            - bg-cyan-500/30: màu sáng Cyan.
                            - blur-xl: làm nhòe đi để tạo quầng sáng.
                            - animate-pulse: hiệu ứng "thở" sáng tối liên tục. 
                        */}
                        <div className="absolute inset-0 rounded-2xl bg-cyan-500/30 blur-[20px] animate-pulse transition-all duration-500 group-hover/image:bg-cyan-400/40 group-hover/image:blur-[30px]"></div>
                        
                        {/* LỚP 2 (Phía trước): Tấm kính trong suốt (The Glass) */}
                        {/* - bg-slate-900/50: Màu nền trong suốt 50% (ĐÚNG YÊU CẦU).
                            - backdrop-blur-md: Hiệu ứng kính mờ.
                            - border border-cyan-500/30: Viền sáng tĩnh mỏng bao quanh kính.
                        */}
                        <div className="relative h-full w-full bg-slate-900/50 backdrop-blur-md rounded-2xl border border-cyan-500/30 overflow-hidden transition-colors duration-500 group-hover/image:bg-slate-900/70 group-hover/image:border-cyan-400/50">
                             
                            {/* Dải màu hắt từ dưới đáy lên (Giữ nguyên như cũ) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#007CF0]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover/image:opacity-100"></div>
                        </div>
                    </div>
                    
                    {/* Ảnh nhân vật (Giữ nguyên các hiệu ứng cũ) */}
                    <img 
                        src={`${import.meta.env.BASE_URL}profile.png`}
                        alt="Nguyễn Tuấn Đạt" 
                        className="relative z-10 bottom-10 max-h-[21rem] md:max-h-[30rem] object-contain drop-shadow-[0.4rem_0.2rem_0_rgba(0,223,216,0.4)] md:drop-shadow-[0.6rem_0.3rem_0_rgba(0,223,216,0.4)] mb-0 transition-all duration-500 group-hover/image:scale-[1.02] group-hover/image:brightness-110 group-hover/image:drop-shadow-[0.4rem_0.2rem_0_rgba(0,223,216,0.9)] md:group-hover/image:drop-shadow-[0.6rem_0.3rem_0_rgba(0,223,216,0.9)]"
                    />
                </motion.div>             

            </div>

            {/* Scroll down arrow */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300">
                    <ChevronDown size={32} className="animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;