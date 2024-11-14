"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, ExternalLink, Sparkles ,House} from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";



interface Project {
  type: "app" | "web" | "hp";  // 文字列リテラル型として定義
  icon: string;
  title: string;
  description: string;
  platforms?: { name: string; icon: string; url: string; }[];
  url?: string;
}

const projects: Project[] = [
  {
    type: "app",
    icon: "💫",
    title: "FootReco",
    description: "推し活を通したスタジアムマッチングアプリ。スタジアムで新しい出会いと感動を。",
    platforms: [
      {
        name: "iOS",
        icon: "📱",
        url: "https://apps.apple.com/jp/app/footreco/id1670816082",
      },
      {
        name: "Android",
        icon: "📱",
        url: "https://play.google.com/store/apps/details",
      },
    ],
  },
  {
    type: "web",
    icon: "⚽",
    title: "ベガルタベストイレブンメーカー",
    description: "ベガルタ仙台のベストイレブンを作成できるWebアプリ",
    url: "https://besteleven-9a89a.web.app/",
  },
  {
    type: "web",
    icon: "📚",
    title: "選手名鑑メーカー(現在鋭意製作中)",
    description: "オリジナルの選手名鑑を作成できるWebアプリ",
    url: "https://player-dictionary.web.app/",
  },
  {
    type: "hp",
    icon: "🏟️",
    title: "サッカークラブHP",
    description: "FC Prirosso様のHP",
    url: "https://prirosso.com/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F7F6F3] to-[#E8E7E2] dark:from-[#191919] dark:to-[#2D2D2D]">
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        <header className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              Team FootReco Portfolio
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Team FootRecoのポートフォリオ
          </p>
        </header>

        <section className="space-y-8">
          <SectionTitle
            icon={<Smartphone className="h-6 w-6" />}
            title="スマホアプリ"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.type === "app")
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  type="mobile"
                />
              ))}
          </div>

          <SectionTitle
            icon={<Globe className="h-6 w-6" />}
            title="Webアプリ"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.type === "web")
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  type="web"
                />
              ))}
          </div>

          <SectionTitle
            icon={<House className="h-6 w-6" />}
            title="ホームページ"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.type === "hp")
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  type="web"
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}