<template>
  <button
    class="h-full w-full flex-grow text-xs sm:text-base sm:w-1/4 text-center text-green border border-green px-3"
    :class="{ 'bg-lightGreen text-black border-none': active }"
    @click="handleClick($event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.active || false,
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    handleClick(e) {
      this.$emit('clicked', e)
    },
  },
}
</script>
