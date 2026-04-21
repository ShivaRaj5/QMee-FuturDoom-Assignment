import { motion } from 'framer-motion';
import { useRef, useState, type UIEventHandler, type WheelEventHandler } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Copy,
  Globe,
  Heart,
  Link2,
  MapPin,
  MessageCircle,
  Share2,
  Shield,
  Sparkles,
  UserPlus,
  Trash2,
} from 'lucide-react';
import LandingHeader from '../layout/LandingHeader';
import bheemIcon from '../../assets/bheem-icon.jpg';
import qmeeImg from '../../assets/qmee.png';
import userImg from '../../assets/user.jpeg';

interface ShareScreenProps {
  onOpenChat: () => void;
  onOpenShare: () => void;
  onHome: () => void;
}

const quickLinks = ['About', 'Contact', 'Privacy', 'Terms', 'Disclaimer'];
const platformLinks = ['Emotion Feed', 'AI Chat', 'Community', 'Explore'];
const socialIcons = [
  { name: 'Instagram', src: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png' },
  { name: 'Facebook', src: 'https://cdn.simpleicons.org/facebook/1877F2' },
  { name: 'Twitter', src: 'https://cdn.simpleicons.org/x/111111' },
  { name: 'LinkedIn', src: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png' },
  { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/111111' },
];
const conversations = [
  {
    id: 'c1',
    date: 'Feb 19, 2026',
    asker: 'Dipankar Porey',
    question: 'Hello, can you tell me about futurdoom.',
    answer: 'Futurdoom not found {🤷}',
  },
  {
    id: 'c2',
    date: 'Feb 12, 2026',
    asker: 'Acilok Kolfica',
    question: 'Tell about mango shake',
    answer: 'Mango Shake is a refreshing beverage made with mango pulp and milk 🥭',
  },
  {
    id: 'c3',
    date: 'Feb 10, 2026',
    asker: 'Rina V',
    question: 'How does this code parser block work?',
    answer: 'It previews follow-up prompts and generated responses with expandable thread context.',
  },
];

export default function ShareScreen({ onOpenChat, onOpenShare, onHome }: ShareScreenProps) {
  const [hideCommunityHeader, setHideCommunityHeader] = useState(false);
  const lastConversationScrollTop = useRef(0);
  const lastPageScrollTop = useRef(0);

  const handlePageScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const currentTop = event.currentTarget.scrollTop;
    const previousTop = lastPageScrollTop.current;

    if (currentTop - previousTop > 6) {
      setHideCommunityHeader(true);
    } else if (previousTop - currentTop > 6 || currentTop <= 6) {
      setHideCommunityHeader(false);
    }

    lastPageScrollTop.current = currentTop;
  };

  const handlePageWheelCapture: WheelEventHandler<HTMLDivElement> = (event) => {
    // Capture wheel from any nested region (conversation/footer/page)
    if (event.deltaY > 2) {
      setHideCommunityHeader(true);
    } else if (event.deltaY < -2) {
      setHideCommunityHeader(false);
    }
  };

  const handleConversationScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const currentTop = event.currentTarget.scrollTop;
    const previousTop = lastConversationScrollTop.current;

    if (currentTop - previousTop > 6) {
      setHideCommunityHeader(true);
    } else if (previousTop - currentTop > 6 || currentTop <= 6) {
      setHideCommunityHeader(false);
    }

    lastConversationScrollTop.current = currentTop;
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <LandingHeader onOpenChat={onOpenChat} onOpenShare={onOpenShare} onGoHome={onHome} />
      <hr className='text-gray-200 mt-5.5' />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        onScroll={handlePageScroll}
        onWheelCapture={handlePageWheelCapture}
        className="flex-1 overflow-y-auto scrollbar-hide"
      >
        <div className="space-y-5 bg-slate-100">
          <div className="px-4 lg:px-8 mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 items-start bg-gray-100 pt-6">
            <aside className="rounded-xl border border-[#e7ebf7] bg-white shadow-[0_12px_30px_rgba(30,58,138,0.07)] overflow-hidden lg:sticky lg:top-4">
              <div className="h-[118px] bg-[radial-gradient(circle_at_22%_30%,rgba(255,255,255,0.22)_0_12%,transparent_38%),radial-gradient(circle_at_56%_58%,rgba(255,255,255,0.12)_0_16%,transparent_44%),radial-gradient(circle_at_88%_22%,rgba(255,255,255,0.16)_0_12%,transparent_36%),linear-gradient(135deg,#214ecf,#112e9d),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_34px),repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_34px)] bg-blend-screen" />
              <div className="px-6 pb-5">
                <div className="relative -mt-12 w-20 h-20">
                  <div className="w-full h-full rounded-full shadow-[0_8px_20px_rgba(24,44,99,0.2)] overflow-hidden">
                    <img src={userImg} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute right-1 bottom-0 w-4 h-4 rounded-full bg-[#36d88a] border-[3px] border-white shadow-sm" />
                </div>

                <h2 className="mt-3 leading-none text-lg font-bold text-[#1b2a45]">Shiv Kumar</h2>
                <div className="mt-2 flex items-center gap-1.5 text-[#4f6a9a] text-[14px]">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  <span className='text-blue-500 text-xs'>San Francisco, CA</span>
                </div>

                <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-[#3f86ff] to-[#5a53e7] px-4 py-1.5 text-white text-xs font-semibold shadow-[0_6px_14px_rgba(63,134,255,0.28)]">
                  <Sparkles className="size-3" />
                  Senior Product Designer
                </div>

                <hr className='!text-gray-100 mt-4 -mb-1' />

                <div className="mt-5 flex items-center gap-1 text-[#1f2b44]">
                  {socialIcons.map((social) => (
                    <div key={social.name} className="relative group z-0 hover:z-30">
                      <button
                        aria-label={social.name}
                        className="size-6.5 rounded-md bg-[#f3f5fa] flex items-center justify-center transition-all duration-200 cursor-pointer hover:bg-white hover:shadow-[0_6px_12px_rgba(20,35,90,0.2)] overflow-visible group-hover:scale-[1.4] group-hover:z-[1000]"
                      >
                        <img
                          src={social.src}
                          alt={social.name}
                          className="size-4 object-contain transition-transform duration-200 "
                          loading="lazy"
                        />
                      </button>
                      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                        <span className="block whitespace-nowrap rounded-md bg-[#5f6268] px-2 py-1 text-[10px] font-semibold text-white shadow-md">
                          {social.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-md border border-[#edf1fb] p-3">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#97a5c3] uppercase">About</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    Full-stack engineer with 6+ years building scalable web products...
                  </p>
                </div>

                <hr className='!text-gray-100 mt-4' />

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="rounded-lg bg-linear-to-r from-[#f46ab6] to-[#f9276f] text-white text-[12px] font-semibold py-2.5 px-3 transition-all duration-200 cursor-pointer flex items-center justify-between shadow-[0_8px_18px_rgba(249,39,111,0.28)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(249,39,111,0.38)]">
                    <span className="inline-flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Interested
                    </span>
                    <span className="size-5 rounded-full bg-white/20 text-white inline-flex items-center justify-center font-bold text-xs px-2 ml-2">3</span>
                  </button>
                  <button className="rounded-lg bg-linear-to-r from-[#4588ff] to-[#1f3fa1] text-white text-[12px] font-semibold py-2.5 px-1.5 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 shadow-[0_8px_18px_rgba(31,63,161,0.32)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(31,63,161,0.42)]">
                    <span className="inline-flex items-center gap-2">
                      <UserPlus className="w-4 h-4" />
                      Interesting
                    </span>
                    <span className="size-5 rounded-full bg-white/20 text-white inline-flex items-center justify-center font-bold text-xs px-2">3</span>
                  </button>
                </div>
              </div>
            </aside>

            <section className="space-y-4">
              <div
                className="space-y-4 max-h-[100vh] overflow-y-auto pr-1 scrollbar-hide"
                onScroll={handleConversationScroll}
              >
                <div
                  className={`sticky top-0 z-20 rounded-tl-2xl rounded-tr-2xl border border-[#e2e8fa] overflow-hidden bg-white transition-transform duration-300 ease-out ${hideCommunityHeader ? '-translate-y-[110%]' : 'translate-y-0'
                    }`}
                >
                  <div className="px-6 py-5 bg-[linear-gradient(95deg,#1c45b8,#1034a6),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_25%),radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.12),transparent_22%),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_42px),repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_42px)] bg-blend-overlay">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.25em] text-white/70 font-semibold">Community</p>
                        <h1 className="text-[42px] text-white leading-none mt-2 font-semibold">Share &amp; Connect</h1>
                        <p className="text-white/75 mt-2 text-[16px]">Latest discussions and replies</p>
                      </div>
                      <button className="rounded-full border border-white/35 bg-white/10 text-white px-4 py-1.5 text-[13px] font-medium hover:bg-white/20 transition-colors cursor-pointer">
                        3 conversations
                      </button>
                    </div>
                  </div>
                </div>

                {conversations.map((conversation) => (
                  <div key={conversation.id} className="rounded-2xl border border-[#e2e8fa] overflow-hidden bg-white">
                    <div className="bg-[#f5f8ff] p-4 border-b border-[#e4ebfd]">
                      <div className="flex items-center justify-between gap-3">
                        <button className="inline-flex items-center gap-2 rounded-lg border border-[#d8e3fa] bg-white px-3 py-1.5 text-[13px] text-[#45629a] hover:bg-[#f7faff] transition-colors cursor-pointer">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {conversation.date}
                        </button>
                        <div className="flex items-center gap-3 text-[#8ba1ca]">
                          <Share2 className="w-4 h-4 hover:text-[#4968a9] cursor-pointer transition-colors" />
                          <Heart className="w-4 h-4 hover:text-[#4968a9] cursor-pointer transition-colors" />
                          <Trash2 className="w-4 h-4 hover:text-[#4968a9] cursor-pointer transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 space-y-5">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 max-w-[440px]">
                          <div className="flex items-center gap-2 text-[#263d69]">
                            <span className="font-semibold text-[16px]">{conversation.asker}</span>
                            <span className="text-[12px] text-[#8da1c5]">asked</span>
                          </div>
                          <div className="inline-block rounded-2xl border border-[#e9edf8] bg-white px-4 py-2.5 text-[16px] text-[#2a3e67] shadow-sm">
                            {conversation.question}
                          </div>
                          <p className="text-[12px] text-[#9aadcd]">10:30 AM</p>
                        </div>
                        <img src={bheemIcon} alt="Asker" className="w-9 h-9 rounded-xl object-cover border border-[#e4eaf9]" />
                      </div>

                      <div className="flex justify-end">
                        <div className="max-w-[620px]">
                          <div className="text-right text-[12px] text-[#9badcc] mb-1">
                            replied <span className="text-[#3f5f9f] font-semibold">futurdoom</span>
                          </div>
                          <div className="rounded-2xl rounded-br-md bg-linear-to-r from-[#1f5fff] to-[#1b44c6] text-white px-5 py-3 text-[17px] shadow-[0_8px_22px_rgba(32,89,255,0.3)]">
                            {conversation.answer}
                          </div>
                          <div className="flex items-center justify-end gap-2 mt-2 text-[#9badcc] text-[12px]">
                            <span>10:32 AM</span>
                            <img src={qmeeImg} alt="AI" className="w-8 h-8 rounded-full border border-[#d4def8] bg-white p-1" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#d6e2fb] bg-[#fbfdff] p-4 shadow-[inset_0_0_0_1px_rgba(222,233,255,0.6)]">
                        <div className="flex items-center justify-between text-[#4f6ea8]">
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span className="font-semibold text-[16px]">Continue reading...</span>
                          </div>
                          <ArrowRight className="w-4 h-4" />
                        </div>

                        <div className="mt-3 text-[14px] text-[#6b7faa]">Next question</div>
                        <div className="mt-2 rounded-lg border border-[#edf2fd] bg-white px-3 py-2 text-[#3a4e7a]">
                          Can you show me a complete example with CSS?
                        </div>

                        <div className="mt-3 flex items-center justify-between text-[13px] text-[#7f92b7]">
                          <span>AI response</span>
                          <Link2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="mt-2 rounded-lg bg-[#eef3ff] px-3 py-2 text-[#365596] text-[14px]">
                          Absolutely! Here&apos;s a complete example with responsive design.
                        </div>
                        <p className="text-center text-[11px] text-[#b1bfd9] mt-3">Click to view full conversation</p>
                      </div>

                      <div className="pt-4 border-t border-[#e3e9f7] flex items-center justify-end gap-4">
                        <button className="inline-flex items-center gap-2 text-[#6d7fa6] text-[15px] hover:text-[#3d568a] transition-colors cursor-pointer">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#2f6dff] to-[#1f4fd4] text-white px-5 py-2.5 font-semibold shadow-[0_8px_20px_rgba(47,109,255,0.35)] hover:brightness-105 transition-all cursor-pointer">
                          View Thread
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <hr className='text-gray-200 m-0' />

          <footer className="!bg-white">
            <div className='flex flex-col'>
              <div className='p-6'>
                <div className="rounded-2xl bg-[linear-gradient(90deg,#eef4ff_0%,#f8eff9_100%)] p-10">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                    <div>
                      <h3 className="text-[26px] leading-none font-semibold text-[#202f4e]">
                        futur<span className="text-[#2f6dff]">DooM</span>
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed mt-3">
                        Where emotions meet AI - express freely, connect deeply, feel authentically.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-4 text-[10px] text-[#7087b1] font-semibold uppercase tracking-[0.14em]">
                        <span className="inline-flex items-center gap-1.5 text-slate-400 font-bold tracking-wide uppercase"><Sparkles className="w-3.5 h-3.5 text-blue-500" /> AI-powered</span>
                        <span className="inline-flex items-center gap-1.5 text-slate-400 font-bold tracking-wide uppercase"><Shield className="w-3.5 h-3.5 text-blue-500" /> SSL secure</span>
                        <span className="inline-flex items-center gap-1.5 text-slate-400 font-bold tracking-wide uppercase"><Globe className="w-3.5 h-3.5 text-blue-500" /> Global</span>
                      </div>
                    </div>

                    <div className="min-w-[320px]">
                      <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">Stay in the loop</p>
                      <p className="text-[13px] text-slate-500 mt-2">Get updates on new features &amp; AI releases.</p>
                      <div className="mt-3 flex items-center gap-2">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="h-10 flex-1 rounded-xl border border-[#d5dff5] bg-white px-3 text-[14px] text-[#33496f] outline-none focus:border-[#8ea7dd] transition-colors"
                        />
                        <button className="h-10 rounded-xl px-5 bg-linear-to-r from-[#6d67ff] to-[#4a58e8] text-white font-semibold hover:brightness-105 transition-all cursor-pointer text-xs hover:scale-[1.05]">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 mb-5 text-[14px]">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-400 mb-3">Quick Links</p>
                    <div className="space-y-2 ml-4 text-[#55698f]">
                      {quickLinks.map((item) => (
                        <button key={item} className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-400 mb-3">Contact</p>
                    <div className="space-y-2">
                      <p className='text-[12px] text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer'>feedbackfuturdoom@gmail.com</p>
                      <p className='text-[12px] text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer'>www.futurdoom.com</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-400 mb-3">Platform</p>
                    <div className="space-y-2 text-[#55698f]">
                      {platformLinks.map((item) => (
                        <button key={item} className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-400 mb-3">Follow Us</p>
                    <div className="mt-4 flex items-center gap-1 text-[#1f2b44]">
                      {socialIcons.map((social) => (
                        <div key={social.name} className="relative group z-0 hover:z-30">
                          <button
                            aria-label={social.name}
                            className="size-6.5 rounded-md bg-[#f3f5fa] flex items-center justify-center transition-all duration-200 cursor-pointer hover:bg-white hover:shadow-[0_6px_12px_rgba(20,35,90,0.2)] overflow-visible group-hover:scale-[1.4] group-hover:z-[1000]"
                          >
                            <img
                              src={social.src}
                              alt={social.name}
                              className="size-4 object-contain transition-transform duration-200 "
                              loading="lazy"
                            />
                          </button>
                          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                            <span className="block whitespace-nowrap rounded-md bg-[#5f6268] px-2 py-1 text-[10px] font-semibold text-white shadow-md">
                              {social.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


              <hr className='text-gray-100' />

              <div className="flex items-center justify-between p-5">
                <p className='text-[11px] text-slate-400'>© 2026 futurdoom. All rights reserved.</p>
              </div>

            </div>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}
