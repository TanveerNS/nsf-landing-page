import React from 'react'

const Section4 = () => {
  return (
    <>
        <section id="how-it-works" class="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl">
      <h2 class="text-lg font-bold text-brand-500">How it works</h2>
      <p class="mt-6 text-3xl font-bold font-title tracking-tight text-gray-800 sm:text-4xl">
        The fastest and easiest way to see which hairstyle works for you
      </p>
    </div>
    <div class="mt-12 grid grid-cols-1 items-stretch gap-8 sm:mt-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
      <div x-data="{ active: 1 }" class="space-y-5">
        <div role="region" class="border-b border-gray-200 pb-5">
          <h4>
            <button class="flex w-full items-center justify-between text-left text-base font-bold text-gray-900">
              <span>1. Upload your selfies</span>
              <span aria-hidden="true" class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-900">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </button>
          </h4>
          <div>
            <div class="space-y-5 pt-4">
              <p class="text-base font-normal text-gray-900">
                Upload your selfies to the platform. We recommend taking the selfies against a plain background, with good lighting and a natural smile.
              </p>
            </div>
          </div>
        </div>

        <div role="region" class="border-b border-gray-200 pb-5">
          <h4>
            <button class="flex w-full items-center justify-between text-left text-base font-bold text-gray-900">
              <span>2. AI-photographer generates hairstyles</span>
              <span aria-hidden="true" class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-900">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </button>
          </h4>
        </div>

        <div role="region" class="border-b border-gray-200 pb-5">
          <h4>
            <button class="flex w-full items-center justify-between text-left text-base font-bold text-gray-900">
              <span>3. Download your favorites</span>
              <span aria-hidden="true" class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-900">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
              </span>
            </button>
          </h4>
        </div>
      </div>

      <div>
        <img src="/_nuxt/img/how-it-works-1.f500606.png" alt="" class="h-full w-full rounded-lg object-cover border border-gray-100"/>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Section4