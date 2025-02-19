import sideimage from '../../assets/img/hero-img.jpg'
import img1 from '../../assets/img/profile/avatar-01.f3da6f4.png'
import img2 from "../../assets/img/profile/avatar-02.01b3db2.png"
import img3 from "../../assets/img/profile/avatar-03.2ee9616.png"
import img4 from "../../assets/img/profile/avatar-04.dbb3f5b.png"
import img5 from "../../assets/img/profile/avatar-05.f0aa18d.png"
const StyleSection = () => {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row lg:items-end">
            <div class="mx-auto max-w-lg shrink-0 space-y-5 py-12 text-center lg:mx-0 lg:text-left xl:max-w-[620px]">
              <h1 class="text-4xl font-normal font-title tracking-tight text-gray-700 sm:text-4xl sm:leading-[3rem] lg:text-[56px] lg:leading-[64px]">
                Try new hairstyles
                <br /> with the power of AI
              </h1>
              <h2 class="text-xl font-semibold text-gray-800 sm:text-xl">The #1 Virtual AI Hairstyle Try On for Male and Female</h2>
              <p class="text-lg font-normal leading-[1.8rem] text-gray-600">
                HairstyleAI lets you try out new haircuts with AI virtually before getting the real thing cut. Get more confident in your own look and feel like yourself again.
              </p>
              <div class="relative space-y-5">
                <div class="absolute -bottom-6 hidden sm:right-16 sm:block lg:right-44 xl:right-72">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1NSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMC4yNzY3NjYgMi42MjA3MkMyLjAxNzA0IDAuNjU4Mjg5IDQuMzEwMjggMC4yOTUwODYgNi40NDYzNSAwLjIwMTA3NkM5LjQxNTkgMC4xMDUzNTIgMTIuMzk5NCAwLjI5MTI2NyAxNS4yMjU4IDAuNzQ2MzY0QzI4LjE1MTYgMy4xNTIzNiAzNy42NjMzIDkuNjc1MTIgNDQuMDgzMiAxOS41NTg2QzQ1LjcwNDggMjIuMDc3NSA0Ni45MjM2IDI0Ljg3ODggNDguNDU0NCAyNy44NTg3QzUwLjkyNTcgMjUuMzU3MSA1MS40OTQ5IDIxLjkzNzUgNTMuODk5OSAxOS4yNDRDNTQuNzE0NyAyMC4zOTQ1IDU0LjI1NzIgMjEuNDgzNyA1My45MDQ1IDIyLjM5MzVDNTIuNDQxMyAyNi4xMjIxIDUwLjkwMzYgMjkuODc2NiA0OS4yNjkzIDMzLjU5MjhDNDguNDY3MyAzNS4zNzQgNDcuNTQzIDM1LjgzNjggNDUuODAzOCAzNS4xNDkxQzQyLjE1NDUgMzMuNzYxIDM5LjQ0NTcgMzEuNDc0OSAzNy43NzQgMjguMzI4OEMzNy43Mjk4IDI4LjIwMDggMzcuODg2OSAyNy45MzE3IDM4LjA3NDMgMjcuNTA4OEM0MS41MjEyIDI3LjEwNDggNDEuOTkyNiAzMC44ODA3IDQ1LjE5MTUgMzEuMjA3QzQ0Ljg1NzQgMjYuMzgxIDQyLjUwMzYgMjIuNDY4MSAzOS43NDcxIDE4LjgzNzdDMzYuODQ5NyAxNS4wNDEyIDMzLjU3MTYgMTEuNTkxMiAyOS4zMzA5IDguOTc1MjhDMjUuMTg2OCA2LjM5NzYgMjAuNTQwOSA0Ljc4MTE3IDE1LjU4OSAzLjQ4NTQ1QzEwLjY4OTQgMi4xIDUuNjIyMTggMS45MTgzNyAwLjI3Njc2NiAyLjYyMDcyWiIgZmlsbD0iIzBEMTkyNyIvPgo8L3N2Zz4K"
                    alt=""
                    class="h-8 w-auto"
                  />
                </div>
                <div class="flex items-center justify-center gap-3 lg:justify-start">
                  <div class="flex -space-x-3 overflow-hidden">
                    <img src={img1} alt="" class="inline-block h-10 w-10 rounded-full border-[3px] border-white" />
                    <img src={img2} alt="" class="inline-block h-10 w-10 rounded-full border-[3px] border-white" />
                    <img src={img3} alt="" class="inline-block h-10 w-10 rounded-full border-[3px] border-white" />
                    <img src={img4} alt="" class="inline-block h-10 w-10 rounded-full border-[3px] border-white" />
                    <img src={img5} alt="" class="inline-block h-10 w-10 rounded-full border-[3px] border-white" />
                  </div>
                  <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <p class="mx-auto max-w-lg text-sm text-gray-500 lg:mx-0">
                  Tens of thousands of people have created their photos with our photography tools. Try your haircuts today.
                </p>
              </div>
            </div>
            <div class="lg:pl-8">
              <img src={sideimage} alt="" class="relative bottom-[-60px] w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StyleSection;
