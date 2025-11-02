"use client";
import { Code } from "lucide-react";
import React, { useEffect, useState, memo } from "react";

// A simple custom hook to get window size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial size
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  };

const iconComponents = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
          fill="#E34F26"
        />
      </svg>
    ),
    color: "#E34F26",
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z"
          fill="#1572B6"
        />
      </svg>
    ),
    color: "#1572B6",
  },
  javascript: {
    component: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <rect width="24" height="24" fill="#F7DF1E" />
            <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
        </svg>
    ),
    color: "#F7DF1E",
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    color: "#61DAFB",
  },
  node: {
    component: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933" />
        </svg>
    ),
    color: "#339933",
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4" />
      </svg>
    ),
    color: "#06B6D4",
  },
  wordpress: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="12" r="12" fill="#21759B" />
        <path
          d="M12 2.4c-5.304 0-9.6 4.296-9.6 9.6s4.296 9.6 9.6 9.6 9.6-4.296 9.6-9.6S17.304 2.4 12 2.4zm0 1.2c4.62 0 8.4 3.78 8.4 8.4 0 3.33-1.95 6.21-4.77 7.59l2.73-7.92c.42-1.17.6-2.13.6-2.97 0-1.17-.42-2.19-1.23-2.19-.57 0-1.02.39-1.23 1.14l-2.94 8.82-1.86-5.55c.9-.36 1.53-1.23 1.53-2.31 0-1.26-.99-2.22-2.37-2.22-1.74 0-3.27 1.59-3.27 3.45 0 .9.33 1.71.87 2.25l-1.14 3.45-1.68-5.04C5.37 6.93 8.37 3.6 12 3.6z"
          fill="#fff"
        />
      </svg>
    ),
    color: "#21759B",
  },

  express: {
  component: () => (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="256" height="256" rx="60" fill="#1A1A1A" />
      <text
        x="50%"
        y="57%"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="120"
        letterSpacing="1"
      >
        ex
      </text>
    </svg>
  ),
  color: "#FFFFFF",
},

  nextjs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect width="24" height="24" fill="#000000" />
        <path
          d="M14.6 15.5l-3.8-5.8h-.3v5.8H9V8.5h1.8l3.8 5.8h.3V8.5h1.5v7h-1.8z"
          fill="#fff"
        />
      </svg>
    ),
    color: "#000000",
  },

  bootstrap: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#7952B3" />
        <path
          fill="#fff"
          d="M8 6.5h4.5c1.5 0 2.5.8 2.5 2 0 .8-.5 1.5-1.3 1.8v.1c1.1.2 2 1 2 2.3 0 1.7-1.3 2.8-3.4 2.8H8V6.5zm1.6 3.4h2.3c.9 0 1.5-.5 1.5-1.2 0-.8-.6-1.1-1.5-1.1H9.6v2.3zm0 4.3h2.4c1.1 0 1.8-.5 1.8-1.4s-.7-1.4-1.8-1.4H9.6v2.8z"
        />
      </svg>
    ),
    color: "#7952B3",
  },
   mongodb: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#47A248"
          d="M12.001 0s-.26 3.065-1.334 4.319c-.662.778-1.703 1.175-2.34 1.988-.78 1.002-.993 2.367-.951 3.635.043 1.39.352 2.771.924 4.044.51 1.122 1.241 2.144 2.117 3.029.826.827 1.754 1.556 2.686 2.285l.898.718s.296-3.127.544-4.375c.133-.665.55-1.268.894-1.844.53-.868 1.011-1.763 1.432-2.678.505-1.083.913-2.21 1.109-3.38.173-1.046.144-2.155-.265-3.145-.36-.873-1.01-1.602-1.835-2.07-.743-.417-1.572-.66-2.37-.947C12.842 1.7 12.001 0 12.001 0z"
        />
        <path
          fill="#00684A"
          d="M12.001 0s.84 1.7 1.803 2.807c.797.287 1.627.53 2.37.947.825.468 1.475 1.197 1.835 2.07.409.99.438 2.099.265 3.145-.196 1.17-.604 2.297-1.109 3.38-.421.915-.902 1.81-1.432 2.678-.344.576-.761 1.179-.894 1.844-.248 1.248-.544 4.375-.544 4.375l-.898-.718c-.932-.729-1.86-1.458-2.686-2.285-.876-.885-1.607-1.907-2.117-3.029a11.364 11.364 0 0 1-.924-4.044c-.042-1.268.171-2.633.951-3.635.637-.813 1.678-1.21 2.34-1.988C11.74 3.065 12.001 0 12.001 0z"
        />
      </svg>
    ),
    color: "#47A248",
  },
  materialui: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="#007FFF" d="M1.5 3v12l3 1.714V6.43L12 11l7.5-4.57v7.713L12 19.285 4.5 15.43v3.429L12 23l10.5-6V3L12 9.001 1.5 3z" />
      </svg>
    ),
    color: "#007FFF",
  },
};

