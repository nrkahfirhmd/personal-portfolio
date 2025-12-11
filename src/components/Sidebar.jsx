import './Components.css'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const location = useLocation();

    const menus = [
        { label: 'index', path: '/' },
        { label: 'experience', path: '/experience' },
        { label: 'creation', path: '/creation' },
    ]

    return (
        <>
            <div className="flex lg:sticky top-0 lg:flex-col lg:h-screen justify-between p-4 lg:p-10 w-full lg:w-70 border-b-[1px] lg:border-r-[1px] border-[#808080]">
                <span className='flex flex-col gap-1'>
                    <p className='text-xs text-[#808080] hidden lg:block'>$ sudo -i</p>
                    <h1 className="font-bold text-[#00ffdd]">
                        nrkahfirhmd
                    </h1>
                </span>

                <ul className="text-sm gap-2 lg:gap-1 flex lg:flex-col">
                    {menus.map((menu) => (
                        <li key={menu.path} className={`nav-list ${location.pathname === menu.path ? 'list-selected' : ''}`}>
                            <Link to={menu.path}>
                                {menu.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <span className="flex flex-col gap-2 hidden lg:block">
                    <div className="h-[1px] w-full bg-[#808080]" />
                    <p className="text-xs text-[#808080]">
                        &copy; 2025
                    </p>
                </span>
            </div>
        </>
    )
}