import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Main = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
       
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <div max-h-screen>
   <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    background: {
      color: {
        value: "#001a33",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        push: {
          particles_nb: 4,
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#FFFFFF", "#FFD700", "#B0E0E6", "#D3D3D3", "#87CEEB"],
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#FFFFFF",
        },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
    },
  }}
/>


        </div>
    );
};

export default Main