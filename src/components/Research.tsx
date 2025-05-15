"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ResearchPaper {
  title: string;
  description: string;
  authors: string[];
  link: string;
  date: string;
  tags: string[];
}

const papers: ResearchPaper[] = [
  {
    title: "NFL Draft Modelling: Loss Functional Analysis",
    description: "A framework for evaluating the fairness and efficiency of draft pick trades using norm-based loss functions. Draft pick valuations are modelled by the Weibull distribution to identify key trade-offs between aggressive strategies and conservative approaches.",
    authors: ["Tanmay Grandhisiri"],
    link: "https://arxiv.org/pdf/2504.07291",
    date: "April 2025",
    tags: ["Sports Analytics", "Optimization", "Statistical Modeling"]
  }
];

export default function Research() {
  return (
    <section id="research" className="w-full py-24 container mx-auto px-6 relative z-20">
      <div className="max-w-3xl mx-auto mb-5 text-center">
        <h2 className="text-5xl font-bold mb-4 text-white">Research</h2>
      </div>

      <div className="space-y-6 relative">
        {papers.map((paper, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm overflow-hidden hover:border-zinc-700 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-xl text-white">
                    <Link href={paper.link} target="_blank" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                      {paper.title}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    {paper.authors.join(", ")} | {paper.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-4">{paper.description}</p>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
                    >
                      {tag}
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