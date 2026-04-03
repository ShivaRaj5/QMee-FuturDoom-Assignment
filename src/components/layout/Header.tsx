import { Home, Eraser, Search } from 'lucide-react';
import { IconButton, LinkedinIcon } from '../ui/IconButton';
import qmeeImg from '../../assets/qmee.png';

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto px-4 py-6 flex items-center justify-between z-20 relative">
      {/* Left Logo / Profile (Approximation of the red logo sphere) */}
      <img src={qmeeImg} alt="Logo" loading="lazy" className="size-6 object-contain" />

      {/* Center Navigation Icons */}
      <div className="flex space-x-3 mt-1">
        <IconButton
          onClick={() => document.dispatchEvent(new CustomEvent('navigate-home'))}
          icon={<Home size={20} strokeWidth={2.5} />}
          tooltip="Home"
        />
        <IconButton
          onClick={() => document.dispatchEvent(new CustomEvent('clear-chat'))}
          icon={<Eraser size={20} strokeWidth={2.5} />}
          tooltip="Clear chat"
        />
        <IconButton
          onClick={() => window.open('https://www.linkedin.com/in/shiva-raj-6033b71a3/', '_blank')}
          icon={<LinkedinIcon size={20} strokeWidth={2.5} />}
          tooltip="Know about developer"
        />
      </div>

      {/* Right QMee Logo */}
      <div className="flex items-center text-primary group cursor-pointer">
        <Search className="size-9 stroke-1 opacity-[0.6]" />
        <span className="font-bold text-4xl tracking-tight text-[#f508c1] transition-colors duration-300 group-hover:text-black">Mee</span>
      </div>
    </header>
  );
}
