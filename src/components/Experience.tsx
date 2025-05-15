"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Google",
    period: "2022 - Present",
    description: "Working on cutting-edge technology solutions for Google's core products. Leading a team of developers to create innovative user experiences.",
    skills: ["React", "TypeScript", "Node.js", "Firebase"]
  },
  {
    title: "Frontend Developer",
    company: "Amazon",
    period: "2020 - 2022",
    description: "Developed and maintained frontend applications for Amazon's e-commerce platform, focusing on performance optimization and accessibility.",
    skills: ["JavaScript", "React", "CSS", "Redux"]
  },
  {
    title: "UI/UX Designer",
    company: "Meta",
    period: "2018 - 2020",
    description: "Designed user interfaces for Meta's social media applications, collaborating with product managers and engineers to create intuitive experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
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
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
        <p className="text-white/70">My professional journey</p>
      </div>

      <div className="space-y-24 relative">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            style={{ y: transforms[index] }}
            className="relative"
          >
            <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl text-white">{experience.title}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {experience.company} | {experience.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-4">{experience.description}</p>
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
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 