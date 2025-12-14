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
            <div className="flex lg:sticky top-0 lg:flex-col lg:h-screen justify-between p-4 lg:p-10 w-full lg:w-70 border-b-[1px] lg:border-r-[1px] border-[var(--color-text)]">
                <span className='flex flex-col gap-1'>
                    <p className='text-xs text-[var(--color-text)] hidden lg:block'>$ sudo -i</p>
                    <h1 className="font-bold text-[var(--color-primary)]">
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

                <span className="flex-col gap-4 hidden lg:flex">
                    <div className='bg-[var(--color-bg)] p-2 rounded-lg'>
                        <p className='text-[10px] text-[var(--color-primary)]'>[shift] + [T] change theme</p>
                    </div>
                    <div>
                        <div className="h-[1px] w-full bg-[var(--color-text)]" />
                        <p className="text-xs text-[var(--color-text)]">
                            &copy; 2025
                        </p>
                    </div>
                </span>
            </div>
        </>
    )
}