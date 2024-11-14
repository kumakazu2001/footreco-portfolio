"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Platform {
  name: string;
  icon: string;
  url: string;
}

interface Project {
  type: "app" | "web"|"hp";
  icon: string;
  title: string;
  description: string;
  platforms?: Platform[];
  url?: string;
}

interface ProjectCardProps {
  project: Project;
  type: "mobile" | "web";
}

export function ProjectCard({ project, type }: ProjectCardProps) {
  const MotionCard = motion(Card);

  return type === "mobile" ? (
    <MotionCard
      className="p-6 hover:shadow-lg transition-all border-2 hover:border-blue-500/20 dark:hover:border-blue-400/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-4">
        <motion.div
          className="flex items-center gap-3"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
        >
          <span className="text-3xl">{project.icon}</span>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </motion.div>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.platforms?.map((platform) => (
            <Link
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-colors"
              >
                {platform.icon} {platform.name}
                <ExternalLink className="ml-1 h-3 w-3" />
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </MotionCard>
  ) : (
    <Link href={project.url!} target="_blank" rel="noopener noreferrer">
      <MotionCard
        className="p-6 hover:shadow-lg transition-all border-2 hover:border-purple-500/20 dark:hover:border-purple-400/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm cursor-pointer"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            <span className="text-3xl">{project.icon}</span>
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </motion.div>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-purple-500/10 dark:hover:bg-purple-400/10 transition-colors"
          >
            Visit Website
            <ExternalLink className="ml-1 h-3 w-3" />
          </Badge>
        </div>
      </MotionCard>
    </Link>
  );
}