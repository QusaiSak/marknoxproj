"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../public/Image/proj1.png";
import proj2 from "../public/Image/proj2.png";
import proj3 from "../public/Image/proj3.png";

const projects = [
  {
    title: "Vision Capital",
    img: proj1,
    description:
      "A finance tracking web app built with the MERN stack. Users can easily log expenses and income, and view a dynamic dashboard with insightful financial data.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Shadcn",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/QusaiSak/VisionCapital",
  },
  {
    title: "Coin Search",
    img: proj2,
    description:
      "Coin Search is a sleek web app built with React and Vite that lets users search real-time cryptocurrency data. It enhanced my skills in API integration and handling asynchronous data, with a clean, responsive UI designed in Plain CSS.",
    technologies: ["React", "Vite", "Plain CSS"],
    githubLink: "https://github.com/QusaiSak/Crypto-React",
  },
  {
    title: "Kairos",
    img: proj3,
    description:
      "Kairos is a Greek-themed weather app developed by my team for a frontend hackathon, where we achieved third place. I served as the lead developer for this project.",
    technologies: ["React", "Vite", "Tailwind CSS", "Shadcn"],
    githubLink: "https://github.com/QusaiSak/WeatherGreek",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="py-16 px-4 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.liveLink && (
                  <Button variant="outline" asChild>
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
