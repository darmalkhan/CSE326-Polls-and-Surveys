<template>
  <br /><br /><br />
  <div>
    <div class="max-w-3xl mx-auto px-4 py-10">
      <div>
        <div
          class="bg-yellow-50 rounded-lg p-10 flex items-center shadow justify-between"
        >
          <div>
            <svg
              class="mb-4 h-20 w-20 text-yellow-500 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>

            <h2 class="text-2xl mb-4 text-gray-800 text-center font-bold">
              Survey Registered Success
            </h2>

            <div class="text-gray-600 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>

            <div class="sm:col-span-2">
              <button
                @click="$router.push('/')"
                type="submit"
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white Orange hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
</template>
