import React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

function Particle() {
  const theme = useTheme();
  const starColor = theme === "light" ? "#000000" : "#ffffff";
  const starOpacity = theme === "light" ? 0.2 : 0.4;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: false,
        },

        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              area: 2530,
            },
          },

          color: {
            value: starColor,
          },

          shape: {
            type: "star",
            options: {
              star: {
                sides: 5,
              },
            },
          },

          opacity: {
            value: starOpacity,
            random: true,
          },

          size: {
            value: 2.5,
            random: true,
          },

          links: {
            enable: false,
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "bottom",
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
            push: {
              quantity: 2,
            },
          },
        },

        retinaDetect: true,
      }}
    />
  );
}

export default Particle;
