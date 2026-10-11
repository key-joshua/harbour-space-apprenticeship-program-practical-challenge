"use client";

import { useEffect } from 'react'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ScholarshipSection } from '@/components/sections/ScholarshipSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { useScholarshipStore } from '@/store/scholarshipStore'

export default function Page() {
  const fetchScholarship = useScholarshipStore( (state) => state.fetchScholarship );
  const isLoading = useScholarshipStore((state) => state.isLoading);
  const error = useScholarshipStore((state) => state.error);
  const data = useScholarshipStore((state) => state.data);

  useEffect(() => { fetchScholarship(); }, [fetchScholarship]);

  if (isLoading && !data) {
    console.log('Loading data!');
    return (<main className="min-h-screen bg-white p-8"> Loading scholarship information... </main>);
  }

  if (error && !data) {
    console.log('Found error!');
    return ( <main className="min-h-screen bg-white p-8"> {error} </main> );
  }

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection data={data} />
      <AboutSection  data={data} />
      <ScholarshipSection  data={data} />
      <TestimonialSection  data={data} />
      <FAQSection  data={data} />
    </main>
  )
}

