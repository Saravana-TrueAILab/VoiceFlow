import { useState } from 'react';
import {
    MdCheckCircle,
    MdMenuOpen,
    MdSearch,
    MdFilterList,
    MdExpandMore,
    MdAdd,
    MdMoreHoriz,
    MdLink,
    MdAutoAwesome,
    MdCalendarToday
} from 'react-icons/md';


import Sidebar from './Sidebar';

export default function KanbanBoard() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-white h-screen flex overflow-hidden">
            {/* Sidebar State Management */}
            {/* Sidebar State Management */}
            <div className="hidden md:block h-full">
                <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />
            </div>

            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <header className="bg-white dark:bg-[#1A202C] h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="flex items-center gap-4 flex-1">
                        <button
                            className="cursor-pointer text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 hidden md:flex items-center justify-center border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                            title="Toggle Sidebar"
                        >
                            <MdMenuOpen className={`text-2xl transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
                        </button>
                        <h1 className="text-xl font-semibold text-slate-800 dark:text-white mr-4 hidden sm:block">Board</h1>

                        <div className="relative w-full max-w-md">
                            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                            <input
                                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-700 dark:text-slate-200 placeholder-slate-400 transition-all"
                                placeholder="Search tasks..."
                                type="text"
                            />
                        </div>

                        <div className="relative group hidden sm:block">
                            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                <MdFilterList className="text-lg" />
                                <span>Meeting Source</span>
                                <MdExpandMore className="text-lg" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 mr-2">
                            <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" alt="Team Member 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGFDs9KK1IrBgiMAXyXajvFNsPR2mOODjaPBAGUzOPQqAZsMQP6aIZrWtBTkrj1xTe13Yl6piObQoupQJx9RKe8iySciBNxpKAP55zxJiMDUg-AmITW6N5Cdt8MZIE5tJ70dX9NKzYzOt-7k3Pc8OgTc1HY9NkAwxjMsvqQ1MNlTyxOdimrLHbrpZ26OibODpR9YR5njghXmEOt3MAH_MzEwCCHVQAxE5FTiNqYHk9OBBcfbDHsACFnRo7aXBTOBHf0Opbl1QH5QTb" />
                            <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" alt="Team Member 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABX8kdE0lC0h2MTHuHQng2KxTytRjKLU8fRIN24vM2Ky9FVNVTLAHY-9ldCnz2BWo6IZqWkPCt2bp3nBuEGGwibqSrDMURyS2y-_SY9wibSnZKlpVPhtdlQU6rRhzHjVER6iSn0XCYF2vLVYlAYvvcEm10P8ML3YkYzQYy79w7JvFrpNR2bsxOVMH_RScmSR6_Gjy7IjKH2GPz4dBOS6lFIEX-tYX25oeDglVUKSHgEnfdcRvczGlDBoEcFNiEkvuxYtUe--RaZXhM" />
                            <img className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" alt="Team Member 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH4oUX8uk7_YG1g3hnx52Zdll3qmfk0ArMBaWRRl355i7XDjF7tqv84IJJPqGJDA4AiRUyBeOyVyoaW3ij7gzHXvVsPRnVQgwLJLJKIgSdh4iCjW2eiyzk6XYeylZ7tgTXYgHTaRiGcPvJjpElBAsTsGUA46dZGJTX0yqe3c3ySqnih6ijaYMfbf9OcvWzPdzget5aHmJqVBIBGoZH195s70yEhqGGiXoM0Xe1fAw-I6Tk1LtaaxXdkV4mXij0kZU4K6PVjiiu3Cfu" />
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-medium text-slate-500 dark:text-slate-300">+2</div>
                        </div>
                        <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm shadow-primary/30 flex items-center gap-2 transition-colors">
                            <MdAdd className="text-lg" />
                            <span className="hidden sm:inline">New Task</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 bg-background-light dark:bg-background-dark kanban-container">
                    <div className="flex gap-6 h-full min-w-[1000px]">

                        {/* To Do Column */}
                        <div className="flex flex-col w-1/3 min-w-[320px] h-full">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">To Do</h2>
                                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-0.5 rounded-full">5</span>
                                </div>
                                <button className="text-slate-400 hover:text-primary transition-colors">
                                    <MdAdd className="text-lg" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-2 custom-scrollbar">
                                <TaskCard
                                    priority="High Priority"
                                    priorityColor="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                                    title="Prepare Q3 Financial Summary Report"
                                    source="Weekly Finance Sync"
                                    dueDate="Due Oct 24"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDwOauKfh-aOUznvHRRBML3ErFWKj65XSPPzYCCYMxqwQimNXCKF31qy6Mqp4xhHFE3LJrlNgQYzmrlM3XejMkuDJ0rOHJgkGpBVN2YAXwVuShLrPz373qtep8lIDFL4AkGDGzEiBkmF5c8CMG2e78GyYdTw3TW9v1bxDrfc0BCtvgmXWQ9NaF1r8yaG51-TY3Ir2WRGgRyx9EyiLtqPY9P5pCQSo0YK4-x1ckrAmef91ttHaPbZdysiZ5eSEtjCN4kql3xR6wpFY-x"
                                />
                                <TaskCard
                                    priority="Follow Up"
                                    priorityColor="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                    title="Send contract draft to Acme Corp"
                                    source="Client Discovery Call"
                                    dueDate="Due Tomorrow"
                                    dueColor="text-red-500 font-medium"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCtuT67vOQxw4BFRpUgOKsQSJRaG1NpGZdjtEpVyhWXACvB_bbG4C-dASvmMvSI-1tS9LHmA_3gyc8I6cAiHIcyBPjsx6TZFu3_lZMCV25nFVgM4bUYQAUMPaLowIsGBTQ_D1mWGvVouNL5w3ufiXCavxkQobFgqJglkfWV2VMq-8t6m0EcHMaiiC2ayb7q_x1yC6CCku3Y0TBHtINQIeB8jK-EIFxOiQ0MrLWoy1IyFLilGmQw03pAEmq1r-AeqTOulzgzuQwVJ06P"
                                />
                                <TaskCard
                                    title="Schedule deeper dive on Marketing attribution"
                                    source="Marketing Standup"
                                    sourceIcon={<MdLink className="text-sm" />}
                                    dueDate="Due Oct 28"
                                    unassigned
                                />
                                <TaskCard
                                    title="Review updated Figma prototypes"
                                    source="Product Design Review"
                                    sourceIcon={<MdLink className="text-sm" />}
                                    dueDate="No Due Date"
                                    opacity="opacity-75"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuC7BcEQDOHHixdZUN4dm1w6Lf1hoNzCOXw3KajxSzdajo6yLor8hejKDEaQxIdG3xef_c73-3EWqZFVwayPLd2aB9FCDb2iAgx_pLCYmLdN4OuZ5VCrCUE3BOqr2Q55gqM-8b2B-i9IjPlNWHka8KGrY-yO6Qv2SetU3z-YS7ZWQhpa4N53uhLOXoZCugYgAR09sRY9ggXcWj4jgEM9Q4GmfS2WA6o-pIkoWCw-8n1KCEt4Mr6AX89NXcs9OhGQMqdtrh7Oe-fm3Zr-"
                                />
                            </div>
                        </div>

                        {/* In Progress Column */}
                        <div className="flex flex-col w-1/3 min-w-[320px] h-full">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">In Progress</h2>
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">2</span>
                                </div>
                                <button className="text-slate-400 hover:text-primary transition-colors">
                                    <MdAdd className="text-lg" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-2 custom-scrollbar">
                                <TaskCard
                                    priority="Bug Fix"
                                    priorityColor="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                                    title="Fix login authentication bug on mobile"
                                    source="Tech Huddle"
                                    progress={65}
                                    dueDate="Oct 22"
                                    assignees={[
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBR-3L8QswCE51_x5E7L_Sn3gQ0r-2n2KUMemIMCm9ix0oTkkB0C6CYZzoHdj7UrLlaelVIrMBtB2o_UmZzdlmFtdOtpNvVDrX5zkMGHY8skANOhPkXl1W00yIJuQ112z7purDS_LuPbWHWWlddXzul-OhdrjPUhfFRCmOTcc3ekWfNtbadUSHkA6zL6XmJ5Q0QK2XR6pmY9eAoNi5bbXlsJbsNTiBPsSwvdqyB5BkWPnd6bp6Ihf1gGH7xF18gkFSLNuwY2Y-v5xsz",
                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBShP7-100b79cBBI6htDFgvF4jt2V18FoRbQ8h4rCEPkAatPmtr482Cxxn3401bcjdK9wJhx3AiJRX1CLB_AFonIzBZff5cBgst83OczN-fPEq7HTsDQ7WLf6h449L3BQuAlR6jdVEyYIxzIUFmoFaTMbzE4Ixn5LqzMBcya3WgmRzyGnmJ0PPd1RSGax9fHltLr19RVkZTlibbJKwLOBbWr5-ktaNlEv2PS4jzlOOY35zNvqwDTJtABIDXhnSkqnnBTVf1L3FX3AY"
                                    ]}
                                    borderStyle="border-l-4 border-l-primary border-y border-r border-y-slate-200 border-r-slate-200 dark:border-y-slate-700 dark:border-r-slate-700"
                                />
                                <TaskCard
                                    title="Update privacy policy documentation"
                                    source="Legal Review"
                                    sourceIcon={<MdLink className="text-sm" />}
                                    dueDate="Oct 25"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhBofqhKV4isslW1kMk15hk8ZpWf-VUUrDsa_tr1UjSrDQxP_piBsQVSNGp8e-P6Rnz1YawT7dEOTkaWxsRqoJpeLdM1pGJzvBl3LO15MHt5MXtDIWREOLxkYdpmazivUV7R_bZM6Y_-dQb0BFtzNWvGN8bP2Po_4a1_GHF7v2-HDdXnpeomZ6Pn_XD-__9nNyL99DLj798aBQgxjNm-zyG_qAbLEyfefbHP4F9kdbgPtYLech8X-yAfI3Vtz0TMRihaplvZg1qRi"
                                />
                            </div>
                        </div>

                        {/* Completed Column */}
                        <div className="flex flex-col w-1/3 min-w-[320px] h-full">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Completed</h2>
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-0.5 rounded-full">12</span>
                                </div>
                                <button className="text-slate-400 hover:text-primary transition-colors">
                                    <MdAdd className="text-lg" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto pr-2 space-y-3 pb-2 custom-scrollbar">
                                <TaskCard
                                    completed
                                    title="Draft initial client proposal"
                                    source="Client Onboarding"
                                    sourceIcon={<MdLink className="text-sm" />}
                                    completedDate="Completed yesterday"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuMOg2TD06ha0zlpg45FT7WAvCwe3WkmDT6_Ne0YN581cHKVRiqD3iikt_RIxKuP0Yo9WUM_9Ud34WJFSXwb_rcukLu8lcN5QpR5c7A5f7GyN5Isu2pZLeCPtRhbwH8a3nIPXH_RSsZIrQ5BcJHJsdR73hb8Ik2G2-BR1p2XR_O6vxEgEdLfIKWV2Jm0kHZllzkwSqyeCbz9cOCN0Km29CE2JWfUqn60I5SDDT_eqvAZvONrY_3WI1ujnUfH5V06RB0iLE9RSMeui"
                                />
                                <TaskCard
                                    completed
                                    title="Setup repo for new AI model"
                                    source="Eng Kickoff"
                                    completedDate="Completed Oct 20"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCWduvCS0jexT8FBWRHA-K_PxsAA15mBlgxStgWkGEFqiNbfxTEju-2cA5xvadfBkUQZGFSZn2GfFtJI8GgNOUQedKoWWMGqwFYjB7fs1Qp8wu3m9lhxxTY1Ye1gczihG4tGBR4NRVA93KNeF286SS-Pv0gU0OIQmLnXurjhfNit4Babb3pkB5E8O6e78hbjc1nw8_jtR8BvpOCFZ2bO78jqC-r4dI38K61a-me0HuMt8niPOk2spztZUtXNiZlYmIZDaIKp_aiOSOy"
                                />
                                <TaskCard
                                    completed
                                    title="Email all participants recap"
                                    source="All Hands"
                                    completedDate="Completed Oct 19"
                                    assigneeImg="https://lh3.googleusercontent.com/aida-public/AB6AXuBIq6H_CGlu4oJM96aoWs6wQiKVPstu6w6JqypjCnIn8l9akJXyL54B7ZwA8zdX5HabBZImf8v79wfFuqoIJFVlfEwKeTBDf5Wzy_2kRARzP61aiTF0vGlziSOKRMIjTS91IImDzCQIIMQvO4BMBt9cONuQNWCK048v645xB9B1BdXdnBYkixSo9UCjgHyLY0LKVmnwascvlNBMlTaeN6rECnK6xn6OradJwJ2oV3QlSnCWxfyIc-zQxR263GGttQPqjYigNGOI7uef"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAB for Mobile */}
                <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center z-50">
                    <MdAdd className="text-2xl" />
                </button>
            </main>
        </div>
    );
}



function TaskCard({ title, priority, priorityColor, source, sourceIcon, dueDate, dueColor, assigneeImg, assignees, unassigned, opacity, completed, completedDate, progress, borderStyle }: any) {
    return (
        <div className={`bg-white dark:bg-[#1A202C] p-4 rounded-lg shadow-sm ${borderStyle ? borderStyle : 'border border-slate-200 dark:border-slate-700'} ${opacity ? opacity : ''} ${completed ? 'opacity-60 hover:opacity-100 transition-opacity' : 'hover:shadow-md transition-shadow group cursor-grab active:cursor-grabbing'}`}>

            {(priority || completed) && (
                <div className="flex items-start justify-between mb-2">
                    {completed ? (
                        <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                            <MdCheckCircle className="text-sm" />
                            Done
                        </span>
                    ) : (
                        <span className={`px-2 py-1 rounded ${priorityColor} text-[10px] font-bold uppercase tracking-wider`}>{priority}</span>
                    )}

                    {!completed && (
                        <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-opacity">
                            <MdMoreHoriz className="text-lg" />
                        </button>
                    )}
                </div>
            )}

            <h3 className={`text-slate-800 dark:text-white font-semibold mb-2 leading-tight ${completed ? 'line-through text-slate-400 dark:text-slate-500 decoration-slate-400' : ''}`}>{title}</h3>

            <div className={`flex items-center gap-2 mb-3 text-xs ${completed || sourceIcon ? 'text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer' : 'text-primary bg-primary/5 w-fit px-2 py-1 rounded border border-primary/10'}`}>
                {sourceIcon ? sourceIcon : <MdAutoAwesome className="text-sm" />}
                <span>{source?.includes('Source') || source?.includes('Extracted') ? source : (sourceIcon ? `Source: ${source}` : `Extracted from: ${source}`)}</span>
            </div>

            {progress !== undefined && (
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mb-3">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            )}

            <div className={`flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 ${progress ? 'pt-1 mt-0 border-t-0' : ''}`}>
                <div className={`flex items-center text-xs ${dueColor ? dueColor : (completed ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400')}`}>
                    {!completed && <MdCalendarToday className={`text-sm mr-1 ${dueColor ? '' : ''}`} />}
                    <span>{completed ? completedDate : dueDate}</span>
                </div>

                {assignees ? (
                    <div className="flex -space-x-1">
                        {assignees.map((img: string, i: number) => (
                            <img key={i} className="w-6 h-6 rounded-full border border-white dark:border-slate-700 shadow-sm" alt="Assignee" src={img} />
                        ))}
                    </div>
                ) : unassigned ? (
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-400">Un</div>
                ) : (
                    <img className={`w-6 h-6 rounded-full border border-white dark:border-slate-700 shadow-sm ${completed ? 'grayscale opacity-70' : ''}`} alt="Assignee" src={assigneeImg} />
                )}
            </div>
        </div>
    )
}
