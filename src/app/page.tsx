"use client";
/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";
import DotField from "@/components/background/DotField";
import SplitText from "@/components/animations/SplitText";
import Aurora from "@/components/background/Aurora";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative overflow-hidden bg-transparent">
      <div className="fixed inset-0 -z-10">
        {mounted && (
          <Aurora
            colorStops={
              theme === "dark"
                ? ["#7C3AED", "#EC4899", "#F97316"]
                : ["#60A5FA", "#A78BFA", "#F472B6"]
            }
            blend={theme === "dark" ? 0.5 : 0.6}
            amplitude={1.0}
            speed={theme === "dark" ? 1 : 0.7}
          />
        )}

        {/* 🔥 Overlay (THIS FIXES READABILITY) */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-sm" />
      </div>
      <div className="relative z-10">
        <section id="hero" className="mb-10">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-4 gap-y-6 flex flex-col md:flex-row items-center">
              <div className="gap-8 flex flex-col order-2 md:order-2">
              <SplitText
                text={`Hi, I'm ${DATA.name}`}
                className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-4xl xl:text-5xl text-white"
                delay={40}
                onLetterAnimationComplete={() => {}} // Add this line
              />
                {/* <BlurFadeText
                  className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                /> */}
              </div>
              <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-1">
                <Avatar className="size-32 md:size-44 border rounded-full shadow-lg ring-4 ring-muted">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover object-center"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about" className="mb-10">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{DATA.summary}</Markdown>
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="work" className="mb-10">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection />
            </BlurFade>
          </div>
        </section>
        <section id="education" className="mb-10">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            <div className="flex flex-col gap-8">
              {DATA.education.map((education, index) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1  text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="mb-10">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Stacks</h2>
            </BlurFade>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {DATA.skills.map((skill, id) => (
                <BlurFade
                  key={skill.name}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-10 w-full px-4 flex items-center justify-center gap-2">
                    {skill.icon && (
                      <skill.icon className="size-4 rounded overflow-hidden object-contain shrink-0" />
                    )}

                    <span className="text-foreground text-sm font-medium truncate">
                      {skill.name}
                    </span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="mb-10">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ProjectsSection />
          </BlurFade>
        </section>

        <section id="contact" className="mb-10">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ContactSection />
          </BlurFade>
        </section>
      </div>
    </main>
  );
}
