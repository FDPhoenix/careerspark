import { Link } from "react-router";

function Footer() {
  return (
    <footer className="w-full bg-dark-blue text-white py-5 border-t border-[#FFFFFF1A]">
      <div className="w-[1320px] flex justify-between items-center my-0 mx-auto">
        <div className="py-[15px]">
          <p className="text-2xs">© 2025 CareerSpark. All Right Reserved.</p>
        </div>

        <div className="p-[15px]">
          <ul className="flex text-2xs gap-10">
            <li>
              <Link to={""}><i className="fab fa-facebook-f"></i></Link>
            </li>
            <li>
              <Link to={""}><i className="fab fa-twitter"></i></Link>
            </li>
            <li>
              <Link to={""}><i className="fab fa-instagram"></i></Link>
            </li>
            <li>
              <Link to={""}><i className="fab fa-linkedin-in"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer