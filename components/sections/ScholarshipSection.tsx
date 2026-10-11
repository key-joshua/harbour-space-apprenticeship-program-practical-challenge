import type { ReactNode } from 'react'

type CommitmentCardProps = {
  label: string
  value: string
  children: ReactNode
}

function CommitmentCard({ label, value, children }: CommitmentCardProps) {
  return (
    <article className="rounded-[3px] border border-[#e1e1e1] px-5 py-6 sm:px-6">
      <p className="text-[11px] font-medium text-[#6858d4]">{label}</p>
      <p className="mt-3 text-xl leading-none text-[#777777]">{value}</p>
      <div className="my-5 h-px w-5 bg-[#e3e3e3]" />
      <p className="text-[11px] leading-[1.5] text-[#777777]">{children}</p>
    </article>
  )
}

export function ScholarshipSection({ data }: any) {
  return (
    <section aria-labelledby="scholarship-title" className="bg-white py-8 sm:py-20 lg:py-24">
      <h2 id="scholarship-title" className="sr-only">Scholarship and commitment</h2>
      
      <div className="page-container grid gap-5 lg:grid-cols-[218px_1fr] lg:gap-7">
        <article className="flex min-h-[358px] flex-col rounded-[3px] border border-[#e1e1e1] px-5 py-7 lg:px-7">
          <p className="text-[11px] font-medium text-[#6858d4]">Fellowship value</p>
          <p className="mt-3 text-[18px] leading-none text-[#666666] lg:mt-5 lg:text-[32px]">€31,300</p>
          <div className="mt-8 lg:mt-auto">
            <div className="mb-8 h-px w-full bg-[#e3e3e3] lg:mb-10" />
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 text-[11px]">
              <div>
                <p className="font-medium text-[#6858d4]">Tuition</p>
                <p className="mt-1 text-[16px] text-[#777777]">€22,900</p>
              </div>
              <div>
                <p className="font-medium text-[#6858d4]">Remaining</p>
                <p className="mt-1 text-[16px] text-[#777777]">€8,400</p>
              </div>
              <div className="col-span-2">
                <p className="font-medium text-[#6858d4]">Living Stipend</p>
                <p className="mt-1 text-[16px] text-[#777777]">€8,400 (€700/month)</p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5 lg:gap-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-7">
            <CommitmentCard label="Study commitment" value="3 hours / day">
              You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.
            </CommitmentCard>
            <CommitmentCard label="Work commitment" value="4 hours / day">
              Immerse yourself in the professional world during your apprenticeship. You&apos;ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.
            </CommitmentCard>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-[#555555]">
            <span className="h-px flex-1 bg-[#e3e3e3]" />
            <span>GRADUATION</span>
            <span className="h-px flex-1 bg-[#e3e3e3]" />
          </div>

          <article className="rounded-[3px] border border-[#e1e1e1] px-4 py-7 sm:px-6">
            <p className="text-[11px] font-medium text-[#6858d4]">A full-time contract</p>
            <p className="mt-3 text-xl leading-none text-[#777777]">1 Year / Full-Time</p>
            <div className="my-5 h-px w-5 bg-[#e3e3e3]" />
            <p className="text-[11px] leading-[1.5] text-[#777777]">You&apos;ll be guaranteed a 1 year contract with SCG upon graduation.</p>
          </article>
        </div>

      </div>
    </section>
  )
}
