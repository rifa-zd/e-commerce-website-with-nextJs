import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <section className='mx-auto max-w-475 px-4 lg:px-12'>
        <div className='flex flex-col sm:flex-row flex-wrap gap-4 xl:gap-14 gap-y-10'>
            <div className='flex-1'>
                <Image src={"/product/images/wide2.jpg"} alt='Banner image???' height={1200} width={700} className='w-full rounded-lg'/>
            </div>
            <div className='flex-1'>
                <Image src={"/product/images/wide1.jpg"} alt='Banner image???' height={1200} width={700} className='w-full rounded-lg'/>
            </div>
        </div>

    </section>
  )
}
