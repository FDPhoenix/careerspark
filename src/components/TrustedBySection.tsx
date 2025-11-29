import amazonLogo from '../assets/images/b7.jpg';
import airbnbLogo from '../assets/images/b6.jpg';
import slackLogo from '../assets/images/b4.jpg';
import paypalLogo from '../assets/images/b3.jpg';
import spotifyLogo from '../assets/images/b5.jpg';
import figmaLogo from '../assets/images/b1.jpg';

function TrustedBySection() {
  return (
    <div className="w-[1320px] flex items-center mx-auto pt-[45px] pb-20">
      <div className="py-[15px]">
        <div className="flex items-center grayscale-100" style={{ opacity: "1", width: "1323px", transform: "translate3d(0px, 0px, 0px)" }}>
          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={amazonLogo} alt="Image" />
            </a>
          </div>

          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={airbnbLogo} alt="Image" />
            </a>
          </div>

          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={slackLogo} alt="Image" />
            </a>
          </div>

          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={paypalLogo} alt="Image" />
            </a>
          </div>

          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={spotifyLogo} alt="Image" />
            </a>
          </div>

          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={amazonLogo} alt="Image" />
            </a>
          </div>

          <div className="w-[189px] flex justify-center items-center">
            <a href="#"  >
              <img decoding="async" src={figmaLogo} alt="Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection