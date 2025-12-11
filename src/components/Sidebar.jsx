import './Components.css'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const location = useLocation();

    const menus = [
        { label: 'index', path: '/' },
        { label: 'experience', path: '/experience' },
        { label: 'creation', path: '/creation' },
        { label: 'now', path: '/now' },
    ]

    return (
        <>
            <div className="flex sticky top-0 flex-col h-screen justify-between p-10 w-70 border-r-[1px] border-[#808080]">
                <span className='flex flex-col gap-1'>
                    <p className='text-xs text-[#808080]'>$ sudo -i</p>
                    <h1 className="font-bold text-[#00ffdd]">
                        nrkahfirhmd
                    </h1>
                </span>

                <ul className="text-sm gap-1 flex flex-col">
                    {menus.map((menu) => (
                        <li key={menu.path} className={`nav-list ${location.pathname === menu.path ? 'list-selected' : ''}`}>
                            <Link to={menu.path}>
                                {menu.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <span className="flex flex-col gap-2">
                    <div className="h-[1px] w-full bg-[#808080]" />
                    <p className="text-xs text-[#808080]">
                        &copy; 2025
                    </p>
                </span>
            </div>
        </>
    )
}