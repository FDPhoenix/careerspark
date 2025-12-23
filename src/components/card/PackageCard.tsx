import standarPackageIcon from '../../assets/images/saly1.png';
import companyPackageIcon from '../../assets/images/saly2.png';
import enterprisePackageIcon from '../../assets/images/saly3.png';
import businessPackageIcon from '../../assets/images/saly4.png';
import { useState } from "react";

interface PackageCardProps {
  name: string
  price: string | number
  jobPostLimit: number
  featuredJobLimit: number
  jobPostDuration: number
  durationDays: number | null
  description: string
  onAddToCart?: () => void
}

function PackageCard({name, price, jobPostLimit, featuredJobLimit, jobPostDuration, durationDays, description, onAddToCart,}: PackageCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const packageIcon = name === 'Standard' ? standarPackageIcon
        : name === 'Company' ? companyPackageIcon
        : name === 'Enterprise' ? enterprisePackageIcon
        : businessPackageIcon;

    const transitionClass = 'transition duration-400';
    const checkIconClass = 'inline mr-3'
    const textClass = isHovered ? 'text-white' : 'text-[#202124]';
    const buttonClass = isHovered ? 'bg-white text-[#9073EC]' : 'bg-[#F6F4FC] text-[#11243E]';
    const bgClass = isHovered ? 'bg-[#9073EC] border-[#9073EC] text-white' : 'bg-white border-[#EEEEEE] text-[#77838F]';

    return (
        <div className="p-[15px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`${bgClass} p-10 pt-2.5 border rounded-lg flex justify-center ${transitionClass}`}>
                <div className="w-full">
                    <img className="my-0 mx-auto" src={packageIcon} alt="icon" />

                    <div className={`w-full ${textClass} font-medium text-center ${transitionClass}`}>
                        <h3 className='pb-[15px] text-lg leading-[1.3]'>{name}</h3>
                        <p className='text-3xl'>${parseFloat(price.toString()).toFixed(2)}</p>
                    </div>

                    <div className='mt-12.5 flex justify-start'>
                        <ul className='space-y-[18px]'>
                            <li className='text-sm leading-6'>
                                <i className={`flaticon-tick ${checkIconClass}`}></i>
                                {jobPostLimit} job posting
                            </li>

                            <li className='text-sm leading-6'>
                                <i className={`flaticon-tick ${checkIconClass}`}></i>
                                {featuredJobLimit} featured job
                            </li>

                            <li className='text-sm leading-6'>
                                <i className={`flaticon-tick ${checkIconClass}`}></i>
                                Job displayed for {jobPostDuration} days
                            </li>

                            <li className='text-sm leading-6'>
                                <i className={`flaticon-tick ${checkIconClass}`}></i>
                                {description}
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12.5">
                        <button className={`w-full py-[17px] px-[25px] ${buttonClass} text-base font-medium leading-4 cursor-pointer rounded-[50px] ${transitionClass}`}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageCard