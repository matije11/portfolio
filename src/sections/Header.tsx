"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  const [active, setActive] = useState("#");

  const handleScrollSpy = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActive(`#${section.id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={twMerge(
            "nav-item",
            active === "#" &&
              "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          )}
          onClick={() => setActive("#")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={twMerge(
            "nav-item",
            active === "#projects" &&
              "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          )}
          onClick={() => setActive("#projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={twMerge(
            "nav-item",
            active === "#about" &&
              "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          )}
          onClick={() => setActive("#about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={twMerge(
            "nav-item",
            active === "#contact" &&
              "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          )}
          onClick={() => setActive("#contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
