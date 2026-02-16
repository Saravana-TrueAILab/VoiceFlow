import { useState } from 'react';

import {
    MdMenu,
    MdMenuOpen,
    MdNotifications,
    MdCalendarToday,
    MdExpandMore,
    MdVideocam,
    MdTrendingUp,
    MdTrendingDown,
    MdTimer,
    MdAutoFixHigh,
    MdAdd,
    MdCheckCircle,
    MdTaskAlt,
    MdWarning,
    MdLightbulb
} from 'react-icons/md';

import Sidebar from './Sidebar';


export default function Analytics() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen flex font-display transition-colors duration-200 overflow-x-hidden">

            {/* Sidebar */}
            <div className={`md:block z-40 ${isSidebarCollapsed ? 'md:w-20' : 'md:w-64'} transition-all duration-300`}>
                <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen w-full transition-all duration-300">
                <header className="bg-white/80 dark:bg-[#1A202C]/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden p-1 mr-2 text-slate-500 cursor-pointer hover:bg-gray-100 rounded"
                            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                        >
                            <MdMenu className="text-xl" />
                        </button>
                        <button
                            className="hidden md:flex cursor-pointer text-slate-500 hover:text-primary transition-colors p-1.5 rounded hover:bg-slate-50 mr-2 border border-transparent hover:border-slate-200 items-center justify-center"
                            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                            title="Toggle Sidebar"
                        >
                            <MdMenuOpen className={`text-[20px] transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Productivity Analytics</h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">Track your meeting efficiency and team collaboration.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center bg-slate-50 dark:bg-[#1A202C] rounded border border-slate-200 dark:border-slate-700 px-3 py-2 cursor-pointer hover:border-primary transition-colors">
                            <MdCalendarToday className="text-slate-500 dark:text-slate-400 text-sm mr-2" />
                            <span className="text-sm font-medium text-slate-900 dark:text-white">Oct 1 - Oct 31, 2023</span>
                            <MdExpandMore className="text-slate-500 dark:text-slate-400 text-sm ml-4" />
                        </div>
                        <button className="p-2 rounded hover:bg-slate-50 dark:hover:bg-[#1A202C] text-slate-500 dark:text-slate-400 transition-colors relative">
                            <MdNotifications className="text-xl" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#1A202C]"></span>
                        </button>
                    </div>
                </header>

                <div className="p-6 lg:p-8 space-y-6 container mx-auto">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MetricCard
                            icon={<MdVideocam className="text-primary" />}
                            iconBg="bg-primary/10"
                            trend="12%"
                            trendIcon={<MdTrendingUp className="text-[14px] mr-0.5" />}
                            trendColor="text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                            label="Total Meetings"
                            value="42"
                        />
                        <MetricCard
                            icon={<MdTimer className="text-purple-600 dark:text-purple-400" />}
                            iconBg="bg-purple-100 dark:bg-purple-900/20"
                            trend="8%"
                            trendIcon={<MdTrendingDown className="text-[14px] mr-0.5" />}
                            trendColor="text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                            label="Avg. Duration"
                            value="38m"
                        />
                        <MetricCard
                            icon={<MdAutoFixHigh className="text-orange-600 dark:text-orange-400" />}
                            iconBg="bg-orange-100 dark:bg-orange-900/20"
                            trend="4.5h"
                            trendIcon={<MdAdd className="text-[14px] mr-0.5" />}
                            trendColor="text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                            label="Time Saved by AI"
                            value="12.5 hrs"
                        />
                        <MetricCard
                            icon={<MdTaskAlt className="text-teal-600 dark:text-teal-400" />}
                            iconBg="bg-teal-100 dark:bg-teal-900/20"
                            trend="Stable"
                            trendColor="text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#1a2233]"
                            label="Action Items"
                            value="86"
                        />
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {/* Meetings Chart */}
                        <div className="xl:col-span-2 bg-white dark:bg-[#1A202C] rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col h-96 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-0">
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Meetings per Week</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Meeting frequency trend over the last month</p>
                                </div>
                                <button className="text-primary hover:text-primary-hover text-sm font-medium bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded transition-colors">View Report</button>
                            </div>
                            <div className="flex-1 w-full relative pl-8 pb-6 border-l border-b border-slate-200 dark:border-slate-800" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                                <div className="absolute -left-8 top-0 text-xs text-slate-500 dark:text-slate-400 h-full flex flex-col justify-between">
                                    <span>15</span>
                                    <span>10</span>
                                    <span>5</span>
                                    <span>0</span>
                                </div>
                                <div className="absolute inset-0 flex items-end justify-between px-4 pb-0 z-10">
                                    {/* Bars */}
                                    <ChartBar label="Week 1" value="6 Meetings" height="40%" top="60%" />
                                    <ChartBar label="Week 2" value="10 Meetings" height="65%" top="35%" />
                                    <ChartBar label="Week 3" value="8 Meetings" height="55%" top="45%" />
                                    <ChartBar label="Week 4" value="12 Meetings" height="80%" top="20%" />
                                </div>
                                {/* SVG Trend Line */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                                    <path className="opacity-80" d="M 50 220 L 190 120 L 330 160 L 470 60" fill="none" stroke="#2463eb" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Speaking Time Donut */}
                        <div className="bg-white dark:bg-[#1A202C] rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col h-96">
                            <div className="mb-4">
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Speaking Time</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Distribution in last 5 meetings</p>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center relative">
                                <div className="w-48 h-48 rounded-full relative group cursor-pointer transition-transform hover:scale-105" style={{ background: 'conic-gradient(#2463eb 0% 45%, #60a5fa 45% 85%, #e2e8f0 85% 100%)' }}>
                                    <div className="absolute inset-0 m-auto w-32 h-32 bg-white dark:bg-[#1A202C] rounded-full flex items-center justify-center shadow-inner">
                                        <div className="text-center">
                                            <span className="block text-2xl font-bold text-slate-900 dark:text-white">45%</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">You</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6 space-y-2">
                                    <LegendItem color="bg-primary" label="You" value="45%" />
                                    <LegendItem color="bg-blue-400" label="Attendees" value="40%" />
                                    <LegendItem color="bg-slate-200 dark:bg-slate-700" label="Silence" value="15%" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {/* Task Completion */}
                        <div className="xl:col-span-2 bg-white dark:bg-[#1A202C] rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Task Completion Rates</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Assigned vs Completed tasks per week</p>
                                </div>
                                <div className="flex gap-4 text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-sm bg-primary/30"></span>
                                        <span className="text-slate-500 dark:text-slate-400">Assigned</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-sm bg-primary"></span>
                                        <span className="text-slate-500 dark:text-slate-400">Completed</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 flex items-end justify-between px-4 pb-2 border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-8">
                                <StackedBarWeek label="Week 1" assigned="12" assignedH="60%" completed="9" completedH="45%" />
                                <StackedBarWeek label="Week 2" assigned="16" assignedH="80%" completed="14" completedH="70%" />
                                <StackedBarWeek label="Week 3" assigned="10" assignedH="50%" completed="9" completedH="45%" />
                                <StackedBarWeek label="Week 4" assigned="18" assignedH="90%" completed="13" completedH="65%" />
                            </div>
                        </div>

                        {/* AI Insights */}
                        <div className="bg-white dark:bg-[#1A202C] rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">AI Insights</h3>
                                <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">New</span>
                            </div>
                            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                                <InsightCard
                                    icon={<MdWarning className="text-orange-500 text-sm" />}
                                    title="Overtime Alert"
                                    desc="3 meetings this week exceeded schedule by 15+ mins."
                                />
                                <InsightCard
                                    icon={<MdCheckCircle className="text-green-500 text-sm" />}
                                    title="High Engagement"
                                    desc="Design Review on Tuesday had 95% participant speaking time."
                                />
                                <InsightCard
                                    icon={<MdLightbulb className="text-blue-500 text-sm" />}
                                    title="Actionable Tip"
                                    desc='Consider shortening your "Weekly Sync" to 30 mins.'
                                />
                                <button className="w-full mt-2 py-2 text-xs font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors">
                                    View All Insights
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-hover transition-colors z-50 shadow-primary/30">
                    <MdAdd className="text-2xl" />
                </button>
            </main>
        </div>
    );
}

function MetricCard({ icon, iconBg, trend, trendIcon, trendColor, label, value }: any) {
    return (
        <div className="bg-white dark:bg-[#1A202C] rounded-lg p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded ${iconBg}`}>
                    {icon}
                </div>
                <span className={`flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${trendColor}`}>
                    {trendIcon} {trend}
                </span>
            </div>
            <div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{label}</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
            </div>
        </div>
    )
}

