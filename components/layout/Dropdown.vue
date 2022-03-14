<template>
  <aside class="bg-beige">
    <header class="flex justify-start items-center">
      <button
        class="bg-green text-white p-2 transform"
        :class="{ 'rotate-180': !open }"
        @click="toggle()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      <h3 class="font-bold px-12">Classification</h3>
    </header>
    <div v-show="isOpen">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isOpen: this.open,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