const SkillIcon = memo(({ type }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

const innerOrbitIcons = [
  { id: "html", iconType: "html", label: "HTML5", size: 40 },
  { id: "css", iconType: "css", label: "CSS3", size: 45 },
  { id: "javascript", iconType: "javascript", label: "JavaScript", size: 40 },
  { id: "bootstrap", iconType: "bootstrap", label: "Bootstrap", size: 45 },
  { id: "materialui", iconType: "materialui", label: "Material UI", size: 45 },
  { id: "wordpress", iconType: "wordpress", label: "WordPress", size: 45 },
];

const skillsConfig = [
  ...innerOrbitIcons.map((skill, index) => ({
    ...skill,
    orbitRadius: 100,
    speed: 1,
    phaseShift: (index * 2 * Math.PI) / innerOrbitIcons.length, // evenly spaced
  })),

  // Outer Orbit — Frameworks & Libraries
  { id: "react", orbitRadius: 180, size: 50, speed: -0.6, iconType: "react", phaseShift: 0, label: "React" },
  { id: "nextjs", orbitRadius: 180, size: 45, speed: -0.6, iconType: "nextjs", phaseShift: (2 * Math.PI) / 6, label: "Next.js" },
  { id: "node", orbitRadius: 180, size: 45, speed: -0.6, iconType: "node", phaseShift: (4 * Math.PI) / 6, label: "Node.js" },
  { id: "express", orbitRadius: 180, size: 40, speed: -0.6, iconType: "express", phaseShift: (6 * Math.PI) / 6, label: "Express.js" },
  { id: "tailwind", orbitRadius: 180, size: 40, speed: -0.6, iconType: "tailwind", phaseShift: (8 * Math.PI) / 6, label: "Tailwind CSS" },
  { id: "mongodb", orbitRadius: 180, size: 50, speed: -0.6, iconType: "mongodb", phaseShift: (10 * Math.PI) / 6, label: "MongoDB" },
];

const OrbitingSkill = memo(({ config, angle, scale }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  
  const scaledRadius = orbitRadius * scale;
  const scaledSize = size * scale;
  const x = Math.cos(angle) * scaledRadius;
  const y = Math.sin(angle) * scaledRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${scaledSize}px`,
        height: `${scaledSize}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 bg-gray-950/60
           backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}`}
        style={{
          boxShadow: isHovered ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20` : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

const GlowingOrbitPath = memo(({ radius, glowColor = "cyan", animationDelay = 0 }) => {
    
    const glowColors = {
        cyan: { primary: "rgba(46, 196, 182, 1)", secondary: "rgba(46, 196, 182, 0.8)", border: "rgba(46, 196, 182, 0.7)" },
        purple: { primary: "rgba(72, 202, 228, 0.5)", secondary: "rgba(72, 202, 228, 0.5)", border: "rgba(46, 196, 182, 1)" },
    };
    const colors = glowColors[glowColor] || glowColors.cyan;
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, animationDelay: `${animationDelay}s` }}>
            <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`, boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`, animation: "pulse 4s ease-in-out infinite", animationDelay: `${animationDelay}s` }} />
            <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${colors.border}`, boxShadow: `inset 0 0 20px ${colors.secondary}` }} />
        </div>
    );
});
GlowingOrbitPath.displayName = "GlowingOrbitPath";

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { width } = useWindowSize(); 

 
  const baseSize = 450;
  const isMobile = width < 768;
  const containerSize = isMobile && width ? Math.min(width - 40, baseSize) : baseSize;
  const scale = containerSize / baseSize;

  useEffect(() => {
    if (isPaused) return;
    let animationFrameId;
    let lastTime = performance.now();
    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  if (!width) {
    return <div className="w-full h-[450px] flex items-center justify-center">Loading Animation...</div>;
  }

  const orbitConfigs = [
    { radius: 100, glowColor: "cyan", delay: 0 },
    { radius: 180, glowColor: "purple", delay: 1.5 },
  ];
  
  const centerIconSize = 48 * scale;

  return (
    <main className="w-full flex items-center justify-center overflow-hidden py-10">
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {orbitConfigs.map((config, index) => (
          <GlowingOrbitPath
            key={index}
            radius={config.radius * scale} 
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}
        
        <div 
          className="absolute bg-gray-900/40 backdrop-blur-lg rounded-full flex items-center justify-center text-lg font-bold border-2 border-[#2ec4b6]/30 shadow-[0_0_40px_rgba(6,182,212,0.9)] z-10"
          style={{ width: `${128 * scale}px`, height: `${128 * scale}px`}}
        >
          <Code className="text-white" style={{width: `${centerIconSize}px`, height: `${centerIconSize}px`}}/>
        </div>
        {skillsConfig.map((skill) => (
          <OrbitingSkill
            key={skill.id}
            config={skill}
            angle={skill.speed * time + skill.phaseShift}
            scale={scale} 
          />
        ))}
      </div>
    </main>
  );
}