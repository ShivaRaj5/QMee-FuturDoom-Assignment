import { Search } from 'lucide-react';
import { IconButton, LinkedinIcon } from './IconButton';
import qmeeImg from '../../assets/qmee.png';

export function QMeeTextLogo() {
  return (
    <div className="flex items-center text-primary justify-center group cursor-pointer">
      <Search className="w-11 h-11 stroke-1 opacity-[0.5]" />
      <span className="font-bold text-5xl tracking-tight text-[#f508c1] transition-colors duration-300 group-hover:text-black">Mee</span>
    </div>
  );
}

export function CentralGraphic() {
  return (
    <div className="flex flex-col items-center">
      {/* Uploaded Transparent PNG Logo */}
      <img src={qmeeImg} alt="Logo" loading="lazy" className="w-32 h-32 object-contain" />

      {/* Social icon below it */}
      <div className="mt-6 flex items-center justify-center z-20">
        <IconButton
          onClick={() => window.open('https://www.linkedin.com/in/shiva-raj-6033b71a3/', '_blank')}
          icon={<LinkedinIcon size={20} strokeWidth={2.5} />}
          tooltip="Know about developer"
        />
      </div>
    </div>
  );
}
