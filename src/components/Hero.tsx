import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import heroBg from "../assets/images/slider11.jpg"
import heroImg from "../assets/images/slider112.png"

function Hero() {
    return (
        <div
            className="w-full h-[860px] bg-cover bg-center flex items-center relative overflow-hidden"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="w-[1320px] mx-auto flex justify-between">
                <div>
                    <h1 className="text-6xl font-serif font-bold leading-tight mb-6 text-white">
                        Ignite Your <br /> Career Potential
                    </h1>

                    <p className="text-white text-md mb-8">
                        Find Jobs, Employment & Career Opportunities
                    </p>

                    <div className="w-[720px] py-[19px] px-5 bg-white rounded-lg flex justify-between items-center">
                        <div className="flex h-15 items-center border-r border-[#DDE3E8]">
                            <IoIosSearch className="text-2xl" />
                            <input
                                type="text"
                                placeholder="Job title, keywords, or company"
                                className="w-[300px] h-15 outline-none ml-3"
                            />
                        </div>

                        <div className="flex h-15 items-center gap-3">
                            <CiLocationOn className="text-2xl" />
                            <select name="" id="" className="h-15 outline-none">
                                <option value="">Location</option>
                                <option value="">New York</option>
                                <option value="">Los Angeles</option>
                            </select>
                        </div>

                        <div className="h-15 py-[9px] px-7.5 bg-[#FB803E] hover:bg-white text-white hover:text-[#FB803E] border border-[#FB803E] rounded-lg flex items-center transition-all duration-300 ease-in-out">
                            <button className="w-[86px] h-[27px] text-xs cursor-pointer">Find Jobs</button>
                        </div>
                    </div>

                    <div className="flex items-center mt-5 text-white">
                        <ul className="flex gap-2">
                            <li className="title mr-3">Popular Searches :</li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=Designer">Designer,</a></li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=Developer">Developer,</a></li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=Web">Web,</a></li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=IOS">IOS,</a></li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=PHP">PHP,</a></li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=Senior">Senior,</a></li>
                            <li className="item"><a href="https://apusthemes.com/wp-demo/superio/job-list/?filter-title=Engineer">Engineer</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img
                        src={heroImg} alt="Hero"
                        className="w-[865px] h-[860px] absolute -right-45 bottom-0"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero