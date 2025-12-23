import widget from '../assets/images/h11.jpg'

function JobFindingSteps() {
  return (
    <section className="mt-[70px] w-full">
      <div className="w-[1320px] flex my-0 mx-auto">
        <div className="w-1/2 p-[15px]">
          <img src={widget} alt="Widget" className='w-full' />
        </div>

        <div className="w-1/2">
          <div className='py-[15px] pl-25 pr-[15px]'>
            <div className='w-[400px] mt-5'>
              <h2 className='text-[40px] font-medium leading-[1.3em]'>Find Jobs with 3 easy steps</h2>
            </div>

            <div className='w-full mb-5'>
              <div className='mt-[30px] mb-12'>
                <p className='text-[#77838F] text-xs leading-[1.75]'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
            </div>

            <div className='w-full'>
              <ul className='text-[18px] font-medium text-[#202124]' style={{ lineHeight: "1" }}>
                <li className='mb-[50px]'><span className='min-w-[70px] text-[40px] inline-block align-middle font-bold text-[#202124] pr-5 opacity-20 -mt-2'>01</span> Register an account to start</li>
                <li className='mb-[50px]'><span className='min-w-[70px] text-[40px] inline-block align-middle font-bold text-[#202124] pr-5 opacity-20 -mt-2'>02</span> Explore over thousands  of resumes</li>
                <li><span className='min-w-[70px] text-[40px] inline-block align-middle font-bold text-[#202124] pr-5 opacity-20 -mt-2'>03</span> Find the most suitable candidate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobFindingSteps