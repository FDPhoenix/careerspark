import amazonLogo from '../assets/images/b7.jpg';
import airbnbLogo from '../assets/images/b6.jpg';
import slackLogo from '../assets/images/b4.jpg';
import paypalLogo from '../assets/images/b3.jpg';
import spotifyLogo from '../assets/images/b5.jpg';
import figmaLogo from '../assets/images/b1.jpg';

function TrustedBySection() {
  const trustLogo = [
    { id: 1, src: amazonLogo },
    { id: 2, src: airbnbLogo },
    { id: 3, src: slackLogo },
    { id: 4, src: paypalLogo },
    { id: 5, src: spotifyLogo },
    { id: 6, src: amazonLogo },
    { id: 7, src: figmaLogo },
  ]

  return (
    <div className="w-[1320px] flex items-center mx-auto pt-[45px] pb-20">
      <div className="py-[15px]">
        <div className="flex items-center">
          {
            trustLogo.map((logo) => (
              <div key={logo.id} className="w-[189px] flex justify-center items-center">
                <a href="#" className='opacity-50 grayscale-100 hover:opacity-100 hover:grayscale-0 transition-all duration-300'>
                  <img decoding="async" src={logo.src} alt="Image" />
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection