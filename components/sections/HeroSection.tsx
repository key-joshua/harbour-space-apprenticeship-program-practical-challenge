import Image from 'next/image'

const details = [ ['Location', 'Bangkok'], ['Duration', '1 Year Full-Time'], ['Application deadline', '30 June 2020'], ['Start date', '3 Aug 2020'] ]

export function HeroSection({ data }: any) {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-white">
      <div className="page-container grid grid-cols-1 gap-6 pb-12 pt-8 sm:gap-12 sm:pb-20 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-28 lg:pt-28">

        <div className="contents lg:block lg:max-w-[620px]">
          <div className="relative order-1 w-fit lg:order-none">
            <Image src="/polygon-patterns.svg" alt="" width={190} height={190} aria-hidden="true" className="pointer-events-none absolute -right-3 -top-8 z-0 w-[120px] sm:-right-10 sm:-top-12 sm:w-[160px] lg:-right-[62px] lg:-top-14 lg:w-[190px]" />
            <h1 id="hero-title" className="relative z-10 text-[28px] font-medium leading-[1.25] tracking-[-0.03em] text-[#6858d4] sm:text-[40px] lg:text-[48px] lg:leading-[1.3]" >
              <span className="block">
                <span>Interaction Design</span>
              </span>
              <span className="block">
                <span>Apprenticeship</span>
              </span>
            </h1>
          </div>
    
          <div className="order-3 max-w-[540px] lg:order-none lg:max-w-[470px]">
            <p className="mt-7 text-[13px] font-medium leading-[1.45] text-[#444444] sm:text-lg sm:leading-7 lg:text-xl lg:leading-[1.65]">
              A fully funded work-study program to launch your tech career
            </p>
            <p className="mt-7 text-[13px] font-light leading-[1.45] text-[#777777] sm:text-base sm:leading-6 lg:mt-11 lg:text-xl lg:leading-[1.7]">
              Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.
            </p>
            <p className="mt-7 text-[13px] font-light text-[#777777] sm:text-base lg:mt-12 lg:text-xl lg:leading-[1.7]">
              <span className="font-semibold text-[#444444]">Position:</span> Marketing Performance
            </p>
            <a href="#" className="mt-6 inline-flex rounded-full bg-[#6858d4] px-7 py-2.5 text-[11px] font-normal text-white transition-colors hover:bg-[#5848c1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6858d4] sm:mt-9 sm:px-8 sm:py-3 sm:text-sm lg:mt-[52px] lg:px-[45px] lg:py-[19px] lg:text-lg" >
              Apply Now
            </a>
          </div>
        </div>

        <div className="relative order-2 w-full lg:order-none lg:pt-2">
          <div className="mb-5 flex items-center gap-3 sm:mb-8 sm:gap-5">
            <Image src="/zeptolab.svg" alt="Zeptolab" width={60} height={60} className="size-11 shrink-0 sm:size-14" />
            <p className="text-sm leading-6 text-[#999999] sm:text-base">
              Powered by:<br /> <span className="text-xl text-[#777777] sm:text-2xl">Zeptolab</span>
            </p>
          </div>

          <div className="w-full rounded border border-[#e3e3e3] bg-white px-4 py-5 sm:px-7 sm:py-6">
            <p className="text-xs font-medium text-[#6858d4] sm:text-sm">Application closes in</p>
            <p className="mt-2 whitespace-nowrap text-[13px] text-[#777777] sm:text-2xl"> 6 Day&nbsp; : &nbsp;22 Hrs&nbsp; : &nbsp;56 Min&nbsp; : &nbsp;13 Sec </p>
          </div>

          <div className="relative mt-4 pb-40 sm:mt-5 sm:pb-44">
            <Image src="/square-patterns.svg" alt="" width={560} height={257} priority className="pointer-events-none absolute left-[16.5%] top-[97px] z-0 h-auto w-[117%] max-w-none select-none" />

            <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-5 rounded border border-[#e3e3e3] bg-white px-4 py-6 sm:gap-x-8 sm:gap-y-7 sm:px-7 sm:py-8">
                <div>
                  <p className="text-xs font-semibold text-[#6858d4] sm:text-base">Location</p>
                  <p className="mt-1 text-[11px] leading-6 text-[#777777] sm:text-base"> {data?.scholarship?.location?.name} </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#6858d4] sm:text-base">Duration</p>
                  <p className="mt-1 text-[11px] leading-6 text-[#777777] sm:text-base"> { data?.scholarship?.duration} Year Full-Time </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#6858d4] sm:text-base">Start Date</p>
                  <p className="mt-1 text-[11px] leading-6 text-[#777777] sm:text-base"> { data?.scholarship?.application_end_date } </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#6858d4] sm:text-base">Application Deadline</p>
                  <p className="mt-1 text-[11px] leading-6 text-[#777777] sm:text-base"> {data?.scholarship?.scholarship_start_date } </p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
