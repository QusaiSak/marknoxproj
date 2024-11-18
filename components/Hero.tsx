"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isInView, variants } = useScrollAnimation();

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        className="space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          className="text-4xl font-bold sm:text-6xl mb-6 text-glow"
          variants={variants}
        >
          Hi, I{"'"}m <span className="text-primary">Qusai Sakerwala</span>
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          A passionate developer creating beautiful and functional web
          experiences.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="#projects">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="group">
              View Resume
              <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
