import { useState } from 'react';
import {
    MdSearch,
    MdNotifications,
    MdGroups,
    MdTimer,
    MdTaskAlt,
    MdAutoAwesome,
    MdCampaign,
    MdPublic,
    MdLightbulb,
    MdMoreVert,
    MdAddCircleOutline,
    MdLink,
    MdTrendingUp,
    MdTrendingDown,
    MdArrowForward
} from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Dashboard() {
    const navigate = useNavigate();
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display antialiased h-screen overflow-hidden flex">
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative transition-all duration-300">
                <header className="h-16 bg-white dark:bg-[#1a2233] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0 z-10">
                    <div className="relative w-96 hidden md:block">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                        <input
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#1a2233] transition-all placeholder-slate-500 dark:text-white outline-none"
                            placeholder="Search transcripts, tasks, or meetings..."
                            type="text"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-500 hover:text-primary transition-colors">
                            <MdNotifications className="text-2xl" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-[#1a2233] rounded-full"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Alex Morgan</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pro Plan</p>
                            </div>
                            <img
                                alt="Profile"
                                className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy4k0wJ9DJmAixSMaWyqMpKZNh245mWf6TkYWdiO_JMd603tT__XkwUAbthEcgiCrW3802kVA7F9BBuQ9Ypf95mvq5akfxM6Ij4TeygbmD81Pxxe_6PP8mDvkK30jUMOKG9NbD4oiRbMzWxwXQGKanXoMVR2tmwpjbtQjw0c3w80Pdqz7EQ5V1iOZGd9KPO1UGwyAfUcd8fvA-8clGqsQJM1pkBYph69C3TjSBOaVeC--shwDpzvQ7_oatLmc6xowTfOW0il0ju96z"
                            />
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Good Morning, Alex! 👋</h1>
                                <p className="text-slate-500 dark:text-slate-400 mt-1">Here's what's happening with your meetings today.</p>
                            </div>
                            <div className="text-sm font-medium text-slate-500 bg-white dark:bg-[#1a2233] dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                Tuesday, Oct 24, 2023
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard
                                title="Total Meetings"
                                value="12"
                                icon={<MdGroups />}
                                trend="+15%"
                                trendUp
                                colorClass="text-primary bg-blue-50 dark:bg-blue-900/20"
                            />
                            <StatCard
                                title="Time Saved"
                                value="4.5h"
                                icon={<MdTimer />}
                                trend="+2.1h"
                                trendUp
                                colorClass="text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                            />
                            <StatCard
                                title="Tasks Created"
                                value="24"
                                icon={<MdTaskAlt />}
                                trend="-2%"
                                trendUp={false}
                                colorClass="text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                            />

                            <div className="bg-gradient-to-br from-primary to-blue-600 p-6 rounded-xl shadow-lg text-white relative overflow-hidden group cursor-pointer">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <MdAutoAwesome className="text-blue-200" />
                                        <span className="text-sm font-medium text-blue-100">AI Summary</span>
                                    </div>
                                    <h3 className="text-lg font-bold leading-tight mb-4">Upgrade to Unlimited Summaries</h3>
                                    <button className="text-xs bg-white text-primary font-bold px-3 py-2 rounded-lg shadow-sm hover:bg-blue-50 transition-colors">View Plans</button>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Recent Meetings Table */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Meetings</h2>
                                    <a className="text-sm font-medium text-primary hover:text-blue-700 flex items-center gap-1" href="#">
                                        View All <MdArrowForward className="text-sm" />
                                    </a>
                                </div>
                                <div className="bg-white dark:bg-[#1a2233] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-xs">
                                                <tr>
                                                    <th className="px-6 py-4">Meeting Name</th>
                                                    <th className="px-6 py-4">Date & Time</th>
                                                    <th className="px-6 py-4">Attendees</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                <MeetingRow
                                                    icon={<MdCampaign />}
                                                    iconBg="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"
                                                    title="Product Roadmap Sync"
                                                    subtitle="Weekly Sync"
                                                    date="Today, 10:00 AM"
                                                    attendees={3}
                                                    status="Processed"
                                                    statusColor="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                                                    onClick={() => navigate('/meeting-details')}
                                                />
                                                <MeetingRow
                                                    icon={<MdPublic />}
                                                    iconBg="bg-pink-100 dark:bg-pink-900/30 text-pink-600"
                                                    title="Client Discovery Call"
                                                    subtitle="External • Zoom"
                                                    date="Yesterday, 2:30 PM"
                                                    attendees={1}
                                                    status="Transcribing"
                                                    statusColor="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                                    isTranscribing
                                                    onClick={() => navigate('/meeting-details')}
                                                />
                                                <MeetingRow
                                                    icon={<MdLightbulb />}
                                                    iconBg="bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                                                    title="Design Huddle"
                                                    subtitle="Internal Team"
                                                    date="Oct 22, 11:00 AM"
                                                    attendees={3}
                                                    status="Processed"
                                                    statusColor="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                                                    onClick={() => navigate('/meeting-details')}
                                                />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Tasks Due Today */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tasks Due Today</h2>
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <MdAddCircleOutline className="text-xl" />
                                    </button>
                                </div>
                                <div className="bg-white dark:bg-[#1a2233] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex-1">
                                    <ul className="space-y-4">
                                        <TaskItem
                                            id="task1"
                                            label="Email summary to client"
                                            link="Client Discovery Call"
                                        />
                                        <hr className="border-slate-100 dark:border-slate-800" />
                                        <TaskItem
                                            id="task2"
                                            label="Update Jira tickets for Q4"
                                            link="Product Roadmap Sync"
                                            priority="High"
                                        />
                                        <hr className="border-slate-100 dark:border-slate-800" />
                                        <TaskItem
                                            id="task3"
                                            label="Review design mockups"
                                            link="Design Huddle"
                                        />
                                        <hr className="border-slate-100 dark:border-slate-800" />
                                        <TaskItem
                                            id="task4"
                                            label="Schedule follow-up sync"
                                            completed
                                            completedTime="2h ago"
                                        />
                                    </ul>
                                    <button className="w-full mt-6 py-2 text-sm text-primary font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors border border-dashed border-primary/30">
                                        + Add New Task
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function StatCard({ title, value, icon, trend, trendUp, colorClass }: { title: string, value: string, icon: React.ReactNode, trend: string, trendUp: boolean, colorClass: string }) {
    return (
        <div className="bg-white dark:bg-[#1a2233] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{value}</h3>
                </div>
                <div className={`p-2 rounded-lg text-xl ${colorClass}`}>
                    {icon}
                </div>
            </div>
            <div className="mt-4 flex items-center text-xs">
                <span className={`${trendUp ? 'text-emerald-500' : 'text-red-500'} font-semibold flex items-center`}>
                    {trendUp ? <MdTrendingUp className="text-sm mr-0.5" /> : <MdTrendingDown className="text-sm mr-0.5" />} {trend}
                </span>
                <span className="text-slate-400 ml-2">vs last week</span>
            </div>
        </div>
    )
}

function MeetingRow({ icon, iconBg, title, subtitle, date, attendees, status, statusColor, isTranscribing = false, onClick }: { icon: React.ReactNode, iconBg: string, title: string, subtitle: string, date: string, attendees: number, status: string, statusColor: string, isTranscribing?: boolean, onClick?: () => void }) {
    return (
        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer" onClick={onClick}>
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
                        <span className="text-xl">{icon}</span>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{title}</p>
                        <p className="text-xs text-slate-500">{subtitle}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                {date}
            </td>
            <td className="px-6 py-4">
                <div className="flex -space-x-2">
                    <img alt="Attendee 1" className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a2233]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZhnmU1LYVRnWzxYRXkd1-7qBSq9LaP5NCQzCm-wGCidw4W1_NJ8S-7lOdd3UKMmdv4Ln3s_wCLMjGEcG36yNjy4Mf_RDYeM8Z-meHfUT7GSNXYSy0w-bLRwvIJBAJJL6bhiojfDpUCzVsAm4wzkrfuzROgipkRZelw3Ej-3kHJ4S-eKXQ4LQKMlSk3oUYi-woftny45mrq8jXRBfytkvMJTF00oI7OjeSTe-R_Q0862Y8GLHWuAfuNXIjLASmhyoVzIdZUTQnBgs" />
                    {attendees > 1 && <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a2233] bg-slate-100 dark:bg-slate-700 text-xs flex items-center justify-center text-slate-600 dark:text-slate-300 font-medium">+{attendees}</div>}
                </div>
            </td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                    {isTranscribing && <span className="block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>}
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 text-right">
                <button
                    className="text-slate-400 hover:text-primary transition-colors"
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    <MdMoreVert className="text-xl" />
                </button>
            </td>
        </tr>
    )
}

function TaskItem({ id, label, link, priority, completed, completedTime }: any) {
    return (
        <li className={`flex items-start gap-3 group ${completed ? 'opacity-60' : ''}`}>
            <div className="flex items-center h-5 mt-0.5">
                <input className={`h-5 w-5 rounded border-slate-300 ${completed ? 'text-slate-400 focus:ring-0' : 'text-primary focus:ring-primary/25'} cursor-pointer`} id={id} type="checkbox" defaultChecked={completed} />
            </div>
            <div className="flex-1 min-w-0">
                <label className={`text-sm font-medium ${completed ? 'text-slate-500 dark:text-slate-400 line-through' : 'text-slate-900 dark:text-white group-hover:text-primary transition-colors'} block cursor-pointer`} htmlFor={id}>
                    {label}
                </label>
                {!completed ? (
                    <a className="inline-flex items-center gap-1 text-xs text-slate-400 mt-1 hover:text-primary" href="#">
                        <MdLink className="text-[10px]" />
                        {link}
                    </a>
                ) : (
                    <span className="text-xs text-slate-400 mt-1 block">Completed {completedTime}</span>
                )}
            </div>
            {priority && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 uppercase tracking-wide">{priority}</span>
            )}
        </li>
    )
}
