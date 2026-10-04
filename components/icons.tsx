import React from 'react';
import { FaAws, FaLinkedin } from 'react-icons/fa6';
import {
  SiDocker,
  SiGithub,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export function NestJsIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiNestjs size={size} color="#E0234E" className={className} {...props} />;
}

export function PostgresIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiPostgresql size={size} color="#336791" className={className} {...props} />;
}

export function NodeJsIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiNodedotjs size={size} color="#539E43" className={className} {...props} />;
}

export function TypeScriptIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiTypescript size={size} color="#3178C6" className={className} {...props} />;
}

export function ReactIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiReact size={size} color="#00D8FF" className={className} {...props} />;
}

export function NextJsIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiNextdotjs size={size} color="#FFFFFF" className={className} {...props} />;
}

export function DockerIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiDocker size={size} color="#2496ED" className={className} {...props} />;
}

export function AwsIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <FaAws size={size} color="#FF9900" className={className} {...props} />;
}

export function TailwindIcon({
  size = 24,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiTailwindcss size={size} color="#38BDF8" className={className} {...props} />;
}

export function GithubIcon({
  size = 18,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <SiGithub size={size} className={className} {...props} />;
}

export function LinkedinIcon({
  size = 18,
  className = '',
  ...props
}: {
  size?: number;
  className?: string;
}) {
  return <FaLinkedin size={size} color="#0A66C2" className={className} {...props} />;
}

export function SpainFlag({ className = 'w-4.5 h-3', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`inline-block shrink-0 overflow-hidden rounded-[2px] shadow-xs ${className}`}
      aria-hidden="true"
      {...props}
    >
      <rect width="24" height="16" fill="#C60B1E" />
      <rect y="4" width="24" height="8" fill="#FFC400" />
      <g transform="translate(6 8) scale(0.42)">
        <path
          d="M-5 -6h10v7c0 3.5 -2.2 6.5 -5 7.5c-2.8 -1 -5 -4 -5 -7.5z"
          fill="#C60B1E"
          stroke="#8B0000"
          strokeWidth="0.6"
        />
        <path d="M-3.5 -4.5h3.5v4.5h-3.5z" fill="#FFC400" />
        <path d="M0 -4.5h3.5v4.5h-3.5z" fill="#FFFFFF" />
        <path
          d="M-3.5 0h3.5v3.5c0 1.2 1.2 2.4 2 2.8c-1.5 -0.4 -2.8 -1.2 -3.5 -2.3z"
          fill="#FFFFFF"
        />
        <path d="M0 0h3.5v2.8c-0.8 1.1 -2 1.9 -3.5 2.3z" fill="#FFC400" />
        <circle cx="0" cy="-7.5" r="1.5" fill="#FFC400" />
        <rect x="-4" y="-7.5" width="8" height="1.2" rx="0.5" fill="#C60B1E" />
        <rect
          x="-8.5"
          y="-6.5"
          width="1.8"
          height="15"
          rx="0.8"
          fill="#FFFFFF"
          stroke="#8B0000"
          strokeWidth="0.4"
        />
        <rect
          x="6.7"
          y="-6.5"
          width="1.8"
          height="15"
          rx="0.8"
          fill="#FFFFFF"
          stroke="#8B0000"
          strokeWidth="0.4"
        />
      </g>
    </svg>
  );
}

export function UsFlag({ className = 'w-4.5 h-3', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`inline-block shrink-0 overflow-hidden rounded-[2px] shadow-xs ${className}`}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <g id="us-flag-star">
          <polygon
            points="0,-0.5 0.15,-0.15 0.48,-0.15 0.2,0.06 0.31,0.4 0,0.18 -0.31,0.4 -0.2,0.06 -0.48,-0.15 -0.15,-0.15"
            fill="#FFFFFF"
          />
        </g>
      </defs>
      <rect width="24" height="16" fill="#B22234" />
      <rect y="1.23" width="24" height="1.23" fill="#FFFFFF" />
      <rect y="3.69" width="24" height="1.23" fill="#FFFFFF" />
      <rect y="6.15" width="24" height="1.23" fill="#FFFFFF" />
      <rect y="8.62" width="24" height="1.23" fill="#FFFFFF" />
      <rect y="11.08" width="24" height="1.23" fill="#FFFFFF" />
      <rect y="13.54" width="24" height="1.23" fill="#FFFFFF" />
      <rect width="9.6" height="8.62" fill="#3C3B6E" />
      <use href="#us-flag-star" x="1.6" y="1.5" />
      <use href="#us-flag-star" x="3.2" y="1.5" />
      <use href="#us-flag-star" x="4.8" y="1.5" />
      <use href="#us-flag-star" x="6.4" y="1.5" />
      <use href="#us-flag-star" x="8.0" y="1.5" />
      <use href="#us-flag-star" x="2.4" y="2.9" />
      <use href="#us-flag-star" x="4.0" y="2.9" />
      <use href="#us-flag-star" x="5.6" y="2.9" />
      <use href="#us-flag-star" x="7.2" y="2.9" />
      <use href="#us-flag-star" x="1.6" y="4.3" />
      <use href="#us-flag-star" x="3.2" y="4.3" />
      <use href="#us-flag-star" x="4.8" y="4.3" />
      <use href="#us-flag-star" x="6.4" y="4.3" />
      <use href="#us-flag-star" x="8.0" y="4.3" />
      <use href="#us-flag-star" x="2.4" y="5.7" />
      <use href="#us-flag-star" x="4.0" y="5.7" />
      <use href="#us-flag-star" x="5.6" y="5.7" />
      <use href="#us-flag-star" x="7.2" y="5.7" />
      <use href="#us-flag-star" x="1.6" y="7.1" />
      <use href="#us-flag-star" x="3.2" y="7.1" />
      <use href="#us-flag-star" x="4.8" y="7.1" />
      <use href="#us-flag-star" x="6.4" y="7.1" />
      <use href="#us-flag-star" x="8.0" y="7.1" />
    </svg>
  );
}
