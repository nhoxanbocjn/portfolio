import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 2530,
            },
          },

          color: {
            value: "#ffffff",
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
            value: 0.4,
            random: true,
          },

          size: {
            value: 3,
            random: true,
          },

          links: {
            enable: false,
          },

          move: {
            enable: true,
            speed: 3,
            direction: "bottom",
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          detectsOn: "canvas",
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
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },

        retinaDetect: true,
      }}
    />
  );
}

export default Particle;