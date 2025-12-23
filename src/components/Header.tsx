import { Link } from 'react-router'
import Logo from './Logo'
import { FaRegBell } from "react-icons/fa";
import { useState } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const buttonTransition = "rounded-lg transition-all duration-300 ease-in-out cursor-pointer";

    return (
        <header className="w-full h-[90px] bg-inherit flex absolute top-0 z-1 items-center">
            <div className="w-[1320px] h-20 mx-auto bg-inherit flex items-center justify-between">
                <div className='flex items-center justify-between gap-20'>
                    <div>
                        <Logo />
                    </div>

                    <nav className='w-full flex items-center'>
                        <ul className='flex justify-between gap-15 text-white leading-7.5'>
                            <li>
                                <Link to={"/jobs"}>Jobs</Link>
                            </li>
                            <li>
                                <Link to={"/companies"}>Company</Link>
                            </li>
                            <li>
                                <Link to={"/tools"}>Tools</Link>
                            </li>
                            <li>
                                <Link to={"/blogs"}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center gap-5'>
                    <div className={`bg-[#FFFFFF21] border border-[#1967d212] hover:bg-[#5E7A
                        
                        Ư8] hover:border-white py-[9px] px-7.5 ${buttonTransition}`}>
                        <div className="flex items-center gap-1 text-white text-xs leading-7.5">
                            <span>Login</span>
                            <span className="separate">/</span>
                            <span>Register</span>
                        </div>
                    </div>

                    <div className={`bg-white text-[#1967D2] hover:bg-[#1967D2] hover:text-white py-[9px] px-10 ${buttonTransition}`}>
                        <button className="text-xs leading-7.5 cursor-pointer">Job Post</button>
                    </div>

                    <div>
                        <FaRegBell className='text-xl text-white ml-5 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
