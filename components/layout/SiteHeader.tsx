export default function SiteHeader() {
  return (
    <header className="relative flex h-[46px] w-full items-center bg-[#6858d4] px-3 text-white sm:h-[68px] sm:px-8">
      <div className="flex items-center gap-3 sm:gap-4">
        <a href="#" className="text-[13px] font-bold leading-none tracking-[-0.02em] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm" > Harbour.Space </a>
        <span aria-hidden="true" className="text-[15px] font-light leading-none sm:text-base"> / </span>
        <span className="text-[8px] font-medium uppercase leading-none tracking-[0.08em] sm:text-[9px]"> Interaction Design </span>
      </div>

      <a href="#" className="absolute right-[118px] top-[10px] hidden size-[114px] items-center justify-center rounded-full bg-[#4ca66d] text-center text-[16px] font-semibold uppercase leading-[1.05] tracking-[0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex" > Apply <br /> now </a>

      <button type="button" aria-label="Open menu" className="ml-auto flex size-9 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
        <span aria-hidden="true" className="relative block h-5 w-7">
          <span className="absolute left-0 top-0 h-px w-7 bg-current" />
          <span className="absolute left-0 top-2 h-px w-5 bg-current" />
          <span className="absolute left-0 top-4 h-px w-7 bg-current" />
          <span className="absolute right-0 top-0 h-1 w-1 bg-current" />
          <span className="absolute right-0 top-2 h-1 w-1 bg-current" />
          <span className="absolute right-0 top-4 h-1 w-1 bg-current" />
        </span>
      </button>
    </header>
  )
}

export { SiteHeader }
