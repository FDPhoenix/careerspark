import { Link } from 'react-router'
import contactImg from '../assets/images/bg-footer11.png'
import Logo from './Logo'
import { IoMailOutline } from "react-icons/io5";

function ContactDetail() {
  return (
    <div
      className="w-full bg-dark-blue text-white bg-no-repeat"
      style={{ backgroundImage: `url(${contactImg})`, backgroundPosition: "0px -62px" }}
    >
      <div className='w-[1320px] mx-auto pb-17.5'>
        <div className='p-22.5'>
          <div className='text-center p-[15px]'>
            <div className='mb-5'>
              <h2 className='text-3xl font-medium'>Got a question?</h2>
            </div>

            <div>
              <p className='text-2xs'>We’re here to help. Check out our FAQs, send us an email or call us at 2 600 7777 9999</p>
            </div>
          </div>
        </div>

        <div className='py-[15px] flex justify-between'>
          <div className="w-[28.561%]">
            <div className='mb-5'>
              <Logo />
            </div>

            <div className='mb-2.5'>
              <div className='text-lg font-medium'>Call us <br /> 0987 654 321</div>
            </div>

            <div className="text-2xs">
              <p className='mb-2.5'>Address: Long Xuyen Ward, An Giang Province, <br /> Vietnam</p>
              <p>Email: support@careerspark.com</p>
            </div>
          </div>

          <div className='w-[17.422%] p-[15px]'>
            <div>
              <h3 className="text-lg font-medium mb-[25px]">For Candidates</h3>
            </div>

            <div className="text-2xs">
              <ul>
                <li className='mb-3 relative'>
                  <Link to={""} className='indentationAnimation'>Browse Jobs</Link>
                </li>
                <li className='mb-3 relative'>
                  <Link to={""} className='indentationAnimation'>Browse Candidates</Link>
                </li>
                <li className='mb-3 relative'>
                  <Link to={""} className='indentationAnimation'>Candidate Dashboard</Link>
                </li>
                <li className='mb-3 relative'>
                  <Link to={""} className='indentationAnimation'>Job Alerts</Link>
                </li>
                <li>
                  <Link to={""} className='indentationAnimation'>My Bookmarks</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-[17.045%] p-[15px]'>
            <div>
              <h3 className="text-lg font-medium mb-[25px]">For Employers</h3>
            </div>

            <div className="text-2xs">
              <ul>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>All Employers</Link></li>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>Employer Dashboard</Link></li>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>Submit Job</Link></li>
                <li className='relative'><Link to={""} className='indentationAnimation'>Job Packages</Link></li>
              </ul>
            </div>
          </div>

          <div className='w-[13.179%] p-[15px]'>
            <div>
              <h3 className="text-lg font-medium mb-[25px]">About Us</h3>
            </div>

            <div className="text-2xs">
              <ul>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>Contact Us</Link></li>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>About Us</Link></li>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>Terms</Link></li>
                <li className='mb-3 relative'><Link to={""} className='indentationAnimation'>Packages</Link></li>
                <li className='relative'><Link to={""} className='indentationAnimation'>FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className='w-[23.793%] p-[15px]'>
            <div>
              <h3 className="text-lg font-medium mb-[25px]">Join Us On</h3>
            </div>

            <div>
              <p className='text-2xs mb-5'>We don’t send spam so don’t worry.</p>

              <div className='w-full bg-white rounded-lg p-[9px] pl-0 flex justify-between'>
                <input
                  type="email"
                  name="contact-email"
                  id="contact-email"
                  placeholder='Your e-mail'
                  className='w-full bg-white py-[5px] px-5 outline-none text-[#77838F]'
                />

                <div
                  className='py-1.5 px-2.5 rounded-lg bg-[#fb803e] hover:bg-white text-white hover:text-[#fb803e] border border-[#fb803e] flex items-center cursor-pointer transition-all duration-300 ease-in-out'
                >
                  <IoMailOutline className='font-bold text-lg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetail