import Image from 'next/image'

export function AboutSection({ data }: any) {
  return (
    <section aria-labelledby="about-title" className="bg-white pb-12 pt-10 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-16">
      <div className="page-container relative grid items-center gap-8 rounded-lg border border-[#e3e3e3] bg-white px-4 pb-5 pt-0 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 xl:gap-28">
        <span aria-hidden="true" className="pointer-events-none absolute -left-2 top-16 h-40 w-2 bg-[#6858d4] sm:-left-3 sm:h-48 lg:hidden" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-16 h-40 w-2 bg-[#6858d4] sm:-right-3 sm:h-48 lg:hidden" />
        
        <div className="relative mx-auto -mt-7 flex aspect-square w-full max-w-[250px] items-center justify-center sm:-mt-10 sm:max-w-[310px] lg:mt-0 lg:max-w-[520px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full opacity-70"
            style={{ backgroundImage: 'url(circle-patterns.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
          />

          <div className="relative size-[84%] overflow-hidden rounded-full bg-[#ececf0]">
            <Image
              fill
              src="/user-profile.png"
              className="object-cover"
              sizes="(max-width: 1024px) 82vw, 460px"
              alt="Portrait placeholder for an apprenticeship student"
            />
          </div>
        </div>

        <div className="relative max-w-[620px] px-0 pb-0 pt-0 lg:px-0 lg:pb-0 lg:pt-0">
          <h2 id="about-title" className="max-w-[260px] text-[28px] font-medium leading-[1.08] tracking-[-0.04em] text-[#6858d4] sm:max-w-[480px] sm:text-5xl lg:text-[52px]">
            About the<br />
            apprenticeship
          </h2>
          <p className="mt-4 text-[11px] leading-[1.45] text-[#777777] sm:mt-10 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
             {data?.scholarship?.about[0]?.data} 
          </p>
        </div>

      </div>
    </section>
  )
}
