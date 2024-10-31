import clothing from "@/assets/images/clothing.png";
import gallery from "@/assets/images/gallery.png";
import feedback from "@/assets/images/feedback.png";
import github from "@/assets/images/github.png";
import suitcase from "@/assets/images/suitcase.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const portfolioProjects = [
  {
    tehnologies: [{ name: "React" }, { name: "Redux" }, { name: "Hooks" }],
    title: "CRWN Clothing",
    results: [
      { title: "E-commerce platform for clothing" },
      { title: "Allows users to shop for products online" },
      { title: "Enables payments using Stripe" },
    ],
    link: "https://crwn-clothing-app-m.netlify.app",
    image: clothing,
  },
  {
    tehnologies: [
      { name: "React" },
      { name: "Firebase" },
      { name: "Framer-Motion" },
    ],

    title: "Gallery",
    results: [
      { title: "Minimalist online gallery for showcasing images" },
      { title: "Browse through a collection of images" },
      { title: "Enables publishing images using Firebase Storage" },
    ],
    link: "https://gallery-sepia-one.vercel.app",
    image: gallery,
  },
  {
    tehnologies: [
      { name: "React" },
      { name: "Context" },
      { name: "React-Router" },
    ],
    title: "Feedback UI",
    results: [
      { title: "Feedback collection platform" },
      { title: "Allows users to submit their reviews" },
      { title: "Helps businesses understand user needs" },
    ],
    link: "https://feedback-app-m.netlify.app",
    image: feedback,
  },
  {
    tehnologies: [{ name: "React" }, { name: "Tailwind" }, { name: "Axios" }],
    title: "GitHub Finder",
    results: [
      { title: "GitHub user search tool" },
      { title: "Allows users to find GitHub profiles and repositories" },
      { title: "Interacts with the GitHub API" },
    ],
    link: "https://github-finder-app-m.netlify.app",
    image: github,
  },
  {
    tehnologies: [{ name: "React" }, { name: "Vite" }, { name: "Unlimited3D" }],
    title: "3D Suitcase",
    results: [
      { title: "A 3D model configurator" },
      { title: "Allows users to customize various parts of a 3D model" },
      { title: "Interacts with Unlimited3D API" },
    ],
    link: "https://3d-suitcase.vercel.app",
    image: suitcase,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-14">
          {portfolioProjects.map((project, index) => (
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              key={project.title}
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <div>
                      {project.tehnologies?.map((tehnology, index) => (
                        <Fragment key={tehnology.name}>
                          <span>&nbsp;{tehnology.name}&nbsp;</span>
                          {index < project.tehnologies.length - 1 && (
                            <span>&bull;</span>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="lg:relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
