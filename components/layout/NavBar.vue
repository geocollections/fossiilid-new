<template>
  <header class="p-4">
    <div
      class="relative max-w-screen-xl m-auto flex flex-row justify-between items-start z-10"
    >
      <nuxt-link to="/">
        <img src="~assets/svg/fossiilid_logo.svg" class="w-24" />
      </nuxt-link>

      <nav
        class="flex-row gap-8 justify-around items-start hidden sm:flex font-semibold text-sm"
      >
        <nuxt-link
          :class="{ 'active-nav': $nuxt.$route.path === '/' }"
          to="/"
          >{{ $t('navLinks.home') }}</nuxt-link
        >
        <nuxt-link
          :class="{ 'active-nav': $nuxt.$route.path === '/about' }"
          to="/about"
          >{{ $t('navLinks.about') }}</nuxt-link
        >
        <nuxt-link to="/search">{{ $t('navLinks.search') }}</nuxt-link>
        <LangSelect />
      </nav>
      <div class="sm:hidden">
        <svg
          v-show="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="open = !open"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-show="open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 bg-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="open = !open"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <nav
          class="absolute -right-6 space-y-3 flex flex-col text-right justify-around items-center mr-6 bg-white p-4 text-sm font-bold z-30 transform transition duration-300"
          :class="open ? 'opacity-100' : 'opacity-0 translate-x-16 '"
        >
          <nuxt-link to="/">{{ $t('navLinks.home') }}</nuxt-link>
          <nuxt-link to="/about">{{ $t('navLinks.about') }}</nuxt-link>
          <nuxt-link to="/search">{{ $t('navLinks.search') }}</nuxt-link>
          <LangSelect :class="['pt-8']" />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import LangSelect from './LangSelect.vue'
export default {
  components: { LangSelect },
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style scoped>
.active-nav {
  position: relative;
}
.active-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  margin-top: -5px;
  background-color: #0d7b0a;
}
</style>
