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
          Students Survey
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
          <div>
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >First name <span class="text-red-500">*</span></label
            >
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                placeholder="ex: Darmal"
                class="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Last name <span class="text-red-500">*</span></label
            >
            <div class="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                placeholder="ex: Gulabzoi"
                class="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email <span class="text-red-500">*</span></label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="ex: example@mail.com"
                class="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              for="request-id"
              class="block text-sm font-medium text-gray-700"
              >Request ID <span class="text-red-500">*</span></label
            >
            <div class="mt-1">
              <input
                type="text"
                name="request-id"
                id="request-id"
                autocomplete="request-id"
                placeholder="ex: 12111034"
                class="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
              >Location</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="location"
                id="location"
                autocomplete="location"
                placeholder="ex: India"
                class="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-medium text-gray-700"
              >Phone Number <span class="text-red-500">*</span></label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select
                  id="country"
                  name="country"
                  class="h-full py-0 pl-1 pr-8 border-transparent bg-transparent text-gray-500 border focus:ring-yellow-500 border focus:border-yellow-500 rounded-md"
                >
                  <option>IN</option>
                  <option>AF</option>
                  <option>US</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="py-3 px-4 block w-full pl-20 focus:ring-yellow-500 focus:border-yellow-500 border border border-gray-500 rounded-md"
                placeholder=" +91 12345 96543"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Say something about yourself."
                class="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <Switch
                  v-model="agreed"
                  :class="[
                    agreed ? 'Orange' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
                  ]"
                >
                  <span class="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    :class="[
                      agreed ? 'translate-x-5' : 'translate-x-0',
                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                    ]"
                  />
                </Switch>
              </div>
              <div class="ml-3">
                <p class="text-base text-gray-500">
                  Do you accept terms and conditions
                  {{ " " }}
                  <a href="#" class="font-medium text-gray-700 underline"
                    >terms and conditions? </a
                  >.
                </p>
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              @click="$router.push('/polling')"
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white Orange hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Next to Polls
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";
  import { Switch } from "@headlessui/vue";

  export default {
    components: {
      Switch,
    },
    setup() {
      const agreed = ref(false);

      return {
        agreed,
      };
    },
  };
</script>
