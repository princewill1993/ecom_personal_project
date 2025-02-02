import React from "react";
import CTAbutton from "../ui/bttons/CTAbutton";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row container mx-auto items-center justify-center gap-8 p-4">
      <div className="max-w-[600px]">
        <h1 className="text-transform: uppercase text-gray-900 text-4xl lg:6xl font-semibold mb-6">
          Transform Your Space with Therapeutic Art
        </h1>
        <p className="text-lg font-light text-gray-500">
          Discover a curated collection of unique art pieces designed to
          inspire, calm, and rejuvenate your mind and soul. Our therapeutic
          artworks blend creativity and emotion to create the perfect ambiance
          for your home, office, or personal retreat. Shop now and let art
          become your sanctuary.
          <NavLink to={"/products"}>
            <CTAbutton ButtonText="Shop Now" />
          </NavLink>
        </p>
      </div>

      <div>
        <img src="/hero.png" alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
