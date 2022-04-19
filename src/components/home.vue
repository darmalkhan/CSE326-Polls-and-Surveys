<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img
                  class="object-cover w-full h-full"
                  src="../assets/4.png"
                  alt="People working on laptops"
                />
                <div
                  class="absolute inset-0 bg-yellow-200 mix-blend-multiply"
                />
              </div>
              <div
                class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
              >
                <h1
                  class="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl"
                >
                  <span class="block text-black">Take control of your</span>
                  <span class="block text-white">Surveys and Polls System</span>
                </h1>
                <p
                  class="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-opacity-25 bg-black border border-transparent rounded-md shadow-sm sm:px-8"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div
                  class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
                >
                  <div
                    class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5"
                  >
                    <a
                      href="/survey"
                      class="flex items-center justify-center px-4 py-3 text-base font-medium text-yellow-400 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</template>
