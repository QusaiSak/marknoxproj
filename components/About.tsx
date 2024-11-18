"use client";

import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Code, Heart, User } from "lucide-react";

export default function AboutPage() {
  const { ref, isInView, variants } = useScrollAnimation();

  const personalInfo = {
    title: "Full Stack Developer",
    bio: "I'm a passionate developer with a keen interest in creating intuitive and efficient web applications. My journey in tech started with a curiosity about how things work on the internet, and it has evolved into a deep love for coding and problem-solving.",
    interests: [
      "Web Development",
      "Open Source",
      "AI and Machine Learning",
      "Blockchain",
    ],
  };

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-40 ">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          About Me
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* Personal Info Section */}
          <motion.section variants={itemVariants} className="w-full md:w-1/2">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-2" />
                Personal Info
              </h2>
              <div className="flex flex-col mb-6">
                <h2 className="text-2xl font-bold text-left">
                  {personalInfo.title}
                </h2>
              </div>
              <p className="mb-4">{personalInfo.bio}</p>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Heart className="mr-2" /> Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section variants={itemVariants} className="w-full md:w-1/2">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Code className="mr-2" />
                Skills
              </h2>
              {skills.map((skillCategory) => (
                <motion.div
                  key={skillCategory.category}
                  className="mb-4 last:mb-0"
                  variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-3">
                    {skillCategory.category} :{" "}
                    {skillCategory.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </motion.div>
    </section>
  );
}
