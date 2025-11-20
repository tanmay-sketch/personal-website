"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  company: string;
  companyLink?: string;
  period: string;
  bulletPoints: string[];
  skills: string[];
  image?: string; // Optional image path relative to /public/images/experience
  imageColor?: 'white' | 'original'; // Control image color
}

const experiences: ExperienceItem[] = [
  {
    title: "AI/ML Research Intern",
    company: "Attire",
    companyLink: "",
    period: "May 2025 - August 2025",
    bulletPoints: [
      "Worked on building Image Segmentation models and agents for a fashion tech startup"
    ],
    skills: ['Python', 'PyTorch', 'LangChain'],
    image: "attire.svg", // Add your image file here
    imageColor: 'white'
  },
  {
    title: "Research Intern",
    company: "SERC IIIT Hyderabad",
    companyLink: "https://serc.iiit.ac.in/",
    period: "May 2025 - July 2025",
    bulletPoints: [
      "Currently under Dr. Abhishek Singh in Trustworthy Concurrency"
    ],
    skills: ['C++','Weak Memory Models'],
    image: "serc.svg" // Add your image file here
  },
  {
    title: "Undergraduate Learning Assistant",
    company: "Michigan State University",
    companyLink: "https://msu.edu",
    period: "August 2023 - May 2025",
    bulletPoints: [
      "Assisted in teaching CMSE 201 (Introduction to Computational Modelling)",
      "Assisted in teaching CMSE 202 (Computational Modelling Tools and Techniques)",
    ],
    skills: ["Python", "Jupyter", "Git", "NumPy", "Pandas","Scikit-learn"],
    image: "cmse.svg" // Add your image file here
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transform values outside of the render loop
  const translateY0 = useTransform(scrollYProgress, [0, 1], [100, -20]);
  const translateY1 = useTransform(scrollYProgress, [0, 1], [200, -40]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [300, -60]);

  // Pre-compute transforms for each card based on index
  const transforms = [translateY0, translateY1, translateY2];

  return (
    <section id="experience" ref={containerRef} className="w-full py-24 container mx-auto px-6 relative z-20">
      <div className="max-w-3xl mx-auto mb-5 text-center">
        <h2 className="text-5xl font-bold mb-4 text-white">Experience</h2>
      </div>

      <div className="space-y-4 relative">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            style={{ y: transforms[index] }}
            className="relative"
          >
            <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Logo/Image Column - Only shown if image exists */}
                {experience.image && (
                  <div className="w-full md:w-1/5 flex justify-center items-center p-4">
                    <div className="flex justify-center items-center h-28 w-28">
                      <div className="relative h-24 w-24 flex items-center justify-center">
                        <Image 
                          src={`/images/experience/${experience.image}`} 
                          alt={`${experience.company} logo`} 
                          width={96} 
                          height={96} 
                          className={`object-contain max-h-full max-w-full ${experience.imageColor === 'white' ? 'brightness-0 invert' : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Content Column */}
                <div className={`w-full ${experience.image ? 'md:w-4/5' : 'w-full'}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <CardTitle className="text-xl text-white">{experience.title}</CardTitle>
                        <CardDescription className="text-zinc-400">
                          {experience.companyLink ? (
                            <Link href={experience.companyLink} target="_blank" className="hover:text-blue-400 transition-colors">
                              {experience.company}
                            </Link>
                          ) : (
                            experience.company
                          )} | {experience.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 mb-4 text-zinc-300 space-y-2">
                      {experience.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 