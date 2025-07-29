import Particles from "react-tsparticles";

const ParticleBackground = () => (
    <Particles
        options={{
            background: { color: "" },
            particles: {
                number: { value: 80 },
                move: { enable: true, speed: 2 },
                shape: { type: "circle" },
            },
        }}
    />
);

export default ParticleBackground;
