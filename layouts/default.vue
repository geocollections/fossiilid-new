<template>
  <div class="flex flex-col h-screen justify-between">
    <header
      class="flex flex-row justify-between py-4 px-6 bg-green-50 w-screen fixed top-0 h-14"
    >
      <div class="brand">
        <nuxt-link to="/">
          {{ $t('title') }}
        </nuxt-link>
      </div>

      <div class="link flex flex-row space-x-2.5">
        <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="/about">about</nuxt-link>
        <nuxt-link to="/search">search</nuxt-link>
        <a href="https://geoloogia.info" target="new">geoloogia</a>
      </div>
    </header>

    <main class="py-4 px-6 mb-auto mt-14">
      <div>
        <nuxt />

        <ScrollTopFab />
      </div>
    </main>

    <client-only>
      <CookiePolicy />
    </client-only>

    <footer class="py-2 px-4 bg-amber-100 text-center w-screen bg-gray-100">Footer</footer>
  </div>
</template>
<script>
import ScrollTopFab from '~/components/ScrollToTop'
import CookiePolicy from '~/components/CookiePolicy'
export default {
  components: { CookiePolicy, ScrollTopFab },
}
</script>
