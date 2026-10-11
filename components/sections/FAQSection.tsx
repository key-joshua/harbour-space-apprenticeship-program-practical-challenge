'use client'

import { useEffect, useState } from 'react'

export function FAQSection({ data }: any) {
  const faqs = data?.scholarship?.faqs?.items ?? [];
  const categories = data?.scholarship?.faqs?.categories ?? [];

  const [category, setCategory] = useState(""); 
  const [openQuestion, setOpenQuestion] = useState("");
  const visibleFaqs = faqs.filter( (faq: any) => faq.type === category );

  useEffect(() => {
    if (categories.length > 0 && !category) setCategory(categories[0]);
  }, [categories, category])

  useEffect(() => {
    if (visibleFaqs.length > 0) setOpenQuestion(visibleFaqs[0].question);
  }, [category, data]);
  
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-16 sm:py-28 lg:py-32">
      <div className="page-container">
        <div className="flex items-start justify-between gap-4 border-b border-[#eeeeee] pb-10 sm:gap-10 sm:pb-10">
          <h2 id="faq-title" className="max-w-[210px] text-[26px] font-medium leading-[1.08] tracking-[-0.04em] text-[#6858d4] sm:max-w-[360px] sm:text-5xl">
            Frequently asked<br />questions
          </h2>
          <label className="flex shrink-0 flex-col items-start gap-2 pt-1 text-[10px] text-[#777777] sm:mt-2 sm:flex-row sm:items-center sm:gap-3 sm:text-[12px]">
            <span>Filter by:</span>
            <span className="relative">
              <select value={category} onChange={(event) => { setCategory(event.target.value); setOpenQuestion('') }} className="h-9 w-[128px] appearance-none rounded-full border border-[#dedede] bg-white py-0 pl-3 pr-8 text-[10px] text-[#6858d4] outline-none focus:border-[#6858d4] sm:w-[170px] sm:pl-4 sm:text-[11px]">
                {categories.map((item: string) => ( <option key={item} value={item}> {item} </option> ))}
              </select>
              <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-1.5 w-1.5 -translate-y-[65%] rotate-45 border-b border-r border-[#6858d4]" />
            </span>
          </label>
        </div>

        <div>
          {visibleFaqs.map((faq: any) => {
            const isOpen = openQuestion === faq.question
            return (
              <article key={faq.question} className="relative border-b border-[#eeeeee] py-6 sm:grid sm:grid-cols-[180px_minmax(0,1fr)_42px] sm:gap-10 sm:py-7">
                <p className="hidden text-[12px] font-medium text-[#6858d4] sm:block">{faq.type}</p>
                <div className="mt-0 pr-8 sm:mt-0 sm:pr-0">
                  <h3>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? '' : faq.question)} className="w-full text-left text-[14px] leading-[1.4] text-[#444444] sm:text-[15px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6858d4]">
                      {faq.question}
                    </button>
                  </h3>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="pt-6 text-[13px] leading-[1.6] text-[#777777] sm:pt-7 sm:text-[14px] sm:leading-[1.6]">
                        {faq.answer.map((paragraph: any, index: number) => <p key={index} className="mb-5 last:mb-0">{paragraph.data}</p>)}
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" aria-expanded={isOpen} aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${faq.question}`} onClick={() => setOpenQuestion(isOpen ? '' : faq.question)} className={`absolute right-0 top-4 mt-0 flex h-7 w-7 shrink-0 sm:relative sm:right-auto sm:top-auto items-center justify-center rounded-full text-sm leading-none transition-colors sm:mt-0 sm:justify-self-end ${isOpen ? 'bg-[#6858d4] text-white' : 'border border-[#e5e5e5] bg-white text-[#aaaaaa]'}`}>
                  {isOpen ? '−' : '+'}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
