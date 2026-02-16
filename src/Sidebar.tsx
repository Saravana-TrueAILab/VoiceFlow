import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    MdDashboard,
    MdMic,
    MdFolderOpen,
    MdCheckCircle,
    MdInsights,
    MdSettings,
    MdHelp,
    MdFiberManualRecord,
    MdChevronLeft,
    MdGraphicEq,
    MdExtension,
    MdTaskAlt,
    MdCalendarToday,
    MdPeople
} from 'react-icons/md';

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => {
        if (path === '/') return currentPath === '/';
        return currentPath.startsWith(path);
    };

    return (
        <aside className={`h-full bg-white dark:bg-[#1a2233] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 transition-all duration-300 relative group/sidebar ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <button
                className="absolute -right-3 top-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-1.5 cursor-pointer hover:text-primary hover:border-primary transition-all shadow-sm z-50 flex items-center justify-center w-7 h-7"
                onClick={toggleSidebar}
            >
                <MdChevronLeft className={`text-base transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
                <div className={`h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800 transition-all ${isCollapsed ? 'justify-center px-0' : ''}`}>
                    <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight cursor-pointer" onClick={() => navigate('/')}>
                        <MdGraphicEq className="text-2xl min-w-[24px]" />
                        <span className={`whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}>VoiceFlow</span>
                    </div>
                </div>

                <nav className="p-4 space-y-1">
                    <SidebarLink
                        icon={<MdMic className="text-xl min-w-[20px]" />}
                        text="Recording"
                        active={isActive('/recording')}
                        collapsed={isCollapsed}
                        onClick={() => navigate('/recording')}
                        activeColor="text-red-500 bg-red-50 dark:bg-red-900/10"
                    />
                    <SidebarLink
                        icon={<MdDashboard className="text-xl min-w-[20px]" />}
                        text="Dashboard"
                        active={isActive('/dashboard')}
                        collapsed={isCollapsed}
                        onClick={() => navigate('/dashboard')}
                    />
                    <SidebarLink
                        icon={<MdFolderOpen className="text-xl min-w-[20px]" />}
                        text="All Meetings"
                        active={isActive('/meeting-details')}
                        collapsed={isCollapsed}
                        onClick={() => navigate('/meeting-details')}
                    />
                    <SidebarLink
                        icon={<MdTaskAlt className="text-xl min-w-[20px]" />}
                        text="Tasks"
                        active={isActive('/tasks')}
                        collapsed={isCollapsed}
                        onClick={() => navigate('/tasks')}
                    />
                    <SidebarLink
                        icon={<MdInsights className="text-xl min-w-[20px]" />}
                        text="Analytics"
                        active={isActive('/analytics')}
                        collapsed={isCollapsed}
                        onClick={() => navigate('/analytics')}
                    />
                    <SidebarLink
                        icon={<MdCalendarToday className="text-xl min-w-[20px]" />}
                        text="Calendar"
                        collapsed={isCollapsed}
                    />
                    <SidebarLink
                        icon={<MdExtension className="text-xl min-w-[20px]" />}
                        text="Integrations"
                        active={isActive('/integrations')}
                        collapsed={isCollapsed}
                        onClick={() => navigate('/integrations')}
                    />
                    <SidebarLink
                        icon={<MdPeople className="text-xl min-w-[20px]" />}
                        text="Team"
                        collapsed={isCollapsed}
                    />
                </nav>

                <div className="px-4 mt-auto mb-4">
                    <button className={`w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center gap-2 shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] overflow-hidden ${isCollapsed ? 'justify-center' : 'justify-center'}`} title="Start Recording" onClick={() => navigate('/recording')}>
                        <MdFiberManualRecord className="text-sm min-w-[14px]" />
                        <span className={`whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}>Start Recording</span>
                    </button>
                </div>
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <SidebarLink
                    icon={<MdSettings className="text-xl min-w-[20px]" />}
                    text="Settings"
                    active={isActive('/settings')}
                    collapsed={isCollapsed}
                    onClick={() => navigate('/settings')}
                />
                <SidebarLink icon={<MdHelp className="text-xl min-w-[20px]" />} text="Help & Support" collapsed={isCollapsed} />
            </div>
        </aside>
    );
}

function SidebarLink({ icon, text, active = false, badge, collapsed, onClick, activeColor }: { icon: React.ReactNode, text: string, active?: boolean, badge?: string, collapsed: boolean, onClick?: () => void, activeColor?: string }) {
    const activeClass = activeColor || 'bg-primary/10 text-primary';

    return (
        <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 relative group overflow-hidden ${active
                ? `${activeClass} font-medium`
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                } ${collapsed ? 'justify-center' : ''}`}
            onClick={onClick}
        >
            <div className={`flex items-center justify-center transition-colors ${active ? '' : 'group-hover:text-primary'}`}>
                {icon}
            </div>
            <span className={`whitespace-nowrap transition-all duration-200 ${collapsed ? 'w-0 opacity-0 overflow-hidden hidden' : 'w-auto opacity-100'}`}>
                {text}
            </span>
            {badge && !collapsed && (
                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm shadow-primary/20">
                    {badge}
                </span>
            )}
            {/* Tooltip for collapsed state */}
            {collapsed && (
                <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 pointer-events-none shadow-md">
                    {text}
                </div>
            )}
        </div>
    );
}
