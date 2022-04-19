<template>
  <header>
    <Popover class="relative bg-white">
      <div
        class="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Workflow</span>
            <img class="w-auto h-8 sm:h-16" src="../.././assets/3.png" alt="" />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600',
              ]"
            >
              <span>Applications</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                class="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div
                  class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div
                    class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2"
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md Orange sm:h-12 sm:w-12"
                      >
                        <component
                          :is="item.icon"
                          class="w-6 h-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {{ item.name }}
          </a>
        </PopoverGroup>
        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm Orange whitespace-nowrap hover:bg-yellow-400"
          >
            Sign up
          </a>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
        >
          <div
            class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="w-auto h-8"
                    src="../.././assets/3.png"
                    alt="Workflow"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md Orange"
                    >
                      <component
                        :is="item.icon"
                        class="w-6 h-6"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6">
              <div class="grid grid-cols-2 gap-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {{ item.name }}
                </a>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm Orange hover:bg-yellow-400"
                >
                  Sign up
                </a>
                <p class="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?
                  <a href="#" class="text-gray-900"> Sign in </a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
  import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from "@headlessui/vue";
  import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
  } from "@heroicons/vue/outline";
  import { ChevronDownIcon } from "@heroicons/vue/solid";

  const solutions = [
    {
      name: "LPU UMS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
      icon: InboxIcon,
    },
    {
      name: "MyClass",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
      icon: AnnotationIcon,
    },
    {
      name: "LPU Live",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
      icon: ChatAlt2Icon,
    },
    {
      name: "LPU Touch",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#",
      icon: QuestionMarkCircleIcon,
    },
  ];
  const navigation = [
    { name: "Fee", href: "#" },
    { name: "YourDost", href: "#" },
    { name: "Academics", href: "#" },
  ];

  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverGroup,
      PopoverPanel,
      ChevronDownIcon,
      MenuIcon,
      XIcon,
    },
    setup() {
      return {
        solutions,
        navigation,
      };
    },
  };
</script>
