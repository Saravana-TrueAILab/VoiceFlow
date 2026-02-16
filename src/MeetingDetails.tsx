import { useState } from 'react';
import {
    MdMenu,
    MdArrowBack,
    MdIosShare,
    MdPersonAdd,
    MdPlayArrow,
    MdVolumeUp,
    MdMoreHoriz,
    MdSearch,
    MdAutoAwesome,
    MdCheckCircle
} from 'react-icons/md';

import Sidebar from './Sidebar';

export default function MeetingDetails() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 min-h-screen flex overflow-hidden">
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />

            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Header */}
                <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center justify-between px-6 shrink-0 z-20">
                    <div className="flex items-center gap-4 min-w-0">
                        <button className="md:hidden p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500 dark:text-gray-400">
                            <MdMenu className="text-xl" />
                        </button>
                        <button className="hidden md:flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500 dark:text-gray-400">
                            <MdArrowBack className="text-xl" />
                        </button>
                        <div className="min-w-0">
                            <h1 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 truncate">
                                Product Roadmap Review: Q4 2023
                                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 shrink-0">Processed</span>
                            </h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Oct 24, 2023 • 10:00 AM • 45 min • Zoom Integration</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                            <MdIosShare className="text-[18px]" />
                            Export
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg shadow-sm transition-colors">
                            <MdPersonAdd className="text-[18px]" />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                    </div>
                </header>

                {/* Audio Player */}
                <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 shadow-sm z-10 shrink-0">
                    <div className="flex items-center gap-4 max-w-7xl mx-auto">
                        <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 group shrink-0">
                            <MdPlayArrow className="text-xl group-active:scale-90 transition-transform" />
                        </button>
                        <div className="flex-1 flex flex-col justify-center gap-1 min-w-0">
                            <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                                <span>12:34</span>
                                <span>45:23</span>
                            </div>
                            <div className="relative w-full h-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer group">
                                <div className="absolute inset-0 flex items-center justify-between px-1 opacity-40">
                                    {/* Waveform Bars Mockup */}
                                    {[...Array(40)].map((_, i) => (
                                        <div key={i} className={`w-1 bg-gray-300 dark:bg-gray-600 rounded-full h-${Math.floor(Math.random() * 8) + 2} ${i === 25 ? 'bg-primary/40 dark:bg-primary/60 h-10' : ''}`}></div>
                                    ))}
                                </div>
                                <div className="absolute top-0 left-0 h-full bg-primary/20 pointer-events-none" style={{ width: '28%' }}></div>
                                <div className="absolute top-0 h-full w-0.5 bg-primary z-10" style={{ left: '28%' }}>
                                    <div className="w-3 h-3 bg-primary rounded-full absolute -top-1 -left-1.5 shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <button className="text-xs font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:block">1x</button>
                            <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <MdVolumeUp className="text-xl" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:block">
                                <MdMoreHoriz className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <main className="flex-1 flex overflow-hidden">
                    {/* Transcript Section */}
                    <section className="flex-1 overflow-y-auto transcript-scroll bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 relative">
                        <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800 z-10">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdSearch className="text-gray-400 text-lg" />
                                </span>
                                <input className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-gray-100 placeholder-gray-400" placeholder="Search in transcript..." type="text" />
                            </div>
                        </div>

                        <div className="p-6 md:p-8 max-w-3xl mx-auto space-y-8">
                            {/* Transcript Item 1 */}
                            <TranscriptItem
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDofL85MElMPAa53AVfv9dmTTkrVfxeHAML7_yAl_u8Oa1hExLeEWbyep480TY28opeLIhHJ3JO4fHQSPnJ0_IjLldxlqP60Nljl7_b4VZarmgWedvgeTBbyv4dthXsvAX64v9E8KUMSAiSIhC8GWmMO8QY26xaXzsjprnieq-GNmRkbum_8kVUlY63jriB8ZI-PP_TquWMQe8CP8JNni80l7Rg7bN-zhBw1J9tPQRf65MyJtRFovCMVUI7FrznQ2Sph5pwrtc4DVEY"
                                name="Sarah Chen"
                                role="Host"
                                time="12:05"
                                text="Okay, let's get started. Thanks everyone for joining the Q4 product roadmap review. I wanted to specifically focus today on the AI integration features we've been promising to the enterprise clients."
                            />

                            {/* Transcript Item 2 */}
                            <TranscriptItem
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDre3H_QrC02yAUTvFJHNJNi-BBrwPRIJgFJmSOAsRPn2RT_2fPu_ndVqqm0-KIENGj9Wtit2qkaL1NEAczc97VuWHurGwQTzpvLBySWV_Qu26wFRzG9KKmzk-66phvGDU7BOEaPi1AdnHAdt22HInLfnNCoGytU25ywOr1XXSn65tgCi4MNeXLhtMgEahjqAD2dRJvrLRwhT36E9Jmw8Ra5zvK3Fst1I3CdE4rquLuI3LLmzuTj3Ca8-7-qIoVHZteYSLV3QJKkegF"
                                name="David Miller"
                                role="Engineering"
                                roleColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                time="12:08"
                                text="Right. From the engineering side, we've completed the initial backend migration. The latency tests are looking good—we're seeing responses under 200ms for the summarization endpoint."
                            />

                            {/* Transcript Item 3 (Highlight) */}
                            <TranscriptItem
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDfbPa8iQhXU5_BZO2DezTVo-bO8BJqq_EFpF-kd8orPNunxf0CWFZBQB1mBO-7uZdbDrbF5xrytQ7MvSYWBhZgHsrw6HZN-QcuoG_fPV8-IKhMQOyBDfFK9YI9k9oxU7HbeM_DNuDCwvAgc5Ps1-_2yJcKXI5WJ2k663Wd0Vi0ArUb16kA2MTXLUEMOjmyO3kxqYT3cBiqJaZzr6xAgNo_SeSK9o5ODyV1_AQxnjBoSb-s9fFzEWGgPEJgjpJwGE4ZIZGUG6CJH45X"
                                name="Jessica Wu"
                                role="Product"
                                roleColor="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                time="12:34"
                                text={
                                    <>
                                        That's great news, David. <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">However, I'm a bit concerned about the UI implementation.</span> The mockups from design haven't been fully validated with the beta group yet. We might need another week there.
                                    </>
                                }
                                highlight
                            />

                            {/* Transcript Item 4 */}
                            <TranscriptItem
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDh0kbGCuez4PMq9e4XJtiyu0bByDcxzEFAr0I8r56jEbm3zBLgKDtTwkBW511fHtsF1bZrud6gy9_jxKYg-XLi3wvlh3UcsESCKkqddbSyvrDxSYbgT1VIbbdQ1qSa-MLs863UZQbj3WYVCgrjOXZyEiaXmdoQQSrtrxgOUPiD5jlF6C9Mo4e4AM0v7GBDjE_YeBKyjEQTUeKunAvEUQh8D84MMtUBvZ6JBxqhPz2_br6mtCvnxk2fZrdyHPbrhwvak9yxxSrvX0--"
                                name="Sarah Chen"
                                role="Host"
                                time="12:45"
                                text="Understood. Let's not rush the UI if it's going to confuse users. Jessica, can you set up a quick sync with the design team tomorrow?"
                            />

                            {/* Transcript Item 5 */}
                            <TranscriptItem
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuCx1nXW-zbGcMnf_b0AhBPYwcoiUKDvdetZijptfzngsYFYsnC4j1TINxYmF5OJs3TV55oNff4XcYkyS8HTwV17z-5l0vuEFgS-hvtafBFZ5fm1BK_WOg7GBaJeVvsYPxvL0T16o6rFP6KblRN2kdURCjV35cX2r8JzLwiQZZZL9U2nMO79pYqQ_TBkZp-0oGPWNFs29eDjvMRcYd0YKAl12O-D-zdYol3g0NX7fcAERDC3ZhLdsrJo9VVWFKtxpa762w0Dw7AHwNwP"
                                name="David Miller"
                                role="Engineering"
                                roleColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                time="12:50"
                                text="If we delay the UI, does that push the release date?"
                            />
                            {/* Transcript Item 6 */}
                            <TranscriptItem
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuDT76qK6E3PDK8qSwr0-tExX9EsXIRMSfB_EJ6rrJMZY4IyV2slN1c1fd3_aQLcY2mqMoLXf5evazr5L9kMI5CXApeRWX5OibsjwmxUjmr2P10tNtjt_ASjekrDvwTBRxVKNj4x_-3d_uOjM9DruC3qbUPA_BVg5LxWjzhPCHzK5VRCQwu5DPhwQFnN9uHpX03MIgLhomnrhLboZsKqIlcjZid71wVwfYT2Gh01hPcvyR1lO6cvRiHvhou1DGXoU5-09WH2Z0D2KWcI"
                                name="Sarah Chen"
                                role="Host"
                                time="12:52"
                                text="Ideally no. Let's aim to keep the backend release on schedule, and we can feature flag the UI until it's ready."
                            />
                        </div>
                    </section>

                    {/* Right Sidebar (AI Summary) */}
                    <aside className="w-[400px] xl:w-[480px] bg-background-light dark:bg-background-dark shrink-0 flex flex-col border-l border-gray-200 dark:border-gray-800 overflow-y-auto hidden lg:flex">
                        <div className="p-6 space-y-6">
                            {/* Summary Card */}
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                        <MdAutoAwesome className="text-primary text-lg" />
                                        AI Summary
                                    </h2>
                                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-1 rounded">Generated just now</span>
                                </div>
                                <div className="space-y-3">
                                    <SummaryPoint
                                        title="Backend Migration Complete"
                                        text="Engineering reported successful migration with latency under 200ms."
                                    />
                                    <SummaryPoint
                                        title="UI Validation Delays"
                                        text="Product team flagged concerns about design validation with beta users."
                                    />
                                    <SummaryPoint
                                        title="Release Strategy"
                                        text="Decision made to proceed with backend release and feature-flag the UI components."
                                    />
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">#Product</span>
                                    <span className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">#Engineering</span>
                                    <span className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">#Q4 Goals</span>
                                </div>
                            </div>

                            {/* Action Items Card */}
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                        <MdCheckCircle className="text-green-500 text-lg" />
                                        Action Items
                                    </h2>
                                    <button className="text-primary text-xs font-medium hover:underline">+ Add Task</button>
                                </div>
                                <div className="space-y-4">
                                    <ActionItem
                                        task="Schedule design sync meeting"
                                        assignee="Jessica W."
                                        assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAuQsP5EDszQKodSDSorx7XBUsk4uu67bHVioCUF5g4pb7AMIMfkPJVVg5nMPh0MnLqF_I6dyIlB76-PbfhkuGO2k0TyN_JiRRf1dI0X-FoeUMQDtHCEqIGvkzPifNUx6ZSeWm0Yvq9KXgk-tlAw83Ymwckwq15JgDptQ5WJVxFgL_oTKMPTu76Dpe89IBscozORp9ceFyLOPefElaFSv1CdRUjOP4OdGF0hQzjRDamr23jnPBR-I_gnskjMG-REzjCI-GCUgSFE8"
                                        dueDate="Due Tomorrow"
                                        dueColor="text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                                    />
                                    <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                                    <ActionItem
                                        task="Prepare feature flag configuration"
                                        assignee="David M."
                                        assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCedtPSDCRlTATRthly0VHTG96StyH1js9TnoZfDJtus2C3reE47RGQ7jiQpph6LkINP_UoWWWqgZsKpbkEb5tWKc8RdzAbcNPPNJyJO8NxmE-8gCaVt1YEEzYa1n0T0_dat4TGWZH7ea5pklBX9epQhPDfv-Ir0jni2UZSQmwrThLxKHCYz6iNg1ZDR2hHfKrz4b6BcufZ_2BFTTkeob6-84Y2gzzfXraQ0Fk-cHzH_8-liNYeAFiuZQ4AjhDDrcODiB1gWl1VyU_U"
                                        dueDate="Fri, Oct 27"
                                        dueColor="text-gray-400 dark:text-gray-500"
                                    />
                                    <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                                    <ActionItem
                                        task="Send updated roadmap to stakeholders"
                                        assignee="Sarah C."
                                        assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuBhDymkJNOu8xMwuG3KR_IqKSsdFnhR3n3deQQZ5kCwFs92r79gGtqgAviGDfd86eQcrMGlxpcbdeBStZCzyrNUoLa3LPSJwYWYTpk6LOLJPdThvA5mTDaWUgJ-hKffloYBJZFToapkpAcMkKn3L-rqj5LR6Pb5oK6aTAwR6dA3hPIRl5QpGBoqTjNBkaTE22HWA5zC2bH4ggqOVkxYLNnhRmaUvK5iLwLeaZjimphXgB6pftCgxbyn55n5lzHt5bCo1_hM_ovRtn2x"
                                        dueDate="Done"
                                        dueColor="text-gray-400"
                                        completed
                                    />
                                </div>
                            </div>

                            {/* Engagement Stats Card */}
                            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-primary/10 p-5">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Engagement Stats</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
                                        <p className="text-xs text-gray-500">Key Decisions</p>
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">85%</span>
                                        <p className="text-xs text-gray-500">Positive Sentiment</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
}

