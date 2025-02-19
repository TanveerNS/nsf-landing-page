import React from "react";

const Section5 = () => {
  return (
    <>
      <section id="pricing" class="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-lg font-bold text-brand-500">Pricing</h2>
            <p class="mt-6 text-3xl font-bold tracking-tight text-gray-800 font-title sm:text-4xl lg:text-5xl">See which hairstyles work for you, without cutting your hair.</p>
            <p class="mt-4 text-base font-normal text-gray-600">
              HairstyleAI lets you try on new hairstyles before getting the real thing cut. Get more confident in your own look and feel like yourself again.
            </p>
          </div>
          <div class="mx-auto mt-4 max-w-2xl rounded-lg border border-gray-200 bg-white shadow-sm sm:mt-6 lg:mt-8">
            <div class="p-8">
              <div class="flex flex-col justify-center gap-8 sm:flex-row sm:items-center sm:gap-12 lg:gap-20">
                <div class="text-center">
                  <p class="text-7xl font-bold text-gray-800 font-title">
                    <span class="text-[38px]">$</span>9
                  </p>
                  <p class="mt-1 text-base font-normal text-gray-500">one-time payment</p>
                  <div class="mt-4">
                    <a
                      href="/app/add"
                      role="button"
                      class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-primary-500 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm transition-all duration-150 hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:w-auto"
                    >
                      Get your hairstyles
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="mt-4">
                    <a href="/app/add" class="text-sm font-normal text-gray-500 underline transition-all duration-150 hover:text-gray-900">
                      Or create just for yourself
                    </a>
                  </div>
                </div>
                <div class="h-px w-full bg-gray-300 sm:h-40 sm:w-px"></div>
                <div>
                  <h3 class="text-lg font-bold text-gray-700">All photoshoots include</h3>
                  <ul class="mt-4 space-y-3 text-gray-700">
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      30 unique AI hairstyles
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      4 different poses/haircuts
                    </li>
                    <li class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      120 HD photos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="relative mx-auto mt-8 max-w-lg space-y-4 text-center">
                <div class="absolute -top-4 left-14 hidden sm:block">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0OSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNNDguODg2NiA0My4yMDI0QzQ2Ljc0NDggNDQuNzE2NiA0NC40MjkyIDQ0LjU0NzYgNDIuMzI3OSA0NC4xNTIzQzM5LjQxNDcgNDMuNTY4NyAzNi41NTIxIDQyLjcwNzYgMzMuOTAzOCA0MS42MjAzQzIxLjg2NjUgMzYuMzMxNyAxNC4wOTE4IDI3LjgxMjcgMTAuMDkzNSAxNi43MjYxQzkuMDg4NjkgMTMuOTA0IDguNTQwNDIgMTAuODk4NiA3LjcyOTExIDcuNjQ4MjJDNC43NTI2OCA5LjUyMDc4IDMuNDE5MDcgMTIuNzIwNiAwLjQ2MzUwNSAxNC43OTUyQy0wLjA2NzY2NjggMTMuNDg5MSAwLjYyNjAyNiAxMi41MzI5IDEuMTc2NzkgMTEuNzI3NUMzLjQ1MTMyIDguNDMwNDIgNS44MDQyNCA1Lj12Mjk1+ggFVGzWlAAiw%3D%3D" alt="" class="h-12 w-auto"/>
                </div>
                <div class="flex items-center justify-center gap-3">
                <div class="flex -space-x-3 overflow-hidden">
                    <img src="/_nuxt/img/avatar-01.f3da6f4.png" alt="" class="inline-block h-10 w-10 rounded-full ring-[3px] ring-white"/>
                    <img src="/_nuxt/img/avatar-02.01b3db2.png" alt="" class="inline-block h-10 w-10 rounded-full ring-[3px] ring-white"/>
                    <img src="/_nuxt/img/avatar-03.2ee9616.png" alt="" class="inline-block h-10 w-10 rounded-full ring-[3px] ring-white"/>
                    <img src="/_nuxt/img/avatar-04.dbb3f5b.png" alt="" class="inline-block h-10 w-10 rounded-full ring-[3px] ring-white"/>
                    <img src="/_nuxt/img/avatar-05.f0aa18d.png" alt="" class="inline-block h-10 w-10 rounded-full ring-[3px] ring-white"/>
                </div>
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                </div>
                <p class="text-sm text-gray-500">
                Tens of thousands of people have created their photos with our tools. Get matching your hairstyles today.
                </p>
  </div>
  </div>
</section>
    </>
  );
};

export default Section5;
