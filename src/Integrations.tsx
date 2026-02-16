import { useState } from 'react';
import {
    MdSettings,
    MdSearch,
    MdMenu,
    MdMenuOpen
} from 'react-icons/md';

import Sidebar from './Sidebar';

export default function Integrations() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased h-screen flex overflow-hidden lg:flex-row flex-col">
            {/* Sidebar */}
            <div className={`md:block z-40 ${isSidebarCollapsed ? 'md:w-20' : 'md:w-64'} transition-all duration-300`}>
                <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative transition-all duration-300">
                <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-10 sticky top-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
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
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white sm:text-3xl sm:truncate">
                                        Integrations Marketplace
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        Supercharge your meetings by connecting your favorite tools.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MdSearch className="text-slate-400 text-lg" />
                                    </span>
                                    <input className="pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64 transition-all" placeholder="Search apps..." type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-b border-slate-200 dark:border-slate-800">
                            <nav aria-label="Tabs" className="-mb-px flex space-x-8 overflow-x-auto no-scrollbar">
                                <a className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                    All Apps
                                </a>
                                <a className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                    Project Management
                                </a>
                                <a className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                    Communication
                                </a>
                                <a className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                    CRM
                                </a>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto transition-all duration-300">
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300`}>

                            {/* Jira */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0052CC] to-[#2684FF]"></div>
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-[#DEEBFF] dark:bg-[#0052CC]/20 flex items-center justify-center">
                                            <svg className="w-7 h-7 text-[#0052CC]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.53 14.53L2.41 5.41C1.63 6.19 1.63 7.46 2.41 8.24L11.53 17.36L11.53 14.53Z"></path>
                                                <path d="M12.95 24L12.95 13.11L3.83 4C3.05 3.22 1.78 3.22 1 4C0.22 4.78 0.22 6.05 1 6.83L12.95 18.78L12.95 24Z"></path>
                                                <path d="M12.95 0L12.95 10.28L20.35 17.68C21.13 18.46 22.4 18.46 23.18 17.68C23.96 16.9 23.96 15.63 23.18 14.85L12.95 4.62L12.95 0Z"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                                            Connected
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Jira Software</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Automatically create issues and bugs directly from meeting action items and transcripts.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
                                    <span className="text-xs text-slate-400 font-medium">Synced 2m ago</span>
                                    <button className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                                        Settings
                                        <MdSettings className="text-base ml-1" />
                                    </button>
                                </div>
                            </div>

                            {/* Slack */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E01E5A] via-[#ECB22E] to-[#2EB67D]"></div>
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-slate-5 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.042 15.123a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h2.52v5.04H5.042zm.84-11.76a2.52 2.52 0 0 1 2.52 2.52v2.52H5.882a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h2.52zm5.04 5.04a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-5.04v-2.52zm8.4 2.52a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52v-5.04h2.52zm-2.52 5.88a2.52 2.52 0 0 1-2.52-2.52v-2.52h2.52a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52zm-5.04-5.04a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52v-2.52h5.04v2.52z" fill="#4A154B"></path>
                                                <path d="M5.882 3.363a2.52 2.52 0 0 1-2.52 2.52A2.52 2.52 0 0 1 3.36 3.363a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52h-2.52z" fill="#E01E5A"></path>
                                                <path d="M10.922 3.363a2.52 2.52 0 0 1 2.52 2.52v2.52h-2.52a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52h2.52z" fill="#36C5F0"></path>
                                                <path d="M18.482 8.403a2.52 2.52 0 0 1 2.52 2.52 2.52 2.52 0 0 1-2.52 2.52h-2.52V8.403h2.52z" fill="#2EB67D"></path>
                                                <path d="M13.442 18.483a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52v-2.52h2.52a2.52 2.52 0 0 1 2.52 2.52z" fill="#ECB22E"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                                            Connected
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Slack</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Push daily meeting summaries and urgent alerts directly to your team channels.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
                                    <span className="text-xs text-slate-400 font-medium">Active</span>
                                    <button className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                                        Settings
                                        <MdSettings className="text-base ml-1" />
                                    </button>
                                </div>
                            </div>

                            {/* Asana */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-[#FFE6E6] dark:bg-[#F95757]/20 flex items-center justify-center">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" fill="#F06A6A" r="10"></circle>
                                                <path d="M12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z" fill="white"></path>
                                                <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" fill="#F06A6A"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                            Available
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Asana</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Turn discussion points into assignable Asana tasks with deadlines automatically.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                                    <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Trello */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-[#E6FCFF] dark:bg-[#0079BF]/20 flex items-center justify-center">
                                            <svg className="w-7 h-7 text-[#0079BF]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.2 0H4.8C2.16 0 0 2.16 0 4.8V19.2C0 21.84 2.16 24 4.8 24H19.2C21.84 24 24 21.84 24 19.2V4.8C24 2.16 21.84 0 19.2 0ZM10.8 19.2H4.8V3.6H10.8V19.2ZM19.2 13.2H13.2V3.6H19.2V13.2Z"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                            Available
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Trello</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Sync meeting notes to Trello cards and create boards for project kickoffs instantly.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                                    <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Salesforce */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-[#E8F2FC] dark:bg-[#00A1E0]/20 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-[#00A1E0]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1 9.4C16.8 9.4 17.5 9.7 18 10.1C18.6 10.6 19 11.2 19.2 11.9C19.9 12.1 20.6 12.5 21 13.1C21.5 13.7 21.7 14.4 21.7 15.1C21.7 16.5 21.1 17.8 20.1 18.8C19.1 19.8 17.8 20.4 16.4 20.4H7.6C6.1 20.4 4.7 19.8 3.7 18.8C2.7 17.8 2.1 16.5 2.1 15C2.1 13.8 2.5 12.7 3.3 11.8C3.1 11.4 3 10.9 3 10.5C3 9.4 3.4 8.4 4.1 7.7C4.8 6.9 5.8 6.5 6.9 6.5C7.2 6.5 7.6 6.6 7.9 6.7C8.4 5.2 9.4 4.1 10.8 3.6C12.1 3.1 13.7 3.2 14.9 3.9C15.8 4.5 16.5 5.3 16.9 6.3C17.6 6.4 18.2 6.7 18.8 7.1C19.6 7.8 20.1 8.7 20.1 9.8C20.1 9.9 20.1 10.1 20.1 10.2C19.1 8.6 17.6 9.4 16.1 9.4Z"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                            Premium
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Salesforce</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Log client calls, update opportunities, and sync contacts directly from your meeting history.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                                    <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Google Calendar */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-white border border-slate-100 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                                            <svg className="w-8 h-8" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#4285F4"></path>
                                                <path d="M24 44c5.98 0 10.96-1.97 14.62-5.36l-7.12-5.52C29.63 34.54 27.03 35.5 24 35.5c-6.26 0-11.57-4.22-13.44-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853"></path>
                                                <path d="M43.61 20.26c2.57 3.99 3.01 9.07 1.25 13.43l-7.22-5.73c.77-2.28.66-4.9-.38-7.1l6.35-6.6z" fill="#FBBC05"></path>
                                                <path d="M10.56 25.59c-.95-2.83-.95-5.91 0-8.74l-7.98-6.19C.1 15.61.1 27.42 2.56 31.78l8-6.19z" fill="#EA4335"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                            Available
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Google Calendar</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Two-way sync for meeting schedules and automatic agenda extraction for upcoming events.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                                    <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Notion */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-[#F7F7F5] dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                                            <svg className="w-7 h-7 text-black dark:text-white" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l10.758-.746a.82.82 0 01.886.606l2.193 15.196c.14.886-.233 1.585-1.12 1.865l-8.629 2.193c-.933.233-1.446-.047-1.633-.886L3.993 6.913c-.14-.98.373-1.633 1.026-2.146l-.56-.56z"></path></svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                                            Beta
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Notion</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Send meeting minutes to your Notion workspace and organize them into databases.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                                    <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Zapier */}
                            <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative">
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-[#FFECDB] dark:bg-[#FF4F00]/20 flex items-center justify-center">
                                            <svg className="w-7 h-7 text-[#FF4F00]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM16.32 5.76H12.96L8.16 12.48H11.52L7.68 18.24H11.04L15.84 11.52H12.48L16.32 5.76Z"></path>
                                            </svg>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                            Available
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Zapier</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Connect to 3,000+ apps and build custom automated workflows triggered by meeting events.
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                                    <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                                        Connect
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="mt-12 mb-8 bg-primary/5 rounded-2xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Don't see what you're looking for?</h4>
                                <p className="text-slate-500 dark:text-slate-400 mt-1">Request a new integration and we'll prioritize it on our roadmap.</p>
                            </div>
                            <button className="whitespace-nowrap bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-medium py-3 px-6 rounded-lg border border-slate-200 dark:border-slate-600 transition-colors shadow-sm">
                                Request Integration
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


