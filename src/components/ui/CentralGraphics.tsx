import { Search } from 'lucide-react';
import { IconButton, LinkedinIcon } from './IconButton';
import qmeeImg from '../../assets/qmee.png';

export function QMeeTextLogo() {
  return (
    <div className="flex items-center text-primary justify-center group cursor-pointer">
      <Search className="size-[52px] stroke-1 opacity-[0.5]" />
      <span className="font-bold text-[52px] tracking-tight text-[#f508c1] transition-colors duration-300 group-hover:text-black">Mee</span>
    </div>
  );
}

export function CentralGraphic() {
  return (
    <div className="flex flex-col items-center">
      {/* Uploaded Transparent PNG Logo */}
      <img src={qmeeImg} alt="Logo" loading="lazy" className="size-30 object-contain" />

      {/* Social icon below it */}
      <div className="mt-2 flex items-center justify-center z-20 shadow-xl rounded-full">
        <IconButton
          onClick={() => window.open('https://www.linkedin.com/in/shiva-raj-6033b71a3/', '_blank')}
          icon={<LinkedinIcon size={20}  className='text-[#de1b89]'/>}
          tooltip="Know about developer"
        />
      </div>
    </div>
  );
}
