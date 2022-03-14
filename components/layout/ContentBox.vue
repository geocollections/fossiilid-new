<template>
  <div class="text-xs lg:text-base ml-2 pr-4">
    <div class="" :class="{ 'h-48 overflow-y-hidden': !isOpen }">
      <h2 class="font-bold pb-4 text-base">{{ title }}</h2>

      <slot> </slot>
    </div>
    <div class="mt-4 relative">
      <button class="text-green font-bold" @click="isOpen = !isOpen">
        {{
          isOpen
            ? $t('components.contentBox.readLess')
            : $t('components.contentBox.readMore')
        }}
      </button>
      <div
        id="overlay"
        class="bg-gradient-to-t from-white absolute h-40 bottom-0 left-0 right-0 z-10 mb-8"
        :class="{ 'opacity-0': isOpen }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
