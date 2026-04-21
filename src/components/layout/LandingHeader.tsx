import qmeeImg from '../../assets/qmee.png';

interface LandingHeaderProps {
  onOpenChat: () => void;
  onOpenShare: () => void;
  onGoHome: () => void;
}

const navItems = ['Platform', 'Developers', 'Resources', 'Share'] as const;

export default function LandingHeader({ onOpenChat, onOpenShare, onGoHome }: LandingHeaderProps) {
  return (
    <header className="w-full mt-6">
      <div className="w-[90%] mx-auto rounded-full border border-primary/15 bg-[#fdf9fd] px-4 py-2.5 md:px-5 shadow-[0_6px_24px_rgba(245,8,193,0.08)]">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <button onClick={onGoHome} className="flex items-center gap-3 min-w-[120px] cursor-pointer">
            <div className="size-10 rounded-full border border-primary/10 bg-[#f9eef8] flex items-center justify-center">
              <img src={qmeeImg} alt="QMee logo" loading="lazy" className="size-6 object-contain" />
            </div>
            <span className="text-[23px] font-semibold tracking-tight text-[#111111] leading-none">QMee</span>
          </button>

          <nav className="hidden md:flex items-center justify-center gap-11">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={item === 'Share' ? onOpenShare : undefined}
                className="rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3d3943] transition-all duration-200 cursor-pointer hover:text-[#2f2833] hover:bg-linear-to-r hover:from-[#f8dced] hover:to-[#f6d5ea]"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={onOpenChat}
            className="justify-self-end rounded-full bg-primary-light text-[#1b1320] px-8 py-3 font-semibold tracking-tight transition-all duration-200 cursor-pointer hover:bg-linear-to-r hover:from-[#f4a8d6] hover:to-[#ef95cd]"
          >
            Open chat
          </button>
        </div>
      </div>
    </header>
  );
}
