import { Link, NavLink } from "react-router-dom"

function Header() {
    return <header className="w-full shadow sticky top-0 backdrop-blur-md bg-white/30">
        <div className="container m-auto flex items-center justify-between py-[20px] px-4">
            <Link to="/" className="text-2xl flex space-x-2 items-center">
                <div><img src="/logo.png" alt="LOGO" className="h-12" /></div>
                <div>INSPIRER</div>
            </Link>
            <nav>
                <ul className="md:flex md:space-x-6">
                    <li><NavLink to="/" className={({ isActive }) => isActive && 'font-bold'}>首页</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive && 'font-bold'}>关于</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header