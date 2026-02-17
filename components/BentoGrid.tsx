import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail, Twitter, MapPin, Download } from 'lucide-react';

export const BentoGrid: React.FC = () => {
    return (
        <section id="about" className="bg-primary text-secondary py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-massive font-bold tracking-tighter mb-16 text-center md:text-left mix-blend-difference"
                >
                    ABOUT
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                    {/* Bio Card - Large */}
                    <div className="col-span-1 md:col-span-2 row-span-2 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            <span className="text-accent font-mono text-sm">01 / BIO</span>
                            <h3 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
                                AI/ML Engineer passionate about building scalable, intelligent systems.
                            </h3>
                            <p className="mt-4 text-gray-400">
                                Currently building at Digital.ai. I specialize in RAG, Computer Vision, and full-stack development,
                                transforming complex data into accessible user experiences.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            {RESUME_DATA.links.resume && (
                                <a
                                    href={RESUME_DATA.links.resume}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                                >
                                    Résumé <Download size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="col-span-1 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="text-accent font-mono text-sm relative z-10">02 / LOCATION</span>
                        <div className="flex items-center gap-4 mt-4 relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl">Bengaluru</h4>
                                <p className="text-sm text-gray-400">India</p>
                            </div>
                        </div>
                    </div>

                    {/* Stack Card - Tall */}
                    <div className="col-span-1 row-span-2 bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-colors overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="text-accent font-mono text-sm relative z-10">03 / STACK</span>
                        <div className="mt-6 space-y-2 relative z-10">
                            {RESUME_DATA.skills.languages.concat(RESUME_DATA.skills.ai_ml).slice(0, 8).map((skill) => (
                                <div key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm w-fit border border-white/5">
                                    {skill}
                                </div>
                            ))}
                            <div className="text-gray-500 text-sm mt-2">+ more</div>
                        </div>
                    </div>

                    {/* Socials Card */}
                    <div className="col-span-1 md:col-span-1 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-center gap-4 hover:border-white/20 transition-colors group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="text-accent font-mono text-sm mb-2 relative z-10">04 / CONNECT</span>
                        <div className="flex justify-between relative z-10">
                            <SocialIcon href={RESUME_DATA.links.github} icon={<Github />} />
                            <SocialIcon href={RESUME_DATA.links.linkedin} icon={<Linkedin />} />
                            <SocialIcon href={`mailto:${RESUME_DATA.contact.email}`} icon={<Mail />} />
                        </div>
                    </div>

                    {/* Experience - Wide */}
                    <div className="col-span-1 md:col-span-3 bg-[#f0f0f0] text-black border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                        <span className="text-gray-500 font-mono text-sm">05 / EXPERIENCE</span>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {RESUME_DATA.experience.slice(0, 2).map((exp, i) => (
                                <div key={i} className="border-l-2 border-black/10 pl-4">
                                    <h4 className="font-bold text-xl">{exp.company}</h4>
                                    <p className="text-sm font-mono text-gray-600 mb-2">{exp.role}</p>
                                    <p className="text-xs text-gray-500">{exp.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const SocialIcon: React.FC<{ href: string, icon: React.ReactNode }> = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
    >
        {icon}
    </a>
)