// Components


function TranscriptItem({ img, name, role, roleColor = "bg-primary/10 text-primary", time, text, highlight = false }: any) {
    return (
        <div className={`flex gap-4 group ${highlight ? 'relative' : ''}`}>
            {highlight && <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-r"></div>}
            <div className="flex-shrink-0 pt-1">
                <img className="w-10 h-10 rounded-full shadow-sm" src={img} alt={`${name} Avatar`} />
            </div>
            <div className={`flex-1 ${highlight ? 'bg-primary/5 dark:bg-primary/10 -m-3 p-3 rounded-xl transition-colors' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 dark:text-white">{name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${roleColor}`}>{role}</span>
                    <span className={`text-xs ${highlight ? 'text-gray-500 dark:text-gray-400 font-mono' : 'text-gray-400 cursor-pointer hover:text-primary hover:underline'}`}>{time}</span>
                </div>
                <p className={`${highlight ? 'text-gray-900 dark:text-gray-100 font-medium' : 'text-gray-700 dark:text-gray-300'} leading-relaxed`}>
                    {text}
                </p>
            </div>
        </div>
    )
}

function SummaryPoint({ title, text }: { title: string, text: string }) {
    return (
        <div className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">{title}:</strong> {text}
            </p>
        </div>
    )
}

function ActionItem({ task, assignee, assigneeImg, dueDate, dueColor, completed = false }: any) {
    return (
        <div className={`flex gap-3 items-start group ${completed ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}>
            <div className="pt-0.5">
                <input className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer" type="checkbox" defaultChecked={completed} />
            </div>
            <div className="flex-1">
                <p className={`text-sm font-medium ${completed ? 'text-gray-500 line-through' : 'text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer'}`}>
                    {task}
                </p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <img className="w-5 h-5 rounded-full border border-white dark:border-gray-800" src={assigneeImg} alt={`Assignee ${assignee}`} />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{assignee}</span>
                    </div>
                    <span className={`text-xs rounded font-medium ${dueColor} ${completed ? '' : 'px-2 py-0.5'}`}>{dueDate}</span>
                </div>
            </div>
        </div>
    )
}
