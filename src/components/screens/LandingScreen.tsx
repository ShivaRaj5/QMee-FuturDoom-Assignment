import { QMeeTextLogo, CentralGraphic } from '../ui/CentralGraphics';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingScreenProps {
  onNext: () => void;
}

export default function LandingScreen({ onNext }: LandingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col items-center justify-between pb-8 pt-12"
    >
      <div className="flex flex-col items-center w-full">
        <QMeeTextLogo />

        <div className="mt-16 mb-20">
          <CentralGraphic />
        </div>

        <button
          onClick={onNext}
          className="flex items-center space-x-3 px-5 py-1 rounded-xl border-2 border-primary/20 text-primary font-medium hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer"
        >
          <ArrowRight className="w-8 h-8 animate-arrow-fade stroke-[2]" />
          <span>Let's go</span>
        </button>
      </div>

      <div className="text-primary mt-auto text-center px-4">
        Q<span className='text-[#f508c1]'>Mee</span> can generate inaccurate responses.Verify responses through independent sources.
      </div>
    </motion.div>
  );
}
