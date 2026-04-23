import { CentralGraphic, QMeeTextLogo } from '../ui/CentralGraphics';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import LandingHeader from '../layout/LandingHeader';

interface LandingScreenProps {
  onNext: () => void;
  onShare: () => void;
  onHome: () => void;
}

export default function LandingScreen({ onNext, onShare, onHome }: LandingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col items-center justify-between pb-8"
    >
      <LandingHeader onOpenChat={onNext} onOpenShare={onShare} onGoHome={onHome} />
      <div className='mt-4'>
        <QMeeTextLogo />
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="mt-12 mb-20">
          <CentralGraphic />
        </div>

        <button
          onClick={onNext}
          className="
    flex items-center space-x-3 px-5 py-1 
    rounded-xl 
    border border-[#f8bee4] 
    text-primary font-medium 
    mt-10 cursor-pointer
    bg-white
    shadow-[0_0_5px_rgba(255,107,181,0.3),0_2px_5px_rgba(255,107,181,0.18)]
    transition-all duration-300
  "
        >
          <ArrowRight className="w-8 h-8 animate-arrow-fade stroke-[2] text-[#fa1593]" />
          <span className='font-light text-[#fa1c79]'>Let's go</span>
        </button>
      </div>

      <span className="mt-auto text-center px-4 text-[#eb1d84] !font-light">
        Q<span className='text-[#f508c1]'>Mee</span> can generate inaccurate responses.Verify responses through independent sources.
      </span>
    </motion.div>
  );
}
