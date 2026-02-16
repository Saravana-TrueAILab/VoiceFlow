import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MdPerson,
    MdWorkspaces,
    MdNotificationsNone,
    MdCreditCard,
    MdMic,
    MdNotifications,
    MdExpandMore,
    MdEdit,
    MdEmail,
    MdAutoAwesome,
    MdSave
} from 'react-icons/md';

import Sidebar from './Sidebar';

export default function Settings() {
    const navigate = useNavigate();
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen flex h-screen overflow-hidden">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block h-full z-40 transition-all duration-300">
                <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />
            </div>

            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="bg-white dark:bg-[#1A202C] border-b border-slate-200 dark:border-slate-800 h-16 flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
                    <div className="flex items-center gap-3 lg:hidden cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white">
                            <MdMic className="text-xl" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">MeetMind AI</span>
                    </div>

                    <div className="flex items-center gap-4 ml-auto">
                        <button className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors relative">
                            <MdNotifications className="text-xl" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1A202C]"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <img alt="User Avatar" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6HMYkGbB1KEuxRlh_a52BHkJ9a2fBUSeq7u3Z_hO_bbziD0HDschOR9_fh6byY8UEI6sEL1ZPHlyWuM86sEoNUyxzaO__y43EjYsoLv-mZv3_C4xfqvueX4UAKmaueSwgUfRcPtAWP7gq_Xm0vNmdjOibzSvRkzdYcTRRYwixCvXFLJqnGDVww7EHobAM2SuitYYQzhGE-wQj7gOo788xOe_HoqVvGqm4qEMi5x6DyfpjWcoJBQBhaKh_VC9DM0ZnHvVespZfURbm" />
                            <div className="hidden md:block text-sm font-medium text-slate-700 dark:text-slate-300">Alex Morgan</div>
                            <MdExpandMore className="text-slate-400" />
                        </div>
                    </div>
                </header>

                <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 md:p-6 lg:p-8 overflow-y-auto">
                    {/* Mobile Nav */}
                    <div className="lg:hidden w-full overflow-x-auto pb-4">
                        <nav className="flex space-x-2">
                            <MobileNavItem icon={<MdPerson />} text="Profile" active />
                            <MobileNavItem icon={<MdWorkspaces />} text="Workspace" />
                            <MobileNavItem icon={<MdNotificationsNone />} text="Notifications" />
                            <MobileNavItem icon={<MdCreditCard />} text="Billing" />
                        </nav>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 h-full relative">
                        <div className="flex-1 space-y-6 min-w-0">
                            <div className="bg-white dark:bg-[#1A202C] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                    <div className="relative group">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 dark:border-[#111621] shadow-md">
                                            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpzcQaC4i21aBJLe-XD1_MJQdsiSajECSjhh3VkuESbnuYHDDiUJwlKZQBGO5ZLxhX-5JuFpWr7_-I4E3q3gT4z4Yq9j2WVYH1A2XUAYE0OYwkP79SOQWkjprYLOcsqoEVT9GAJca5ywpVdasiYdsviD1veCkVsi7Oy-TRb-Zx9eqlNnJYprhURKFS_cQAU2Doj6RZOxUMH0_WZO4IRHrGUKewgVgXG0xR6QLgMDDeOTgm_-11-oC_7dz4cZwFHilq971QAxmPtck4" />
                                        </div>
                                        <button className="absolute bottom-0 right-0 p-2 bg-primary hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 border-2 border-white dark:border-[#1A202C]" title="Upload new photo">
                                            <MdEdit className="text-sm" />
                                        </button>
                                    </div>
                                    <div className="text-center sm:text-left flex-1">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Alex Morgan</h2>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Product Manager at TechFlow</p>
                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                Admin
                                            </span>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                                Pro Plan
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium underline decoration-slate-300 underline-offset-4">
                                            Remove photo
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1A202C] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Personal Information</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Update your personal details here.</p>
                                </div>
                                <div className="p-6 sm:p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="firstName">First Name</label>
                                            <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3" id="firstName" type="text" defaultValue="Alex" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="lastName">Last Name</label>
                                            <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3" id="lastName" type="text" defaultValue="Morgan" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                                            <div className="relative rounded-lg shadow-sm">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <MdEmail className="text-slate-400 text-[20px]" />
                                                </div>
                                                <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 shadow-sm focus:border-primary focus:ring-primary sm:text-sm pl-10 h-11 px-3" id="email" readOnly type="email" defaultValue="alex.morgan@techflow.com" />
                                            </div>
                                            <p className="text-xs text-slate-500">Email addresses are managed via your workspace SSO settings.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="jobTitle">Job Title</label>
                                            <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3" id="jobTitle" type="text" defaultValue="Product Manager" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1A202C] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Security</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your password and security preferences.</p>
                                </div>
                                <div className="p-6 sm:p-8 space-y-6">
                                    <div className="space-y-4 max-w-2xl">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="currentPassword">Current Password</label>
                                            <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3" id="currentPassword" placeholder="••••••••" type="password" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="newPassword">New Password</label>
                                                <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3" id="newPassword" type="password" />
                                                <p className="text-xs text-slate-500">Minimum 8 characters</p>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="confirmPassword">Confirm Password</label>
                                                <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-11 px-3" id="confirmPassword" type="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 flex gap-3 items-start border border-blue-100 dark:border-blue-900/30">
                                        <MdAutoAwesome className="text-primary text-xl mt-0.5" />
                                        <div>
                                            <h4 className="text-sm font-semibold text-primary dark:text-blue-400">AI Security Monitoring</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Our AI actively monitors login attempts to prevent unauthorized access. We'll notify you of any suspicious activity immediately.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-red-200 dark:border-red-900/30 overflow-hidden">
                                <div className="bg-red-50 dark:bg-red-900/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Delete Account</h3>
                                        <p className="text-sm text-red-600/80 dark:text-red-400/70 mt-1">Permanently remove your account and all of its data from our servers. This action is not reversible.</p>
                                    </div>
                                    <button className="px-4 py-2 bg-white dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors flex-shrink-0">
                                        Delete Account
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-4 pt-4 pb-12">
                                <button className="px-6 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    Cancel
                                </button>
                                <button className="px-6 py-2.5 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm shadow-blue-500/30 transition-all transform active:scale-95 flex items-center gap-2">
                                    <MdSave className="text-sm" />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}



function MobileNavItem({ icon, text, active }: any) {
    return (
        <a className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${active ? 'bg-primary text-white' : 'bg-white dark:bg-[#1A202C] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`} href="#">
            <span className="text-[18px]">{icon}</span>
            {text}
        </a>
    )
}
