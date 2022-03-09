<template>
  <!-- Todo: Update style etc. -->
  <transition name="fade">
    <div
      v-show="showButton"
      class="rounded-full bottom-12 sm:bottom-4 right-4 px-3 pb-1 fixed text-4xl bg-green text-white shadow-md cursor-pointer transform hover:-translate-y-2 transition duration-200"
      @click="toTop"
    >
      ˄
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ScrollTopFab',
  data: () => ({
    showButton: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      if (typeof window === 'undefined') return
      const top = window.scrollY || event.target.scrollTop || 0

      this.showButton = top > 400
    },

    toTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
