import { useState } from "react";

interface CategoryCardProps {
  name: string,
  iconUrl: string,
  openPosition: number
}

function CategoryCard({ name, iconUrl, openPosition }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const numberPosition = openPosition > 1 ? "open positions" : "open position";

  const transitionClass = 'transition duration-400';
  const textClass = isHovered ? "text-white" : "";
  const bgClass = isHovered ? "bg-[#9073EC] border-[#9073EC]" : "bg-white border-[#EEEEEE]";

  return (
    <div className="p-[15px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`w-full p-[30px] pt-10 border rounded-lg text-center ${bgClass} ${transitionClass}`}>
        <div className="mb-[25px]">
          <i className={`${iconUrl} text-[50px] text-[#1967D2] leading-[50px] ${textClass} ${transitionClass}`}></i>
        </div>

        <div>
          <h4 className={`text-[#212225] text-lg font-medium mb-0.5 leading-[1.3] ${textClass} ${transitionClass}`}>
            {name}
            </h4>
        </div>

        <div>
          <p className={`text-[#696969] text-2xs leading-[1.75] ${textClass} ${transitionClass}`}>
            ({openPosition.toString()} {numberPosition})
          </p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard