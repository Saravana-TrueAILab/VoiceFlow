import { useState } from 'react';
import {
    MdMicOff,
    MdMic,
    MdMenu,
    MdEdit,
    MdPause,
    MdBookmarkAdd
} from 'react-icons/md';

import Sidebar from './Sidebar';

export default function MeetingRecording() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-neutral-800 dark:text-neutral-100 font-display min-h-screen flex transition-colors duration-300 overflow-hidden">
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />

            <div className="flex-grow flex flex-col h-screen overflow-hidden relative transition-all duration-300">
                <nav className="absolute top-0 w-full z-40 px-6 py-4 pointer-events-none">
                    <div className="flex items-center justify-between pointer-events-auto">
                        <div className="flex items-center gap-4">
                            <button className="lg:hidden p-2 rounded-md text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer" onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}>
                                <MdMenu />
                            </button>
                            <div className="flex items-center gap-2 bg-white dark:bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm backdrop-blur-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Recording</span>
                            </div>
                            <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700"></div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-sm font-semibold text-neutral-900 dark:text-white">Product Design Weekly Sync</h1>
                                <MdEdit className="text-neutral-400 text-sm cursor-pointer hover:text-primary transition-colors" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1.5 rounded-lg">
                                <img alt="Meet" className="w-4 h-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfOgooDH9GGwg0KpstU8ATaCIfIYsmZffrP2tk-7mBRCkSJ7mqjYUow8o7xJCI8qWUisHidR7SH7qJTH9cU-mKmkGCcBDt7TIcQ541ax15sWIJdfkC10T9tsM4ejKj7YCq9CFu4z-bLOxE3KOM9NSXeNKTuGzZeSmNThibKkzn64L1_rKj2yKN4bVWzhs-ET63evsQLQ10TFovTIFC4ghKjaGoVu8e2fPiBDuIy89vOgQnqvYRbfTVpJfSjOVu6maxR_R5LsyeuUyU" />
                                <span>Connected to Meet</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="flex-grow flex flex-col items-center justify-center relative w-full h-full">
                    <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-400/10 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '1.5s' }}></div>
                    </div>
                    <div className="relative z-10 mb-12 text-center">
                        <div className="text-7xl font-bold tracking-tighter tabular-nums text-neutral-900 dark:text-white select-none drop-shadow-sm">
                            00:14:23
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-2 font-medium tracking-wide">Listening...</p>
                    </div>
                    <div className="relative z-10 flex items-center justify-center mb-16 h-64 w-full">
                        <div className="absolute flex items-center justify-center">
                            <div className="w-64 h-64 ripple"></div>
                            <div className="w-64 h-64 ripple"></div>
                            <div className="w-64 h-64 ripple"></div>
                        </div>
                        <div className="relative flex items-center justify-center gap-12 w-full max-w-2xl px-8">
                            <div className="flex items-center gap-1.5 h-16 opacity-80">
                                <div className="audio-bar"></div>
                                <div className="audio-bar h-8"></div>
                                <div className="audio-bar h-4"></div>
                                <div className="audio-bar h-10"></div>
                                <div className="audio-bar h-6"></div>
                            </div>
                            <div className="relative flex-shrink-0 z-20 group cursor-pointer">
                                <div className="absolute -inset-4 bg-primary/30 rounded-full blur-xl group-hover:bg-primary/50 transition-all duration-500"></div>
                                <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-primary to-neutral-700 shadow-xl shadow-primary/20 flex items-center justify-center transition-transform transform group-hover:scale-105 active:scale-95">
                                    <div className="w-20 h-20 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center shadow-inner">
                                        <div className="w-12 h-12 rounded-full bg-primary animate-pulse shadow-lg flex items-center justify-center">
                                            <MdMic className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 h-16 opacity-80">
                                <div className="audio-bar h-5"></div>
                                <div className="audio-bar h-9"></div>
                                <div className="audio-bar h-3"></div>
                                <div className="audio-bar h-11"></div>
                                <div className="audio-bar h-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 w-full max-w-xl text-center space-y-3 mb-12 h-24 overflow-hidden pointer-events-none">
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-20"></div>
                        <p className="text-lg text-neutral-400 dark:text-neutral-500 transition-all opacity-40 transform translate-y-2">
                            "Okay, let's circle back to the Q3 roadmap items."
                        </p>
                        <p className="text-xl font-medium text-neutral-700 dark:text-neutral-200 transition-all animate-pulse">
                            "Exactly. I think the user onboarding flow needs a refresh first."
                        </p>
                    </div>
                    <div className="fixed bottom-12 z-50 transform -translate-x-1/2 left-1/2 w-max">
                        <div className="glass-panel px-2 py-2 rounded-full shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 flex items-center gap-2">
                            <button className="w-12 h-12 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors tooltip-trigger" title="Mute Microphone">
                                <MdMicOff />
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" title="Pause Recording">
                                <MdPause className="text-2xl" />
                            </button>
                            <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-1"></div>
                            <button className="group flex items-center gap-2 pl-3 pr-5 py-2.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-full transition-all shadow-lg shadow-red-500/20">
                                <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="w-2.5 h-2.5 rounded-[2px] bg-white"></div>
                                </div>
                                <span className="font-semibold tracking-wide">Stop Recording</span>
                            </button>
                            <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-1"></div>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" title="Add Bookmark/Note">
                                <MdBookmarkAdd />
                            </button>
                        </div>
                    </div>
                    <footer className="fixed bottom-4 w-full text-center pointer-events-none pr-20 lg:pr-64">
                        <p className="text-xs text-neutral-400 dark:text-neutral-600">
                            AI notes will be generated automatically after the call.
                        </p>
                    </footer>
                </main>
            </div>
            <aside className="hidden xl:block fixed right-6 top-1/2 transform -translate-y-1/2 w-64 z-40">
                <div className="bg-white dark:bg-neutral-800/40 rounded-xl border border-neutral-100 dark:border-neutral-700/50 p-4 shadow-sm backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Participants (4)</h3>
                    <div className="flex -space-x-2 overflow-hidden mb-4">
                        <img alt="Sarah J" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5okiuCrza-cHXA1c2puLmOhFL2YvQrltCPEV5UKirbIm6VWGnvdRMMxJpD1cIq5o_wJHo0a6WFiQahY5Vtm30hyNQNXAa3C_gB0BY2HGkW1kSghz77y4h068tzcuSghjbfy0yJ2yC7PxPn5qDmIAgkfJsZTRGU_8chSMDJOhe5XNvHITnwog_nCdXw9f79pvD6URiy5XcM4oYc9Z0YD5qVLY3kKbfwg4EYPSwAfDUSzFDHDv7axT8YcZAocdy7u0CjSzmChbDZ1l" />
                        <img alt="Michael C" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHecuhJmGdBTA-DwIDyt9q-aX0CDOdN_S2yTXZYfjijh3xURvscoC84lrx-RlBpwJnofoBA5rd7ek2YvswLs5Q5DmDWXXSjJTqARogNM-knMaLuWxH16CZeOSdAHtwFp1s82ub8Fk9vYyjLrvUby6U2FdRxCmtZBAsRzcBsM5CsCxM-o5NqiypRDgz8Bc433DYnQj5OB49kb92Q9xMtGa5fBTmr4o5ZZmdHAvFSYXjNama11mYoT5rs0t4ikIA8jdcvuvcUIYMVKXT" />
                        <img alt="David K" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzHdoj8NrWsxdYHvnRqqQTd4YPKr4UJixpsM4A744dIY49-zytVE2jOJqZMP4MK1DJDHasdEppiENJXO5nl9xAEG-GPSP7ENGAGM1xuudG-5SEITJf61yoqRtXvtU4PA5nLT1JSRpM_N7V4-KQEa9_0nY1uEFcXrp6jTstbqiTMKUglJCOlq_YrXUHN-OAfsOTW8qqFG3LTK9niwgi2FQtmKCYxULonUD4BuROKvVcnkdtzRE-IFSQi-_viMLfAR9Kq1FKz7GUYtgY" />
                        <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-500">+1</div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            <span>Sarah is speaking...</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
