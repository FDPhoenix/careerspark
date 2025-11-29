import { Link } from 'react-router'
import Logo from './Logo'
import { FaRegBell } from "react-icons/fa";

function Header() {
    return (
        <header className="w-full h-[90px] bg-inherit flex fixed z-1 items-center">
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
                                <Link to={"/company"}>Company</Link>
                            </li>
                            <li>
                                <Link to={"/tools"}>Tools</Link>
                            </li>
                            <li>
                                <Link to={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='bg-[#FFFFFF21] hover:bg-[#5E7AE8] border border-[#1967d212] hover:border-white py-[9px] px-7.5 rounded-lg transition-all duration-300 ease-in-out'>
                        <div className="flex items-center gap-1 text-white text-xs leading-7.5">
                            <span>Login</span>
                            <span className="separate">/</span>
                            <span>Register</span>
                        </div>
                    </div>
                    <div className="bg-white hover:bg-[#1967D2] text-[#1967D2] hover:text-white rounded-lg py-[9px] px-10 transition-all duration-300 ease-in-out">
                        <button className="text-xs leading-7.5">Job Post</button>
                    </div>
                    <div>
                        <FaRegBell className='text-xl text-white ml-5'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header