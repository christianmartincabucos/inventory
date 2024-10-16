'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import profilePic from './assets/profile-picture-5.jpg'
import { 
    HomeIcon,
    PersonIcon,
    FileIcon,
    GearIcon,
    ArchiveIcon,
    ClipboardIcon,
    BookmarkIcon,
    CardStackIcon,
    BackpackIcon,
    ChevronDownIcon
} from '@radix-ui/react-icons'
import SubMenu from "./components/Menu";

const Sidebar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    const links = [
        { 
            label: 'Dashboard', 
            href: '/dashboard', 
            icon: <HomeIcon/>
        },
        { 
            label: 'Contact', 
            href: '/contacts', 
            icon: <PersonIcon/>
        },
        { 
            label: 'Inventory', 
            href: '/inventory', 
            icon: <BackpackIcon/>,
            submenu: [
                { label: 'Products', href: '/inventory/products'},
                { label: 'Categories', href: '/inventory/categories'},
                { label: 'Stock Management', href: '/inventory/stock-management'}
            ]
        },
        { 
            label: 'Order', 
            href: '/orders', 
            icon: <BookmarkIcon/>,
            submenu: [
                { label: 'List', href: '/order/list'},
                { label: 'Details', href: '/order/details'},
            ] 
        },
        { label: 'Invoice', href: '/invoices', icon: <FileIcon/> },
        { label: 'Bills', href: '/bills', icon: <ClipboardIcon/> },
        { label: 'Reports', href: '/reports', icon: <ArchiveIcon/> }
    ];

    const toggleOpen = (href: String) => {
        setOpenMenu(openMenu === href ? null : href);
    };
    return (
        <>
        <button
            title="Side navigation"
            type="button"
            className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
                isSideNavOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }`}
            aria-haspopup="menu"
            aria-label="Side navigation"
            aria-expanded={isSideNavOpen ? "true" : "false"} // Corrected here
            aria-controls="nav-menu-3"
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >

            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
            ></span>
            <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
            ></span>
            <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
            </div>
        </button>

        <aside
            id="nav-menu-3"
            aria-label="Side navigation"
            className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 mr-12 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
            isSideNavOpen ? "translate-x-0" : " -translate-x-full"
            }`}
        >
            <Link
                aria-label="WindUI logo"
                className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
                href="/"
            >
            <svg
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 bg-emerald-500"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                    fill="white"
                    />
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                    fill="rgba(255,255,255,.2)"
                    />
                </svg>
                WindUI
            </Link>
            <div className="border-b border-slate-200 p-3 pb-6">
                <div className="relative">
                    <input
                    id="id-b13"
                    type="text"
                    name="id-b13s"
                    placeholder="Search here"
                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                    </svg>
                </div>
            </div>
            <nav
            aria-label="side navigation"
            className="flex-1 divide-y divide-slate-100 overflow-auto"
            >
            <div>
                <ul className="flex flex-1 flex-col gap-1 py-3">
                    {links.map(link =>
                        <li className="px-3" key={link.href}>
                            <SubMenu
                                key={link.href}
                                link={link}
                                isOpen={openMenu === link.href}
                                toggleOpen={toggleOpen}
                            />
                        </li>
                    )}
                    
                </ul>
            </div>
            </nav>
            <div className="p-3">
            
            </div>
            <footer className="border-t border-slate-200 p-3">
            <Link
                href="#"
                className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-emerald-500 "
            >
                <div className="flex items-center self-center ">
                    <span><GearIcon /></span>
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                    Settings
                </div>
            </Link>
            </footer>
        </aside>

        <div
            className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
            isSideNavOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsSideNavOpen(false)}
        ></div>
        </>
    )
}

export default Sidebar;

