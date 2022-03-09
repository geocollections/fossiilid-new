<template>
  <div
    class="w-5 h-5 m-0.5 p-0 leading-none rounded-full overflow-hidden cursor-pointer"
    @click="$emit('click')"
  >
    <img v-if="lang === 'en'" src="~assets/png/ENG_lipp.png" alt="ENG" />
    <img v-if="lang === 'et'" src="~assets/png/EST_lipp.png" alt="EST" />
  </div>
</template>
<script>
export default {
  props: {
    lang: {
      type: String,
      required: true,
      default: 'en',
    },
  },
}
</script>
