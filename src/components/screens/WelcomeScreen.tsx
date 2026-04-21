import { QMeeTextLogo, CentralGraphic } from '../ui/CentralGraphics';
import InputBar from '../ui/InputBar';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStartChat: (message: string) => void;
  onGoLanding: () => void;
}

export default function WelcomeScreen({ onStartChat, onGoLanding }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col items-center justify-center pb-8 pt-6 w-full"
    >
      <button onClick={onGoLanding} className="absolute top-6 left-1/2 -translate-x-1/2 cursor-pointer">
        <QMeeTextLogo />
      </button>

      <div className="flex flex-col items-center w-full max-w-2xl mt-12 mb-auto shrink-0">
        <div className='mt-16'>
          <CentralGraphic />
        </div>

        <div className="text-center mt-8 space-y-4">
          <h1 className="text-primary text-2xl tracking-wide">
            Welcome to Q<span className='font-bold'>Mee</span>
          </h1>
          <p className="text-primary text-sm font-medium">
            Ask me anything, and I'm here to help you.
          </p>
        </div>
      </div>

      <div className="w-full mt-auto px-4 lg:px-0">
        <InputBar onSend={onStartChat} autoFocus />
      </div>
    </motion.div>
  );
}
