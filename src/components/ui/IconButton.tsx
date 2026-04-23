import type { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  tooltip: string;
  onClick?: () => void;
}

export function IconButton({ icon, tooltip, onClick }: IconButtonProps) {
  return (
    <div className="relative group flex flex-col items-center">
      <button
        onClick={onClick}
        className="size-7.5 rounded-xl flex items-center justify-center  text-primary bg-white 
  shadow-[-0.01px_-0.01px_3px_0.1px_#fc19b0] 
  transition-all duration-300 
  group-hover:bg-primary group-hover:text-white 
  group-hover:shadow-[-0.01px_-0.01px_3px_0.2px_#fc19b0] 
  cursor-pointer"
      >
        {icon}
      </button>

      {/* Tooltip */}
      <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap">
        <div className="bg-white text-primary px-4 py-2 rounded-xl text-sm font-medium shadow-[0_0_12px_rgba(255,42,142,0.4)] border border-primary/10">
          {tooltip}
        </div>
      </div>
    </div>
  );
}

export function LinkedinIcon(props: { size?: number, strokeWidth?: number, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
