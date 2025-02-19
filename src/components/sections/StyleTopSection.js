import React from 'react'
import img1 from '../../assets/img/seen-on.fd8d888.png'

const StyleTopSection = () => {
  return (
    <>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="isolate mx-auto max-w-5xl rounded-lg border-2 border-brand-300 bg-white px-6 py-5 shadow-lg sm:px-8">
    <div class="flex flex-col items-center justify-start gap-6 lg:flex-row">
      <a href="/auth/login?redirect=%2Fapp%2Fadd" class="">
        <button aria-label="Primary Button" type="button" class="hover:bg-primaryDark focus:ring-brand-200 flex flex-shrink-0 content-center items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-center text-base font-medium text-white shadow-sm transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full md:w-auto">
          <span>Get your hairstyles now</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white ml-1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg>
        </button>
      </a>
      <div class="flex items-center justify-center md:justify-start md:space-x-4">
        <span class="hidden md:flex flex-shrink-0 text-gray-500">As seen on:</span>
        <img src={img1} class="max-w-full md:max-w-[512px]"/>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default StyleTopSection