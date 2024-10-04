"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import BitbucketIcon from "@/assets/icons/bitbucket.svg";
import MuiIcon from "@/assets/icons/mui.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import CardHeader from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Redux",
    iconType: ReduxIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Material UI",
    iconType: MuiIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon,
  },
  {
    title: "Bitbucket",
    iconType: BitbucketIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
];

const hobbies = [
  {
    title: "Skiing",
    emoji: "🎿",
    left: "5%",
    top: "5%",
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "50%",
    top: "5%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "40%",
    top: "63%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Formula 1",
    emoji: "🏎️",
    left: "35%",
    top: "40%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what enspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exeptional
                digital experiences"
            />
            <ToolboxItems
              items={toolboxItems}
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              className="mt-6"
              items={toolboxItems}
              itemsWrapperClassName="animate-move-right [animation-duration:20s]"
            />
          </Card>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
            <Card className="h-[320px] md:col-span-1 lg:col-span-1">
              <CardHeader title="My Courses" />
              <li className="flex gap-2 px-8 pb-4 text-sm md:text-base text-white/50">
                <CheckCircleIcon className="size-7" />
                <span>
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                  by Maximilian Schwarzmuller
                </span>
              </li>
              <li className="flex gap-2 px-8 text-sm md:text-base text-white/50">
                <CheckCircleIcon className="size-7" />
                <span>
                  Complete React Developer (w/Redux, Hooks, GraphQL) by Andrei
                  Neagoie, Yihua Zhang, ZTM
                </span>
              </li>
            </Card>
            <Card className="h-[320px] p-0 flex flex-col md:col-span-1 lg:col-span-1">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={constraintRef}
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
