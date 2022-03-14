<template>
  <button
    class="w-full bg-beige flex items-center justify-around px-4 py-3"
    :class="{ 'bg-white': active, 'text-green': active }"
    @click="$emit('tab-clicked', $event.target.value)"
  >
    <div class="w-5 h-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="path" />
      </svg>
    </div>

    <div class="hidden sm:block text-base text-center font-semibold flex-grow">
      {{ text }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: 'identification',
      validator(value) {
        return ['photograph', 'table', 'identification'].includes(value)
      },
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    let path

    if (this.icon === 'identification')
      path =
        'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
    if (this.icon === 'photograph')
      path =
        'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    if (this.icon === 'table')
      path =
        'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    return {
      path,
    }
  },
}
</script>