function ChartBar({ label, value, height, top }: any) {
    return (
        <div className="relative group flex flex-col items-center justify-end h-full w-1/4">
            <div className="w-full bg-gradient-to-t from-primary/10 to-transparent absolute bottom-0" style={{ height }}></div>
            <div className="w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-[#1A202C] z-20 shadow-sm group-hover:scale-125 transition-transform relative" style={{ top }}></div>
            <div className="absolute -bottom-8 text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</div>
            <div className="absolute opacity-0 group-hover:opacity-100 bg-[#1A202C] text-white text-xs py-1 px-2 rounded transition-opacity pointer-events-none mb-2 z-30 whitespace-nowrap" style={{ bottom: `calc(${height} + 10px)` }}>{value}</div>
        </div>
    )
}

function LegendItem({ color, label, value }: any) {
    return (
        <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${color}`}></span>
                <span className="text-slate-900 dark:text-white">{label}</span>
            </div>
            <span className="font-medium text-slate-500 dark:text-slate-400">{value}</span>
        </div>
    )
}

function StackedBarWeek({ label, assigned, assignedH, completed, completedH }: any) {
    return (
        <div className="flex-1 flex flex-col items-center justify-end h-full gap-2 group cursor-pointer">
            <div className="flex items-end justify-center w-full gap-1 sm:gap-2 h-full">
                <div className="w-full max-w-[24px] bg-primary/30 rounded-t transition-all group-hover:bg-primary/40 relative" style={{ height: assignedH }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-900 dark:text-white opacity-0 group-hover:opacity-100">{assigned}</span>
                </div>
                <div className="w-full max-w-[24px] bg-primary rounded-t transition-all group-hover:bg-primary-hover relative" style={{ height: completedH }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-900 dark:text-white opacity-0 group-hover:opacity-100">{completed}</span>
                </div>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</span>
        </div>
    )
}

function InsightCard({ icon, title, desc }: any) {
    return (
        <div className="flex gap-3 p-3 rounded-lg bg-slate-50 dark:bg-[#111621] border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all cursor-pointer">
            <div className="flex-shrink-0 mt-0.5">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">{title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
