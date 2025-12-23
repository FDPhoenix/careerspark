import hiringImage from '../assets/images/h112.jpg'

function HireTalentSection() {
  return (
    <section className="w-full">
      <div className="w-[1320px] flex my-0 mx-auto">
        <div className="w-1/2 flex items-center">
          <div className='py-[15px] pl-[15px] pr-[110px]'>
            <div className='mb-5'>
              <h2 className='text-[40px] font-medium leading-[1.3em]'>Getting Applied by an <br /> Expert Talent</h2>
            </div>

            <div className='mb-5'>
              <p className='text-[#77838F] text-xs leading-6.5'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.</p>
            </div>

            <div className='mb-5'>
              <p className='text-[#77838F] text-xs leading-6.5 mb-10'>Software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages</p>
            </div>

            <div className='w-full'>
              <button className='bg-[#FB803E] text-white hover:bg-[white] hover:text-[#FB803E] border border-[#FB803E] text-base py-3 px-10 rounded-lg transition duration-300'>
                <span>Search Candidate</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className='p-[15px] -mr-[50px]'>
            <img src={hiringImage} alt="hiring" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireTalentSection