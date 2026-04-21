import { motion } from 'framer-motion';
import LandingHeader from '../layout/LandingHeader';

interface ShareScreenProps {
  onBack: () => void;
  onOpenChat: () => void;
  onOpenShare: () => void;
  onHome: () => void;
}

export default function ShareScreen({ onBack, onOpenChat, onOpenShare, onHome }: ShareScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      <LandingHeader onOpenChat={onOpenChat} onOpenShare={onOpenShare} onGoHome={onHome} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col items-center justify-center gap-6"
      >
        <h1 className="text-4xl font-semibold text-primary tracking-tight">Share</h1>
        <p className="text-primary/80 text-center max-w-xl">
          This is the share page. You can add your sharing options or campaign content here.
        </p>
        <button
          onClick={onBack}
          className="rounded-full border border-primary/30 px-6 py-2 text-primary font-medium hover:bg-primary/5 transition-colors cursor-pointer"
        >
          Back to landing
        </button>
      </motion.div>
    </div>
  );
}
