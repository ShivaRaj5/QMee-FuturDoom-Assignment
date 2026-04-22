import { motion } from 'framer-motion';
import { useRef, useState, type UIEventHandler, type WheelEventHandler } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Copy,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  Share2,
  Shield,
  Sparkles,
  UserPlus,
  Trash2,
  CheckCheck,
  Brain
} from 'lucide-react';
import LandingHeader from '../layout/LandingHeader';
import userImg from '../../assets/user.jpeg';
import conversationQuestionImg1 from '../../assets/conversation-question-img-1.jpeg';
import conversationQuestionImg2 from '../../assets/conversation-question-img-2.jpeg';
import conversationAnswerImg1 from '../../assets/conversation-answer-img-1.jpeg';

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
    answer: 'Futurdoom not found 🤷',
    questionAvatar: conversationQuestionImg1,
    answerAvatar: conversationAnswerImg1,
  },
  {
    id: 'c2',
    date: 'Feb 12, 2026',
    asker: 'Acilok Kolfica',
    question: 'Tell about mango shake',
    answer: 'Mango Shake is a refreshing beverage made with mango pulp and milk 🥭',
    questionAvatar: conversationQuestionImg2,
    answerAvatar: conversationAnswerImg1,
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
              <div className="h-[118px] bg-[linear-gradient(135deg,#214ecf,#112e9d),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_34px),repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_34px)] bg-blend-screen  bg-gradient-to-r to-[#1a3aad] from-[#2563eb] " />
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
                className="space-y-8 max-h-[100vh] overflow-y-auto pr-1 scrollbar-hide"
                onScroll={handleConversationScroll}
              >
                <div
                  className={`mb-6 sticky top-0 z-20 rounded-tl-2xl rounded-tr-2xl border border-[#e2e8fa] overflow-hidden bg-white transition-transform duration-300 ease-out ${hideCommunityHeader ? '-translate-y-[110%]' : 'translate-y-0'
                    }`}
                >
                  <div className="px-6 py-5 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_42px),repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_42px),linear-gradient(95deg,#1c45b8,#1034a6)] bg-gradient-to-r to-[#1a3aad] from-[#2563eb] ">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.25em] text-white/70 font-semibold inline-flex items-center gap-2">
                          <span className="w-4 h-[2px] bg-white/70 rounded-full" />
                          Community
                        </p>
                        <div className="mt-2 text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-1.5 sm:gap-2">
                          <h1>Share &amp; Connect</h1>
                          <Share2 className="w-5 h-5 text-white/80" />
                        </div>
                        <p className="text-white/75 mt-2 text-[16px]">Latest discussions and replies</p>
                      </div>
                      <button className="mt-8 rounded-full border border-white/35 backdrop-blur-[1px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] text-white px-4 py-1.5 text-[13px] font-medium bg-white/24 transition-colors inline-flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5" />
                        2 conversations
                      </button>
                    </div>
                  </div>
                </div>

                {conversations.map((conversation) => (
                  <div key={conversation.id} className="rounded-2xl overflow-hidden bg-white">
                    <div className="bg-[#f5f8ff] p-4 border-b border-[#e4ebfd]">
                      <div className="flex items-center justify-between gap-3 px-3">
                        <button className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-blue-200">
                          <CalendarDays className="w-3.5 h-3.5 text-blue-500" />
                          <span className='text-xs font-medium text-slate-700'>
                            {conversation.date}
                          </span>
                        </button>
                        <div className="flex items-center gap-2">
                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-white hover:scale-[1.1]">
                              <Share2 className="size-3.5 text-[#6e7f9e] group-hover:text-[#2f6dff] transition-colors " />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Share
                              </span>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-white hover:scale-[1.1]">
                              <Heart className="size-4 text-[#6e7f9e] group-hover:text-[#ff3f95] transition-colors" />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Like
                              </span>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-white hover:scale-[1.1]">
                              <Trash2 className="size-4 text-[#6e7f9e] group-hover:text-[#ff3f3f] transition-colors" />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Delete
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-4 text-[#9baac7] mb-3">
                        <div className="flex items-center gap-2">
                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-red-50 hover:scale-[1.1]">
                              <Trash2 className="size-4 text-[#6e7f9e] group-hover:text-[#ff3f3f] transition-colors" />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Delete
                              </span>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-red-50 hover:scale-[1.1]">
                              <Heart className="size-4 text-[#6e7f9e] group-hover:text-[#ff3f95] transition-colors" />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Like
                              </span>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-blue-50 hover:scale-[1.1]">
                              <Share2 className="size-3.5 text-[#6e7f9e] group-hover:text-[#2f6dff] transition-colors " />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Share
                              </span>
                            </div>
                          </div>

                          <div className="relative group">
                            <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-blue-50 hover:scale-[1.1]">
                              <Copy className="size-3.5 text-[#6e7f9e] group-hover:text-[#2f6dff] transition-colors " />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                              <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                Copy
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="max-w-[560px]">
                        <div className="flex items-center gap-3 text-[#263d69] ml-11">
                          <span className="text-xs font-semibold text-slate-600">{conversation.asker}</span>
                          <span className="text-[10px] text-slate-400">asked</span>
                        </div>
                        <div className="mt-1 ml-11 inline-block rounded-2xl rounded-bl-sm border border-[#d8e4fb] bg-white px-4 py-2.5 leading-none text-[#2a3e67] shadow-sm text-sm hover:scale-[1.01]">
                          {conversation.question}
                        </div>
                        <div className="-mt-1.5 flex items-center gap-2 text-[#8da1c5]">
                          <img src={conversation.questionAvatar} alt="Question user" className="size-9 rounded-xl object-cover border border-[#dce5f8] shadow-[0_3px_8px_rgba(0,0,0,0.15)]" />
                          <span className="text-slate-400 text-xs">10:30 AM</span>
                        </div>
                      </div>


                      <div className="flex justify-end mt-4">
                        <div className="max-w-[670px] w-full">
                          <div className="flex items-center justify-end gap-2">
                            <div className="relative group">
                              <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-red-50 hover:scale-[1.1]">
                                <Trash2 className="size-4 text-[#6e7f9e] group-hover:text-[#ff3f3f] transition-colors" />
                              </button>
                              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                                <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                  Delete
                                </span>
                              </div>
                            </div>

                            <div className="relative group">
                              <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-red-50 hover:scale-[1.1]">
                                <Heart className="size-4 text-[#6e7f9e] group-hover:text-[#ff3f95] transition-colors" />
                              </button>
                              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                                <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                  Like
                                </span>
                              </div>
                            </div>

                            <div className="relative group">
                              <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-blue-50 hover:scale-[1.1]">
                                <Share2 className="size-3.5 text-[#6e7f9e] group-hover:text-[#2f6dff] transition-colors " />
                              </button>
                              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                                <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                  Share
                                </span>
                              </div>
                            </div>

                            <div className="relative group">
                              <button className="size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer hover:bg-blue-50 hover:scale-[1.1]">
                                <Copy className="size-3.5 text-[#6e7f9e] group-hover:text-[#2f6dff] transition-colors " />
                              </button>
                              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-20">
                                <span className="block whitespace-nowrap rounded-md bg-[#54565a] px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.28)]">
                                  Copy
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className='flex items-center justify-end gap-2 mb-6 mt-1'>
                            <div>
                              <div className="flex items-center justify-end text-[10px] text-slate-400 mb-1">
                                replied <span className="text-xs font-semibold text-blue-600 mx-2">futurdoom</span>
                                <Sparkles className="size-3 text-blue-400" />
                              </div>
                              <div className="flex justify-end hover:scale-[1.01]">
                                <div className="rounded-2xl rounded-br-sm bg-linear-to-r to-[#1f5fff] from-[#1b44c6] text-white px-4 py-3 text-sm leading-none shadow-[0_10px_24px_rgba(32,89,255,0.28)]">
                                  {conversation.answer}
                                </div>
                              </div>
                              <div className="flex items-center justify-end gap-2 text-[#9badcc] text-[40px] leading-none mt-1">
                                <span className='text-slate-400 text-xs'>10:32 AM</span>
                                <CheckCheck className='text-blue-500 size-4' />
                              </div>
                            </div>
                            <img src={conversation.answerAvatar} alt="Answer user" className=" size-9 rounded-xl object-cover border-2 border-[#9ad0ff] mt-12" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-b from-blue-50/50 to-white rounded-xl border border-blue-100 p-4 hover:border-blue-300 transition-all duration-300 hover:scale-[1.01] group">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-11 h-7 rounded-lg bg-[#e9f1ff] text-[#2f6dff] gap-1">
                              <Brain className='size-3' />
                              <MessageCircle className="size-3" />
                            </span>
                            <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors">Continue reading...</span>
                          </div>
                          <ArrowRight className="size-4 text-blue-300 group-hover:text-blue-500" />
                        </div>

                        <div className="mt-5 flex items-center gap-2 text-[#8ea1c3] leading-none">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ecf2fe] text-[8px] font-medium text-slate-500">U</span>
                          <span className='text-[11px] text-slate-500 mb-1'>Next question</span>
                        </div>
                        <div className="text-xs text-slate-700 bg-white/80 p-2 rounded-lg border border-blue-50 ml-8">
                          Can you show me a complete example with CSS?
                        </div>

                        <div className="mt-4 flex items-center justify-end gap-2 text-[#7f92b7] text-[30px] leading-none">
                          <span className='text-[11px] text-slate-500 mb-1'>AI response</span>
                          <div className='w-5 h-5 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <Sparkles className="size-2 text-blue-500" />
                          </div>
                        </div>
                        <div className="text-xs text-blue-700 bg-blue-50/80 p-2 rounded-lg border border-blue-100 text-right mr-7">
                          Absolutely! Here&apos;s a complete example with responsive design...
                        </div>

                        <p className="text-[9px] text-slate-400 text-center mt-3">Click to view full conversation</p>
                      </div>

                      <hr className='mt-6 text-blue-100' />

                      <div className="pt-4.5 flex items-center justify-end gap-3">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-[#1a3aad] to-[#2563eb] text-white shadow-md hover:shadow-lg transition-all duration-200">
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
                        <button className="h-10 rounded-xl px-5 bg-linear-to-r from-[#3f86ff] to-[#6a42e8] text-white font-semibold transition-all duration-200 cursor-pointer text-xs shadow-[0_10px_22px_rgba(79,89,236,0.3)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(79,89,236,0.4)]">
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
