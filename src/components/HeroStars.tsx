import { HeroOrbit } from "./HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroStars = () => {
  return (
    <>
      <HeroOrbit
        size={430}
        rotation={-14}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="32s"
      >
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        size={440}
        rotation={79}
        shouldOrbit
        orbitDuration="34s"
        shouldSpin
        spinDuration="18s"
      >
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotation={20}
        shouldOrbit
        orbitDuration="36s"
        shouldSpin
        spinDuration="16s"
      >
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="38s">
        <div className="size-2 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit
        size={530}
        rotation={178}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="16s"
      >
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        size={590}
        rotation={98}
        shouldOrbit
        orbitDuration="42s"
        shouldSpin
        spinDuration="14s"
      >
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="44s">
        <div className="size-2 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit
        size={710}
        rotation={150}
        shouldOrbit
        orbitDuration="46s"
        shouldSpin
        spinDuration="10s"
      >
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="48s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit
        size={800}
        rotation={-72}
        shouldOrbit
        orbitDuration="50s"
        shouldSpin
        spinDuration="6s"
      >
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
    </>
  );
};
