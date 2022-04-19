<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-yellow-50 py-16 px-2 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute left-full transform translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-300"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <svg
        class="absolute right-full bottom-0 transform -translate-x-1/2"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
      </svg>
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Student's polls
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div class="mt-12">
        <form
          action="#"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <fieldset class="sm:col-span-2">
            <legend class="text-lg font-medium text-gray-900">
              which course do you study?
            </legend>
            <div
              class="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <div
                v-for="(side, sideIdx) in sides"
                :key="sideIdx"
                class="relative flex items-start py-4"
              >
                <div class="min-w-0 flex-1 text-sm">
                  <label
                    :for="`side-${side.id}`"
                    class="font-medium text-gray-700 select-none"
                    >{{ side.name }}</label
                  >
                </div>
                <div class="ml-3 flex items-center h-5">
                  <input
                    :id="`side-${side.id}`"
                    name="plan"
                    type="radio"
                    :checked="side.id === null"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                </div>
              </div>
            </div>

            <br />
            <br />
            <legend class="text-lg font-medium text-gray-900">
              At which age are you in?
            </legend>
            <div
              class="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <div
                v-for="(side1, sideIdx) in sides1"
                :key="sideIdx"
                class="relative flex items-start py-4"
              >
                <div class="min-w-0 flex-1 text-sm">
                  <label
                    :for="`side-${side1.id}`"
                    class="font-medium text-gray-700 select-none"
                    >{{ side1.name }}</label
                  >
                </div>
                <div class="ml-3 flex items-center h-5">
                  <input
                    :id="`side-${side1.id}`"
                    name="plan"
                    type="radio"
                    :checked="side1.id === null"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <legend class="text-lg font-medium text-gray-900">
              Which subjects do you like?
            </legend>
            <div
              class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <div
                v-for="(person, personIdx) in people"
                :key="personIdx"
                class="relative flex items-start py-4"
              >
                <div class="min-w-0 flex-1 text-sm">
                  <label
                    :for="`person-${person.id}`"
                    class="font-medium text-gray-700 select-none"
                    >{{ person.name }}</label
                  >
                </div>
                <div class="ml-3 flex items-center h-5">
                  <input
                    :id="`person-${person.id}`"
                    :name="`person-${person.id}`"
                    type="checkbox"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div class="sm:col-span-2">
            <button
              @click="$router.push('/success')"
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white Orange hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";

  const sides = [
    { id: null, name: "B.Tech" },
    { id: 1, name: "B.SC" },
    { id: 2, name: "B.Des" },
    { id: 3, name: "M.Tech" },
    { id: 4, name: "M.SC" },
    { id: 5, name: "BBA" },
  ];

  const sides1 = [
    { id: null, name: "15-25" },
    { id: 1, name: "25-35" },
    { id: 2, name: "35-60" },
  ];
  const people = [
    { id: 1, name: "CSE202" },
    { id: 2, name: "CSE326" },
    { id: 3, name: "ECE216" },
    { id: 4, name: "ECE213" },
    { id: 5, name: "MEC103" },
    { id: 6, name: "MTH166" },
    { id: 7, name: "PEL121" },
    { id: 8, name: "PHY109" },
    { id: 9, name: "PHY119" },
  ];
  export default {
    setup() {
      const agreed = ref(false);

      return {
        agreed,
        sides,
        sides1,
        people,
      };
    },
  };
</script>
